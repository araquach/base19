<template>
  <section class="section bookings-info hero is-fullheight is-dark">
    <div class="columns">
      <div class="section column is-6">
        <h1 class="title">Register for Your Appointment</h1>
        <p class="is-size-5">Our phone lines and online bookings are closed throughout the lockdown. Our usual systems will be switched back on when we re-open.</p>
        <p>If you want to book an appointment please register here and your stylist will contact you shortly before we re-open to get you booked in.</p>
        <p class="is-size-4"><strong>See you soon!</strong></p>
        <div>
          <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
            <div class="field">
              <label class="label has-text-white">First Name</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.first_name.$error }" v-model.trim="$v.first_name.$model" placeholder="Your First Name">
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.first_name.required">
                <p>Your first name is required</p>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Last Name</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.last_name.$error }" v-model.trim="$v.last_name.$model" placeholder="Your Last Name">
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.last_name.required">
                <p>Your last name is required</p>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Mobile Number</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model" placeholder="Your Mobile Number">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                  Mobile number is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.numeric">
                  <p>Valid Mobile number is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Preferred Stylist</label>
              <div class="control">
                <div class="select" :class="{ 'is-danger': $v.stylist.$error }">
                  <select  v-model.trim="$v.stylist.$model">
                    <option value="default">Please select</option>
                    <option value="Adam">Adam</option>
                    <option value="Jimmy">Jimmy</option>
                    <option value="Lucy">Lucy</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Sophie">Sophie</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Beth">Beth</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.stylist.required">
              Preferred stylist is required
            </div>
            <div class="field">
              <label class="label has-text-white">Preferred Time Slot</label>
              <div class="control">
                <div class="select" :class="{ 'is-danger': $v.time_slot.$error }">
                  <select  v-model.trim="$v.time_slot.$model">
                    <option value="default">Please select</option>
                    <option value="Any Time">Any Time</option>
                    <option value="Weekend">Only Weekends</option>
                    <option value="Evenings">Only Evenings</option>
                    <option value="Weekend/Evenings">Weekend or Evenings</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.time_slot.required">
              Preferred time slot is required
            </div>
            <br>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Send</button>
              </div>
            </div>
          </form>
          <div v-if="submitStatus === 'OK' && error">
            <p class="is-size-4 has-text-warning">{{ error }}</p>
          </div>
          <div v-if="submitStatus === 'OK' && !error">
            <p class="is-size-4 has-text-primary">Thanks for registering! Your stylist will be in touch just before we reopen. Please only register once. See you soon</p>
          </div>
        </div>
      </div>
    </div>
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <a @click="$router.go(-1)" class="button">back</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {required, numeric} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      showInfo: false,
      first_name: '',
      last_name: '',
      mobile: '',
      stylist: '',
      time_slot: '',
      salon: 3,
      submitStatus: null,
      error: null
    }
  },

  validations: {
    first_name: { required },
    last_name: { required },
    mobile: { required, numeric },
    stylist: { required },
    time_slot: { required }
  },

  methods:{
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        axios.post('/api/booking-request', {
          first_name: this.first_name,
          last_name: this.last_name,
          mobile: this.mobile,
          stylist: this.stylist,
          time_slot: this.time_slot,
          salon: this.salon
        })
            .then(response => {
              this.submitStatus = 'OK'
              this.error = response.data.message
            })
            .catch((e) => {
              console.error(e)
            })
      }
    }
  }
}
</script>
