// import { useState } from 'react';
import { ArashDomesticBankAccounts } from '../../modules/bank-core-base';
import { ShowDomesticBankAccount } from './ShowDomesticBankAccount';
export const CompanyBankAccountList = (): JSX.Element => {
  // const [bankAccount, setBankAccount] = useState<DomesticBankAccount | null>(null);
  // const onBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div id="faq" className="ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading mb-5">
              <h2>حسابهای بانکی</h2>
              <p>
                <h5>لطفا بانکی را که در آن حساب دارید برای پرداخت انتخاب نمایید</h5>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div id="accordion-one" className="accordion accordion-faq">
              {ArashDomesticBankAccounts.map((aBankAcc, idx: number) => (
                (aBankAcc.isActive && <ShowDomesticBankAccount companyBankAccount={aBankAcc} rowIdx={idx} key={idx}/>)
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
