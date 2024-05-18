import { useActions } from '../hooks/useActions';
import { useFormData } from '../hooks/useFormData';

export default function TextEditor() {
    const { setFormData } = useActions();
    const { aboutMe } = useFormData();

    return (
        <div className="pt-[20px]">
            <textarea
                onChange={(e) => setFormData({ aboutMe: e.target.value })}
                value={aboutMe}
                className="min-h-[196px] max-h-[500px] outline-none bg-[#D3D3D3]/30 border border-black/35 rounded-[5px] mb-[24px] px-[11px] py-[7px] overflow-auto w-full resize-none"
            />
        </div>
    );
}
