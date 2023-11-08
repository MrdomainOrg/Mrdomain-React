/* eslint-disable react/no-unknown-property */
import { Container } from 'react-bootstrap';
import { userDetails } from '../../constants/SiteConfigs';

const PayByCrypto = () => {
  return (
    <div className="main">
      <section className="feature-section ptb-100">
        <Container>
          <p>لطفا برای پرداخت با ارز دیجیتال با پشتیبانی تماس بگیرید</p>
          <p style={{ textAlign: 'right' }}>
            تلفن پشتیبانی: <span dir="ltr">{userDetails.mobile1}</span>
          </p>
        </Container>
      </section>
    </div>
  );
};

export default PayByCrypto;
