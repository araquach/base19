import axios from 'axios'
import {format} from 'date-fns'

const today = new Date()

export const state = {
    userPin: window.localStorage.getItem('userPin') || "",
    hideOffers: false,
    newsItems: [],
    endDate: "31/10/24",
    applicants: [],
    applicant: {},
    showAllApplicants: false,
    loading: true,
    sortCriteria: 'all'
}

export const getters = {
    userName: state => {
        switch (state.userPin) {
            case "1234":
                return "Layla"
            case "4321":
                return "Jimmy"
            default:
                return null
        }
    },

    salonName: state => {
        switch (state.applicant.salon) {
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
            return state.applicants.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        } else {
            let unselectedGroup = state.applicants
                .filter(applicant => applicant.follow_up === '')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            let definitelyGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'definitely')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            let maybeGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'maybe')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            return [...definitelyGroup, ...maybeGroup, ...unselectedGroup];
        }
    },

    filteredByCategory: state => {
        if (state.sortCriteria === 'all') {
            let unselectedGroup = state.applicants
                .filter(applicant => applicant.follow_up === '')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            let definitelyGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'definitely')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            let maybeGroup = state.applicants
                .filter(applicant => applicant.follow_up === 'maybe')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            return [...definitelyGroup, ...maybeGroup, ...unselectedGroup];
        } else if (state.sortCriteria === 'uncategorised') {
            return state.applicants
                .filter(applicant => applicant.follow_up === '')
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        } else {
            return state.applicants
                .filter(applicant => applicant.follow_up === state.sortCriteria)
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        }
    }
}

export const mutations = {
    SET_NEWS_ITEMS(state, newsItems) {
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

    SET_JOIN_US_APPLICANTS(state, applicants) {
        state.applicants = applicants
    },

    SET_APPLICANT(state, applicant) {
        state.applicant = applicant
    },

    UPDATE_APPLICANT(state, payload) {
        state.applicant = payload
    },

    SET_LOADING(state, status) {
        state.loading = status;
    },

    SET_SORT_CRITERIA(state, payload) {
        state.sortCriteria = payload;
    }
}

export const actions = {
    loadNewsItems({commit}) {
        axios
            .get('/api/news-items')
            .then(response => response.data.slice(0, 3))
            .then(newsItems => {
                commit('SET_NEWS_ITEMS', newsItems)
            })

    },

    loadJoinUsApplicants({commit}) {
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

    updateApplicant({state, commit, getters}, {id, newNote, followUp}) {
        let updates = {};
        const user = getters.userName;
        if (newNote) {
            const notes = state.applicant.notes || [];
            const created = format(new Date(), "dd/MM/yy");
            notes.push(`${user} | ${created}: ${newNote}`);
            updates.notes = notes
        }

        if (followUp) {
            updates.follow_up = followUp;
        }

        console.log(updates)

        return axios
            .patch(`/api/joinus-applicant/${id}`, updates)
            .then(response => {
                commit('UPDATE_APPLICANT', response.data); // Assuming response.data is the updated applicant
            })
            .catch(error => {
                console.log(error);
            });
    }
}