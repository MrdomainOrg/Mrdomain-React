import { BankId } from "./constants";
import { DomesticBankAccount } from './domesticBankAccount';
const owner = 'آرش ابراهیم پور'

export const ArashDomesticBankAccounts = [
    new DomesticBankAccount(BankId.EGHTESADNOVINBANK, 'Eghtesad Novin Bank', 'بانک اقتصاد نوین', owner, '110-800-5458546-1', 'IR97-0550-0110-8000-5458-5460-01', '6274-1211-6296-8580', true),
    new DomesticBankAccount(BankId.FUTRUEBANK, 'Future Bank', 'بانک آینده', owner, '0203878193002', 'IR16-0620-0000-0020-3878-1930-02', '6362-1411-3935-0202', true),
    new DomesticBankAccount(BankId.IRANZAMINBANK, 'Iranzamin Bank', 'بانک ایران زمین', owner, '160-12-2082859-1', 'IR31-0690-0160-0120-2082-8590-01', '5057-8510-2866-4156', true),
    new DomesticBankAccount(BankId.PARSIANBANK, 'Parsian Bank', 'بانک پارسیان', owner, '00200991716003', 'IR27-0540-1025-8002-0991-7160-03', '6221-0610-0226-0067', true),
    new DomesticBankAccount(BankId.PASARGADBANK, 'Pasargad Bank', 'بانک پاسارگاد', owner, '384-8000-17278045-1', 'IR31-0570-0384-8001-7278-0451-01', '5022-2913-2748-1881', true),
    new DomesticBankAccount(BankId.TEJARATBANK, 'Tejarat Bank', 'بانک تجارت', owner, '3637923373', 'IR23-0180-0000-0000-3637-9233-73', '5859-8312-4259-0312', true),
    new DomesticBankAccount(BankId.TOSETAVONBANK, 'Tosetavon Bank', 'بانک توسعه تعاون', owner, '1722-306-7284206-1', 'IR73-0220-1722-0306-7284-2060-01', '5029-0810-7157-3840', true),
    new DomesticBankAccount(BankId.MELIBANK, 'Meli Bank', 'بانک ملی', owner, '0230775837007', 'IR53-0170-0000-0023-0775-8370-07', '6037-9974-6458-6628', true),
    new DomesticBankAccount(BankId.MELATBANK, 'Melat Bank', 'بانک ملت', owner, '1740199609', 'IR03-0120-0200-0000-1740-1996-09', '6104-3386-6194-4336', true),
    new DomesticBankAccount(BankId.SAMANBANK, 'Saman Bank', 'بانک سامان', owner, '805-800-769463-1', 'IR32-0560-0805-8000-0769-4630-01', '6219-8610-7085-4038', true),
    new DomesticBankAccount(BankId.MASKANBANK, 'Maskan Bank', 'بانک مسکن', owner, '310059000581', 'IR27-0140-0400-0031-0059-0005-81', '6280-2315-2244-7639', true),
    new DomesticBankAccount(BankId.SINABANK, 'Sina Bank', 'بانک سینا', owner, '428-813-4992350-1', 'IR55-0590-0428-8130-4992-3500-01', '6393-4610-5707-5620', true),
    new DomesticBankAccount(BankId.SEPAHBANK, 'Sepah Bank', 'بانک سپه', owner, '6001205162417', 'IR03-0150-0000-0600-1205-1624-17', '5892-1015-2492-1695', true),
    new DomesticBankAccount(BankId.SADERATBANK, 'Saderat Bank', 'بانک صادرات', owner, '0218324172006', 'IR48-0190-0000-0021-8324-1720-06', '6037-6976-8976-5177', true),
    new DomesticBankAccount(BankId.CITYBANK, 'City Bank', 'بانک شهر', owner, '700799940211', 'IR04-0610-0000-0070-0799-9402-11', '5047-0610-8823-7876', true),
    new DomesticBankAccount(BankId.REFAHKARGARANBANK, 'Refah Bank', 'بانک رفاه کارگران', owner, '365854426', 'IR34-0130-1000-0000-0365-8544-26', '5894-6312-1095-5423', true),
    new DomesticBankAccount(BankId.GARDESHGARIBANK, 'Gardeshgari Bank', 'بانک گردشگری', owner, '111-900-26105-1', 'IR37-0640-0111-0900-0026-1050-01', '5054-1610-1659-4081', true),
    new DomesticBankAccount(BankId.AGRIBANK, 'Agri Bank', 'بانک کشاورزی', owner, '405260958', 'IR23-0160-0000-0000-0405-2609-58', '6037-7010-0447-9694', true),
    new DomesticBankAccount(BankId.DAYBANK, 'Day Bank', 'بانک دی', owner, '0201194657006', 'IR96-0660-0000-0020-1194-6570-06', '5029-3810-4819-8212', true),
    new DomesticBankAccount(BankId.SARMAYEBANK, 'Sarmaye Bank', 'بانک سرمایه', owner, '1036-713-2212406-1', 'IR26-0580-1036-7130-2212-4060-01', '6396-0712-1619-7848', true),
    new DomesticBankAccount(BankId.KARAFARINBANK, 'Karafarin Bank', 'بانک کارآفرین', owner, '0201685601603', 'IR84-0530-0000-0020-1685-6016-03', '6274-8811-2031-5055', true),
    new DomesticBankAccount(BankId.RESALARBANK, 'Resalat Bank', 'بانک رسالت', owner, '10-10752483-1', 'IR83-0700-0100-0111-0752-4830-01', '5041-7211-1330-4605', true),
    new DomesticBankAccount(BankId.MOASESEETEBARIMELAL, 'Moasese melal', 'موسسه اعتباری ملل', owner, '046310276000135990', 'IR06-0750-0463-1027-6000-1359-90', '6062-5610-0424-4458', true),
    new DomesticBankAccount(BankId.POSTBANK, 'Post bank', 'پست بانک', owner, '2000228901839', 'IR41-0210-0000-0200-0228-9018-39', '6277-6013-6758-0998', true),
    new DomesticBankAccount(BankId.MEHRIRANBANK, 'Mehr Iran bank', 'بانک قرض الحسنه مهر ایران', owner, '3025-700-15589511-1', 'IR83-0600-3025-7001-5589-5110-01', '6063-7311-7646-5814', true),

]