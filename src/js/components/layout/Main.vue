<template>
    <div>
        <Home id="home"/>
        <About id="about"/>
        <Corona id="corona"/>
        <Team id="team"/>
        <Blog id="blog"/>
<!--        <Offers id="offers"/>-->
        <Joinus id="joinus"/>
        <Models id="models"/>
        <Contact id="contact"/>
    </div>
</template>
<script>
    import Home from '../home/HomeInfo'
    import About from '../about/About'
    import Corona from '../corona/Corona'
    import Team from '../team/TeamInfo'
    import Blog from '../blog/Blog'
    import Joinus from '../joinus/Joinus'
    import Models from '../models/Models'
    import Contact from '../contact/Contact'
    // import Offers from '../offers/Offers'

    export default {
        components: {
            Home,
            About,
            Corona,
            Team,
            Blog,
            Joinus,
            Models,
            Contact,
          // Offers,
        }
    }
</script>