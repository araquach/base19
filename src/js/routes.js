import Main from "./components/layout/Main"
import HomeInfo from "./components/home/HomeInfo"
import AboutInfo from "./components/about/AboutInfo"
import TeamAll from "./components/team/TeamAll"
import OffersInfo from "./components/offers/OffersInfo"
import JoinusInfo from "./components/joinus/JoinusInfo"
import ModelsInfo from "./components/models/ModelsInfo"
import ContactInfo from "./components/contact/ContactInfo"

export const routes = [
    { path: '', component: Main },
    { path: '/home', component: HomeInfo },
    { path: '/about', component: AboutInfo },
    { path: '/team', component: TeamAll },
    { path: '/offers', component: OffersInfo },
    { path: '/joinus', component: JoinusInfo },
    { path: '/models', component: ModelsInfo },
    { path: '/contact', component: ContactInfo }
]
