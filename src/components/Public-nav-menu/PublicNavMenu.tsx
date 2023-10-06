import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
export const PublicNavMenu = () => {
    const { t, i18n } = useTranslation()
    let navigate = useNavigate()
    function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
    }
    return (
        <div id="logoAndNav" className="main-header-menu-wrap white-bg border-bottom">
            <div className="container">
                <nav className="js-mega-menu navbar navbar-expand-md header-nav">
                    <a className="navbar-brand" href="index.html"><img src="assets/img/logo-color.png" width="120" alt="logo" className="img-fluid" /></a>
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
                                <a id="pagesMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu" onClick={onClick}>پرتال مشتریان</a>
                                <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style={{ "minWidth": "260px" }}>
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
                                    href="JavaScript:Void(0);" aria-haspopup="true"
                                    aria-expanded="false">اطلاعات مالی</a>
                                <div className="hs-mega-menu w-100 main-sub-menu"
                                    aria-labelledby="hostingMegaMenu">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <router-link className="title-with-icon-link" to="/companyBankAccounts" >
                                                    <div className="media">
                                                        <div className="menu-item-icon">
                                                            <i className="fas fa-credit-card"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title">حسابهای بانکی و کارتها</span>
                                                            <small className="u-header__promo-text">واریز ریالی </small>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <router-link className="title-with-icon-link" to="/companyCryptoWallet" >
                                                    <div className="media">
                                                        <div className="menu-item-icon">
                                                            <i className="fas fa-envelope"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title">حسابهای ارز دیجیتال</span>
                                                            <small className="u-header__promo-text">واریز دلاری</small>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="title-with-icon-item">
                                                <a className="title-with-icon-link" href="https://zarinp.al/mrdomain" >
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
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}