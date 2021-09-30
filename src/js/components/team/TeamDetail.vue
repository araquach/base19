<template>
  <div id="team-member" class="section columns has-background-black">
    <div class="section column">
      <figure class="image is-4by5">
        <img :alt="teamMember.first_name" :src="staffMontage">
      </figure>
    </div>
    <div class="section column">
      <div class="has-text-white">
        <h1 class="title has-text-white">{{ teamMember.first_name }} {{ teamMember.last_name }}</h1>
        <h2 class="subtitle has-text-white">{{ teamMember.level_name }}</h2>
        <p class="is-size-5 has-text-weight-bold">{{ teamMember.para_1 }}</p>
        <p>{{ teamMember.para_2 }}</p>
        <p>{{ teamMember.para_3 }}</p>
        <p class="is-size-5">Average Price: &pound;{{ teamMember.price }}</p>
      </div>
      <ReviewFeed :staffMember="staffMember"/>
      <br>

      <div v-if="teamMember.slug !== 'eve' && teamMember.slug !== 'becca' && teamMember.slug !== 'sarah' && teamMember.slug !== 'jamie'">
        <router-link :to="{ name : teamMember.slug + '-profile' }" class="is-size-5 has-text-warning">Find out more
          about {{ teamMember.first_name }} here >
        </router-link>
      </div>
      <br>
      <br>
      <router-link class="button" :to="{ name : 'stylist-prices', params: { stylist: teamMember.slug } }">Get a quote with {{ teamMember.first_name }}</router-link>
      <br><br>
      <router-link class="button" :to="{ name: 'team', hash: '#' + teamMember.slug }">Back to the full team</router-link>
    </div>
  </div>
</template>

<script>
import ReviewFeed from '../reviewFeed/ReviewFeed'

export default {
  components: {ReviewFeed},

  data() {
    return {
      teamMember: {}
    }
  },

  mounted() {
    axios.get(`/api/team/${this.$route.params.slug}`).then(response => this.teamMember = response.data)
        .catch(error => {
          console.log(error)
        })
  },

  computed: {
    staffMontage() {
      return `/dist/img/team/${this.$route.params.slug}_montage.jpg`
    },

    staffMember() {
      return this.teamMember.first_name + " " + this.teamMember.last_name
    }
  }

}
</script>
