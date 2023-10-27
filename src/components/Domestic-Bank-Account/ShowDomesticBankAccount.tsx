import { DomesticBankAccount } from '../../modules/bank-core-base';
import PropTypes from 'prop-types';

interface ShowDomesticBankAccountProps {
    companyBankAccount: DomesticBankAccount;
    rowIdx: number;
}
export const ShowDomesticBankAccount: React.FC<ShowDomesticBankAccountProps> = (props) => {
    return (
        <div className="card mb-0">
            <a className="card-header collapsed" data-toggle="collapse" href={`#collapse-${props.rowIdx}`}>
                <h6 className="mb-0 d-inline-block">{props.companyBankAccount.persianName}</h6>
            </a>
            <div id={`collapse-${props.rowIdx}`} className="collapse" data-parent="#accordion-one">
                <div className="card-body">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-3 col-12 order-lg-last align-self-center">
                            <div className="image-box fadein text-xl-right text-center">
                                <img src={props.companyBankAccount.imageUrl}
                                    alt="wp-hosting" className="img-fluid" style={{ width: '200px', height: '200px' }}/>
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
                </div>
            </div>
        </div>
    );
};

ShowDomesticBankAccount.propTypes = {
    rowIdx: PropTypes.number.isRequired,
    companyBankAccount: PropTypes.instanceOf(DomesticBankAccount).isRequired
};
