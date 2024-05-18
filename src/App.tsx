import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Constructor from './pages/Constructor';
import Main from './pages/Main';
import { loadResumeFromLocalStorage } from './utils/loadResumeFromLocalStorage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'constructor/:id',
        element: <Constructor />,
        loader: async ({ params }) => {
            const { id } = params;
            const resumeData = loadResumeFromLocalStorage(Number(id));
            return resumeData || {};
        },
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
