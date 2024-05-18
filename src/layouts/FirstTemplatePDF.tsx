import { FaGithub, FaInfo, FaTelegram, FaVk } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import TitleWithIcon from '../components/TitleWithIcon';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useFormData } from '../hooks/useFormData';
import { calculateAge } from '../utils/calculateAge';
import { MdOutlineMail } from 'react-icons/md';
import { PiGraduationCap } from 'react-icons/pi';
import SkillsSidebar from '../components/SkillsSidebar';
import { getYearWord } from '../utils/getYearWord';

export default function FirstTemplatePDF({ pdfRef }) {
    const {
        firstName,
        lastName,
        job,
        city,
        dateOfBirth,
        contacts,
        phoneNemail,
        aboutMe,
        photo,
        education,
        template,
    } = useFormData();
    const age = calculateAge(dateOfBirth);

    const isAnyContacts =
        contacts.length > 0 || phoneNemail.email || phoneNemail.phone;

    return (
        <div className="bg-white flex w-[210mm] h-[297mm]" ref={pdfRef}>
            <div
                className={`w-[35%] flex flex-col ${
                    template === 'blue' ? 'bg-[#2E6FD1]' : 'bg-[#7400E9]'
                } items-center py-3 gap-2.5 shrink-0`}
            >
                {photo && (
                    <div className="w-[100px] h-[140px] rounded-md">
                        <img
                            src={photo}
                            className="w-full h-full object-cover rounded-[5px] photo"
                            alt="Selected File"
                        />
                    </div>
                )}
                <div className="w-full">
                    {isAnyContacts && (
                        <>
                            <h4
                                className={`w-full ${
                                    template === 'blue'
                                        ? 'bg-[#0052CC]'
                                        : 'bg-[#6e2fad]'
                                }  text-[16px] text-white px-2 mb-2`}
                            >
                                Контакты
                            </h4>
                            <ul className="flex flex-col gap-1 mb-4">
                                {phoneNemail.phone && (
                                    <li>
                                        <p className="flex text-white text-[14px] px-2 gap-1 items-center break-words">
                                            <FiPhone />
                                            {phoneNemail.phone}
                                        </p>
                                    </li>
                                )}

                                {phoneNemail.email && (
                                    <li>
                                        <p className="flex text-white text-[14px] px-2 gap-1 items-center break-words">
                                            <MdOutlineMail />
                                            {phoneNemail.email}
                                        </p>
                                    </li>
                                )}

                                {contacts.map((contact: any) => (
                                    <li key={contact.id}>
                                        <p className="flex text-white text-[14px] px-2 gap-1 items-center">
                                            {contact.network === 'GitHub' && (
                                                <FaGithub />
                                            )}
                                            {contact.network === 'Telegram' && (
                                                <FaTelegram />
                                            )}
                                            {contact.network === 'VK' && (
                                                <FaVk />
                                            )}
                                            {contact.link}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <SkillsSidebar />
                </div>
            </div>
            <div className="p-5 w-[65%]">
                {(lastName || firstName) && (
                    <h3 className="text-[24px]">
                        {lastName} {firstName}
                    </h3>
                )}
                {job && <h4 className="text-[18px]">{job}</h4>}
                <div className="flex gap-4 text-[12px] pt-2">
                    {city && (
                        <span className="flex items-center">
                            <HiOutlineLocationMarker />
                            {city}
                        </span>
                    )}
                    {age > 0 && (
                        <span className="flex items-center">
                            <FaInfo />
                            Возраст: {age} {getYearWord(age)}
                        </span>
                    )}
                </div>
                {education?.institution && (
                    <div>
                        <TitleWithIcon
                            title="Образование"
                            icon={<PiGraduationCap />}
                            template={template}
                        />
                        <div className="flex gap-10 items-start">
                            <div className="text-wrap text-[12px]">
                                {education?.graduationYear >
                                new Date().getFullYear()
                                    ? 'н.в.'
                                    : education?.graduationYear}
                            </div>
                            <div className="text-wrap ">
                                <div className="flex text-[14px]">
                                    <p className="font-bold">
                                        {education?.institution}
                                    </p>
                                    {education?.level && (
                                        <p>, {education?.level}</p>
                                    )}
                                </div>
                                <div className="flex italic text-[12px] gap-1">
                                    <p>
                                        {education?.faculty &&
                                            education?.faculty}
                                        {education?.speciality &&
                                        education?.faculty
                                            ? ', '
                                            : ''}
                                        {education?.speciality &&
                                            education?.speciality}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {aboutMe && (
                    <>
                        <TitleWithIcon
                            title="О себе"
                            icon={<IoPersonCircleOutline />}
                            template={template}
                        />
                        <div className="text-wrap aboutme text-[14px]">
                            {aboutMe}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
