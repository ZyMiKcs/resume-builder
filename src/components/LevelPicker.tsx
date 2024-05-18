import { useState } from 'react';

interface LevelPickerProps {
    selectedIndex: number;
    setSelectedIndex: (id: number) => void;
}

const LevelPicker = ({ selectedIndex, setSelectedIndex }: LevelPickerProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const getLevelLabel = (index: number | null) => {
        switch (index) {
            case 1:
                return 'Начальный';
            case 2:
                return 'Базовый';
            case 3:
                return 'Опытный';
            case 4:
                return 'Профессиональный';
            default:
                return 'Не отображать';
        }
    };

    return (
        <div className="flex flex-col items-start my-[11px]">
            <label className="text-[12px] text-[#414141] mb-[6px]">
                Уровень:{' '}
                {getLevelLabel(
                    hoveredIndex === null ? selectedIndex : hoveredIndex
                )}
            </label>
            <div className="rating-container">
                {[0, 1, 2, 3, 4].map((index) => (
                    <button
                        key={index}
                        className={`rating-button ${
                            index <=
                            (hoveredIndex !== null
                                ? hoveredIndex
                                : selectedIndex !== null
                                ? selectedIndex
                                : -1)
                                ? 'active'
                                : ''
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default LevelPicker;
