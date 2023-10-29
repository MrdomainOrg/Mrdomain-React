import { Link } from 'react-router-dom';
import { siteConfig } from '../../constants/SiteConfigs';
export const PublicFooter = (): JSX.Element => {
    /* eslint-disable */
    return (
        <footer className="footer-section">
            <div className="footer-top gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row footer-top-wrap">
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">مجوزها</h4>
                                        <p><a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=90500&amp;Code=Wb0sjCeDW7zzNYHUPr3Y">
                                            <img referrerPolicy='origin' src='https://Trustseal.eNamad.ir/logo.aspx?id=90500&amp;Code=Wb0sjCeDW7zzNYHUPr3Y' alt='' style={ { cursor: 'pointer' } } id='Wb0sjCeDW7zzNYHUPr3Y' /></a></p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">شرکت</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><a className="nav-link" href="#">درباره
                                                ما</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">شرکا</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">بلاگ</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">فرصت
                                                های شغلی</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">شبکه
                                                های اجتماعی</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">قوانین</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><a className="nav-link" href="#">اطلاعات
                                                حقوقی</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">سیاست
                                                حریم خصوصی</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">گزارش
                                                سو استفاده</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">شرایط
                                                استفاده از خدمات</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">بررسی
                                                WHOIS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">پشتیبانی</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item"><Link className="nav-link" to="/contactUs">تماس با ما</Link></li>
                                            <li className="nav-item"><a className="nav-link" href="#">آموزش</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">انجمن</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">وضعیت
                                                سیستم</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">تیم
                                                پشتیبانی</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom gray-light-bg py-3">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-lg-5">
                            <p className="copyright-text pb-0 mb-0">
                                کپی رایت © 1400. همه حقوق محفوظ است <a
                                    href={ siteConfig.siteDomain }>آقای دامنه</a>
                            </p>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="payment-method text-right">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><img
                                        src="/assets/img/payment-dogecoin.svg" alt="دوج کوین" width="50"/></li>
                                    <li className="list-inline-item"><img
                                        src="/assets/img/payment-binancecoin.svg" alt="بایننس کوین" width="50"/></li>
                                    <li className="list-inline-item"><img
                                        src="/assets/img/payment-tether.svg" alt="تتر" width="50"/></li>
                                    <li className="list-inline-item"><img
                                        src="/assets/img/payment-ethereum.svg" alt="اتریوم" width="50"/>
                                    </li>
                                    <li className="list-inline-item"><img
                                        src="/assets/img/payment-bitcoin.svg" alt="بیت کوین" width="50"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
    /* eslint-enable */
};
