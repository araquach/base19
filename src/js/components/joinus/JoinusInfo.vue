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
            <div class="section column">
                <h1 class="title is-3">Apply Here</h1>
                <p class="is-size-4">If Base sounds like the perfect place to carry out your apprenticeship just fill out the application form and we'll be in touch soon!</p>
                <form @submit="checkForm">

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
                            <button @click.prevent="sendForm" class="button is-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button @click="switchComponent" class="button">Show Less</button>
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

            checkForm(e) {
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

            validMobile(mobile) {
                var re = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/
                return re.test(mobile);
            },

            sendForm() {
                axios.Post('/api/joinus', {
                    name: this.name,
                    mobile: this.mobile,
                    email: this.email,
                    position: this.position,
                    info: this.info
                })
                    .then(response => {
                        this.success = true
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }
</script>