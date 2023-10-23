import { BaseDomesticBankAccount } from "./baseDomesticBankAccount";

export class DomesticBankAccount extends BaseDomesticBankAccount {
    public constructor(
        bankId: string,
        englishName: string,
        persianName: string,
        accountOwner: string,
        accountNumber: string,
        sheba: string,
        cardNumber: string,
        isActive: boolean,
        imageUrl?: string
    ) {
        super(bankId,englishName,persianName,accountOwner,accountNumber,sheba,cardNumber,isActive,imageUrl)
    }
}