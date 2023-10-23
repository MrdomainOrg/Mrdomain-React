import { BankId } from "../../components/Domestic-Bank-Account/constants";
import { DomesticBankAccount } from './domesticBankAccount';
const owner = 'آرش ابراهیم پور'
export const ArashAccounts = {
    meliBank: new DomesticBankAccount(BankId.MELIBANK, 'Meli Bank', 'بانک ملی', owner, '0230775837007', 'IR530170000000230775837007', '6037 9974 6458 6628', true, ''),
    mellatBank: new DomesticBankAccount(BankId.MELATBANK, 'Melat Bank', 'بانک ملت', owner, '1740199609', 'IR030120020000001740199609', '6104 3386 6194 4336', true, ''),
    futureBank: new DomesticBankAccount(BankId.FUTRUEBANK, 'Future Bank', 'بانک آینده', owner, '0203878193002', 'IR160620000000203878193002', '6362 1411 3935 0202', true, ''),
    samanBank: new DomesticBankAccount(BankId.SAMANBANK, 'Saman Bank', 'بانک سامان', owner, '805-800-769463-1', 'IR320560080580000769463001', '6219 8610 7085 4038', true, ''),
    maskanBank: new DomesticBankAccount(BankId.MASKANBANK, 'Maskan Bank', 'بانک مسکن', owner, '310059000581', 'IR270140040000310059000581', '6280 2315 2244 7639', true, '')
}