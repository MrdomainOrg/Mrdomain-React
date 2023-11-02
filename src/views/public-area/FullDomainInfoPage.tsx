import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUsdtPrice } from '../../redux/usdtPriceSlice';
import { formatNumberWithCommas } from '../../utils/numberUtil/PersianNumberUtil';
import { priceConfig, userDetails } from '../../constants/SiteConfigs';
import doesStringHasValue from '../../utils/stringUtil/StringUtil';
import NobitexService from '../../modules/cryptoCurrency/services/NobitexService';
import { setDomainDetails } from '../../redux/domainDetailsSlice';
import OldMrdomainPublicService from '../../modules/domainDetail/services/OldMrdomainPublicService';

const FullDomainInfoPage = (): JSX.Element => {
  const usdtPrice = useAppSelector((state) => state.usdtPrice);
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
        const dayHighAsNumber =
          dayHigh !== null && dayHigh !== undefined
            ? parseFloat(dayHigh) / 10
            : 0;
        if (dayHighAsNumber > priceConfig.usdInTomanMinimum) {
          // setUsdtPrice(dayHighAsNumber);
          dispatch(setUsdtPrice(dayHighAsNumber));
        }
        // console.log('USDT Price is : ', dayHighAsNumber);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (!usdtPrice.isSet) {
      fetchData();
    }
    // console.log('USDT Price is : ', dayHighAsNumber);
  }, []);

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
    if (!domainDetails.isSet) {
      fetchDomainDetails();
    }
    // console.log('USDT Price is : ', dayHighAsNumber);
  }, []);
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
                  <h5>
                    {formatNumberWithCommas(domainDetails.domainPriceInUSD)}{' '}
                    (تتر / دلار)
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <h5>قیمت لحظه ای به تومان :</h5>
                </div>
                <div className="col-9">
                  <h5>
                    {formatNumberWithCommas(
                      domainDetails.domainPriceInUSD * usdtPrice.price,
                    )}{' '}
                    تومان
                  </h5>
                </div>
              </div>
              {domainDetails.domainPriceInUSD ===
                priceConfig.minimumDomainPriceInUsd && (
                <div className="row">
                  <div className="col-3">
                    <h5>قیمت به دلار :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      لطفا دقت فرمایید حداقل قیمت دامنه های این شرکت از{' '}
                      {formatNumberWithCommas(
                        priceConfig.minimumDomainPriceInUsd,
                      )}{' '}
                      دلار آمریکا (USD) معادل{' '}
                      {formatNumberWithCommas(
                        priceConfig.minimumDomainPriceInUsd * usdtPrice.price,
                      )}{' '}
                      تومان به بالا می باشد لطفا تحت هیچ شرایطی برای قیمتهای
                      کمتر از تماس گرفتن جدا خود داری فرمایید
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.mobile1) && (
                <div className="row">
                  <div className="col-3">
                    <h5>موبایل ۱ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile1}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.mobile2) && (
                <div className="row">
                  <div className="col-3">
                    <h5>موبایل ۲ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile2}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.mobile3) && (
                <div className="row">
                  <div className="col-3">
                    <h5>موبایل ۳ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile3}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.mobile4) && (
                <div className="row">
                  <div className="col-3">
                    <h5>موبایل ۴ :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.mobile4}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.phone1) && (
                <div className="row">
                  <div className="col-3">
                    <h5>تلفن تماس ۱ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone1}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.phone2) && (
                <div className="row">
                  <div className="col-3">
                    <h5>تلفن تماس ۲ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone2}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.phone3) && (
                <div className="row">
                  <div className="col-3">
                    <h5>تلفن تماس ۳ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone3}</span>
                    </h5>
                  </div>
                </div>
              )}
              {doesStringHasValue(userDetails.phone4) && (
                <div className="row">
                  <div className="col-3">
                    <h5>تلفن تماس ۴ (10 خط) :</h5>
                  </div>
                  <div className="col-9">
                    <h5>
                      <span dir="ltr">{userDetails.phone4}</span>
                    </h5>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FullDomainInfoPage;
