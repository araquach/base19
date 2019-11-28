<template>
    <section id="contact" class="section contact-info hero is-fullheight is-dark">

        <div v-if="formSubmitted">
            <p class="is-size-4 has-text-primary">Thanks for messaging us! One of our team will get back to you soon.</p>
        </div>
        <form >
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

            sendMessage() {
                this.formSubmitted = true
            }
        }
    }
</script>