<template>
  <div class="column is-6">
    <div class="box">
      <p>Enter Pin</p>
      <input type="text" v-model="pin" class="input" placeholder="Enter Pin">
      <br><br>
      <button @click="setUserPin" class="button is-primary">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pin: "",
    }
  },

  methods: {
    setUserPin() {
      this.$store.commit('SET_USER_PIN', this.pin)
    },
  }
}
</script>