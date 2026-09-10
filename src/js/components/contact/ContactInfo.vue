<template>
  <section class="section contact-info hero is-fullheight is-dark">
    <div class="columns">
      <div class="section column is-6">
        <h1 class="title">Location & Contact Info</h1>
        <p class="is-size-5"><strong>Base Hairdressing</strong> is located in Warrington Town Centre on Bridge Street. We're just around the corner from the new development along with the new multi-storey car park.</p>
        <hr>
        <h3 class="title is-4">Address:</h3>
        <p class="is-size-5">90/92 Bridge Street<br>Warrington<br>WA1 2RF</p>
        <h3 class="title is-4 phone-link">Call Us:</h3>
        <a id="call-us" href="tel:01925444449" class="is-size-4 button is-small is-primary">01925 444449</a>
        <hr>
        <div class="is-size-5">
          <h3 class="title is-4">Opening Hours</h3>
          <p>Monday: Closed<br>Tuesday: 9am - 5pm<br>Wednesday: 11am - 8pm<br>Thursday: 11am - 8pm<br>Friday: 9am - 5pm<br>Saturday: 8.30am - 4:30pm<br>Sunday: Closed</p>
        </div>
      </div>
      <hr class="is-mobile">
      <div class="section column">
        <h1 class="title is-3">Contact Us</h1>
        <div>
          <form v-if="submitStatus != 'OK'" @submit.prevent="submit">
            <!-- Full Name Validation -->
            <div class="field">
              <label class="label has-text-white">Full Name</label>
              <div class="control">
                <input
                    class="input"
                    v-model.trim="$v.name.$model"
                    :class="{ 'is-danger': $v.name.$error }"
                    placeholder="Your Full Name"
                />
              </div>
              <div v-if="submitStatus === 'ERROR'" class="help is-danger">
                <p v-if="!$v.name.required">Name is required</p>
                <p v-if="!$v.name.validName">
                  Enter a valid name (at least one space, no numbers, max 50 characters)
                </p>
              </div>
            </div>

            <!-- Email Validation -->
            <div class="field">
              <label class="label has-text-white">Email Address</label>
              <div class="control">
                <input
                    class="input"
                    v-model.trim="$v.email.$model"
                    :class="{ 'is-danger': $v.email.$error }"
                    placeholder="Your Email Address"
                />
              </div>
              <div v-if="submitStatus === 'ERROR'" class="help is-danger">
                <p v-if="!$v.email.required">Email Address is required</p>
                <p v-if="!$v.email.email">Provide a valid email address</p>
              </div>
            </div>

            <!-- Message Validation -->
            <div class="field">
              <label class="label has-text-white">Message</label>
              <div class="control">
                                <textarea
                                    class="textarea"
                                    v-model.trim="$v.message.$model"
                                    :class="{ 'is-danger': $v.message.$error }"
                                    placeholder="Your Message"
                                ></textarea>
              </div>
              <div v-if="submitStatus === 'ERROR'" class="help is-danger">
                <p v-if="!$v.message.required">Message is required</p>
                <p v-if="!$v.message.isValidMessage">
                  Your message must include at least 10 characters and 3 words, with no excessively long or repeated characters.
                </p>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="field">
              <div class="control">
                <button
                    class="button is-primary"
                    :disabled="submitStatus === 'PENDING'"
                    type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div v-else>
            <p class="is-size-4 has-text-primary">
              Thanks for messaging us! One of our team will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

// Advanced validation rules
const validName = (value) =>
    /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(value) &&
    value.length <= 50 &&
    value.split(/\s+/).length >= 2; // At least two words
const isValidMessage = (value) =>
    value.length >= 10 && // At least 10 characters
    value.split(/\s+/).length >= 3 && // At least 3 words
    !/(.)\1{5,}/.test(value) && // Rejects excessive repeated chars
    !/\b[a-zA-Z0-9]{20,}\b/.test(value); // Rejects single words > 20 chars

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitStatus: null,
    };
  },
  validations: {
    name: { required, validName },
    email: { required, email },
    message: { required, isValidMessage },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        axios
            .post("/api/sendMessage", {
              name: this.name,
              email: this.email,
              message: this.message,
            })
            .then(() => {
              this.submitStatus = "OK";
            })
            .catch((error) => {
              console.error(error);
              this.submitStatus = "ERROR";
            });
      }
    },
  },
};
</script>