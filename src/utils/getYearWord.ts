export function getYearWord(number: number) {
    if (number % 100 >= 11 && number % 100 <= 14) {
        return 'лет';
    }

    switch (number % 10) {
        case 1:
            return 'год';
        case 2:
        case 3:
        case 4:
            return 'года';
        default:
            return 'лет';
    }
}
