<template>
    <section class="section bookings-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6 is-offset-6">
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <figure class="image">
                            <img src="/dist/img/base_logo.svg" alt="Base Hairdressing">
                        </figure>
                    </div>
                </div>
                <h1 class="title is-3">Register for your appointment</h1>
                <div>
                    <p><strong>It's confirmed - we'll definitely be re-opening on Saturday 4th July! </strong></p>
                    <p>Each team member will be contacting their own clients to arrange bookings over the next week. Anybody who was already booked in will be contacted first. We will be working really hard to make sure everyone gets an appointment that suits them in the quickest possible time.</p>
                    <p>We will not be opening our online bookings or taking telephone bookings until we re-open.</p>
                    <p class="is-size-4">If you are wanting to book an appointment, please fill in the form below to ensure we've got your correct information</p>
                    <p class="is-size-7"><em>Please note... Unfortunately our first year apprentices (Ruby, Sophie & Beth) will not be taking bookings until further notice (probably 3-4 weeks after we open). If you want to get an appointment with one of them fill in the form below and we'll get you in at the first opportunity. Lucy and Lauren will be taking bookings.</em></p>
                    <br>
                    <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
                        <div>
                            <div class="field">
                                <label class="label has-text-white">First Name</label>
                                <div class="control">
                                    <input class="input" :class="{ 'is-danger': $v.first_name.$error }" v-model.trim="$v.first_name.$model" placeholder="Your First Name">
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.first_name.required">
                                    <p>Your First Name is required</p>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label has-text-white">Last Name</label>
                                <div class="control">
                                    <input class="input" :class="{ 'is-danger': $v.last_name.$error }" v-model.trim="$v.last_name.$model" placeholder="Your Last Name">
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.last_name.required">
                                    <p>Your Last Name is required</p>
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
                                <label class="label has-text-white">Your Stylist</label>
                                <div class="control">
                                    <div class="select" :class="{ 'is-danger': $v.stylist.$error }">
                                        <select  v-model.trim="$v.stylist.$model">
                                            <option value="default">Please select</option>
                                            <option value="Adam">Adam</option>
                                            <option value="Jimmy">Jimmy</option>
                                            <option value="Lauren">Lauren</option>
                                            <option value="Lucy">Lucy</option>
                                            <option value="Sophie">Sophie</option>
                                            <option value="Ruby">Ruby</option>
                                            <option value="Beth">Beth</option>
                                            <option value="Unsure">Unsure</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.stylist.required">
                                Please select your stylist
                            </div>
                            <br>
                            <div class="field">
                                <div class="control">
                                    <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Apply</button>
                                </div>
                                <br><br>
                            </div>
                        </div>
                    </form>
                    <div v-if="submitStatus === 'OK'">
                        <p class="is-size-4 has-text-primary">Thanks for registering. Your stylist will be in touch soon to get you booked in. We look forward to seeing you!</p>
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

                submitStatus: null
            }
        },

        validations: {
            first_name: { required },
            last_name: { required },
            mobile: { required, numeric },
            stylist: { required }
        },

        methods:{
            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/bookings', {
                        salon: 3,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        mobile: this.mobile,
                        stylist: this.stylist
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