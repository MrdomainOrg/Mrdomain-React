export const convertToPersianNumber = (number: number): string => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const numberStr = number.toString();
    let persianNumber = '';

    for (let i = 0; i < numberStr.length; i++) {
        const char = numberStr[i];
        if (char >= '0' && char <= '9') {
            persianNumber += persianDigits[parseInt(char)];
        } else {
            persianNumber += char;
        }
    }

    return persianNumber;
};

export const formatNumberWithCommas = (number: number): string => {
    // const persianNumber = convertToPersianNumber(number); // تبدیل به اعداد فارسی
    // const persianNumberWithCommas = addCommasToPersianNumber(persianNumber); // اضافه کردن کاماها به اعداد فارسی
    return Intl.NumberFormat().format(number);
};

// // تابعی برای اضافه کردن کاماها به عدد فارسی
// const addCommasToPersianNumber = (numberString: string): string => {
//     return numberString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
// };

export const formatStringNumberWithCommas = (input: string): string => {
    const numberStr = input.replace(/,/g, '');
    return formatNumberWithCommas(parseInt(numberStr, 10));
};

export const formatPersianStringNumberWithCommas = (input: string): string => {
    return formatStringNumberWithCommas(input);
};
