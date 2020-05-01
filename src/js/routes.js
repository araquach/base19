import Main from "./components/layout/Main"
import HomeInfo from "./components/home/HomeInfo"
import AboutInfo from "./components/about/AboutInfo"
import TeamAll from "./components/team/TeamAll"
import OffersInfo from "./components/offers/OffersInfo"
import JoinusInfo from "./components/joinus/JoinusInfo"
import ModelsInfo from "./components/models/ModelsInfo"
import ContactInfo from "./components/contact/ContactInfo"
import TeamMember from "./components/team/TeamMember"

export const routes = [
    {
        path: '',
        name: 'main',
        component: Main
    },
    {
        path: '/home',
        name: 'home',
        component: HomeInfo
    },
    {
        path: '/about',
        name: 'about',
        component: AboutInfo
    },
    {
        path: '/team',
        name: 'team',
        component: TeamAll
    },
    {
        path: '/team/:tm',
        name: 'teamMember',
        component: TeamMember
    },
    {
        path: '/offers',
        name: 'offers',
        component: OffersInfo
    },
    {
        path: '/joinus',
        name: 'joinus',
        component: JoinusInfo
    },
    {
        path: '/models',
        name: 'models',
        component: ModelsInfo
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactInfo
    }
]
