<template>
    <section id="models" class="section models-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">We need models!</h1>
                <br>
                <figure>
                    <img src="/dist/img/models/model.jpg" alt="Schwarzkopf Essential Looks">
                </figure>
                <br>
                <p>We're looking for models for our training days! Get your hair done for practically free! (sometimes a nominal charge to cover product costs applies)</p>
                <p>If you'd like to volunteer simply add your name to our model database and we'll contact you when we have a session that fits your needs</p>
            </div>
            <hr class="is-mobile">
            <div class="section column">
                <h1 class="title is-3">Apply Here</h1>
                <div v-if="formSubmitted">
                    <p class="is-size-4 has-text-primary">Thanks for applying to be a model. When a suitable session comes up we'll be in touch.</p>
                </div>
                <div v-else>
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
                    <form>
                        <div v-if="errors.length" class="box has-text-danger">
                            <p><strong>Please correct the following:</strong></p>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Full name</label>
                            <div class="control">
                                <input class="input" v-model="name" name="name" type="text" placeholder="Your Full Name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Mobile Number</label>
                            <div class="control">
                                <input class="input" v-model="mobile" name="mobile" type="text" placeholder="Your Mobile Number">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">Additional information</label>
                            <div class="control">
                                <textarea class="textarea" v-model="info" name="info" placeholder="Additional Info"/>
                            </div>
                        </div>
                        <br>
                        <input type="hidden" name="role" value="apprentice">
                        <div class="field">
                            <div class="control">
                                <button @click.prevent="sendData" class="button is-primary">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#models" @click="switchComponent" class="button">Go Back</a>
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
                mobile: null,
                info: null,
                formSubmitted: false
            }
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            validMobile: function (mobile) {
                var re = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/
                return re.test(mobile);
            },

            sendData() {
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.')
                }
                if (!this.mobile) {
                    this.errors.push('Mobile number required.')
                } else if (!this.validMobile(this.mobile)) {
                    this.errors.push('Valid mobile number required.')
                }
                if (!this.info) {
                    this.errors.push('Information required')
                }
                else {
                    axios.post('/api/model', {
                        name: this.name,
                        mobile: this.mobile,
                        info: this.info
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