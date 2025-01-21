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
      <p>Role: {{ applicant.role }}
        <button v-if="applicant.role === 'apprentice' || applicant.role === 'Apprentice'" @click="changeRole"
                class="button is-small is-warning ml-5">Change to Saturday
        </button>
      </p>
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
            <div v-if="!applicant.email_response" class="box">
              <div v-if="!emailSent">
                <h2 class="title is-5">Email Response</h2>
                <div class="buttons">
                  <button @click.prevent="sendEmailResponse('unsuccessful')" class="button is-danger">
                    Unsuccessful
                  </button>
                  <button @click.prevent="sendEmailResponse('maybe')" class="button is-warning">
                    Maybe
                  </button>
                </div>
              </div>
              <div v-else>
                <p>Email Successfully sent to candidate</p>
              </div>
            </div>
            <button v-if="applicant.follow_up !== 'archived'" @click="archiveApplicant" class="button is-danger">
              Archive Applicant
            </button>
            <br><br>
            <router-link :to="{ name: 'joinus-applicants'}" class="button is-warning">
              Back to all applicants
            </router-link>
          </form>
        </div>
        <br>
        <button class="button" @click="openMessagingPanel">Open Messages</button>

        <!-- Messaging Panel -->
        <MessagingPanel />
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue";
import MessagingPanel from "./MessagingPanel.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import format from "date-fns/format";

export default {
  components: { UserForm, MessagingPanel },

  props: ["id"],

  data() {
    return {
      newNote: "",
      originalFollowUp: "",
      updateSuccess: false,
      emailSent: false,
    }
  },

  methods: {
    // Map Vuex actions
    ...mapActions(["openPanel", "closePanel", "fetchMessages", "fetchApplicant"]),

    async openMessagingPanel() {
      try {
        this.openPanel();
        await this.fetchMessages(); // Fetch messages for the current applicant
      } catch (error) {
        console.error("Failed to open messaging panel:", error);
      }
    },

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
    },

    async sendEmailResponse(emailType) {
      const emailData = {
        ID: this.applicant.id,
        EmailResponse: emailType,
      }
      console.log(emailData);
      try {
        const response = await axios.patch("/api/joinus-email-response", emailData);
        console.log("Response:", response.data);
        this.emailSent = true;
      } catch (error) {
        console.error("Error updating data:", error.response?.data || error.message);
        this.$emit("update-failed", error); // Emit an event on failure (optional)
      }
    },

    async changeRole() {
      axios
          .patch(`/api/joinus-update-role/${this.applicant.id}`)
          .then((response) => {
            console.log("Applicant updated:", response.data);
            this.applicant.role = "Saturday";
          })
          .catch((error) => {
            console.error("Error updating applicant:", error);
          });
    },

    async archiveApplicant() {
      try {
        const response = await axios.delete(`/api/delete-applicant/${this.applicant.id}`);
        if (response.status === 204) {
          console.log("Applicant successfully deleted");
          this.$store.dispatch("removeApplicant", this.applicant.id);
          this.$router.push({ name: "joinus-applicants" });
        }
      } catch (error) {
        console.error("Error deleting applicant:", error);
        this.error = error;
      }
    },
  },

  computed: {
    // Map Vuex getters and state
    ...mapGetters(["salonName", "userName"]),
    ...mapState({
      applicant: state => state.base.applicant,
      loading: (state) => state.base.loading,
      userPin: (state) => state.base.userPin,
      isPanelOpen: (state) => state.messaging.isPanelOpen,
    }),

    // Format the applicant creation date
    formatDate() {
      const date = new Date(this.applicant.created_at);
      if (isNaN(date)) {
        return "Date is not available";
      }
      return format(date, "do MMM yyyy");
    },

    // Reverse the notes array
    reversedNotes() {
      if (!this.applicant.notes || this.applicant.notes.length === 0) {
        return [];
      }
      return this.applicant.notes.slice().reverse();
    },

    // Check if the update button should be shown
    showUpdateButton() {
      return this.newNote.trim() !== "" || this.originalFollowUp !== this.applicant.follow_up;
    },
  },

  async created() {
    await this.fetchApplicant(this.id);
    await this.$store.dispatch("fetchMessages");
    this.originalFollowUp = this.applicant.follow_up;
  },

  beforeRouteLeave(to, from, next) {
    // Close the messaging panel before leaving the route
    if (this.isPanelOpen) {
      this.closePanel();
    }
    next(); // Proceed to the next route
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
