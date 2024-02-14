import axios from 'axios'
import { format } from 'date-fns'

const today = new Date()

export const state = {
    userPin: window.localStorage.getItem('userPin') || "",
    hideOffers: false,
    newsItems: [],
    endDate: "29/02/24",
    applicants: [],
    applicant: {},
    showAllApplicants: false,
    loading: true
}

export const getters = {
    userName: state => {
        switch(state.userPin) {
            case "1234":
                return "Layla"
            case "4321":
                return "Jimmy"
            default:
                return null
        }
    },

    salonName: state => {
        switch(state.applicant.salon) {
            case 1:
                return 'Jakata';
            case 2:
                return 'PK';
            case 3:
                return 'Base';
            default:
                return 'Not defined';
        }
    },

    filteredApplicants: state => {
        if (state.showAllApplicants) {
            return state.applicants.sort((a, b) => b.id - a.id);
        } else {
            let unselectedGroup = state.applicants
                .filter(applicant => applicant.follow_up === '')
                .sort((a, b) => b.id - a.id);

            let definitelyGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'definitely')
                .sort((a, b) => b.id - a.id);

            let maybeGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'maybe')
                .sort((a, b) => b.id - a.id);

            return [...unselectedGroup, ...definitelyGroup, ...maybeGroup];
        }
    }
}

export const mutations = {
    SET_NEWS_ITEMS (state, newsItems) {
        state.newsItems = newsItems
    },

    SET_USER_PIN(state, payload) {
        if (typeof payload === 'string' && (payload === '1234' || payload === '4321')) {
            state.userPin = payload;
            window.localStorage.setItem('userPin', payload);  // Save the PIN in the localStorage
        } else {
            state.userPin = null;
            window.localStorage.removeItem('userPin');  // If the PIN is not valid, remove it from the localStorage
        }
    },

    SET_JOIN_US_APPLICANTS (state, applicants) {
        state.applicants = applicants
    },

    SET_APPLICANT(state, applicant) {
        state.applicant = applicant
    },

    UPDATE_APPLICANT(state, payload) {
        state.applicant = payload
    },

    SET_LOADING(state, status) {
        state.loading = status
    }
}

export const actions = {
    loadNewsItems ({ commit }) {
        axios
            .get('/api/news-items')
            .then(response => response.data.slice(0, 3))
            .then(newsItems => {
                commit('SET_NEWS_ITEMS', newsItems)
            })

    },

    loadJoinUsApplicants ({ commit }) {
        axios
            .get('/api/joinus-applicants')
            .then(response => response.data)
            .then(applicants => {
                commit('SET_JOIN_US_APPLICANTS', applicants)
            })
    },

    fetchApplicant({commit}, id) {
        commit('SET_LOADING', true)
        return axios
            .get(`/api/joinus-applicant/${id}`)
            .then(response => {
                commit('SET_APPLICANT', response.data)
                commit('SET_LOADING', false)
            })
            .catch(error => {
                console.log(error)
                commit('SET_LOADING', false)
            });
    },

    updateApplicant({ commit, state, getters }, { applicant, newNote }) {
        // Add the new note to the applicant's notes array if it exists
        if (newNote) {
            const user = getters.userName
            const notes = applicant.notes || [];
            const created = format(new Date(), "dd/MM/yy")
            notes.push(`${user} | ${created}: ${newNote}`)
            applicant.notes = notes;
        }

        return axios
            .put(`/api/joinus-applicant`, applicant)
            .then(response => {
                // Update the state with the modified applicant
                commit('UPDATE_APPLICANT', applicant);
            })
            .catch(error => {
                console.log(error);
            });
    }
}