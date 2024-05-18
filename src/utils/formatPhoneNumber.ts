export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/[^\d]/g, '');
    const formatted = cleaned.startsWith('7') ? cleaned : '7' + cleaned;
    return formatted;
}
