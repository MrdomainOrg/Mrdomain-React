import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './fonts.css';
import './bootstrap.css';
import './fontawesome.css';
import './themify-icons.css';
import './magnific.css';
import './animate.css';
import './jq-slider.css';
import './jq-megamenu.css';
import './owlcarousel.css';
import './main-rtl.css';
import './custom.css';
//  import { PublicPageLoader } from '../../components/PublicPageLoader/PublicPageLoader';
//  import { PublicNavMenu } from '../../components/Public-nav-menu/PublicNavMenu';
import { QueryClient, QueryClientProvider } from 'react-query';
import PublicHome from '../../pages/Public-Area/PublicHome';
import { CompanyBankAccounts } from '../../pages/Public-Area/CompanyBankAccounts';
import CompanyCryptoWallet from '../../pages/Public-Area/CompanyCryptoWallet';
import PublicHeader from '../../components/Public-header/PublicHeader';
import ContactUs from '../../pages/Public-Area/ContactUs';
import PublicFooter from '../../components/Public-footer/PublicFooter';
import ShortDomainInfoPage from './ShortDomainInfoPage';
import FullDomainInfoPage from './FullDomainInfoPage';
import PayByCrypto from '../../pages/Public-Area/PayByCrypto';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

//  const publicAreaPath = process.env.PUBLIC_URL;
const client = new QueryClient();
const PublicArea = (): JSX.Element => {
  return (
    <>
      {/* <HelmetProvider>
                <Helmet>
                </Helmet>
            </HelmetProvider> */}
      <QueryClientProvider client={client}>
        <Router>
          <PublicHeader />
          <Routes>
            <Route path="/" element={<PublicHome />} />
            <Route
              path="/companyBankAccounts"
              element={<CompanyBankAccounts />}
            />
            <Route
              path="/companyCryptoWallet"
              element={<CompanyCryptoWallet />}
            />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route
              path="/showdomaindetail/-/mrdomainRoute/shortDomainInfo/:domain"
              element={<ShortDomainInfoPage />}
            />
            <Route
              path="/showdomaindetail/-/mrdomainRoute/domainInfo/:tldPart/:domainPart"
              element={<FullDomainInfoPage />}
            />
            <Route path="/payByCrypto" element={<PayByCrypto />} />
          </Routes>
          <PublicFooter />
        </Router>
      </QueryClientProvider>
    </>
  );
};
export default PublicArea;
