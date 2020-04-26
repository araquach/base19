<template>
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Team/>
        <Offer/>
        <Joinus/>
<!--        <Blog/>-->
        <Model/>
        <Contact/>
    </div>
</template>

<script>
    import Navbar from './components/layout/Navbar'
    import Home from './components/Home/HomeInfo'
    import About from './components/about/About'
    import Team from './components/team/Team'
    import Offer from './components/offer/Offer'
    import Joinus from './components/joinus/Joinus'
    import Blog from './components/blog/Blog'
    import Model from './components/model/Model'
    import Contact from "./components/contact/Contact";

    export default {
        components: {
            Navbar,
            Home,
            About,
            Team,
            Offer,
            Joinus,
            Blog,
            Model,
            Contact
        }
    }
</script>
