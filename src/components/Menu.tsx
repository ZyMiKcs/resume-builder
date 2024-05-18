import SavedResumesList from './SavedResumesList';
import TemplatesContainer from './TemplatesContainer';

export default function Menu() {
    return (
        <div className="w-[449px] bg-[#F8F8F8] border border-[#D9D9D9] rounded-[10px] p-5">
            <div className="flex flex-col items-start mb-5">
                <h1 className="text-[32px] mb-5 text-[#414141]">
                    Доступные шаблоны
                </h1>
                <TemplatesContainer />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[32px] mb-5 text-[#414141]">
                    Ваши созданные резюме
                </h1>
                <SavedResumesList />
            </div>
        </div>
    );
}
