import Vue from "vue"
import Router from "vue-router"
import Main from "./components/layout/Main"
import HomeInfo from "./components/home/HomeInfo"
import AboutInfo from "./components/about/AboutInfo"
import TeamInfo from "./components/team/TeamInfo"
import TeamAll from "./components/team/TeamAll"
import BlogInfo from "./components/blog/BlogInfo"
import BlogPost from "./components/blog/BlogPost"
import OffersInfo from "./components/offers/OffersInfo"
import GeneralOffer from "./components/offers/singleOffers/November"
import NewStarterOffer from "./components/offers/singleOffers/NewStarter"
import ApprenticeOffer from "./components/offers/singleOffers/summer/Apprentice.vue"
import JnrStylistOffer from "./components/offers/singleOffers/summer/JuniorStylist.vue"
import GraduateOffer from "./components/offers/singleOffers/Graduate"
import LaylaOffer from "./components/offers/singleOffers/Layla"
import KatieOffer from "./components/offers/singleOffers/Katie"
import AutumnOffer from "./components/offers/singleOffers/Autumn.vue"
import Feb25 from "./components/offers/singleOffers/feb25/Feb25.vue";
import JoinusInfo from "./components/joinus/JoinusInfo"
import JoinusApplicants from "./components/joinus/admin/JoinusApplicants.vue"
import JoinusApplicant from "./components/joinus/admin/JoinusApplicant.vue"
import ModelsInfo from "./components/models/ModelsInfo"
import ContactInfo from "./components/contact/ContactInfo"
import CoronaInfo from "./components/corona/CoronaInfo"
import LaylaProfile from "./components/team/profiles/LaylaProfile.vue"
import VikkiProfile from "./components/team/profiles/VikkiProfile.vue"
import BeckyProfile from "./components/team/profiles/BeckyProfile.vue"
import DaisyProfile from "./components/team/profiles/DaisyProfile.vue";
import JamieProfile from "./components/team/profiles/archive/JamieProfile.vue";
import KatieProfile from "./components/team/profiles/KatieProfile.vue";
import LilyProfile from "./components/team/profiles/LilyProfile.vue";
import SarahProfile from "./components/team/profiles/SarahProfile.vue";
import JasmineProfile from "./components/team/profiles/JasmineProfile.vue";
import KamProfile from "./components/team/profiles/KamProfile.vue";
import Reopening from "./components/corona/Reopening"
import calcRoutes from "araquach-price-calc/router/calcRoutes"
import Quote from "./components/quote/Quote"
import LinkTree from "./components/linktree/LinkTree"
import Leaver from "./components/leaver/Leaver"
import Bookings from "./views/Bookings"
import TopSpender from "./views/TopSpender"
import GhdPromo from "./views/GhdPromo"
import OpenEvening from "./views/OpenEvening.vue"
import Feedback from "./components/feedback/Feedback.vue"
import JellyBeans from "./views/JellyBeans.vue"
import Referrals from "./views/Referrals.vue";
import OnlineStore from "./views/OnlineStore.vue";
import NewYear from "./components/offers/singleOffers/NewYear.vue";
import NewYearSMS from "./components/offers/singleOffers/sms/NewYear.vue"
import Spring from "./components/offers/singleOffers/Spring.vue"
import SpringSMS from "./components/offers/singleOffers/sms/Spring.vue"
import SarahMove from "./views/SarahMove.vue"
import KatieMove from "./views/KatieMove.vue"
import DaisyMove from "./views/DaisyMove.vue";
import BeckyMove from "./views/BeckyMove.vue";
import PriceIncrease from "./views/PriceIncrease.vue";
import Policies from "./views/Policies.vue";

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
        // {
        //     path: '/team/:slug',
        //     name: 'team-detail',
        //     component: TeamDetail,
        //     props: true
        // },
        {
            path: '/team/layla',
            name: 'layla-profile',
            component: LaylaProfile,
        },
        {
            path: '/team/vikki',
            name: 'vikki-profile',
            component: VikkiProfile,
        },
        {
            path: '/team/becky',
            name: 'becky-profile',
            component: BeckyProfile,
        },
        {
            path: '/team/daisy',
            name: 'daisy-profile',
            component: DaisyProfile,
        },
        {
            path: '/team/jamie',
            name: 'jamie-profile',
            component: JamieProfile,
        },
        {
            path: '/team/katie',
            name: 'katie-profile',
            component: KatieProfile,
        },
        {
            path: '/team/lily',
            name: 'lily-profile',
            component: LilyProfile,
        },
        {
            path: '/team/sarah',
            name: 'sarah-profile',
            component: SarahProfile,
        },
        {
            path: '/team/jasmine',
            name: 'jasmine-profile',
            component: JasmineProfile,
        },
        {
            path: '/team/kam',
            name: 'kam-profile',
            component: KamProfile,
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
            component: Feb25
        },
        {
            path: '/refer-a-friend',
            name: 'referrals',
            component: Referrals
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
            path: '/offers/apprentice-stylist',
            name: 'apprentice-offer',
            component: ApprenticeOffer
        },
        {
            path: '/offers/junior-stylist',
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
            path: '/offers/katie',
            name: 'katie-offer',
            component: KatieOffer
        },
        {
            path: '/offers/autumn',
            name: 'autumn-offer',
            component: AutumnOffer
        },
        {
            path: '/offers/newyear',
            name: 'new-year-offer',
            component: NewYear
        },
        {
            path: '/offers/spring',
            name: 'spring-offer',
            component: Spring
        },
        {
            path: '/sms/newyear',
            name: 'new-year-sms-offer',
            component: NewYearSMS
        },
        {
            path: '/sms/spring',
            name: 'spring-sms-offer',
            component: SpringSMS
        },
        {
            path: '/joinus',
            name: 'joinus',
            component: JoinusInfo
        },
        {
            path: '/applicants',
            name: 'joinus-applicants',
            component: JoinusApplicants
        },
        {
            path: '/applicant/:id',
            name: 'joinus-applicant',
            component: JoinusApplicant,
            props: true
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
            path: '/links',
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
            path: '/feedback',
            name: 'feedback',
            component: Feedback
        },
        {
            path: '/ruby-leaving',
            name: 'leaver',
            component: Leaver
        },
        {
            path: '/sarah-move',
            name: 'sarah-move',
            component: SarahMove
        },
        {
            path: '/katie-move',
            name: 'katie-move',
            component: KatieMove
        },
        {
            path: '/daisy-move',
            name: 'daisy-move',
            component: DaisyMove
        },
        {
            path: '/becky-move',
            name: 'becky-move',
            component: BeckyMove
        },
        {
            path: '/jellybeans',
            name: 'jellybeans',
            component: JellyBeans
        },
        {
            path: '/online-shop',
            name: 'online-shop',
            component: OnlineStore
        },
        {
            path: '/policies',
            name: 'policies',
            component: Policies,
        },
        {
            path: '/new-prices',
            name: 'new-prices',
            component: PriceIncrease,

        },
        {
            path: '/:notFound(.*)', redirect: '/'
        }
    ]
})

export default router