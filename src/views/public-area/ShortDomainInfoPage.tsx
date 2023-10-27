import { Link, useParams } from "react-router-dom";
import { DomainType, parseDomain } from '../../utils/domainUtil';
import { siteConfig, priceConfig, userDetails } from "../../constants/SiteConfigs";
import { convertToPersianNumber, formatNumberWithCommas, formatPersianStringNumberWithCommas, formatStringNumberWithCommas } from '../../utils/numberUtil/PersianNumberUtil';
export const ShortDomainInfoPage = () => {
    const { domain } = useParams()
    var domainLink = '';
    if (domain) {
        const parsedDomain = parseDomain(domain);
        domainLink = `/showdomaindetail/-/mrdomainRoute/domainInfo/${parsedDomain.tldPrt}/${parsedDomain.domainPart}`;

        console.log('parsedDomain is : ',parsedDomain);
        console.log('domainLink is : ',domainLink);
    }
    const minDomainPriceInUsdInPersian = formatNumberWithCommas(priceConfig.minimumDomainPriceInUsd);
    return (
        <div className="main">
            <section className="feature-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-12">
                            <div className="cta-new-wrap">
                                <h2>{domain}</h2>
                                <h2>این دامنه برای فروش می باشد</h2>
                                <p className="lead">
                                    لطفا دقت فرمایید حداقل قیمت دامنه های این شرکت از {minDomainPriceInUsdInPersian} دلار آمریکا
                                    (USD) به بالا می باشد لطفا تحت هیچ شرایطی برای قیمتهای کمتر از تماس گرفتن جدا خود داری فرمایید.</p>
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><span className="ti-control-backward mr-2 color-primary"></span>مبنای قیمت دلار قیمت ارز
                                        دیجیتال تتر (USDT) می باشد
                                    </li>
                                    <li className="py-1"><span className="ti-control-backward mr-2 color-primary"></span>لطفا دقت فرمایید اگر در
                                        مورد دامنه های خاص نیاز بگرفتن مجوز داشته باشد کلیه امور مربوط به آن به عهده خریدار بوده و فروشنده
                                        هیچگونه مسئولیتی در قبال آن ندارد و بازگشت وجه هم امکان پذیر نمی باشد.
                                    </li>
                                    <li className="py-1"><span className="ti-control-backward mr-2 color-primary"></span>به دلیل شیوع شدید و سریع
                                        امیکرون در حال حاضر امکان خرید حضوری وجود ندارد
                                    </li>
                                    <li className="py-1"><span className="ti-control-backward mr-2 color-primary"></span>انتقال دامنه فقط بعد از
                                        تسویه کامل مبلغ دامنه انجام می پذیرد..
                                    </li>
                                </ul>
                                <p className="lead">لطفا دقت فرمایید برای خرید دامنه و یا اطلاع از قیمت آن فقط تماس تلفنی بگیرید و از ارسال
                                    ایمیل و یا پیام در کلیه شبکه های اجتماعی خودداری فرمایید</p>
                                <div className="action-btns mt-5">
                                    <Link className="btn primary-solid-btn animated-btn mr-lg-3" to={domainLink}>مشاهده قیمت
                                        دامنه
                                    </Link>&nbsp;&nbsp;
                                    <Link className="btn primary-solid-btn animated-btn mr-lg-3" to={domainLink}>اطلاعات بیشتر
                                        دامنه
                                    </Link>
                                    <Link className="btn primary-solid-btn animated-btn mr-lg-3" to={domainLink}>اطلاعات تماس
                                    </Link>
                                    <Link className="btn primary-solid-btn animated-btn mr-lg-3" to={domainLink}>خرید دامنه
                                    </Link>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
        </div >
    )
}