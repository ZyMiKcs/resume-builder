export function addToLocalStorage(template: string) {
    try {
        const data = JSON.parse(localStorage.getItem('savedResumes') || '[]');
        const id = (data.length + 1).toString();
        data.push({
            id,
            template,
            resumeName: Date.now().toString(),
            firstName: '',
            lastName: '',
            job: '',
            city: '',
            dateOfBirth: '',
            contacts: [],
            phoneNemail: {},
            aboutMe: '',
            photo: '',
            education: { graduationYear: '2024' },
            skills: [],
        });
        localStorage.setItem('savedResumes', JSON.stringify(data));
        console.log('Данные успешно сохранены.');

        return id;
    } catch (error) {
        console.error('Ошибка сохранения данных:', error);
    }
}
