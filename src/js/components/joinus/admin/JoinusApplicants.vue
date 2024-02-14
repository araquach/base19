<template>
  <div>
    <div v-if="!userPin" class="section">
      <UserForm/>
    </div>
    <div v-if="userPin" class="section">
      <h1 class="title has-text-white">Applicants</h1>
      <table class="table">
        <th>Date</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Role</th>
        <th>Position</th>
        <tbody>
        <tr v-for="applicant in filteredApplicants" :key="applicant.id" :class="getFollowUpClass(applicant.follow_up)">
          <td>{{ formatDate(applicant.created_at) }}</td>
          <td><router-link :to="{ name: 'joinus-applicant', params: { id: applicant.id } }">{{ applicant.name }}</router-link></td>
          <td>{{ applicant.email }}</td>
          <td>{{ applicant.mobile }}</td>
          <td>{{ applicant.role }}</td>
          <td>{{ applicant.position }}</td>
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
    }
  },

  computed: {
    ...mapGetters(['filteredApplicants']),
    ...mapState({
      loading: state => state.base.loading,
      applicants: state => state.base.applicants,
      userPin: state => state.base.userPin
    }),
  },

  created() {
    this.$store.dispatch('loadJoinUsApplicants')
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