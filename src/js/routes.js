import Main from "./components/layout/Main"
import HomeInfo from "./components/home/HomeInfo"
import AboutInfo from "./components/about/AboutInfo"
import TeamInfo from "./components/team/TeamInfo"
import OfferInfo from "./components/offer/OfferInfo"
import JoinusInfo from "./components/joinus/JoinusInfo"
import ModelInfo from "./components/model/ModelInfo"
import ContactInfo from "./components/contact/ContactInfo"

export const routes = [
    { path: '', component: Main },
    { path: '/home', component: HomeInfo },
    { path: '/about', component: AboutInfo },
    { path: '/team', component: TeamInfo },
    { path: '/offer', component: OfferInfo },
    { path: '/joinus', component: JoinusInfo },
    { path: '/model', component: ModelInfo },
    { path: '/contact', component: ContactInfo }
]
