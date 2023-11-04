/* eslint-disable react/no-array-index-key */
// import { useState } from 'react';
import { Row, Col, Container, Accordion, Image } from 'react-bootstrap';
import ShowDomesticBankAccount from './ShowDomesticBankAccount';
import ArashDomesticBankAccounts from '../../modules/bank-core-base/arashAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyBankAccountList.css';

const CompanyBankAccountList = (): JSX.Element => {
  // const [bankAccount, setBankAccount] = useState<DomesticBankAccount | null>(null);
  // const onBankChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Container className="container">
      <Row>
        <div className="col-md-9 col-lg-8">
          <div className="section-heading mb-5">
            <h2>حسابهای بانکی</h2>
            <h5>لطفا بانکی را که در آن حساب دارید برای پرداخت انتخاب نمایید</h5>
          </div>
        </div>
      </Row>
      <Row>
        <Col className="col-md-12 col-lg-12">
          <Accordion>
            {ArashDomesticBankAccounts.map(
              (aBankAcc, idx: number) =>
                aBankAcc.isActive && (
                  <Accordion.Item eventKey={idx.toString()} key={idx}>
                    <Accordion.Header>{aBankAcc.persianName}</Accordion.Header>
                    <Accordion.Body>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-4 col-lg-3 col-12 order-lg-last align-self-center">
                            <div className="image-box fadein text-xl-right text-center">
                              <Image
                                src={aBankAcc.imageUrl}
                                alt="wp-hosting"
                                className="img-fluid"
                                style={{ width: '200px', height: '200px' }}
                              />
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-9 col-12 order-xl-first">
                            <h3>مشخصات حساب مریوط به {aBankAcc.persianName}</h3>
                            <h5>
                              شماره حساب :{' '}
                              <span dir="ltr">{aBankAcc.accountNumber}</span>
                            </h5>
                            <h5>
                              شماره کارت :{' '}
                              <span dir="ltr">{aBankAcc.cardNumber}</span>
                            </h5>
                            <h5>شماره شبا : {aBankAcc.sheba}</h5>
                            <h5>نام صاحب حساب : {aBankAcc.accountOwner}</h5>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ),
            )}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyBankAccountList;
