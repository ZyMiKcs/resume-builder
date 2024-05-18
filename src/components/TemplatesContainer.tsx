import { useNavigate } from 'react-router';
import { addToLocalStorage } from '../utils/addToLocalStorage';

export default function TemplatesContainer() {
    const navigate = useNavigate();
    function handleClickOnTemplate(template: string) {
        const id = addToLocalStorage(template);
        navigate(`/constructor/${id}`);
    }

    return (
        <div className="flex gap-5">
            <div
                className="w-[80px] h-[100px] bg-[#FFFFFF] border border-[#d9d9d9] cursor-pointer"
                onClick={() => handleClickOnTemplate('blue')}
            >
                <div className="w-[29px] h-[98px] bg-[#2E6FD1]"></div>
            </div>

            <div
                className="w-[80px] h-[100px] bg-[#FFFFFF] border border-[#d9d9d9] cursor-pointer"
                onClick={() => handleClickOnTemplate('purple')}
            >
                <div className="w-[29px] h-[98px] bg-[#7400E9]"></div>
            </div>
        </div>
    );
}
