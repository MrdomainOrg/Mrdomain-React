import { useTranslation } from 'react-i18next';
import { PublicNavMenu } from '../Public-nav-menu/PublicNavMenu';
export const PublicHeader = () => {
    const { t, i18n } = useTranslation();
    return (
        <header id="header" className="header-main">
            <div id="header-top-bar" className="gray-light-bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-7 col-lg-7">
                            <div className="topbar-text d-none d-md-block d-lg-block">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="tell:888-1234567"><span className="fas fa-phone mr-2"></span> ساپورت ۲۴ ساعته</a>
                                    </li>
                                    <li className="list-inline-item"><a href="#"><span className="fas fa-comments mr-2"></span> گفتگوی زنده </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="topbar-text">
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item"><a href="#"><span className="fas fa-user mr-2"></span> ورود</a></li>
                                    <li className="list-inline-item"><a href="#"><span className="fas fa-lock mr-2"></span> ثبت نام</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PublicNavMenu />
        </header>
    )
}