<template>
    <div>
        <Home/>
        <About/>
        <Team/>
        <Offers/>
        <Joinus/>
        <Blog/>
        <Models/>
        <Contact/>
    </div>
</template>
<script>
    import Home from '../home/HomeInfo'
    import About from '../about/About'
    import Team from '../team/TeamInfo'
    import Offers from '../offers/Offers'
    import Joinus from '../joinus/Joinus'
    import Blog from '../blog/Blog'
    import Models from '../models/Models'
    import Contact from '../contact/Contact'

    export default {
        components: {
            Home,
            About,
            Team,
            Offers,
            Joinus,
            Blog,
            Models,
            Contact
        }
    }
</script>