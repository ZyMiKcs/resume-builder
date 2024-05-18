import { useEffect, useState } from 'react';
import InputBlock from './InputBlock';
import SkillBlock from './SkillBlock';
import { useActions } from '../hooks/useActions';
import { useFormData } from '../hooks/useFormData';

interface SkillBlock {
    id: number;
    skill: string;
    level: number;
}

export default function SkillsField() {
    const { skills } = useFormData();
    const { setSkills, removeSkill } = useActions();

    const handleAddSkillBlock = () => {
        setSkills([...skills, { id: Date.now(), skill: '', level: 0 }]);
    };

    const handleSkillChange = (id: number, skill: string) => {
        const updatedBlocks = skills.map((block) => {
            if (block.id === id) {
                return { ...block, skill };
            }
            return block;
        });
        setSkills(updatedBlocks);
    };

    const handleDeleteSkillBlock = (id: number) => {
        removeSkill(id);
    };

    const handleLevelChange = (id: number, level: number) => {
        const updatedBlocks = skills.map((block) => {
            if (block.id === id) {
                return { ...block, level };
            }
            return block;
        });
        const index = updatedBlocks.findIndex((block) => block.id === id);
        setSkills(updatedBlocks);
    };

    return (
        <InputBlock blockName="Профессиональные навыки">
            <div className="pt-[24px]">
                {skills.map((block) => (
                    <SkillBlock
                        key={block.id}
                        block={block}
                        onSkillChange={handleSkillChange}
                        onLevelChange={handleLevelChange}
                        onDelete={handleDeleteSkillBlock}
                    />
                ))}
            </div>
            <div
                className="flex bg-[#F2F2F2] justify-center items-center h-[30px] gap-[7px] rounded-[5px] border border-black/35 border-dashed mb-[24px] cursor-pointer hover:bg-[#eaeaea] transition-all duration-500"
                onClick={handleAddSkillBlock}
            >
                <span className="text-[12px] text-[#414141]">
                    Добавить профессиональный навык
                </span>
                <img
                    src="../images/plus.svg"
                    className="w-[16px] h-[16px] text-[#414141]"
                    alt="plus icon"
                />
            </div>
        </InputBlock>
    );
}
