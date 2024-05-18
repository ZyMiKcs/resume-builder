export const deleteFromLocalStorage = (id: string | number): void => {
    try {
        const savedDataString = localStorage.getItem('savedResumes');
        if (savedDataString) {
            const savedData = JSON.parse(savedDataString);

            const updatedData = savedData.filter((item) => item.id !== id);

            localStorage.setItem('savedResumes', JSON.stringify(updatedData));
        }
    } catch (error) {
        console.error('Error while removing resume from localStorage:', error);
    }
};
