import { useActions } from '../hooks/useActions';
import { useFormData } from '../hooks/useFormData';
import InputBlock from './InputBlock';

const years = Array.from(
    { length: 60 },
    (_, i) => new Date().getFullYear() + 8 - i
);

export default function Education() {
    const { setEducation } = useActions();
    const {
        education: { institution, level, graduationYear, faculty, speciality },
    } = useFormData();

    return (
        <InputBlock blockName="Основное образование">
            <div className="flex flex-wrap gap-y-5 justify-between py-6 items-end">
                <div className="flex flex-col">
                    <label
                        htmlFor="institution"
                        className="text-[12px] text-[#414141]"
                    >
                        Учебное заведение
                    </label>
                    <input
                        type="text"
                        id="institution"
                        className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                        value={institution}
                        onChange={(e) =>
                            setEducation({
                                institution: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="education-level"
                        className="text-[12px] text-[#414141]"
                    >
                        Уровень образвания
                    </label>
                    <select
                        className="w-[200px] h-[30px] bg-[#F2F2F2] border border-black/35 rounded-[5px] text-[14px] px-[7px] text-[#414141] mt-[10px]"
                        id="education-level"
                        value={level}
                        onChange={(e) =>
                            setEducation({ level: e.target.value })
                        }
                    >
                        <option value="" hidden></option>
                        <option
                            value="Высшее"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Высшее
                        </option>
                        <option
                            value="Бакалавр"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Бакалавр
                        </option>
                        <option
                            value="Специалист"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Специалист
                        </option>
                        <option
                            value="Магистр"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Магистр
                        </option>
                        <option
                            value="Неполное высшее"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Неполное высшее
                        </option>
                        <option
                            value="Среднее специальное"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Среднее спец.
                        </option>
                        <option
                            value="Среднее"
                            className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                        >
                            Среднее (школа)
                        </option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="faculty"
                        className="text-[12px] text-[#414141]"
                    >
                        Факультет
                    </label>
                    <input
                        type="text"
                        id="faculty"
                        className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                        value={faculty}
                        onChange={(e) =>
                            setEducation({ faculty: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col ">
                    <label
                        htmlFor="speciality"
                        className="text-[12px] text-[#414141]"
                    >
                        Специальность
                    </label>
                    <input
                        type="text"
                        id="speciality"
                        className="bg-[#F2F2F2] rounded-[5px] w-[200px] h-[30px] border border-black/35 mt-[10px] outline-none px-[5px] text-[14px] text-[#414141]"
                        value={speciality}
                        onChange={(e) =>
                            setEducation({ speciality: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="graduation-year"
                        className="text-[12px] text-[#414141]"
                    >
                        Год окончания *
                    </label>
                    <select
                        className="w-[200px] h-[30px] bg-[#F2F2F2] border border-black/35 rounded-[5px] text-[14px] px-[7px] text-[#414141] mt-[10px]"
                        id="graduation-year"
                        onChange={(e) =>
                            setEducation({ graduationYear: e.target.value })
                        }
                        defaultValue={new Date().getFullYear()}
                    >
                        {years.map((year) => (
                            <option
                                key={year}
                                value={year}
                                className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="text-[#414141]/60 w-[200px] text-[12px]">
                    <p>
                        * Если учитесь в настоящее время, укажите год
                        предполагаемого окончания
                    </p>
                </div>
            </div>
        </InputBlock>
    );
}
