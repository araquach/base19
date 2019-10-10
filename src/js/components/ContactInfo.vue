<template>
    <section id="contact" class="section contact-info hero is-fullheight is-dark">
        <div class="columns">
            <div class="section column is-6">
                <h1 class="title">Location</h1>
                <p><strong>Base Hairdressing</strong> is located in Warrington Town Centre on the main high street. We're close to the new upcoming development. <br>The new multi-storey car park is just around the corner from us.</p>

                <h3 class="title is-4">Address:</h3>
                <p class="is-size-5">90/92 Bridge Street<br>
                    Warrington<br>
                    WA1 2RF</p>
                <h3 class="title is-4">Telephone:</h3>
                <p class="is-size-4">01925 444449</p>

                <br>
                <figure>
                    <img src="https://via.placeholder.com/1000x600" alt="Map">
                </figure>
                <br>
                <div class="is-size-4">
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
                <p class="is-size-5">If you wish to get in touch please fill in the form below and we'll get back to you as soon as we can</p>
                <p>If you</p>
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
                        <label class="label has-text-white">Message</label>
                        <div class="control">
                            <input class="textarea" v-model="mobile" name="mobile" type="text" placeholder="Message">
                        </div>
                    </div>
                    <br>
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
                    <button class="button">Show Less</button>
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