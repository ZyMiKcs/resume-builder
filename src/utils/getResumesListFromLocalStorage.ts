export const getResumeListFromLocalStorage = (): {
    id: string;
    resumeName: string;
}[] => {
    try {
        const savedDataString = localStorage.getItem('savedResumes');
        if (savedDataString) {
            const savedData = JSON.parse(savedDataString);
            const resumeList = savedData.map((item) => ({
                id: item.id,
                resumeName: item.resumeName,
            }));
            return resumeList;
        } else {
            return [];
        }
    } catch (error) {
        console.error(
            'Error while getting resume list from localStorage:',
            error
        );
        return [];
    }
};
