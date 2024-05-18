export const getLevelLabel = (index: number | null) => {
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
