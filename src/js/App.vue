<template>
    <div>
      <div v-if="!isLinkTree">
        <Navbar/>
      </div>
        <RouterView/>
    </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Main from './components/layout/Main'

export default {
    components: {Navbar, Main},

    computed: {
      isLinkTree() {
        if (this.$route.name === 'link-tree') {
          return true
        }
      }
    },

    created() {
      this.$store.dispatch('loadNewsItems')
      this.$store.commit('UPDATE_SALON', {
        id: 3,
        name: 'Base Hairdressing',
        logo: 'https://9dd4398ac4d52ba12cab-f1aee8fa44b57276f7c290953cbe1cf5.ssl.cf5.rackcdn.com/logos/base.png',
        image: '/dist/img/logos/base.png'
      })
    }
}
</script>
