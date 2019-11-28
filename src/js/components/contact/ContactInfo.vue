<template>
    <section id="contact" class="section contact-info hero is-fullheight is-dark">
        <form @submit.prevent="submit">
            <div class="field" :class="{ 'has-text-danger': $v.name.$error }">
                <label class="label has-text-white">Name</label>
                <input class="input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="has-text-danger" v-if="!$v.name.required">Name is required</div>
            <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
            <p v-if="submitStatus === 'OK'" cla>Thanks for your submission!</p>
            <p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
    </section>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                name: '',
                submitStatus: null
            }
        },

        validations: {
            name: {
                required,
            },
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 500)
                }
            }
        }
    }
</script>