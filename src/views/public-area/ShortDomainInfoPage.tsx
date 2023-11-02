import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { parseDomain } from '../../utils/domainUtil';
import { priceConfig } from '../../constants/SiteConfigs';
import { formatNumberWithCommas } from '../../utils/numberUtil/PersianNumberUtil';
import NobitexService from '../../modules/cryptoCurrency/services/NobitexService';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUsdtPrice } from '../../redux/usdtPriceSlice';
import { setDomainDetails } from '../../redux/domainDetailsSlice';
import OldMrdomainPublicService from '../../modules/domainDetail/services/OldMrdomainPublicService';

const ShortDomainInfoPage = (): JSX.Element => {
  const { domain } = useParams();
  let domainLink = '';
  const parsedDomain = parseDomain(domain ?? '');
  domainLink = `/showdomaindetail/-/mrdomainRoute/domainInfo/${parsedDomain.tldPrt}/${parsedDomain.domainPart}`;
  const minDomainPriceInUsdInPersian = formatNumberWithCommas(
    priceConfig.minimumDomainPriceInUsd,
  );
  const usdtPrice = useAppSelector((state) => state.usdtPrice);
  const domainDetails = useAppSelector((state) => state.domainDetails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchUsdtPriceData = async () => {
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
    if (!usdtPrice.isSet) {
      fetchUsdtPriceData();
    }
    if (!domainDetails.isSet) {
      fetchDomainDetails();
    }
    // console.log('USDT Price is : ', dayHighAsNumber);
  }, []);
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
                  لطفا دقت فرمایید حداقل قیمت دامنه های این شرکت از{' '}
                  {minDomainPriceInUsdInPersian} دلار آمریکا (USD) به بالا می
                  باشد لطفا تحت هیچ شرایطی برای قیمتهای کمتر از تماس گرفتن جدا
                  خود داری فرمایید.
                </p>
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-control-backward mr-2 color-primary" />
                    مبنای قیمت دلار قیمت ارز دیجیتال تتر (USDT) می باشد
                  </li>
                  <li className="py-1">
                    <span className="ti-control-backward mr-2 color-primary" />
                    لطفا دقت فرمایید اگر در مورد دامنه های خاص نیاز بگرفتن مجوز
                    داشته باشد کلیه امور مربوط به آن به عهده خریدار بوده و
                    فروشنده هیچگونه مسئولیتی در قبال آن ندارد و بازگشت وجه هم
                    امکان پذیر نمی باشد.
                  </li>
                  <li className="py-1">
                    <span className="ti-control-backward mr-2 color-primary" />
                    به دلیل شیوع شدید و سریع امیکرون در حال حاضر امکان خرید
                    حضوری وجود ندارد
                  </li>
                  <li className="py-1">
                    <span className="ti-control-backward mr-2 color-primary" />
                    انتقال دامنه فقط بعد از تسویه کامل مبلغ دامنه انجام می
                    پذیرد..
                  </li>
                </ul>
                <p className="lead">
                  لطفا دقت فرمایید برای خرید دامنه و یا اطلاع از قیمت آن فقط
                  تماس تلفنی بگیرید و از ارسال ایمیل و یا پیام در کلیه شبکه های
                  اجتماعی خودداری فرمایید
                </p>
                <div className="action-btns mt-5">
                  <Link
                    className="btn primary-solid-btn animated-btn mr-lg-3"
                    to={domainLink}
                  >
                    مشاهده قیمت دامنه
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    className="btn primary-solid-btn animated-btn mr-lg-3"
                    to={domainLink}
                  >
                    اطلاعات بیشتر دامنه
                  </Link>
                  <Link
                    className="btn primary-solid-btn animated-btn mr-lg-3"
                    to={domainLink}
                  >
                    اطلاعات تماس
                  </Link>
                  <Link
                    className="btn primary-solid-btn animated-btn mr-lg-3"
                    to={domainLink}
                  >
                    خرید دامنه
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortDomainInfoPage;
