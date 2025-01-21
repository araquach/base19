import axios from 'axios';

export const state = {
    isPanelOpen: false,
    messages: [],
    loading: null,
};

export const mutations = {
    SET_PANEL_OPEN(state, isOpen) {
        state.isPanelOpen = isOpen;
    },
    SET_MESSAGES(state, messages) {
        state.messages = messages;
    },
    SET_LOADING(state, status) {
        state.loading = status;
    },
    ADD_MESSAGE(state, message) {
        state.messages.push(message);
    },
};

export const actions = {
    openPanel({ commit }) {
        commit("SET_PANEL_OPEN", true);
    },

    closePanel({ commit }) {
        commit("SET_PANEL_OPEN", false);
    },

    async fetchMessages({ commit, rootState }) {
        try {
            const applicant = rootState.base.applicant; // Adjust if modules are used
            if (!applicant || !applicant.id) {
                throw new Error("Applicant or applicant ID is missing.");
            }
            const response = await axios.get(`/api/messages/${applicant.id}`);
            commit('SET_MESSAGES', response.data);
        } catch (error) {
            console.error("Error fetching messages:", error.message);
        }
    },

    async sendMessageToServer({ commit, rootState }, { text }) {
        try {
            const applicant = rootState.base.applicant;
            if (!applicant?.id) {
                throw new Error("No applicant selected.");
            }

            const response = await axios.post("/api/send-recruit-message", {
                text,
                applicant_id: applicant.id, // Ensure the applicant ID is sent
            });

            // Commit the response data to the messages array
            commit("ADD_MESSAGE", response.data);
        } catch (error) {
            console.error("Failed to send message:", error.message);
            throw error; // Propagate error for UI handling
        }
    },

    connectSSE({ commit }) {
        const eventSource = new EventSource('/api/stream/messages');

        eventSource.onmessage = (event) => {
            const message = JSON.parse(event.data);
            commit("ADD_MESSAGE", message);
        };

        eventSource.onerror = (error) => {
            console.error("SSE connection error:", error);
            eventSource.close(); // Optionally handle reconnection
        };
    }
};