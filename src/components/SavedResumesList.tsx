import { useEffect, useState } from 'react';
import { getResumeListFromLocalStorage } from '../utils/getResumesListFromLocalStorage';
import { useNavigate } from 'react-router';
import { FaRegTrashCan } from 'react-icons/fa6';
import { deleteFromLocalStorage } from '../utils/deleteFromLocalStorage';

export default function SavedResumesList() {
    const [resumesList, setResumesList] = useState([]);
    const navigate = useNavigate();

    function handleDeleteResume(e, id: string) {
        e.stopPropagation();
        deleteFromLocalStorage(id);
        setResumesList(resumesList.filter((resume) => resume.id !== id));
    }

    useEffect(() => {
        const savedResumes = getResumeListFromLocalStorage();
        setResumesList(savedResumes);
    }, []);

    return (
        <div className="bg-white border border-[#D9D9D9] rounded-[5px]">
            {resumesList.length > 0 ? (
                <ul className="w-[268px] max-h-[160px] overflow-auto">
                    {resumesList.map((resume) => (
                        <li
                            key={resume.id}
                            className="p-2.5 border-b border-[#D9D9D9] cursor-pointer last:border-0 text-[18px] text-[#414141] flex items-center justify-between"
                            onClick={() =>
                                navigate(`/constructor/${resume.id}`)
                            }
                        >
                            {resume.resumeName}{' '}
                            <button
                                onClick={(e) =>
                                    handleDeleteResume(e, resume.id)
                                }
                            >
                                <FaRegTrashCan />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2 className="p-2.5">У вас еще нет ни одного резюме :(</h2>
            )}
        </div>
    );
}
