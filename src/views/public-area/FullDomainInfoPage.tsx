import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUsdtPrice } from '../../redux/usdtPriceSlice';
import { setMinPriceInUsdt } from '../../redux/minPriceInUsdtSlice';
import { formatNumberWithCommas } from '../../utils/numberUtil/PersianNumberUtil';
import {
  priceConfig,
  siteConfig,
  userDetails,
} from '../../constants/SiteConfigs';
import doesStringHasValue from '../../utils/stringUtil/StringUtil';
import NobitexService from '../../modules/cryptoCurrency/services/NobitexService';
import { setDomainDetails } from '../../redux/domainDetailsSlice';
import OldMrdomainPublicService from '../../modules/domainDetail/services/OldMrdomainPublicService';
import 'bootstrap/dist/css/bootstrap.min.css';

const FullDomainInfoPage = (): JSX.Element => {
  const usdtPrice = useAppSelector((state) => state.usdtPrice);
  const minPriceInUsd = useAppSelector((state) => state.minPriceInUsdt);
  const domainDetails = useAppSelector((state) => state.domainDetails);
  const dispatch = useAppDispatch();
  const { domainPart, tldPart } = useParams();
  const domain = `${domainPart}.${tldPart}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await NobitexService.findUsdtTiRialPrice();
        const data = response;
        const dayHigh = data?.stats['usdt-rls']?.dayHigh;
        const dayLow = data?.stats['usdt-rls']?.dayLow;
        const dayHighAsNumber =
          dayHigh !== null && dayHigh !== undefined
            ? parseFloat(dayHigh) / 10
            : 0;
        const dayLowAsNumber =
          dayLow !== null && dayLow !== undefined ? parseFloat(dayLow) / 10 : 0;
        if (dayHighAsNumber + 5000 > priceConfig.usdInTomanMinimum) {
          // setUsdtPrice(dayHighAsNumber);
          dispatch(setUsdtPrice(dayHighAsNumber + 5000));
          dispatch(
            setMinPriceInUsdt(
              Math.round(
                ((dayHighAsNumber + 5000) *
                  priceConfig.minimumDomainPriceInUsd) /
                  dayLowAsNumber,
              ),
            ),
          );
        } else {
          dispatch(
            setMinPriceInUsdt(
              Math.round(
                (priceConfig.usdInTomanMinimum *
                  priceConfig.minimumDomainPriceInUsd) /
                  dayLowAsNumber,
              ),
            ),
          );
        }
        // console.log('USDT Price is : ', dayHighAsNumber + 5000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!usdtPrice.isSet) {
      fetchData();
    }
    // console.log('USDT Price is : ', dayHighAsNumber);
  }, [usdtPrice.isSet]);

  useEffect(() => {
    const fetchDomainDetails = async () => {
      try {
        const response =
          await OldMrdomainPublicService.findOldDomainDetailsPricePromise(
            domain,
          );
        const data = response;
        const domainData = data?.data;
        dispatch(setDomainDetails(domainData));
        // custom console
        console.log('Domain Data is : ', domainData.domainName);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!domainDetails.isSet && siteConfig.fetchDomainPriceFromApi) {
      fetchDomainDetails();
    }
    // console.log('USDT Price is : ', dayHighAsNumber);
  }, [domainDetails.isSet]);
  return (
    <div className="main">
      <section className="feature-section ptb-100">
        <Container>
          <div className="col-md-12 col-lg-12">
            <div className="cta-new-wrap">
              <h2>این دامنه برای فروش می باشد</h2>
              <Row>
                <div className="col-3">
                  <h5>نام دامنه :</h5>
                </div>
                <div className="col-9">
                  <h5>{domain}</h5>
                </div>
              </Row>
              <Row>
                <div className="col-3">
                  <h5>نام فارسی :</h5>
                </div>
                <div className="col-9">
                  <h5>{domain}</h5>
                </div>
              </Row>
              {/* <div className="row" v-if="hasComment()">
                                <div className="col-3">
                                    <h5>توضیحات :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{{ domainForsaleDetails.commentInPersian }}</h5>
                                </div>
                            </div> */}
              <Row>
                <div className="col-3">
                  <h5>پسوند :</h5>
                </div>
                <div className="col-9">
                  <h5>{tldPart}</h5>
                </div>
              </Row>
              <Row>
                <div className="col-3">
                  <h5>تعداد حروف :</h5>
                </div>
                <div className="col-9">
                  <h5>{domainPart?.length}</h5>
                </div>
              </Row>
              {/* <div className="row">
                                <div className="col-3">
                                    <h5>تعداد بازدید :</h5>
                                </div>
                                <div className="col-9">
                                    <h5>{{ formatNumberWithCamma(domainForsaleDetails.visitedCount) }}</h5>
                                </div>
                            </div> */}
              <Row>
                <div className="col-3">
                  <h5>قیمت به دلار :</h5>
                </div>
                <div className="col-3">
                  <h5>
                    {domainDetails.domainPriceInUSD < minPriceInUsd.price &&
                      formatNumberWithCommas(minPriceInUsd.price)}
                    {domainDetails.domainPriceInUSD > minPriceInUsd.price &&
                      formatNumberWithCommas(
                        domainDetails.domainPriceInUSD,
                      )}{' '}
                    (تتر / دلار)
                  </h5>
                </div>
                <div className="col-3">
                  <Button variant="outlined">
                    <Link to="/payByCrypto">پرداخت با ارز دیجیتال</Link>
                  </Button>
                </div>
              </Row>
              <Row>
                <div className="col-3">
                  <h5>قیمت لحظه ای به تومان :</h5>
                </div>
                <div className="col-3">
                  <h5>
                    {domainDetails.domainPriceInUSD < minPriceInUsd.price &&
                      formatNumberWithCommas(
                        minPriceInUsd.price * usdtPrice.price,
                      )}
                    {domainDetails.domainPriceInUSD > minPriceInUsd.price &&
                      formatNumberWithCommas(
                        domainDetails.domainPriceInUSD * usdtPrice.price,
                      )}{' '}
                    تومان
                  </h5>
                </div>
                <div className="col-3">
                  <Button variant="outlined">
                    <Link to="/companyBankAccounts">پرداخت ریالی</Link>
                  </Button>
                </div>
              </Row>
              {domainDetails.domainPriceInUSD ===
                priceConfig.minimumDomainPriceInUsd && (
                <Row>
                  <div className="col-3">
                    <h5>قیمت به دلار :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      لطفا دقت فرمایید حداقل قیمت دامنه های این شرکت از{' '}
                      {formatNumberWithCommas(minPriceInUsd.price)} دلار آمریکا
                      (USD) معادل{' '}
                      {formatNumberWithCommas(
                        minPriceInUsd.price * usdtPrice.price,
                      )}{' '}
                      تومان به بالا می باشد لطفا تحت هیچ شرایطی برای قیمتهای
                      کمتر از تماس گرفتن جدا خود داری فرمایید
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.mobile1) && (
                <Row>
                  <div className="col-3">
                    <h5>موبایل ۱ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile1}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.mobile2) && (
                <Row>
                  <div className="col-3">
                    <h5>موبایل ۲ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile2}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.mobile3) && (
                <Row>
                  <div className="col-3">
                    <h5>موبایل ۳ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile3}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.mobile4) && (
                <Row>
                  <div className="col-3">
                    <h5>موبایل ۴ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile4}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.phone1) && (
                <Row>
                  <div className="col-3">
                    <h5>تلفن تماس ۱ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone1}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.phone2) && (
                <Row>
                  <div className="col-3">
                    <h5>تلفن تماس ۲ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone2}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.phone3) && (
                <Row>
                  <div className="col-3">
                    <h5>تلفن تماس ۳ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone3}</span>
                    </h5>
                  </div>
                </Row>
              )}
              {doesStringHasValue(userDetails.phone4) && (
                <Row>
                  <div className="col-3">
                    <h5>تلفن تماس ۴ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone4}</span>
                    </h5>
                  </div>
                </Row>
              )}
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                لطفا دقت فرمایید برای خرید دامنه و یا اطلاع از قیمت آن فقط تماس
                تلفنی بگیرید و از ارسال ایمیل و یا پیام در کلیه شبکه های اجتماعی
                خودداری فرمایید
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                لطفا دقت فرمایید اگر در مورد دامنه های خاص نیاز بگرفتن مجوز
                داشته باشد کلیه امور مربوط به آن به عهده خریدار بوده و فروشنده
                هیچگونه مسئولیتی در قبال آن ندارد و بازگشت وجه هم امکان پذیر نمی
                باشد.
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                شیوه خرید دامنه های این شرکت فقط بدین صورت است اول وارد بخش حساب
                های بانکی و کارتها شوید و هزینه دامنه را پرداخت نمایید و سپس با
                تماس با بخش فنی نسبت به بانکی که واریز را انجام دادید و شماره
                پیگیری اقدام نمایید.
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                بعد از احراز واریزی شما کد انتقال دامنه برای شما ارسال می گردد
                آنرا وارد کرده و بخش فنی انتقال را تایید می کند
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                فروش دامنه در هیچ کجای جهان بصورت قرارداد و یا حضوری انجام نمی
                گیرد و ما هم از انجام آن معذوریم حتی برای شرکتهای بزرگ و
                ارگانهای دولتی
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                در سیستم ایرنیک که ماخذ دامنه ملی هست انتقال کامل مالکیت دامنه
                به نام شما انجام می گیرد و شما از آن به بعد مالک جدید دامنه
                خواهید بود
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                پروسه تحویل کد انتقال بعد از واریز مبلق در لحظه تحویل مشتری می شود و پروسه انتقال دامنه و تغییر مالکیت در لحضه و برخط انجام می شود.
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                این شرکت هیچ گونه فروشی خارج از روال ذکر شده در بالا انجام نمی
                دهد
              </h5>
              <h5>
                <span className="ti-control-backward mr-2 color-primary" />
                تا حد امکان از واریز پایا و ساتنا خودداری کرده و بصورت مستقیم به
                همان بانکی که حساب دارید مبلغ دامنه را بصورت حساب به حساب واریز
                نمایید
              </h5>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default FullDomainInfoPage;
