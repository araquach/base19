<template>
    <section class="section contact-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">Location & Contact Info</h1>
                <p class="is-size-5"><strong>Base Hairdressing</strong> is located in Warrington Town Centre on Bridge Street. We're just around the corner from the new development along with the new multi-storey car park.</p>
                <hr>
                <h3 class="title is-4">Address:</h3>
                <p class="is-size-5">90/92 Bridge Street<br>
                    Warrington<br>
                    WA1 2RF</p>
                <h3 class="title is-4 phone-link">Call Us:</h3>
                <a id="call-us" href="tel:01925444449" class="is-size-4 button is-small is-primary">01925 444449</a>
                <hr>
                <div class="is-size-5">
                    <h3 class="title is-4">Opening Hours</h3>
                    <p>Monday: Closed<br>
                        Tuesday: 9am - 5pm<br>
                        Wednesday: 11am - 8pm<br>
                        Thursday: 11am - 8pm<br>
                        Friday: 9am - 5pm<br>
                        Saturday: 8.30am - 4:30pm</p>
                </div>
            </div>
            <hr class="is-mobile">
            <div class="section column">
                <h1 class="title is-3">Contact Us</h1>
                <div>
                    <p class="is-size-5">If you wish to get in touch please fill in the form below and we'll get back to you as soon as we can</p>
                    <p>To book an appointment please use our app or click the 'Book Now' button.</p>
                    <br>
                    <form v-if="submitStatus != 'OK'" @submit.prevent="submit">
                        <div class="field">
                            <label class="label has-text-white">Full Name</label>
                            <div class="control">
                                <input class="input" v-model.trim="$v.name.$model" :class="{ 'is-danger': $v.name.$error }" placeholder="Your Full Name">
                            </div>
                            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                                Name is required
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Email Address</label>
                            <div class="control">
                                <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model" placeholder="Your Email Address">
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
                                    Email Address is required
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
                                    Valid Email Address is required
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Message</label>
                            <div class="control">
                                <input class="textarea" :class="{ 'is-danger': $v.message.$error }" v-model.trim="$v.message.$model" placeholder="Your Message">
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.message.required">
                                    Message is required
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Send Message</button>
                            </div>
                            <br><br>
                        </div>
                    </form>
                    <div v-if="submitStatus === 'OK'">
                        <p class="is-size-4 has-text-primary">Thanks for messaging us! One of our team will get back to you soon.</p>
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
    import {required, email} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                showInfo: false,
                name: '',
                email: '',
                message: '',
                submitStatus: null
            }
        },

        validations: {
            name: { required },
            email: { required, email },
            message: { required }
        },

        methods:{
            fullMessage() {
                return `From: ${this.name}
                Email Address: ${this.email}
                Message: ${this.message}
                `
            },

            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/sendMessage', {
                        name: this.name,
                        email: this.email,
                        message: this.fullMessage()
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