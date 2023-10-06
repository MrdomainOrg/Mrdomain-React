import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
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
import { PublicPageLoader } from '../../components/PublicPageLoader/PublicPageLoader'
import { PublicNavMenu } from "../../components/Public-nav-menu/PublicNavMenu"
import { PublicHome as Home} from "../../pages/Public-Area/PublicHome"

const publicAreaPath = process.env.PUBLIC_URL
const PublicArea = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <PublicNavMenu />
     
        </Router>
        </>
    );
}

export default PublicArea;