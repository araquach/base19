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
import GeneralOffer from "./components/offers/categories/General"
import NewStarterOffer from "./components/offers/categories/NewStarter"
import ApprenticeOffer from "./components/offers/categories/Apprentice"
import JnrStylistOffer from "./components/offers/categories/JuniorStylist"
import GraduateOffer from "./components/offers/categories/Graduate"
import JoinusInfo from "./components/joinus/JoinusInfo"
import JoinusApplicants from "./components/joinus/admin/JoinusApplicants.vue"
import JoinusApplicant from "./components/joinus/admin/JoinusApplicant.vue"
import ModelsInfo from "./components/models/ModelsInfo"
import ContactInfo from "./components/contact/ContactInfo"
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
import SarahMove from "./views/SarahMove.vue"
import KatieMove from "./views/KatieMove.vue"
import DaisyMove from "./views/DaisyMove.vue";
import BeckyMove from "./views/BeckyMove.vue";
import PriceIncrease from "./views/PriceIncrease.vue";
import Policies from "./views/Policies.vue";
import General from "./components/offers/singleOffers/General.vue";
import TeamProfile from "./components/team/TeamProfile.vue";

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
            component: TeamProfile,
            props: true
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
            path: '/offers/new-client',
            name: 'new-client-offer',
            component: General
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
            path: '/offers/juniorstylist',
            name: 'jnr-stylist-offer',
            component: JnrStylistOffer
        },
        {
            path: '/offers/graduate',
            name: 'graduate-offer',
            component: GraduateOffer
        },
        {
            path: '/offers/newyear',
            name: 'new-year-offer',
            component: NewYear
        },
        {
            path: '/refer-a-friend',
            name: 'referrals',
            component: Referrals
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