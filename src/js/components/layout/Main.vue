<template>
    <div>
        <Home id="home"/>
        <About id="about"/>
        <Team id="team"/>
        <Blog id="blog"/>
        <Offers id="offers"/>
        <Joinus id="joinus"/>
        <Models id="models"/>
        <Contact id="contact"/>
    </div>
</template>
<script>
    import Home from '../home/HomeInfo'
    import About from '../about/About'
    import Team from '../team/TeamInfo'
    import Blog from '../blog/Blog'
    import Offers from '../offers/Offers'
    import Joinus from '../joinus/Joinus'
    import Models from '../models/Models'
    import Contact from '../contact/Contact'

    export default {
        components: {
            Home,
            About,
            Team,
            Blog,
            Offers,
            Joinus,
            Models,
            Contact
        }
    }
</script>