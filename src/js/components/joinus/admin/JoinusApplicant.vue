<template>
  <div>
    <div v-if="!userPin" class="section">
      <UserForm/>
    </div>
    <div v-if="!loading && userPin" class="section has-text-white is-size-5">
      <h1 class="title has-text-white">Applicant: {{ applicant.name }}</h1>
      <p>Application date: {{ formatDate }}</p>
      <p>Salon Applied to: {{ salonName }}</p>
      <p>Mobile: {{ applicant.mobile }}</p>
      <p>Email: {{ applicant.email }}</p>
      <p>Role: {{ applicant.role }}</p>
      <p>Position: {{ applicant.position }}</p>
      <div class="column is-8">
        <div class="box">
          <h2 class="title is-5">About Me:</h2>
          <p>{{ applicant.about }}</p>
        </div>
        <div class="box">
          <h2 class="title is-5">Why Hairdressing?:</h2>
          <p>{{ applicant.why_hair }}</p>
        </div>
        <div class="box">
          <h2 class="title is-5">Why Us?:</h2>
          <p>{{ applicant.why_us }}</p>
        </div>
        <hr>
        <div>
          <form @submit.prevent="updateDetails">
            <h2 class="title is-4 has-text-white">Notes</h2>
            <div v-for="note in reversedNotes" class="box">
              <pre>{{ note }}</pre>
            </div>
            <textarea v-model="newNote" class="textarea" placeholder="Add notes here"></textarea>
            <br>
            <div class="control">
              <h2 class="title is-4 has-text-white">Follow up? </h2>
              <label class="radio">
                <input type="radio" name="follow_up" value="definitely" v-model="applicant.follow_up">
                Definitely
              </label>
              <label class="radio">
                <input type="radio" name="follow_up" value="maybe" v-model="applicant.follow_up">
                Maybe
              </label>
              <label class="radio">
                <input type="radio" name="follow_up" value="no" v-model="applicant.follow_up">
                No
              </label>
            </div>
            <br>
            <p v-if="updateSuccess" class="has-text-success">Updated successfully!</p>
            <button v-if="showUpdateButton" type="submit" class="button is-primary">Update Notes</button>
            <div class="box">
              <h2 class="title is-5">Email Response</h2>
              <div v-if="!applicant.email_response" class="buttons">
                <button class="button is-danger">
                  Unsuccessful
                </button>
                <button class="button is-warning">
                  Maybe
                </button>
              </div>
            </div>
            <router-link :to="{ name: 'joinus-applicants'}" class="button is-warning">
              Back to all applicants
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue"
import {mapActions, mapGetters, mapState} from 'vuex'
import format from "date-fns/format";

export default {
  components: {UserForm},

  props: ['id'],
  data() {
    return {
      newNote: "",
      originalFollowUp: "",
      updateSuccess: false,
    }
  },

  methods: {
    ...mapActions(['fetchApplicant']),
    async updateDetails() {
      // Dispatch the updated applicant and the new note to the store
      await this.$store.dispatch("updateApplicant", {
        id: this.applicant.id,
        newNote: this.newNote,
        followUp: this.applicant.follow_up
      });

      // Clear the new note textarea after submission
      this.newNote = "";
      this.originalFollowUp = this.applicant.follow_up;

      this.updateSuccess = true;
      setTimeout(() => {
        this.updateSuccess = false;
      }, 2000);
    }
  },

  computed: {
    ...mapGetters(['salonName', 'userName']),
    ...mapState({
      applicant: state => state.base.applicant,
      loading: state => state.base.loading,
      userPin: state => state.base.userPin
    }),
    formatDate() {
      const date = new Date(this.applicant.created_at);
      if (isNaN(date)) {
        return 'Date is not available';
      }
      return format(date, "do MMM yyyy");
    },

    reversedNotes() {
      if (!this.applicant.notes || this.applicant.notes.length === 0) {
        return [];
      }
      return this.applicant.notes.slice().reverse();
    },

    showUpdateButton() {
      return this.newNote.trim() !== "" || this.originalFollowUp !== this.applicant.follow_up;
    },
  },

  async created() {
    await this.fetchApplicant(this.id);
    this.originalFollowUp = this.applicant.follow_up;
  },
};
</script>


<style scoped>
.section {
  padding-top: 6rem;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
