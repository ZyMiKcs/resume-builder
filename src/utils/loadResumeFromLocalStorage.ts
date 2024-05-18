export const loadResumeFromLocalStorage = (id: number) => {
    try {
        const savedDataString = localStorage.getItem('savedResumes');
        if (savedDataString) {
            const savedData = JSON.parse(savedDataString);
            const resume = savedData.find((item) => item.id == id);
            if (resume) {
                return resume;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error while getting formData from localStorage:', error);
        return null;
    }
};
