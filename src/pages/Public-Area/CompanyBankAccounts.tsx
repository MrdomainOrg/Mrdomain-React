import { CompanyBankAccountList } from '../../components/Domestic-Bank-Account/CompanyBankAccountList';

export interface BankAccount {
    bankName: string;
    sheba: string;
    accountNumber: string;
    cardNumber: string;
    accountName: string;
    image: string;
    mustShow: boolean;
}
export const CompanyBankAccounts = (): JSX.Element => {
    return (
        <>
        <CompanyBankAccountList />
        </>
    );
};
