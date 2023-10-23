import { useState } from 'react'
export const DomesticBankAccount = () => {
    const [bankId, setBankId] = useState(0)
    const onBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = parseInt(event.target.value);
        setBankId(value);
      };

}