export default function TitleWithIcon({ title, icon, template }) {
    return (
        <div
            className={`flex items-center ${
                template === 'blue' ? 'text-[#2E6FD1]' : 'text-[#7400E9]'
            } text-[24px] pt-2`}
        >
            <span>{title}</span>
            <div
                className={`grow border-b ${
                    template === 'blue'
                        ? 'border-[#2E6FD1]'
                        : 'border-[#7400E9]'
                } ml-2.5`}
            ></div>
            <span className="ml-2.5">{icon}</span>
        </div>
    );
}
