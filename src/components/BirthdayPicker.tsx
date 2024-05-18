import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useFormData } from '../hooks/useFormData';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
    { value: 1, label: 'Январь' },
    { value: 2, label: 'Февраль' },
    { value: 3, label: 'Март' },
    { value: 4, label: 'Апрель' },
    { value: 5, label: 'Май' },
    { value: 6, label: 'Июнь' },
    { value: 7, label: 'Июль' },
    { value: 8, label: 'Август' },
    { value: 9, label: 'Сентябрь' },
    { value: 10, label: 'Октябрь' },
    { value: 11, label: 'Ноябрь' },
    { value: 12, label: 'Декабрь' },
];
const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
);

export default function BirthdayPicker() {
    const { dateOfBirth } = useFormData();
    const { setDateOfBirth } = useActions();

    const initialDate = dateOfBirth ? new Date(dateOfBirth) : new Date();
    const [day, setDay] = useState(initialDate.getDate());
    const [month, setMonth] = useState(initialDate.getMonth() + 1);
    const [year, setYear] = useState(initialDate.getFullYear());

    useEffect(() => {
        const newDate = new Date(year, month - 1, day).toDateString();
        setDateOfBirth({ dateOfBirth: newDate });
    }, [day, month, year, setDateOfBirth]);

    return (
        <div className="flex justify-between">
            <select
                className="w-[120px] h-[30px] bg-[#F2F2F2] border border-black/35 rounded-[5px] text-[14px] px-[7px] text-[#414141]"
                onChange={(e) => setDay(parseInt(e.target.value, 10))}
                value={day}
            >
                {days.map((day) => (
                    <option
                        key={day}
                        value={day}
                        className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                    >
                        {day}
                    </option>
                ))}
            </select>

            <select
                className="w-[120px] h-[30px] bg-[#F2F2F2] border border-black/35 rounded-[5px] text-[14px] px-[7px] text-[#414141]"
                onChange={(e) => setMonth(parseInt(e.target.value, 10))}
                value={month}
            >
                {months.map((month) => (
                    <option
                        key={month.value}
                        value={month.value}
                        className="bg-[#F2F2F2] text-[#414141] text-[14px]"
                    >
                        {month.label}
                    </option>
                ))}
            </select>

            <select
                className="w-[120px] h-[30px] bg-[#F2F2F2] border border-black/35 rounded-[5px] text-[14px] px-[7px] text-[#414141]"
                onChange={(e) => setYear(parseInt(e.target.value, 10))}
                value={year}
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
    );
}
