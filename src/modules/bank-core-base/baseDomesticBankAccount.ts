export abstract class BaseDomesticBankAccount {
    public readonly bankId: number

    public readonly englishName: string

    public readonly persianName: string

    public readonly accountOwner: string

    public readonly accountNumber: string

    public readonly sheba: string

    public readonly cardNumber: string

    public readonly _imageUrl?: string

    public readonly isActive: boolean

    protected constructor(
        bankId: number,
        englishName: string,
        persianName: string,
        accountOwner: string,
        accountNumber: string,
        sheba: string,
        cardNumber: string,
        isActive: boolean,
        imageUrl?: string
    ) {
        this.bankId = bankId
        this.englishName = englishName
        this.persianName = persianName
        this.accountOwner = accountOwner
        this.accountNumber = accountNumber
        this.sheba = sheba
        this.cardNumber = cardNumber
        this._imageUrl = imageUrl
        this.isActive = isActive
    }

    public abstract get imageUrl(): string

}