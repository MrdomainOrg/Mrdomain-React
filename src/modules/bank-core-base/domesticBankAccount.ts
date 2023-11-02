/* eslint-disable no-underscore-dangle */
import BaseDomesticBankAccount from './baseDomesticBankAccount';
import { BankId, baseImageBankUrl } from './constants';

class DomesticBankAccount extends BaseDomesticBankAccount {
  // eslint-disable-next-line no-useless-constructor
  public constructor(
    bankId: number,
    englishName: string,
    persianName: string,
    accountOwner: string,
    accountNumber: string,
    sheba: string,
    cardNumber: string,
    isActive: boolean,
    imageUrl?: string,
  ) {
    super(
      bankId,
      englishName,
      persianName,
      accountOwner,
      accountNumber,
      sheba,
      cardNumber,
      isActive,
      imageUrl,
    );
  }

  public get imageUrl(): string {
    if (this._imageUrl !== null && typeof this._imageUrl !== 'undefined') {
      return this._imageUrl;
    }
    switch (this.bankId) {
      case BankId.MELIBANK:
        return `${baseImageBankUrl}/melibank.svg`;
      case BankId.FUTRUEBANK:
        return `${baseImageBankUrl}/futruebank.svg`;
      case BankId.SAMANBANK:
        return `${baseImageBankUrl}/samanbank.svg`;
      case BankId.SADERATBANK:
        return `${baseImageBankUrl}/saderatbank.svg`;
      case BankId.MELATBANK:
        return `${baseImageBankUrl}/melatbank.svg`;
      case BankId.SEPAHBANK:
        return `${baseImageBankUrl}/sepahbank.svg`;
      case BankId.PARSIANBANK:
        return `${baseImageBankUrl}/parsianbank.svg`;
      case BankId.EGHTESADNOVINBANK:
        return `${baseImageBankUrl}/eghtesadnovinbank.svg`;
      case BankId.AGRIBANK:
        return `${baseImageBankUrl}/agribank.svg`;
      case BankId.MASKANBANK:
        return `${baseImageBankUrl}/maskanbank.svg`;
      case BankId.PASARGADBANK:
        return `${baseImageBankUrl}/pasargadbank.svg`;
      case BankId.SANATVAMADANBANK:
        return `${baseImageBankUrl}/sanatvamadanbank.svg`;
      case BankId.TOSESADERATBANK:
        return `${baseImageBankUrl}/tosesaderatbank.svg`;
      case BankId.SARMAYEBANK:
        return `${baseImageBankUrl}/sarmayebank.svg`;
      case BankId.REFAHKARGARANBANK:
        return `${baseImageBankUrl}/refahkargaranbank.svg`;
      case BankId.POSTBANK:
        return `${baseImageBankUrl}/postbank.svg`;
      case BankId.TOSETAVONBANK:
        return `${baseImageBankUrl}/tosetavonbank.svg`;
      case BankId.SINABANK:
        return `${baseImageBankUrl}/sinabank.svg`;
      case BankId.CITYBANK:
        return `${baseImageBankUrl}/citybank.svg`;
      case BankId.DAYBANK:
        return `${baseImageBankUrl}/daybank.svg`;
      case BankId.TEJARATBANK:
        return `${baseImageBankUrl}/tejaratbank.svg`;
      case BankId.MIDDLEEASTBANK:
        return `${baseImageBankUrl}/middleeastbank.svg`;
      case BankId.GARDESHGARIBANK:
        return `${baseImageBankUrl}/gardeshgaribank.svg`;
      case BankId.IRANZAMINBANK:
        return `${baseImageBankUrl}/iranzaminbank.svg`;
      case BankId.RESALARBANK:
        return `${baseImageBankUrl}/resalatbank.svg`;
      case BankId.MEHRIRANBANK:
        return `${baseImageBankUrl}/mehriranbank.svg`;
      case BankId.KARAFARINBANK:
        return `${baseImageBankUrl}/karafarinbank.svg`;
      case BankId.MOASESEETEBARINOUR:
        return `${baseImageBankUrl}/moaseseetebarinour.svg`;
      case BankId.MOASESEETEBARIMELAL:
        return `${baseImageBankUrl}/moaseseetebarimelal.svg`;
      case BankId.BLUBANK:
        return `${baseImageBankUrl}/blubank.svg`;
      default:
        return '';
    }
  }
}

export default DomesticBankAccount;
