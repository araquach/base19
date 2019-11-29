<template>
    <section id="joinus" class="section joinus-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">Join Base</h1>
                <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                <p>Are you looking to take up hairdressing as a career? <strong>Base Hair Academy</strong> could be the perfect environment for you!</p>
                <p>Base Hairdressing is strongly affiliated with <strong>Jakata</strong> and <strong>Paul Kemp Hairdressing</strong> with the goal of training up the next generation of hairdressers to the highest possible standard!</p>
                <p>We're a training environment with a focus on you! A salon where you can develop your skills to become a super stylist!</p>
                <p class="is-size-5">Check out the benefits of being a part of Base&hellip;</p>
                <ul class="box">
                    <li>Ongoing training and assessments working towards NVQ level 2 & 3</li>
                    <li>The highest quality training and development from experienced stylists</li>
                    <li>A relaxed, friendly working environment designed to unleash your creative talent</li>
                    <li>A solid career ladder with clear goals to strive for</li>
                </ul>
            </div>
            <hr class="is-mobile">
            <div id="joinusErr" class="section column">
                <h1 class="title is-3">Apply Here</h1>
                <div>
                    <p class="is-size-4">If Base sounds like the perfect place to carry out your apprenticeship just fill out the application form and we'll be in touch soon!</p>
                    <form @submit.prevent="submit">
                        <div class="field">
                            <label class="label has-text-white">Full Name</label>
                            <div class="control">
                                <input class="input" v-model.trim="$v.name.$model" placeholder="Your Full Name">
                            </div>
                            <div class="has-text-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                                Full Name is required
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Mobile Number</label>
                            <div class="control">
                                <input class="input" v-model.trim="$v.mobile.$model" placeholder="Your Mobile Number">
                                <div class="has-text-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                                    Mobile number is required
                                </div>
                                <div class="has-text-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.numeric">
                                    Valid Mobile number is required
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Current Position</label>
                            <div class="control">
                                <div class="select">
                                    <select v-model.trim="$v.position.$model">
                                        <option value="default">Please select</option>
                                        <option value="new to hairdressing">New to hairdressing</option>
                                        <option value="partway through">Partway through apprenticeship</option>
                                        <option value="already qualified">Already qualified</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="has-text-danger" v-if="submitStatus === 'ERROR' && !$v.position.required">
                            Position is required
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Tell us why you want to join the Base team</label>
                            <div class="control">
                                <textarea class="textarea" v-model.trim="$v.whyUs.$model" placeholder="Why do you want to join Base?"/>
                            </div>
                        </div>
                        <div class="has-text-danger" v-if="submitStatus === 'ERROR' && !$v.whyUs.required">
                            Why us required
                        </div>
                        <br>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Send Message</button>
                            </div>
                            <br><br>
                            <div v-if="submitStatus === 'OK'">
                                <p class="is-size-4 has-text-primary">Thanks for applying! We'll be in touch when a position becomes available</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#joinus" @click="switchComponent" class="button">Show Less</a>
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
                name: '',
                mobile: '',
                position: '',
                whyUs: '',
                submitStatus: null
            }
        },

        validations: {
            name: { required },
            mobile: { required, numeric },
            position: { required },
            whyUs: { required }
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            info() {
                return `Name: ${this.name}
                Mobile: ${this.mobile}
                Position: ${this.position}
                Why Choose us?: ${this.whyUs}
                `
            },

            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/joinus', {
                        name: this.name,
                        mobile: this.mobile,
                        position: this.position,
                        whyUs: this.whyUs,
                        info: this.info()
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
