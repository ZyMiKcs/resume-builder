import { useRef, useState } from 'react';

interface InputBlockProps {
    children?: React.ReactNode;
    blockName: string;
    isEditableName?: boolean;
    handleChangeResumeName?: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

export default function InputBlock({
    children,
    blockName,
    isEditableName = false,
    handleChangeResumeName,
}: InputBlockProps) {
    const [inputValue, setInputValue] = useState(blockName);
    const [inputWidth, setInputWidth] = useState(
        Math.max(224, Math.min(480, blockName.length * 14))
    );
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        handleChangeResumeName(event);
        if (event.target.value.length === 0) setInputWidth(224);
        else
            setInputWidth(
                Math.max(0, Math.min(480, event.target.value.length * 14))
            );
    };

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div className="w-[541px] bg-[#F8F8F8] border border-[#D9D9D9] rounded-tl-[10px] rounded-tr-[10px]">
                {isEditableName ? (
                    <div className="flex">
                        <input
                            ref={inputRef}
                            id="block-name"
                            value={inputValue}
                            onChange={handleInputChange}
                            style={{ width: `${inputWidth + 14}px` }}
                            className="text-[24px] ml-[19px] bg-[#F8F8F8] outline-none"
                            placeholder="Название резюме"
                        />
                        <img
                            src="../images/edit.svg"
                            className="cursor-pointer"
                            onClick={handleIconClick}
                        />
                    </div>
                ) : (
                    <h2 className="text-[24px] px-[19px]">{blockName}</h2>
                )}
            </div>
            <div className="w-[541px] bg-[#F8F8F8] border-x border-b border-[#D9D9D9] rounded-bl-[10px] rounded-br-[10px] px-[29px]">
                {children}
            </div>
        </div>
    );
}
