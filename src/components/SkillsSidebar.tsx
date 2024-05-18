import { useFormData } from '../hooks/useFormData';
import { getLevelLabel } from '../utils/getLevelLabel';

export default function SkillsSidebar() {
    const { skills, template } = useFormData();
    const isAnySkills = skills.length > 0;

    const renderSkillLevel = (level: number) => {
        const totalPoints = 4;
        const filledPoints = level > 0 ? level : 0;
        const emptyPoints = totalPoints - filledPoints;

        const filledDots = Array.from({ length: filledPoints }, (_, index) => (
            <span key={index} className="text-[#ffffff]">
                &#x2022;
            </span>
        ));

        const emptyDots = Array.from({ length: emptyPoints }, (_, index) => (
            <span key={index} className="text-[#bfbfbfd3] border-solid">
                &#x2022;
            </span>
        ));

        return level === 0 ? null : (
            <div className="text-[30px] leading-[0px]">
                {filledDots}
                {emptyDots}
            </div>
        );
    };

    return (
        isAnySkills && (
            <>
                <h4
                    className={`w-full ${
                        template === 'blue' ? 'bg-[#0052CC]' : 'bg-[#6e2fad]'
                    } text-[16px] text-white px-2 mb-2`}
                >
                    Навыки
                </h4>
                <ul className="flex flex-col gap-1">
                    {skills.map(
                        (skill: any) =>
                            skill?.skill && (
                                <li
                                    key={skill.id}
                                    className="px-2 flex justify-between text-white text-[14px] items-end"
                                >
                                    <div className="pb-[5px]">
                                        <p className="mb-1">{skill.skill}</p>
                                        {renderSkillLevel(skill.level)}
                                    </div>
                                    <span className="text-[12px]">
                                        {getLevelLabel(skill.level) ===
                                        'Не отображать'
                                            ? ''
                                            : getLevelLabel(skill.level)}
                                    </span>
                                </li>
                            )
                    )}
                </ul>
            </>
        )
    );
}
