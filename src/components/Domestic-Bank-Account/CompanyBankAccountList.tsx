import { useState } from 'react'
import { ArashDomesticBankAccounts, BankId, DomesticBankAccount } from '../../modules/bank-core-base'
import { ShowDomesticBankAccount } from './ShowDomesticBankAccount';
export const CompanyBankAccountList = () => {
  const [bankAccount, setBankAccount] = useState<DomesticBankAccount | null>(null);
  const onBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <section className="promo-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-md-0 mb-lg-5">
              <h2>لطفا بانکی را که در آن حساب دارید برای پرداخت انتخاب نمایید</h2>
              <p className="lead">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    بانکی که در آن حساب دارید
                  </button>
                  <ul className="dropdown-menu">
                    {ArashDomesticBankAccounts.map((aBankAcc, idx: number) => (
                      (aBankAcc.isActive && <li><a className="dropdown-item" href="#" onClick={() => setBankAccount(aBankAcc)}>{aBankAcc.persianName}</a></li>)
                    ))}
                  </ul>
                </div>.
              </p>
            </div>
          </div>
        </div>
        {bankAccount && <ShowDomesticBankAccount companyBankAccount={bankAccount} />}
      </div>
    </section>
  )

}