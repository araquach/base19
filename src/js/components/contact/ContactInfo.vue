<template>
    <section id="contact" class="section contact-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">Location</h1>
                <p><strong>Base Hairdressing</strong> is located in Warrington Town Centre on Bridge Street. We're just around the corner from the new development along with the new multi-storey car park.</p>
                <hr>
                <h3 class="title is-4">Address:</h3>
                <p class="is-size-5">90/92 Bridge Street<br>
                    Warrington<br>
                    WA1 2RF</p>
                <h3 class="title is-4">Telephone:</h3>
                <p class="is-size-4">01925 444449</p>
                <hr>
                <div class="is-size-5">
                    <h3 class="title is-4">Opening Hours</h3>
                    <p>Monday: Closed<br>
                        Tuesday: 9am - 6pm<br>
                        Wednesday: 11am - 8pm<br>
                        Thursday: 11am - 8pm<br>
                        Friday: 9am - 6pm<br>
                        Saturday: 8am - 4:30pm</p>
                </div>
            </div>
            <div class="section column">
                <h1 class="title is-3">Contact Us</h1>
                <div v-if="formSubmitted">
                    <p class="is-size-4 has-text-primary">Thanks for messaging us! One of our team will get back to you soon.</p>
                </div>

                <div v-else>
                    <p class="is-size-5">If you wish to get in touch please fill in the form below and we'll get back to you as soon as we can</p>
                    <p>To book an appointment please use our app or click the 'Book Now' button.</p>
                    <br>
                    <form>
                        <div v-if="errors.length" class="box has-text-danger">
                            <p><strong>Please correct the following:</strong></p>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Full Name</label>
                            <div class="control">
                                <input class="input" v-model="name" name="name" type="text" placeholder="Your Full Name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Email Address</label>
                            <div class="control">
                                <input class="input" v-model="email" name="email" type="text" placeholder="Your Email Address">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Message</label>
                            <div class="control">
                                <input class="textarea" v-model="message" name="message" type="text" placeholder="Your Message">
                            </div>
                        </div>
                        <br>
                        <div class="field">
                            <div class="control">
                                <button @click.prevent="sendMessage" class="button is-primary">Send message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button @click="switchComponent" class="button">Go Back</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                showInfo: false,
                errors: [],
                name: null,
                email: null,
                message: null,
                formSubmitted: false
            }
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            fullMessage() {
                return `From: ${this.name}
                Email Address: ${this.email}
                Message: ${this.message}
                `
            },

            validEmail(email) {
                var re = re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(email);
            },

            sendMessage() {
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.')
                }
                if (!this.email) {
                    this.errors.push('Email address required.')
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid Email address required.')
                }
                if (!this.message) {
                    this.errors.push('Message required')
                }
                else {
                    axios.post('/api/sendMessage', {
                        name: this.name,
                        email: this.email,
                        message: this.fullMessage()
                    })
                        .then(response => {
                            this.formSubmitted = true
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                }
            }
        }
    }
</script>