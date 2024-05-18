import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';

interface SocialNetworkBlock {
    id: number;
    network: string;
    link: string;
}

interface SocialNetworkBlockProps {
    block: SocialNetworkBlock;
    onNetworkChange: (id: number, network: string) => void;
    onLinkChange: (id: number, link: string) => void;
    onDelete: (id: number) => void;
}

export default function SocialNetworkBlock({
    block,
    onNetworkChange,
    onLinkChange,
    onDelete,
}: SocialNetworkBlockProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedNetwork = e.target.value;
        onNetworkChange(block.id, selectedNetwork);
    };

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
                        {block.network || 'Социальная сеть не выбрана'}
                    </h3>
                </div>
                <button
                    onClick={() => onDelete(block.id)}
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
                        Выберите соцсеть
                    </label>
                    <select
                        value={block.network}
                        onChange={handleNetworkChange}
                        className="w-[200px] h-[30px] bg-[#DADADA]/50 px-[11px] border border-black/35 rounded-[5px] text-[14px] outline-none"
                    >
                        <option value="" hidden></option>
                        <option value="Telegram">Telegram</option>
                        <option value="VK">VK</option>
                        <option value="GitHub">GitHub</option>
                    </select>
                </div>
                <div className="flex flex-col items-start my-[11px]">
                    <label className="text-[12px] text-[#414141] mb-[6px]">
                        Ссылка на профиль
                    </label>
                    <input
                        type="text"
                        value={block.link}
                        onChange={(e) => onLinkChange(block.id, e.target.value)}
                        placeholder=""
                        disabled={block.network ? false : true}
                        className="w-[200px] h-[30px] bg-[#DADADA]/50 px-[11px] border border-black/35 rounded-[5px] text-[14px] outline-none"
                    />
                </div>
            </div>
        </div>
    );
}
