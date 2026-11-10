<template>
  <section class="section joinus-info hero is-fullheight is-dark">
    <div class="columns">
      <div class="section column is-7">
        <h1 class="title">Join Base Hair Academy</h1>
        <h2 class="subtitle">ARE YOU SOCIAL, LOVE CHANGING UP YOUR HAIR AND KEEPING UP WITH THE LATEST TRENDS?</h2>
        <p class="is-size-4">If you think you could be the next big thing in hairdressing then our <strong>Apprenticeship
          Scheme</strong>
          or <strong>Pre-Apprenticeship scheme</strong> could be for you!</p>
        <p>Base is the foundation upon which our wider business thrives, we lay the foundations for success. Once our
          apprentices qualify as skilled stylists, they transition to our sister salons <strong>Jakata Salon</strong>
          and <strong>Paul Kemp Hairdressing</strong>, where they continue to grow and refine their craft. These sister sites provide them
          with new opportunities to expand their horizons, build their clientele, and make their mark in the industry. We take
          great pride in nurturing their talent and supporting their professional development every step of the way.</p>
        <br>
        <h2 class="title is-5">PRE APPRENTICESHIP SCHEME</h2>
        <p>Our 'Pre Apprenticeship Scheme' is perfect for anyone with an interest in hair that would like to try out the
          industry before they leave school or enrol in any further education. We offer <strong>Saturday, evening and term
            time
            work</strong> at both our award winning sister salons, <strong>Paul Kemp Hairdressing</strong> and <strong>Jakata
            Salon</strong>. You'll receive training
          from the start and plenty of hands on experience, which can fast track you to interview stage for our
          apprenticeship scheme.</p>
        <br>
        <h2 class="title is-5">APPRENTICESHIP SCHEME</h2>
        <p>When you embark on our transformative 2-year apprenticeship scheme, you will be dedicating five days a week
          to sculpting your skills and unleashing your creative potential. Proudly partnered and accredited by <strong>Paragon
            Skills</strong>, we train up the next generation of hairdressers to the highest possible standard, in an environment
          with a focus on you, ensuring industry-leading training and recognition.</p>
        <p>To achieve your <strong>level 2 and 3 Diploma for Hairdressing</strong> you will immerse yourself in coursework and monthly
          evidence-based practical assessments, shaping you into a well-rounded stylist and indulge in a social
          atmosphere where your growth knows no limits, and every stylist is treated with the utmost support.</p>
        <p>At Base, your journey is in your hands - your speed of growth is unrestricted, offering a personalised and
          accelerated path to success. Balance 2-3 days of focused training per week with hands-on experience at our
          sister salons, Paul Kemp Hairdressing and Jakata Salon. Across these three sites you will experience the
          privilege of <strong>being treated like a stylist from day one</strong>, with unwavering support available at all times from
          expert trainers, ensuring you learn from the very best.</p>
        <p>As you grow, we open columns for you to take bookings, ensuring your progression within the industry and you
          will complete your qualification with an end-point assessment, followed by an interview process to enrol in
          our in-house 'graduate scheme' to further hone your skills.</p>
        <br>
        <h2 class="title is-5">Empowering Growth: Training & Opportunities at Base</h2>
        <p>Base continuously invests in staff and training, dedicating substantial resources to stay at the forefront of
          the industry. Throughout your career at Base you will continue to undergo re-education opportunities with
          external training, colour and cutting degrees, and collaborations with industry giants like <strong>Schwarzkopf,
            GHD,
            and Kevin Murphy</strong>. There will be opportunities to meet famous guest stylists and external educators like
          <strong>Hooker and Young</strong>, attend the British Hairdressing Awards, earn retail commission and unlock incentives for exceptional performances.</p>
        <p>It doesn't just end with hair, you will learn presentation skills, gain confidence in public speaking, and
          master the art of social media, content creation, and personal branding. The Base leadership team are
          constantly looking to bring fresh perspectives to traditional practices. We foster a culture of creativity and
          our innovative, in touch approach offers a sense of belonging to apprentices. We facilitate personal and
          professional growth in an inclusive, empowering and diverse environment.</p>
        <p>Base is a <strong>creative and diverse space</strong> where you will feel seen and heard and our open door policy encourages
          team members to communicate openly and honestly.</p>
        <p>We are team oriented, social and a place where every team member is valued and inspired to find and embrace
          their voice. Learning and working at Base in our social and playful environment gives you autonomy, we grant
          you the right to make decisions and mistakes.</p>
        <p class="is-size-4"><em>We allow you to pursue your own goals and master your artistry, by supporting you in
          bringing visions to life and setting you on a journey of discovery to be unapologetically
          you!</em></p>
      </div>
      <hr class="is-mobile">
      <div id="joinusErr" class="section column">
        <h1 class="title is-3">Apply Here</h1>
        <div v-if="submitStatus !== 'OK'">
          <p class="is-size-4">If Base sounds like the perfect place to carry out your apprenticeship just fill out the
            application form and we'll be in touch soon!</p>
          <form @submit.prevent="submit">
            <div class="recruitment-honeypot" aria-hidden="true">
              <label for="recruitment-website">Leave this field empty</label>
              <textarea id="recruitment-website" name="website" v-model="website" tabindex="-1" autocomplete="off" data-lpignore="true" data-1p-ignore="true"></textarea>
            </div>
            <p v-if="errorMessage" class="help is-danger" role="alert">{{ errorMessage }}</p>
            <div class="field">
              <label class="label has-text-white">Full Name</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.name.$error }" v-model.trim="$v.name.$model"
                       placeholder="Your Full Name">
              </div>
              <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                <p>Full Name is required</p>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Mobile Number</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model"
                       placeholder="Your Mobile Number">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                  Mobile number is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.phone">
                  <p>Valid Mobile number is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Email Address</label>
              <div class="control">
                <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model"
                       placeholder="Your Email address">
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
                  Email Address is required
                </div>
                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
                  <p>Valid Email address is required</p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Role</label>
              <div class="control">
                <div class="select" :class="{ 'is-danger': $v.role.$error }">
                  <select v-model.trim="$v.role.$model">
                    <option value="default">Please select</option>
                    <option value="Stylist">Stylist</option>
                    <option value="Apprentice">Apprentice</option>
                    <option value="Saturday">Saturday/Evening</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && $v.role.$invalid">
              Role is required
            </div>
            <div class="field">
              <label class="label has-text-white">Current Position</label>
              <div class="control">
                <div class="select" :class="{ 'is-danger': $v.position.$error }">
                  <select v-model.trim="$v.position.$model">
                    <option value="default">Please select</option>
                    <option value="at school/college">At school/college</option>
                    <option value="new to hairdressing">New to hairdressing</option>
                    <option value="partway through">Partway through apprenticeship</option>
                    <option value="already qualified">Already qualified</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && $v.position.$invalid">
              Position is required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us a bit about yourself</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.about.$error }" v-model.trim="$v.about.$model"
                          placeholder="Tell us about yourself?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.about.required">
              About yourself is required
            </div>
            <div class="field">
              <label class="label has-text-white">Why did you choose hairdressing as a career?</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_hair.$error }"
                          v-model.trim="$v.why_hair.$model" placeholder="Why did you choose hairdressing?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.why_hair.required">
              Why hairdressing required
            </div>
            <div class="field">
              <label class="label has-text-white">Tell us why you want to join the Base team</label>
              <div class="control">
                <textarea class="textarea" :class="{ 'is-danger': $v.why_us.$error }" v-model.trim="$v.why_us.$model"
                          placeholder="Why do you want to join Base?"/>
              </div>
            </div>
            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.why_us.required">
              Why us required
            </div>
            <br>
            <div class="field">
              <div class="control">
                <button id="join-us" class="button is-primary" type="submit" :disabled="loading">Apply</button>
              </div>
              <br><br>
            </div>
          </form>
        </div>
        <div id="join-us-message" v-if="submitStatus === 'OK'">
          <p class="is-size-4 has-text-primary">Thanks for applying! We'll be in touch when a position becomes
            available</p>
          <p class="is-size-5 has-text-primary">If you're considering our other salons too (Paul Kemp Hairdressing and Jakata) there's no need to apply again as we're all connected and this application covers all 3 salons!</p>
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
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'

const phone = value => /^[+0-9() .-]+$/.test(value) && (value.match(/[0-9]/g) || []).length >= 10 && (value.match(/[0-9]/g) || []).length <= 15
const answer = value => /[^\d\s\p{P}\p{S}]/u.test(value || '')

export default {
  data() {
    return {
      showInfo: false,
      name: '',
      mobile: '',
      email: '',
      position: 'default',
      about: '',
      why_hair: '',
      website: '',
      errorMessage: '',
      why_us: '',
      salon: 3,
      role: 'default',
      submitStatus: null,
      loading: false
    }
  },

  validations: {
    name: {required, minLength: minLength(2), maxLength: maxLength(100)},
    mobile: {required, phone, maxLength: maxLength(30)},
    email: {required, email, maxLength: maxLength(254)},
    role: {required, allowed: value => ['Stylist', 'Apprentice', 'Saturday', 'Other'].includes(value)},
    position: {required, allowed: value => ['at school/college', 'new to hairdressing', 'partway through', 'already qualified', 'other'].includes(value)},
    about: {required, minLength: minLength(10), maxLength: maxLength(5000), answer},
    why_hair: {required, minLength: minLength(10), maxLength: maxLength(5000), answer},
    why_us: {required, minLength: minLength(10), maxLength: maxLength(5000), answer}
  },

  methods: {
    submit() {
      if (this.loading) return
      this.errorMessage = ''
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.errorMessage = 'Please check your details, select both dropdowns and give each written answer at least 10 characters (maximum 5,000).'
      } else {
        this.loading = true
        axios.post('/api/joinus', {
          name: this.name,
          mobile: this.mobile,
          email: this.email,
          role: this.role,
          position: this.position,
          about: this.about,
          why_hair: this.why_hair,
          why_us: this.why_us,
          salon: this.salon,
          website: this.website,
        }, { timeout: 30000 })
            .then(response => {
              this.submitStatus = 'OK'
              window.scrollTo({ top: 0, behavior: 'smooth' })
            })
            .catch((e) => {
              this.submitStatus = 'ERROR'
              const response = e.response
              const serverMessage = response && typeof response.data === 'string' ? response.data.trim() : ''
              const savedButEmailFailed = [
                'Failed to parse HTML email template',
                'Failed to parse text email template',
                'Failed to send email',
                'Failed to parse HTML email template for applicant',
                'Failed to parse text email template for applicant',
                'Failed to send email to applicant'
              ].includes(serverMessage)
              if (savedButEmailFailed) {
                this.errorMessage = 'Your application was saved, but we could not complete the confirmation emails. Please do not submit again. ' + serverMessage + '.'
              } else if (response && response.status === 429) {
                this.errorMessage = 'Too many attempts. Please wait a while before trying again.'
              } else if (serverMessage === 'Failed to save data') {
                this.errorMessage = 'Your application could not be saved. Please contact us if the problem continues.'
              } else {
                this.errorMessage = (response && response.data && response.data.message) || 'We could not confirm your application. Please contact us before submitting again.'
              }
            })
            .finally(() => { this.loading = false })
      }
    }
  }
}
</script>

<style scoped>
.recruitment-honeypot {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
