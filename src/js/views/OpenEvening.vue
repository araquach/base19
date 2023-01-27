<template>
  <section class="section openEvening hero is-fullheight is-dark">
    <div class="columns">
      <div class="column is-8">
        <p class="is-size-5">You're invited to our</p>
        <img src="dist/img/base_logo.svg" alt="Base Hairdressing" width="300">
        <br><br>
        <h1 class="title is-3">APPRENTICESHIP OPEN EVENING</h1>
        <p class="is-size-5">WEDNESDAY 15TH FEBRUARY 4:30PM - 8:00PM</p>
        <p class="is-size-4 has-text-warning">ARE YOU SOCIAL, LOVE CHANGING UP YOUR HAIR AND KEEPING UP WITH THE LATEST
          TRENDS?</p>
        <p class="is-size-5">If so, then you could be the next big thing in hairdressing and an Apprenticeship at the
          Base Hairdressing Training Academy could be for you!!!</p>
        <h2 class="title is-4">WE ARE HIRING</h2>
        <p class="is-size-5">Base Hairdressing is a sister salon to two top rated Warrington hair
          salons, <strong>Jakata</strong> and <strong>Paul Kemp Hairdressing</strong>. In partnership with Paragon
          Skills we train up the next generation
          of hairdressers to the highest possible standard, in an environment with a focus on you!!</p>
        <br>
        <figure class="image">
          <img src="/dist/img/openEvening/DSC_3794.jpg" alt="GHD Christmas Gift Pack">
        </figure>
        <br>
        <p class="is-size-4">Join us at our Training Academy for a fun evening of hair demos, goodie bags and the chance
          to speak with industry leading educators about what its like to do what you love everyday!</p>

        <hr>

        <h2 class="title is-4">Register your interest here</h2>
        <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
          <div class="field">
            <label class="label has-text-white">Full Name</label>
            <div class="control">
              <input class="input" :class="{ 'is-danger': $v.name.$error }" v-model.trim="$v.name.$model"
                     placeholder="Your Full Name">
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
              <p>Full Name is required</p>
            </div>
          </div>
          <div class="field">
            <label class="label has-text-white">Mobile Number</label>
            <div class="control">
              <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model"
                     placeholder="Your Mobile Number">
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                Mobile number is required
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.numeric">
                <p>Valid Mobile number is required</p>
              </div>
            </div>
          </div>
          <br>
          <div class="field">
            <div class="control">
              <button class="button is-primary" type="submit" :disabled="loading">Submit</button>
            </div>
            <br>
            <hr>
            <div class="columns is-mobile">
              <div class="column">
                <img src="/dist/img/openEvening/cg.png" alt="City & Guilds">
              </div>
              <div class="column">
                <img src="/dist/img/openEvening/ofsted.png" alt="Ofsted">
              </div>
              <div class="column">
                <img src="/dist/img/openEvening/gov.png" alt="City & Guilds">
              </div>
              <div class="column">
                <img src="/dist/img/openEvening/apprentice.png" alt="">
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import {email, numeric, required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      showInfo: false,
      name: '',
      mobile: '',
      submitStatus: null,
      loading: false
    }
  },

  validations: {
    name: {required},
    mobile: {required, numeric},
  },

  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.loading = true
        axios.post('/api/open-evening', {
          name: this.name,
          mobile: this.mobile
        })
            .then(response => {
              this.submitStatus = 'OK'
            })
            .catch((e) => {
              console.error(e)
            })
      }
    }
  }
}
</script>