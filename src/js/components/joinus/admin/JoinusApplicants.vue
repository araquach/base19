<template>
  <div>
    <div v-if="!userPin" class="section">
      <UserForm/>
    </div>
    <div v-if="userPin" class="section">
      <h1 class="title has-text-white">Applicants</h1>
      <div class="buttons">
        <button class="button is-primary" @click="changeApplicantStatus('all')">
          All
        </button>
        <button class="button is-primary" @click="changeApplicantStatus('definitely')">
          Definitely
        </button>
        <button class="button is-primary" @click="changeApplicantStatus('maybe')">
          Maybe
        </button>
        <button class="button is-primary" @click="changeApplicantStatus('no')">
          No
        </button>
        <button class="button is-primary" @click="changeApplicantStatus('uncategorised')">
          Uncategorised
        </button>
        <button class="button is-primary" @click="changeApplicantStatus('archived')">
          Archived
        </button>
      </div>
      <table class="table">
        <th>Date</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Role</th>
        <th>Position</th>
        <th>Email Sent</th>
        <th>Archive</th>
        <tbody>
        <tr v-for="applicant in filteredByCategory" :key="applicant.id" :class="getFollowUpClass(applicant.follow_up)">
          <td>{{ formatDate(applicant.created_at) }}</td>
          <td>
            <router-link v-if="!applicant.deleted_at" :to="{ name: 'joinus-applicant', params: { id: applicant.id } }">{{ applicant.name }}</router-link>
            <span v-else>{{ applicant.name }}</span>
          </td>
          <td>{{ applicant.email }}</td>
          <td>{{ applicant.mobile }}</td>
          <td>{{ applicant.role }}</td>
          <td>{{ applicant.position }}</td>
          <td>{{ applicant.email_response }}</td>
          <td>
            <button v-if="!applicant.deleted_at" @click="archiveApplicant(applicant.id)" class="button is-danger is-small">Archive</button>
            <span v-else class="has-text-danger">Archived</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import format from "date-fns/format";
import UserForm from "./UserForm.vue";

export default {
  components: {UserForm},
  methods: {
    formatDate(date) {
      return format(new Date(date), "dd/MM/yy");
    },

    getFollowUpClass: function(followUpStatus) {
      return followUpStatus === 'definitely' ? 'definitely' : followUpStatus === 'maybe' ? 'maybe' : followUpStatus === 'no' ? 'discarded' : '';
    },

    async changeApplicantStatus(status) {
      await this.$store.dispatch("loadJoinUsApplicants", status)
    },

    async archiveApplicant(id) {
      try {
        const response = await axios.delete(`/api/delete-applicant/${id}`);
        if (response.status === 204) {
          console.log('Applicant successfully deleted');
          this.$store.dispatch('removeApplicant', id); // Dispatch the action to update state
        }
      } catch (error) {
        console.error('Error deleting applicant:', error);
        this.error = error;
      }
    }
  },

  computed: {
    ...mapGetters(['filteredApplicants', 'filteredByCategory']),
    ...mapState({
      loading: state => state.base.loading,
      applicants: state => state.base.applicants,
      userPin: state => state.base.userPin
    }),
  },

  created() {
    this.$store.dispatch('loadJoinUsApplicants', "all")
  }
}
</script>
<style scoped>
.section {
  padding-top: 6rem;
}

.definitely {
  color: darkgreen;
}

.maybe {
  color: #bb6c05;
}

.discarded {
  color: #d3cfcf;
}
</style>