<template>
    <section id="models" class="section models-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">We need models!</h1>
                <br>
                <figure>
                    <img src="/dist/img/models" alt="">
                </figure>
                <br>
                <p>We're looking for models for our training days! Get your hair done for practically free! (sometimes a nominal charge to cover product costs applies)</p>
                <p>If you'd like to volunteer simply add your name to our model database and we'll contact you when we have a session that fits your needs</p>
            </div>
            <div class="section column">
                <h1 class="title is-3">Apply Here</h1>
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
                <form @submit="checkForm" action="/register" method="post">

                    <div v-if="errors.length" class="box has-text-danger">
                        <p><strong>Please correct the following:</strong></p>
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </div>

                    <div class="field">
                        <label class="label has-text-white">Name</label>
                        <div class="control">
                            <input class="input" v-model="name" name="name" type="text" placeholder="Your Name">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label has-text-white">Mobile Number</label>
                        <div class="control">
                            <input class="input" v-model="mobile" name="mobile" type="text" placeholder="Your Mobile Number">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label has-text-white">Current Position</label>
                        <div class="control">
                            <div class="select">
                                <select v-model="position" name="position">
                                    <option value="default">Please select</option>
                                    <option value="employed">New to hairdressing</option>
                                    <option value="chair renter">Partway through apprenticeship</option>
                                    <option value="mobile">Already qualified</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br>
                    <input type="hidden" name="role" value="apprentice">
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" type="submit" value="submit">Submit</button>
                        </div>
                    </div>
                </form>
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
                mobile: null,
                position: null
            }
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            checkForm: function (e) {
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.');
                }
                if (!this.mobile) {
                    this.errors.push('Mobile Number required.');
                } else if (!this.validMobile(this.mobile)) {
                    this.errors.push('Valid Mobile Number required.');
                }
                if (!this.position) {
                    this.errors.push('Position required')
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },

            validMobile: function (mobile) {
                var re = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/
                return re.test(mobile);
            }
        }
    }
</script>