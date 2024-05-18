import { useNavigate } from 'react-router';
import Fields from '../layouts/Fields';
import Preview from '../layouts/Preview';

export default function Constructor() {
    const navigate = useNavigate();

    return (
        <>
            <button
                className="fixed top-5 left-5"
                onClick={() => navigate('/')}
            >
                &larr; В меню
            </button>
            <div className="flex justify-around">
                <Fields />
                <Preview />
            </div>
        </>
    );
}
