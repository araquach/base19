import {routes} from "../../routes"

const state = {
    teamMembers: [],
    teamMember: {}
}

const getters = {
    teamMembers: state => state.teamMembers,
}

const mutations = {
    SET_TEAM_MEMBERS (state, teamMembers) {
        state.teamMembers = teamMembers
    },

    SET_TEAM_MEMBER (state, teamMember) {
        state.teamMember = teamMember
    }
}

const actions = {
    loadTeamMembers ({ commit }) {
        axios
            .get('/api/team')
            .then(r => r.data)
            .then(teamMembers => {
                commit('SET_TEAM_MEMBERS', teamMembers)
            })
    },

    loadTeamMember ({ commit }) {
        axios
            .get('/api/team/' + routes.currentRoute.params.slug)
            .then(r => r.data)
            .then(teamMember => {
                commit('SET_TEAM_MEMBER', teamMember)
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}