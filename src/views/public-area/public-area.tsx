import './fonts.css'
import './bootstrap.css'
import './fontawesome.css'
import './themify-icons.css'
import './magnific.css'
import './animate.css'
import './jq-slider.css'
import './jq-megamenu.css'
import './owlcarousel.css'
import './main-rtl.css'
import './custom.css'

const publicAreaPath = process.env.PUBLIC_URL
const publicArea = () => {
    return (
        <>
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/jquery-3.5.1.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/popper.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/rtl.bootstrap.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/bootstrap-slider.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/jquery.countdown.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/jquery.easing.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/owl.carousel.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/validator.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/jquery.waypoints.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/jquery.rcounterup.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/magnific-popup.min.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/vendors/hs.megamenu.js`} />
            <script src={`${publicAreaPath}/Hostlar/assets/js/app.js`} />
        </>
    );
}

export default publicArea;