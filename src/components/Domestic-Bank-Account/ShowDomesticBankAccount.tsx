import { DomesticBankAccount } from '../../modules/bank-core-base'

interface ShowDomesticBankAccountProps {
    companyBankAccount: DomesticBankAccount;
}
export const ShowDomesticBankAccount: React.FC<ShowDomesticBankAccountProps> = (props) => {
    return (
        <div className="row">
            <div
                className="col-xl-4 col-lg-3 col-12 order-lg-last align-self-center">
                <div className="image-box fadein text-xl-right text-center">
                    <img src={props.companyBankAccount.imageUrl}
                        alt="wp-hosting" className="img-fluid" />
                </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-12 order-xl-first">
                <h3>مشخصات حساب مریوط به {props.companyBankAccount.persianName}</h3>
                <p><h5>شماره حساب : <span dir="ltr">{props.companyBankAccount.accountNumber}</span></h5></p>
                <p><h5>شماره کارت : <span dir="ltr">{props.companyBankAccount.cardNumber}</span></h5></p>
                <p><h5>شماره شبا : {props.companyBankAccount.sheba}</h5></p>
                <p><h5>نام صاحب حساب : {props.companyBankAccount.accountOwner}</h5></p>
            </div>
        </div>
    )
}