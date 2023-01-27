import Vue from "vue"
import Router from "vue-router"
import Main from "./components/layout/Main"
import HomeInfo from "./components/home/HomeInfo"
import AboutInfo from "./components/about/AboutInfo"
import TeamInfo from "./components/team/TeamInfo"
import TeamAll from "./components/team/TeamAll"
import TeamDetail from "./components/team/TeamDetail"
import BlogInfo from "./components/blog/BlogInfo"
import BlogPost from "./components/blog/BlogPost"
import OffersInfo from "./components/offers/OffersInfo"
import GeneralOffer from "./components/offers/singleOffers/November"
import NewStarterOffer from "./components/offers/singleOffers/NewStarter"
import ApprenticeOffer from "./components/offers/singleOffers/Apprentice"
import JamieSarahOffer from "./components/offers/singleOffers/sms/JamieSarah"
import JnrStylistOffer from "./components/offers/singleOffers/JnrStylist"
import GraduateOffer from "./components/offers/singleOffers/Graduate"
import LaylaOffer from "./components/offers/singleOffers/Layla"
import JoinusInfo from "./components/joinus/JoinusInfo"
import ModelsInfo from "./components/models/ModelsInfo"
import ContactInfo from "./components/contact/ContactInfo"
import CoronaInfo from "./components/corona/CoronaInfo"
import BethProfile from "./components/team/profiles/BethProfile"
import LaurenProfile from "./components/team/profiles/LaurenProfile"
import LucyProfile from "./components/team/profiles/LucyProfile"
import RubyProfile from "./components/team/profiles/RubyProfile"
import SophieProfile from "./components/team/profiles/SophieProfile"
import Reopening from "./components/corona/Reopening"
import calcRoutes from "araquach-price-calc/router/calcRoutes"
import Quote from "./components/quote/Quote"
import LinkTree from "./components/linktree/LinkTree"
import Leaver from "./components/leaver/Leaver"
import Bookings from "./views/Bookings"
import TopSpender from "./views/TopSpender"
import GhdPromo from "./views/GhdPromo"
import OpenEvening from "./views/OpenEvening.vue"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '',
            name: 'main',
            component: Main
        },
        {
            path: '/info',
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
            path: '/teaminfo',
            name: 'team-info',
            component: TeamInfo
        },
        {
            path: '/team',
            name: 'team',
            component: TeamAll
        },
        {
            path: '/team/:slug',
            name: 'team-detail',
            component: TeamDetail,
            props: true
        },
        {
            path: '/beth-profile',
            name: 'beth-profile',
            component: BethProfile,
        },
        {
            path: '/sophie-profile',
            name: 'sophie-profile',
            component: SophieProfile,
        },
        {
            path: '/ruby-profile',
            name: 'ruby-profile',
            component: RubyProfile,
        },
        {
            path: '/lucy-profile',
            name: 'lucy-profile',
            component: LucyProfile,
        },
        {
            path: '/lauren-profile',
            name: 'lauren-profile',
            component: LaurenProfile,
        },
        {
            path: '/blog',
            name: 'blog-info',
            component: BlogInfo
        },
        {
            path: '/blog/:slug',
            name: 'blog-post',
            component: BlogPost,
            props: true
        },
        {
            path: '/offers',
            name: 'offers',
            component: OffersInfo
        },
        {
            path: '/offers/general',
            name: 'general-offer',
            component: GeneralOffer
        },
        {
            path: '/offers/new-starter',
            name: 'new-starter-offer',
            component: NewStarterOffer
        },
        {
            path: '/offers/apprentice',
            name: 'apprentice-offer',
            component: ApprenticeOffer
        },
        {
            path: '/sms/jamie-sarah',
            name: 'jamie-sarah-offer',
            component: JamieSarahOffer
        },
        {
            path: '/offers/jnr-stylist',
            name: 'jnr-stylist-offer',
            component: JnrStylistOffer
        },
        {
            path: '/offers/graduate',
            name: 'graduate-offer',
            component: GraduateOffer
        },
        {
            path: '/offers/layla',
            name: 'layla-offer',
            component: LaylaOffer
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
        },
        {
            path: '/corona',
            name: 'corona',
            component: CoronaInfo
        },
        {
            path: '/bookings',
            name: 'bookings',
            component: Bookings
        },
        // {
        //     path: '/bookings',
        //     name: 'bookings',
        //     // component: Bookings
        //     beforeEnter() {location.href = 'https://phorest.com/book/salons/basehairacademy'}
        // },
        {
            path: '/gift-voucher',
            name: 'gift-voucher',
            beforeEnter() {location.href = 'https://gift-cards.phorest.com/salons/basehairacademy'}
        },
        {
            path: '/reopening',
            name: 'reopening',
            component: Reopening
        },

        ...calcRoutes,

        {
            path: '/quote/:link',
            name: 'quote',
            component: Quote,
            props: true
        },
        {
            path: '/link-tree',
            name: 'link-tree',
            component: LinkTree
        },
        {
            path: '/your-gift',
            name: 'top-spender',
            component: TopSpender
        },
        {
            path: '/ghd',
            name: 'ghd-promo',
            component: GhdPromo
        },
        {
            path: '/open-evening',
            name: 'open-day',
            component: OpenEvening
        },
        {
            path: '/ruby-leaving',
            name: 'leaver',
            component: Leaver
        },
        {
            path: '/:notFound(.*)', redirect: '/'
        }
    ]
})

export default router