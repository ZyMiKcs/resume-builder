import { useEffect, useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import LevelPicker from './LevelPicker';

interface SkillBlock {
    id: number;
    skill: string;
    level: number;
}

interface SkillBlockProps {
    block: SkillBlock;
    onSkillChange: (id: number, skill: string) => void;
    onLevelChange: (id: number, level: number) => void;
    onDelete: (id: number) => void;
}

export default function SkillBlock({
    block,
    onSkillChange,
    onLevelChange,
    onDelete,
}: SkillBlockProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(block.level);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSkill = e.target.value;
        onSkillChange(Number(block.id), selectedSkill);
    };

    useEffect(() => {
        onLevelChange(Number(block.id), selectedIndex);
    }, [selectedIndex]);

    return (
        <div
            className={`bg-[#F2F2F2] rounded-[5px] mb-[18px] border border-black/35`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex items-center justify-between h-[40px]  ${
                    isExpanded && 'border-b border-black/35'
                } px-[11px] cursor-pointer`}
                onClick={handleToggleExpand}
            >
                <div className="flex gap-[11px]">
                    <img
                        src="../images/collapse_arrow.svg"
                        alt="collapse button"
                        className={`transition-all duration-300 ${
                            isExpanded && 'rotate-180'
                        }`}
                    />
                    <h3 className="text-[16px] font-normal">
                        {block.skill || 'Навык не выбран'}
                    </h3>
                </div>
                <button
                    onClick={() => onDelete(Number(block.id))}
                    className={`transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <FaRegTrashCan />
                </button>
            </div>

            <div
                className={`flex justify-between overflow-hidden transition-accordion duration-300 ease-in-out px-[11px] ${
                    isExpanded
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-[0px] opacity-0'
                }`}
            >
                <div className="flex flex-col items-start my-[11px]">
                    <label className="text-[12px] text-[#414141] mb-[6px]">
                        Описание навыка
                    </label>
                    <input
                        value={block.skill}
                        onChange={handleSkillChange}
                        className="w-[200px] h-[30px] bg-[#DADADA]/50 px-[11px] border border-black/35 rounded-[5px] text-[14px] outline-none"
                        type="text"
                    />
                </div>
                <LevelPicker
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            </div>
        </div>
    );
}
