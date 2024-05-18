import { useRef } from 'react';
import FirstTemplate from './FirstTemplate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import FirstTemplatePDF from './FirstTemplatePDF';
import { useFormData } from '../hooks/useFormData';

export default function Preview() {
    const pdfRef = useRef();
    const { resumeName } = useFormData();

    const downloadPDF = () => {
        const input: HTMLElement = pdfRef.current;
        html2canvas(input, {
            scale: 2,
            useCORS: true,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = canvas.width / 2;
            const imgHeight = canvas.height / 2;

            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

            const imgScaledWidth = imgWidth * ratio;
            const imgScaledHeight = imgHeight * ratio;

            pdf.addImage(imgData, 'PNG', 0, 0, imgScaledWidth, imgScaledHeight);
            const resume = resumeName || Date.now();
            pdf.save(`${resume}.pdf`);
        });
    };

    return (
        <div className="overflow-hidden h-screen">
            <div className="mx-[79px] pt-[50px] flex flex-col grow h-screen">
                <div className="bg-[#F8F8F8] border border-[#D9D9D9] rounded-tl-[10px] rounded-tr-[10px] flex justify-center">
                    <button
                        className="flex gap-2 items-center text-2xl font-normal"
                        onClick={downloadPDF}
                    >
                        Скачать{' '}
                        <img src="../images/download.svg" alt="download-icon" />
                    </button>
                </div>
                <div className=" bg-[#F8F8F8] border-x border-b border-[#D9D9D9] rounded-bl-[10px] rounded-br-[10px] px-[29px] py-2.5 flex justify-center">
                    <FirstTemplate />
                </div>
            </div>
            <FirstTemplatePDF pdfRef={pdfRef} />
        </div>
    );
}
