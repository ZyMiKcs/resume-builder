export function updateLocalStorage(
    id: string,
    formData: { template: string }
): void {
    try {
        const data = JSON.parse(localStorage.getItem('savedResumes') || '[]');
        const index = data.findIndex((item) => item.id === id);
        if (index !== -1) {
            data[index] = formData;
            localStorage.setItem('savedResumes', JSON.stringify(data));
        } else {
            console.error('Резюме с таким ID не найдено.');
        }
    } catch (error) {
        console.error('Ошибка обновления данных:', error);
    }
}
