<template>
    <div>
        <Main/>
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
    import Main from '../layout/Main'
    import Home from '../home/HomeInfo'
    import About from '../about/About'
    import Team from '../team/Team'
    import Offer from '../offer/Offer'
    import Joinus from '../joinus/Joinus'
    import Blog from '../blog/Blog'
    import Model from '../model/Model'
    import Contact from "../contact/Contact";

    export default {
        components: {
            Main,
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