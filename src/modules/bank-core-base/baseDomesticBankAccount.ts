export abstract class BaseDomesticBankAccount {
    public readonly bankId: string

    public readonly englishName: string

    public readonly persianName: string

    public readonly accountOwner: string

    public readonly accountNumber: string

    public readonly iban: string

    public readonly cardNumber: string

    public readonly imageUrl?: string

    public readonly isActive: boolean

    protected constructor(
        bankId: string,
        englishName: string,
        persianName: string,
        accountOwner: string,
        accountNumber: string,
        iban: string,
        cardNumber: string,
        isActive: boolean,
        imageUrl?: string
    ) {
        this.bankId = bankId
        this.englishName = englishName
        this.persianName = persianName
        this.accountOwner = accountOwner
        this.accountNumber = accountNumber
        this.iban = iban
        this.cardNumber = cardNumber
        this.imageUrl = imageUrl
        this.isActive = isActive
    }

}