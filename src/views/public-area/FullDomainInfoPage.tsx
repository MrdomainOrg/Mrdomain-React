import { useParams } from 'react-router-dom';
import { formatNumberWithCommas } from '../../utils/numberUtil/PersianNumberUtil';
import { priceConfig, userDetails } from '../../constants/SiteConfigs';
export const FullDomainInfoPage = (): JSX.Element => {
    const { domainPart, tldPart } = useParams();
    const domain = domainPart + '.' + tldPart;
    return (
        <div className="main">
            <section className="feature-section ptb-100">
                <div className="container">
                    <div className="col-md-12 col-lg-12">
                        <div className="cta-new-wrap">
                            <h2>این دامنه برای فروش می باشد</h2>
                            <div className="row">
                                <div className="col-3">
                                    <h5>نام دامنه :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{domain}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>نام فارسی :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{domain}</h5>
                                </div>
                            </div>
                            {/* <div className="row" v-if="hasComment()">
                                <div className="col-3">
                                    <h5>توضیحات :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{{ domainForsaleDetails.commentInPersian }}</h5>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-3">
                                    <h5>پسوند :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{tldPart}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>تعداد حروف :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{domainPart?.length}</h5>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-3">
                                    <h5>تعداد بازدید :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{{ formatNumberWithCamma(domainForsaleDetails.visitedCount) }}</h5>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-3">
                                    <h5>قیمت به دلار :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{formatNumberWithCommas(priceConfig.minimumDomainPriceInUsd)} (تتر / دلار)</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>قیمت لحظه ای به تومان :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{formatNumberWithCommas(priceConfig.minimumDomainPriceInUsd * priceConfig.usdInTomanMinimum)} تومان</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>قیمت به دلار :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>لطفا دقت فرمایید حداقل قیمت دامنه های این شرکت از {formatNumberWithCommas(priceConfig.minimumDomainPriceInUsd)} دلار
                                        آمریکا (USD) معادل {formatNumberWithCommas(priceConfig.minimumDomainPriceInUsd * priceConfig.usdInTomanMinimum)} تومان به بالا می باشد لطفا تحت هیچ شرایطی برای قیمتهای کمتر از تماس گرفتن جدا خود داری
                                        فرمایید</h5>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-3">
                                    <h5>تلفن تماس ۱ (10 خط) :</h5>
                                </div>
                                <div className="col-9">
                                    <h5><span dir="ltr">{userDetails.phone1}</span></h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>تلفن تماس ۲ (10 خط) :</h5>
                                </div>
                                <div className="col-9">
                                    <h5><span dir="ltr">{userDetails.phone2}</span></h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>موبایل ۱ :</h5>
                                </div>
                                <div className="col-9">
                                    <h5><span dir="ltr">{userDetails.mobile1}</span></h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h5>موبایل ۲ :</h5>
                                </div>
                                <div className="col-9">
                                    <h5><span dir="ltr">{userDetails.mobile2}</span></h5>
                                </div>
                            </div>
                            <h5><span className="ti-control-backward mr-2 color-primary"></span>لطفا دقت فرمایید برای خرید دامنه و یا اطلاع
                                از قیمت آن فقط تماس تلفنی بگیرید و از ارسال ایمیل و یا پیام در کلیه شبکه های اجتماعی خودداری فرمایید</h5>
                            <h5><span className="ti-control-backward mr-2 color-primary"></span>لطفا دقت فرمایید اگر در مورد دامنه های خاص
                                نیاز بگرفتن مجوز داشته باشد کلیه امور مربوط به آن به عهده خریدار بوده و فروشنده هیچگونه مسئولیتی در قبال
                                آن ندارد و بازگشت وجه هم امکان پذیر نمی باشد.</h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
