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
}

export const formatNumberWithCommas = (number: number): string => {
    return convertToPersianNumber(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export const formatStringNumberWithCommas = (input: string): string => {
    const numberStr = input.replace(/,/g, '');
    return formatNumberWithCommas(parseInt(numberStr, 10));
}

export const formatPersianStringNumberWithCommas = (input: string): string => {
    return formatStringNumberWithCommas(input);
}
