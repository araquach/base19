<template>
    <section id="models" class="section models-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">We need models!</h1>
                <br>
                <figure class="image is-5by3">
                    <img src="/dist/img/models/model.jpg" alt="Schwarzkopf Essential Looks">
                </figure>
                <br>
                <p class="is-size-5">We're looking for models for our training days! Get your hair done for practically free! (sometimes a nominal charge to cover product costs applies)</p>
                <p>If you'd like to volunteer simply add your name to our model database and we'll contact you when we have a session that fits your needs</p>
            </div>
            <hr class="is-mobile">
            <div class="section column">
                <h1 class="title is-3">Apply Here</h1>
                <div>
                    <p class="is-size-4">Please provide some info about your hair to allow us to determine which sessions best suit your needs</p>
                    <ul>
                        <li>Hair Length</li>
                        <li>Hair Texture</li>
                        <li>Existing colour (Foils/Balayage/Full Head etc)</li>
                        <li>Any Colour, Cut & Style ideas you would like</li>
                    </ul>
                    <br>
                    <p>Call us on 01925 444449 if you would like more information</p>
                    <small>A skin test is required 48 hours before we can colour your hair if you haven't been to us before. We will not be able to carry out any colour treatments if we don't have a record of this.</small>
                    <br>
                    <br>
                    <form v-if="submitStatus !== 'OK'" @submit.prevent="submit">
                        <div>
                            <div class="field">
                                <label class="label has-text-white">Full Name</label>
                                <div class="control">
                                    <input class="input" :class="{ 'is-danger': $v.name.$error }" v-model.trim="$v.name.$model" placeholder="Your Full Name">
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                                    <p>Name is required</p>
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
                                <label class="label has-text-white">Additional information</label>
                                <div class="control">
                                    <textarea class="textarea" :class="{ 'is-danger': $v.info.$error }" v-model.trim="$v.info.$model" placeholder="Additional information"/>
                                </div>
                            </div>
                            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.info.required">
                                Additional Information required
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
                        <p class="is-size-4 has-text-primary">Thanks for applying! We'll be in touch when a suitable session is on</p>
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
                name: '',
                mobile: '',
                info: '',
                submitStatus: null
            }
        },

        validations: {
            name: { required },
            mobile: { required, numeric },
            info: { required }
        },

        methods:{
            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/models', {
                        name: this.name,
                        mobile: this.mobile,
                        info: this.info
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