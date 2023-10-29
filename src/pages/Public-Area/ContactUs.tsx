import { siteConfig } from '../../constants/SiteConfigs';

export const ContactUs = (): JSX.Element => {
    return (
        <div className="main">

            <section className="page-header-section ptb-100 gradient-overly-right"
                style={{ background: 'url(/assets/img/hero-14.jpg)no-repeat center center / cover' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="page-header-content text-white">
                                <h1 className="text-white mb-2">تماس با ما</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us-promo pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-mobile icon-sm color-primary"></span>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">تلفن</h5>
                                        <p className="text-muted mb-0"><span dir='ltr'>{siteConfig.companyPhone}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-location-pin icon-sm color-primary"></span>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">آدرس</h5>
                                        <p className="text-muted mb-0">{siteConfig.companyAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-email icon-sm color-primary"></span>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">ایمیل</h5>
                                        <p className="text-muted mb-0">{siteConfig.siteEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-headphone-alt icon-sm color-primary"></span>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">گفتگوی زنده</h5>
                                        <p className="text-muted mb-0">ارتباط با ما 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us-section ptb-100">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12 px-5 pb-3 message-box d-none">
                            <div className="alert alert-danger"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="contact-us-content">
                                <h2>به دنبال یک ایده تجاری عالی هستید؟</h2>
                                <p className="lead">ارائه یکپارچه خدمات الکترونیکی همه گیر و ابتکارات نسل بعدی.</p>

                                <a href="#" className="btn outline-btn align-items-center">دریافت <span className="ti-arrow-left pl-2"></span></a>

                                <hr className="my-5" />

                                <h5>دفتر مرکزی ما</h5>
                                <address>
                                    {siteConfig.companyAddress}
                                </address>
                                <br />
                                <span>تلفن: <span dir='ltr'>{siteConfig.companyPhone}</span></span> <br />
                                    <span>ایمیل <a href="mailto:info@mrdomain.ir" className="link-color">{siteConfig.siteEmail}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
