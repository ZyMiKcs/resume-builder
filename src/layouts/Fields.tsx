import { useEffect, useRef, useState } from 'react';
import InputBlock from '../components/InputBlock';
import BirthdayPicker from '../components/BirthdayPicker';
import { PatternFormat } from 'react-number-format';
import SocialNetworkBlock from '../components/SocialNetworkBlock';
import TextEditor from '../components/TextEditor';
import { useActions } from '../hooks/useActions';
import { useFormData } from '../hooks/useFormData';
import Education from '../components/Education';
import SkillsField from '../components/SkillsField';
import { uploadImage } from '../services/uploadImage';
import { useLoaderData } from 'react-router';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

interface SocialNetworkBlock {
    id: number;
    network: string;
    link: string;
}

export default function Fields() {
    const { setFormData, setContacts, removeContact, setphoneNemail } =
        useActions();
    const {
        firstName,
        lastName,
        job,
        city,
        photo,
        phoneNemail: { email, phone },
        contacts,
        resumeName: savedResumeName,
    } = useFormData();

    const data = useLoaderData();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (data) {
            setFormData(data);
            setIsLoading(true);
        }
    }, [data]);

    const fileInputRef = useRef();

    const [socialNetworkBlocks, setSocialNetworkBlocks] =
        useState<SocialNetworkBlock[]>(contacts);

    const handleChangeResumeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ resumeName: e.target.value });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            try {
                const url = await uploadImage(file);
                setFormData({ photo: url });
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleAddSocialNetworkBlock = () => {
        const id = socialNetworkBlocks.length + 1;
        setSocialNetworkBlocks([
            ...socialNetworkBlocks,
            { id, network: '', link: '' },
        ]);
    };

    const handleNetworkChange = (id: number, network: string) => {
        const updatedBlocks = socialNetworkBlocks.map((block) => {
            if (block.id === id) {
                return { ...block, network };
            }
            return block;
        });
        if (updatedBlocks[id - 1].link) {
            handleSetContacts(updatedBlocks);
        }

        setSocialNetworkBlocks(updatedBlocks);
    };

    const handleDeleteSocialNetworkBlock = (id: number) => {
        const updatedBlocks = socialNetworkBlocks.filter(
            (block) => block.id !== id
        );
        handleDeleteContact(id);
        setSocialNetworkBlocks(updatedBlocks);
    };

    const handleLinkChange = (id: number, link: string) => {
        const updatedBlocks = socialNetworkBlocks.map((block) => {
            if (block.id === id) {
                return { ...block, link };
            }
            return block;
        });
        if (link) handleSetContacts(updatedBlocks);
        else handleDeleteContact(id);

        setSocialNetworkBlocks(updatedBlocks);
    };

    function handleFillResume() {
        setFormData({
            firstName: 'Влад',
            lastName: 'Влазнев',
            job: 'Frontend разработчик',
            city: 'Москва',
            dateOfBirth: 'Mon Nov 04 2002',
            contacts: [
                { id: 1, network: 'GitHub', link: '@zymik' },
                { id: 2, network: 'Telegram', link: '@zymikjs' },
            ],
            phoneNemail: {
                phone: '79999999999',
                email: 'test@example.com',
            },
            aboutMe:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolore laudantium debitis rerum itaque cumque vel sint numquam expedita architecto facere eum, quas similique ut hic, magnam temporibus quos quia.',
        });
        setSocialNetworkBlocks([
            { id: 1, network: 'GitHub', link: '@zymik' },
            { id: 2, network: 'Telegram', link: '@zymikjs' },
        ]);
    }

    const handleSetContacts = (contacts: Array<Object>) => {
        setContacts(contacts);
    };

    const handleDeleteContact = (id: number) => {
        removeContact(id);
    };

    useEffect(() => {
        setSocialNetworkBlocks(contacts);
    }, [contacts]);

    if (!isLoading) return <div>Loading...</div>;

    return (
        <div className="mx-[79px] py-[50px] flex flex-col gap-[24px] overflow-y-auto shrink-0 h-screen no-scrollbar">
            {/* <button
                className="bg-[#F8F8F8] max-w-fit mx-auto p-2 rounded-md border border-black"
                onClick={handleFillResume}
            >
                Заполнить
            </button> */}
            <InputBlock
                blockName={savedResumeName}
                isEditableName={true}
                handleChangeResumeName={handleChangeResumeName}
            >
                <div className="flex justify-between pt-[20px] mb-[23px]">
                    <div className="flex flex-col">
                        <label
                            htmlFor="job-title"
                            className="text-[12px] text-[#414141]"
                        >
                            Желаемая должность
                        </label>
                        <input
                            type="text"
                            id="job-title"
                            className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                            value={job}
                            onChange={(e) =>
                                setFormData({
                                    job: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="city"
                            className="text-[12px] text-[#414141]"
                        >
                            Город проживания
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                            value={city}
                            onChange={(e) =>
                                setFormData({
                                    city: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-[23px]">
                    <input
                        type="file"
                        multiple
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="images/*"
                    />
                    <button
                        className="w-[123px] h-[148px] bg-[#F2F2F2] border border-black/35 border-dashed rounded-[5px] flex flex-col items-center justify-center gap-[9px] cursor-pointer hover:bg-[#eaeaea] transition-all duration-500 relative"
                        onClick={(e) => {
                            fileInputRef.current.click();
                            e.preventDefault();
                        }}
                    >
                        {photo ? (
                            <>
                                <img
                                    src={photo}
                                    className="w-full h-full photo object-cover rounded-[5px] hover:opacity-30 transition-all duration-300 z-10"
                                    alt="Selected File"
                                />
                                <p className="text-[#414141] text-[12px] text-center absolute">
                                    Изменить <br /> фото
                                </p>
                            </>
                        ) : (
                            <>
                                <img
                                    src="../images/plus.svg"
                                    className="w-[26px] h-[26px]"
                                />
                                <p className="text-[#414141] text-[12px] text-center">
                                    Загрузить <br /> фото
                                </p>
                            </>
                        )}
                    </button>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <label
                                htmlFor="second-name"
                                className="text-[12px] text-[#414141]"
                            >
                                Фамилия
                            </label>
                            <input
                                type="text"
                                id="second-name"
                                className="bg-[#F2F2F2] rounded-[5px] w-[300px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                                value={lastName}
                                onChange={(e) =>
                                    setFormData({
                                        lastName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="first-name"
                                className="text-[12px] text-[#414141]"
                            >
                                Имя
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                className="bg-[#F2F2F2] rounded-[5px] w-[300px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                                value={firstName}
                                onChange={(e) =>
                                    setFormData({
                                        firstName: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-[24px]">
                    <p className="text-[12px] text-[#414141] mb-[10px]">
                        Дата рождения
                    </p>
                    <BirthdayPicker />
                </div>
            </InputBlock>
            <InputBlock blockName="Контакты">
                <div className="flex justify-between pt-[20px] mb-[23px]">
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-[12px] text-[#414141]"
                        >
                            Электронная почта
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                            value={email}
                            onChange={(e) =>
                                setphoneNemail({ email: e.target.value })
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="phone-number"
                            className="text-[12px] text-[#414141]"
                        >
                            Номер телефона
                        </label>
                        <PatternFormat
                            format="+# (###) ###-##-##"
                            valueIsNumericString={true}
                            type="text"
                            value={phone && formatPhoneNumber(phone)}
                            id="phone-number"
                            placeholder="+X (XXX) XXX-XX-XX"
                            className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                            onChange={(e) =>
                                setphoneNemail({ phone: e.target.value })
                            }
                        />
                    </div>
                </div>
                {socialNetworkBlocks.map((block) => (
                    <SocialNetworkBlock
                        key={block.id}
                        block={block}
                        onNetworkChange={handleNetworkChange}
                        onLinkChange={handleLinkChange}
                        onDelete={handleDeleteSocialNetworkBlock}
                    />
                ))}
                <div
                    className="flex bg-[#F2F2F2] justify-center items-center h-[30px] gap-[7px] rounded-[5px] border border-black/35 border-dashed mb-[24px] cursor-pointer hover:bg-[#eaeaea] transition-all duration-500"
                    onClick={handleAddSocialNetworkBlock}
                >
                    <span className="text-[12px] text-[#414141]">
                        Добавить социальную сеть
                    </span>
                    <img
                        src="../images/plus.svg"
                        className="w-[16px] h-[16px] text-[#414141]"
                        alt="plus icon"
                    />
                </div>
            </InputBlock>
            <Education />
            <SkillsField />
            <InputBlock blockName="О себе">
                <TextEditor />
            </InputBlock>
        </div>
    );
}
