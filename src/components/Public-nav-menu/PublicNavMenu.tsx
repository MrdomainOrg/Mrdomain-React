//  import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';

// import { Link, useNavigate } from 'react-router-dom';
export const PublicNavMenu = (): JSX.Element => {
    // const { t, i18n } = useTranslation()
    // let navigate = useNavigate()
    function onClick (event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();
    }
    return (
        <div id="logoAndNav" className="main-header-menu-wrap white-bg border-bottom">
            <div className="container">
                <nav className="js-mega-menu navbar navbar-expand-md header-nav">
                    <a className="navbar-brand" href="index.html"><img src="/assets/img/head-logo-mrdomain.png" width="120" alt="logo" className="img-fluid" /></a>
                    <button type="button" className="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                        <span id="hamburgerTrigger">
                            <span className="fas fa-bars"></span>
                        </span>
                    </button>
                    <div id="navBar" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto main-navbar-nav">
                            <li className="nav-item custom-nav-item" >
                                <Link to="/" className="nav-link custom-nav-link">خانه</Link>
                            </li>
                            <li className="nav-item hs-has-sub-menu custom-nav-item">
                                <a id='pagesMegaMenu' className='nav-link custom-nav-link main-link-toggle' href='#' aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu" onClick={onClick}>پرتال مشتریان</a>
                                <ul id='pagesSubMenu' className='hs-sub-menu main-sub-menu' aria-labelledby='pagesMegaMenu' style={{ minWidth: '260px' }}>
                                    <li className="nav-item submenu-item"><a
                                        className="nav-link sub-menu-nav-link" href="https://crm.mrdomain.ir/register.php">پرتال ریالی</a></li>
                                    <li className="nav-item submenu-item"><a
                                        className="nav-link sub-menu-nav-link" href="https://cryptocrm.mrdomain.ir/register.php">پرتال دلاری</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item hs-has-mega-menu custom-nav-item"
                                data-max-width="720px" data-position="right"><a
                                    id="hostingMegaMenu"
                                    className="nav-link custom-nav-link main-link-toggle"
                                    href="#" aria-haspopup="true"
                                    aria-expanded="false">اطلاعات مالی</a>
                                <div className="hs-mega-menu w-100 main-sub-menu"
                                    aria-labelledby="hostingMegaMenu">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <Link className="title-with-icon-link" to="/companyBankAccounts" >
                                                    <div className="media">
                                                        <div className="menu-item-icon">
                                                            <i className="fas fa-credit-card"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title">حسابهای بانکی و کارتها</span>
                                                            <small className="u-header__promo-text">واریز ریالی </small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <Link className="title-with-icon-link" to="/companyCryptoWallet" >
                                                    <div className="media">
                                                        <div className="menu-item-icon">
                                                            <i className="fas fa-envelope"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title">حسابهای ارز دیجیتال</span>
                                                            <small className="u-header__promo-text">واریز دلاری</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <a className="title-with-icon-link" href="https://zarinp.al/eae966" >
                                                    <div className="media">
                                                        <div className="menu-item-icon">
                                                            <i className="fas fa-credit-card"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title">واریز مستقیم</span>
                                                            <small className="u-header__promo-text">واریز مستقیم </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item hs-has-mega-menu custom-nav-item"
                                data-max-width="360px" data-position="right"><a
                                    id="supportMegaMenu"
                                    className="nav-link custom-nav-link main-link-toggle"
                                    href="JavaScript:Void(0);" aria-haspopup="true"
                                    aria-expanded="false">پشتیبانی</a>
                                <div className="hs-mega-menu main-sub-menu"
                                    aria-labelledby="supportMegaMenu" style={{ minWidth: '330px;' }}>

                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="https://crm.mrdomain.ir/register.php">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/chat.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">ارسال تیکت </span> <small
                                                        className="u-header__promo-text">پاسخ سریع تیم
                                                        پشتیبانی</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/support.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">پشتیبانی 24/7</span> <small
                                                        className="u-header__promo-text">پشتیبانی عالی</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item hs-has-mega-menu custom-nav-item"
                                data-max-width="250px" data-position="right"><a
                                    id="aboutMegaMenu"
                                    className="nav-link custom-nav-link main-link-toggle"
                                    href="JavaScript:Void(0);" aria-haspopup="true"
                                    aria-expanded="false">درباره ما</a>
                                <div className="hs-mega-menu main-sub-menu"
                                    aria-labelledby="aboutMegaMenu" style={{ minWidth: '330px;' }} >

                                    <div className="title-with-icon-item">
                                        <Link className="title-with-icon-link" to="/contactUs">تماس باما
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon"
                                                    src="/assets/img/chat-mobile.svg" alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">تماس با ما</span> <small
                                                        className="u-header__promo-text">اگه مشکلی دارید باما تماس بگیرید</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/community.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">درباره ما</span> <small
                                                        className="u-header__promo-text">ما شرکت هاستینگ پیشرو
                                                        هستیم</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon"
                                                    src="/assets/img/user-behaver.svg" alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">نظر مشتریان</span> <small
                                                        className="u-header__promo-text">بیش از 100 مشتری راضی</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/partner.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">همکاران ما</span> <small
                                                        className="u-header__promo-text">ما شرکای قابل اعتمادی
                                                        در سطح جهانی داریم</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/network.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">شبکه</span> <small
                                                        className="u-header__promo-text">داده های خود را ایمن
                                                        نگه دارید</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="menu-titile-icon" src="/assets/img/blog.svg"
                                                    alt="SVG" />
                                                <div className="media-body">
                                                    <span className="u-header__promo-title">بلاگ</span> <small
                                                        className="u-header__promo-text">آخرین اخبار شرکت</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="u-header__promo-footer pb-0">
                                        <div className="row no-gutters align-bottom">
                                            <div className="col-9">
                                                <div className="u-header__promo-footer-item">
                                                    <span className="u-header__promo-title">پیام شرکت</span>
                                                    <p className="small d-inline-flex">
                                                        تغییرات جدید... <a
                                                            href="#"
                                                            className="popup-youtube video-play-icon"><span
                                                                className="ti-control-play"></span> </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="d-flex align-bottom">
                                                    <img src="/assets/img/ceo.png" width="300" alt="ceo"
                                                        className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};
