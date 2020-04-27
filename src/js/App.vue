<template>
    <div>
        <Navbar/>
        <RouterView/>
    </div>
</template>

<script>
    import Navbar from './components/layout/Navbar'

    export default {
        components: {Navbar}
    }
</script>
