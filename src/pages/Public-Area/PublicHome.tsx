export const PublicHome = (): JSX.Element => {
    return (
        <div className='main'>
            <section className='hero-slider-section'>
                <div className='owl-carousel owl-theme hero-slider-one custom-dot dot-right-center'>
                    <div className='item'>
                        <div className='gradient-overly-right hero-equal-height ptb-100' style={{ background: 'url(/assets/assets/img/hero-bg-2.jpg)no-repeat center center / cover' }}>
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-md-9 col-lg-8">
                                        <div className='header-content text-white'>
                                            <div className='line'></div>
                                            <h1 className='text-white'>آقای دامنه، 14 سال سابقه درخشان در خدمات
                                                میزبانی و ثبت و فروش دامنه</h1>
                                            <p className='lead' id='maneli'>کیفیت.سرعت.پشتیبانی</p>
                                            <div className='domain-list-wrap mt-4'>
                                                <ul className="list-inline domain-search-list text-white">
                                                    <li className="list-inline-item"><a href="#"><img
                                                        src="/assets/img/com-w.png" alt="com" width="70"
                                                        className="img-fluid" /> <span>180,000 ت</span></a></li>
                                                    <li className="list-inline-item"><a href="#"><img
                                                        src="/assets/img/net-w.png" alt="com" width="70"
                                                        className="img-fluid" /> <span>100,000 ت</span></a></li>
                                                    <li className="list-inline-item"><a href="#"><img
                                                        src="/assets/img/org-w.png" alt="com" width="70"
                                                        className="img-fluid" /> <span>60,000 ت</span></a></li>
                                                    <li className="list-inline-item"><a href="#"><img
                                                        src="/assets/img/store-w.png" alt="com" width="70"
                                                        className="img-fluid" /> <span>27,000 ت</span></a></li>
                                                    <li className="list-inline-item"><a href="#"><img
                                                        src="/assets/img/online-w.png" alt="com" width="70"
                                                        className="img-fluid" /> <span>27,000 ت</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="promo-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-md-0 mb-lg-5">
                                <h2>آقای دامنه به موفقیت شما کمک میکند</h2>
                                <p className="lead">با استفاده از آقای دامنه به عنوان پایه وب سایت
                                    خود را سریعتر رشد دهید. فن آوری های اصول محور را به صورت پویا
                                    ساده کنید.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-4 col-lg-4">
                            <a href="#">
                                <div
                                    className="single-promo-2 single-promo-hover rounded-custom text-center white-bg p-5 h-100">
                                    <div className="circle-icon">
                                        <span className="fas fa-bezier-curve text-white"></span>
                                    </div>
                                    <h5>استفاده آسان</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <a href="#">
                                <div
                                    className="single-promo-2 single-promo-hover rounded-custom text-center white-bg p-5 h-100">
                                    <div className="circle-icon">
                                        <span className="fas fa-sync-alt text-white"></span>
                                    </div>
                                    <h5>سریع و قابل اعتماد</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <a href="#">
                                <div
                                    className="single-promo-2 single-promo-hover rounded-custom text-center white-bg p-5 h-100">
                                    <div className="circle-icon">
                                        <span className="fas fa-headset text-white"></span>
                                    </div>
                                    <h5>پشتیبانی 24 ساعته</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-services ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div
                                className="section-heading text-center mb-5 mb-sm-5 mb-md-3 mb-lg-3">
                                <h2>راه حلی مناسب برای میزبانی شما</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-shared-hosting.svg"
                                    alt="shared hosting" className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">میزبانی اشتراکی</h3>
                                    <p>محبوب ترین محصول ما! میزبانی وب اشتراکی به شما میزبانی
                                        ذخیره سازی SSD سریع می دهد.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>89,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-wordpress-hosting.svg"
                                    alt="shared hosting" className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">میزبانی وردپرس</h3>
                                    <p>با میزبانی تعمیر و نگهداری آسان با عملکرد بهینه، سریع راه
                                        اندازی و اجرا کنید.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>89,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-vps-hosting.svg" alt="shared hosting"
                                    className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">میزبانی سرور مجازی</h3>
                                    <p>سرورهای مجازی با SSD فوق سریع و انعطاف پذیری، Ubuntu،
                                        IPv6، Nginx و موارد دیگر.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>200,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-website-builder.svg"
                                    alt="shared hosting" className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">سایت ساز وردپرس</h3>
                                    <p>بدون نیاز به کد با ابزارهای طراحی که وب سایت وردپرس می
                                        سازد، سایت خود را با اطمینان بسازید.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>89,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-dadicate-hosting.svg"
                                    alt="shared hosting" className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">میزبانی اختصاصی</h3>
                                    <p>وب سرورهای سریع برای اجرای برنامه های شما با روت و 100%
                                        ضمانت میزبانی ما.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>299,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div
                                className="single-service-plane text-center rounded white-bg shadow-sm p-5 mt-md-4 mt-lg-4">
                                <img src="/assets/img/icon-cloud-hosting.svg" alt="shared hosting"
                                    className="img-fluid mb-3" width="45" />
                                <div className="service-plane-content">
                                    <h3 className="h5">میزبانی ابری</h3>
                                    <p>سرورهای رعد و برق سریع با دسترسی روت، فضای ذخیره سازی SSD
                                        و میزبانی شبکه فوق العاده سریع.</p>
                                </div>
                                <div className="action-wrap mt-3">
                                    <p>
                                        شروع از: <strong>20,000 ت/ماهیانه</strong>
                                    </p>
                                    <a href="#" className="btn-link">مشاهده جزئیات <span
                                        className="fas fa-long-arrow-alt-left"></span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="call-to-action ptb-100 gradient-overlay"
                style={{ background: 'url(/assets/img/hero-bg-4.jpg) no-repeat center center/cover' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="call-to-action-content text-white text-center">
                                <h2 className='text-white'>به کمک نیاز دارید؟</h2>
                                <p className="lead mb-0">خواه گیر کرده اید یا فقط می خواهید نکاتی
                                    در مورد اینکه از کجا شروع کنید، با کارشناسان ما تماس بگیرید.</p>
                                <p>
                                    پشتیبانی فروش: <strong> شنبه-جمعه 8صبح-4ب.ظ</strong> | پشتیبانی
                                    مشتری: همه روزه <strong> 5:30صبح-9:30شب</strong>
                                </p>
                                <div className="action-btns">
                                    <a href="#" className="btn solid-white-btn mr-3">ارتباط با ما</a> <a
                                        href="#" className="btn outline-white-btn">ارسال ایمیل</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>تعرفه ها</h2>
                                <p className="lead">هاست حرفه ای با قیمت مناسب. شایستگی های اصلی
                                    اصل محور را از طریق شایستگی های اصلی مشتری محور به طور متمایز
                                    سرمایه گذاری کنید.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-8 col-md-7">
                            <div className="text-center mb-5 radio-box-wrap billingCycle">
                                <div className="single-radio-box">
                                    <input name="billingPlan" id="monthly-plan" value="monthly"
                                        className="radio" type="radio" checked /> <label
                                            htmlFor="monthly-plan"><span className="custom-check"></span>
                                        ماهیانه</label>
                                </div>
                                <div className="single-radio-box">
                                    <input name="billingPlan" id="yearly-plan" value="yearly"
                                        className="radio" type="radio" /> <label htmlFor="yearly-plan" ><span
                                            className="custom-check"></span> سالانه</label>
                                </div>
                                <div className="single-radio-box">
                                    <input name="billingPlan" id="biannual-plan" value="biannual"
                                        className="radio" type="radio" /> <label htmlFor="biannual-plan"><span
                                            className="custom-check"></span> دوساله</label>
                                </div>
                                <div className="single-radio-box">
                                    <input name="billingPlan" id="triennial-plan" value="triennial"
                                        className="radio" type="radio" /> <label htmlFor="triennial-plan"><span
                                            className="custom-check"></span> سه ساله</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">پایه</h5>
                                    <p>سایت های شخصی با ترافیک متوسط</p>
                                </div>
                                <div className="card-header pb-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price">
                                        19,000 ت<span>/ماهیانه</span>
                                    </div>
                                    <div className="price text-center mb-0 yearly-price">
                                        69,000 ت<span>/سالانه</span>
                                    </div>
                                    <div className="price text-center mb-0 biannual-price">
                                        130,000 ت<span>/دو ساله</span>
                                    </div>
                                    <div className="price text-center mb-0 triennial-price">
                                        199,000 ت<span>/سه ساله</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>10</span> دامنه میزبانی شده</li>
                                        <li><span>25 گیگابایت</span> حافظه RAID</li>
                                        <li><span>200 گیگابایت</span> پهنای باند</li>
                                        <li><span>1</span> دامنه رایگان</li>
                                        <li>حافظه SSD <span> بسیار قوی </span></li>
                                        <li>گواهی SSL <span> رایگان </span></li>
                                        <li>آپتایم 99%</li>
                                        <li>پشتیبانی 24/7</li>
                                    </ul>
                                    <a href="#" className="btn outline-btn mb-3" target="_blank">خرید</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">
                                        حرفه ای <span className="badge color-1 color-1-bg">محبوب</span>
                                    </h5>
                                    <p>سایت های شرکتی با ترافیک بالا</p>
                                </div>
                                <div className="card-header pb-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price">
                                        49,000 ت<span>/ماهیانه</span>
                                    </div>
                                    <div className="price text-center mb-0 yearly-price">
                                        159,000 ت<span>/سالانه</span>
                                    </div>
                                    <div className="price text-center mb-0 biannual-price">
                                        299,000 ت<span>/دو ساله</span>
                                    </div>
                                    <div className="price text-center mb-0 triennial-price">
                                        429,000 ت<span>/سه ساله</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>30</span> دامنه میزبانی شده</li>
                                        <li><span>75 گیگابایت</span> حافظه RAID</li>
                                        <li><span>700 گیگابایت</span> پهنای باند</li>
                                        <li><span>3</span> دامنه رایگان</li>
                                        <li>حافظه SSD <span> بسیار قوی </span></li>
                                        <li>گواهی SSL <span> رایگان </span></li>
                                        <li>آپتایم 99%</li>
                                        <li>پشتیبانی 24/7</li>
                                    </ul>
                                    <a href="#" className="btn primary-solid-btn mb-3" target="_blank">خرید</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">اقتصادی</h5>
                                    <p>مدیریت محتوای سازمانی</p>
                                </div>
                                <div className="card-header pb-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price">
                                        69,000 ت<span>/ماهیانه</span>
                                    </div>
                                    <div className="price text-center mb-0 yearly-price">
                                        259,000 ت<span>/سالانه</span>
                                    </div>
                                    <div className="price text-center mb-0 biannual-price">
                                        49,000 ت<span>/دو ساله</span>
                                    </div>
                                    <div className="price text-center mb-0 triennial-price">
                                        739,000 ت<span>/سه ساله</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>60</span> دامنه میزبانی شده</li>
                                        <li><span>175 گیگابایت</span> حافظه RAID</li>
                                        <li><span>1500 گیگابایت</span> پهنای باند</li>
                                        <li><span>6</span> دامنه رایگان</li>
                                        <li>حافظه SSD <span> بسیار قوی </span></li>
                                        <li>گواهی SSL <span> رایگان </span></li>
                                        <li>آپتایم 99%</li>
                                        <li>پشتیبانی 24/7</li>
                                    </ul>
                                    <a href="#" className="btn outline-btn mb-3" target="_blank">خرید</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="support-cta mt-5">
                                <h5 className="mb-1 d-flex align-items-center justify-content-center">
                                    <span className="ti-loop color-primary mr-3 icon-sm"></span><a
                                        href="pricing-comparision.html">مقایسه تعرفه ها</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>ویژگی های میزبانی برای ایده های شما</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-panel icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>کنترل پنل سفارشی</h5>
                                    <p>کهنه‌کاران فناوری، حرفه‌ای‌ها، و نردها همگی در کنار شما
                                        هستند تا تجربه شما را بهینه کنند. چه با پشتیبانی ما در تماس
                                        باشید، چه پایگاه دانش ما را بخوانید یا یک موضوع را شروع کنید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-thumb-up icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>رضایت مشتریان</h5>
                                    <p>کنترل پنل بصری ما به شما امکان دسترسی مدیر به تمام
                                        محصولات را می دهد. به راحتی اطلاعات دامنه را به روز کنید،
                                        کاربران اضافه کنید، تنظیمات ایمیل را تنظیم کنید و دسترسی داشته
                                        باشید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-mouse-alt icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>نصب با 1 کلیک</h5>
                                    <p>نیازی به حفاری در مجموعه ای از اسناد نیست. به سادگی
                                        برنامه های وب مانند وردپرس، جوملا و موارد دیگر را نصب کنید.
                                        مدیر یکنواخت فرصت های اقتصادی مناسب.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-timer icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>ضمانت 99% آپتایم</h5>
                                    <p>بفضل مواقع مراكز البيانات المتعددة والتبريد الزائد
                                        ومولدات الطوارئ والمراقبة المستمرة ، يمكننا تقديم ضمان التشغيل
                                        بنسبة 100٪.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-harddrives icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>درایورهای SSD</h5>
                                    <p>با درایوهای SSD، وب‌سایت، حافظه پنهان و جستجوهای پایگاه
                                        داده شما با محاسبات ما سریع‌تر می‌شوند. به سرعت بازارهای خاص در
                                        سراسر جهان را در مقابل واسطه‌های اطلاعاتی سرتاسر سازماندهی
                                        کنید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="features-box p-4">
                                <div className="features-box-icon">
                                    <span className="ti-cup icon-md color-primary"></span>
                                </div>
                                <div className="features-box-content">
                                    <h5>برنده جایزه بهترین پشتیبانی</h5>
                                    <p>هیچ سوالی برای تیم متخصص ما خیلی ساده یا خیلی پیچیده
                                        نیست. کارکنان پشتیبانی داخلی و تیم خدمات ما به صورت 24 ساعته،
                                        365 ساعت و 7 روز در خدمت شما هستند.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="call-to-action ptb-100 gradient-overlay"
                style={{ background: 'url(/assets/img/hero-bg-4.jpg) no-repeat center center/cover' }}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-12 col-lg-8">
                            <div className="call-to-action-content text-white">
                                <h2 className='text-white'>به کمک نیاز دارید؟</h2>
                                <p>
                                    خواه گیر کرده اید یا فقط می خواهید نکاتی در مورد اینکه از کجا
                                    شروع کنید، با کارشناسان ما تماس بگیرید. <br /> پشتیبانی فروش:
                                    <strong> شنبه-جمعه 8صبح-4ب.ظ</strong> | پشتیبانی مشتری: همه روزه
                                    <strong> 5:30صبح-9:30شب</strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div
                                className="action-btns mt-md-4 text-md-right text-lg-right text-sm-left">
                                <a href="#" className="btn outline-white-btn">ارسال ایمیل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client-review-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>مشتریان در مورد ما چه می گویند؟</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul className="list-inline ratting-list mb-2">
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                </ul>
                                <div className="ratting-content">
                                    <h5>پشتیبانی عالی فنی</h5>
                                </div>
                                <div className="ratting-author mt-3">
                                    <h6>محمد شیری</h6>
                                    <small className="text-right">6 روز قبل</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul className="list-inline ratting-list mb-2">
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                </ul>
                                <div className="ratting-content">
                                    <h5>کیفیت طراحی عالی با پشتیبانی</h5>
                                </div>
                                <div className="ratting-author mt-3">
                                    <h6>لادن طباطبایی</h6>
                                    <small className="text-right">3 روز پیش</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul className="list-inline ratting-list mb-2">
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                    <li className="list-inline-item"><span className="fas fa-star"></span></li>
                                </ul>
                                <div className="ratting-content">
                                    <h5>پشتیبانی 24 ساعته</h5>
                                </div>
                                <div className="ratting-author mt-3">
                                    <h6>کوروش تهامی</h6>
                                    <small className="text-right">قبل 8 أيام</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
