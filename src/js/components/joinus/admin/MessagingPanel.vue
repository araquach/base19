<template>
  <div class="messaging-panel" :class="{ 'is-active': isPanelOpen }">
    <!-- Header Section -->
    <header class="panel is-flex is-align-items-center is-justify-content-space-between">
      <span class="panel-heading has-text-white mb-0">
        Messages with {{ currentApplicant?.name || 'Applicant' }}
         <button class="delete" aria-label="Close messaging panel" @click="closePanel"></button>
      </span>
    </header>

    <!-- Messages Container -->
    <div class="messages-container" ref="messagesContainer">
      <div v-if="loading" class="has-text-centered has-text-grey-lighter">
        Loading messages...
      </div>
      <ul v-else>
        <li
            v-for="message in messages"
            :key="message.id"
            :class="[
      'message-item',
      message.direction === 'i' ? 'inbound' : 'outbound'
    ]"
        >
          <span>{{ message.text }}</span>
          <span class="message-time">{{ formatTime(message.timestamp) }}</span>
        </li>
      </ul>
    </div>

    <!-- Footer Section -->
    <footer class="panel-footer">
      <div class="field has-addons is-fullwidth">
        <div class="control is-expanded">
          <input
              class="input"
              type="text"
              v-model="newMessage"
              @keyup.enter="sendMessage"
              :placeholder="'Send a message to ' + (currentApplicant?.name || 'Applicant') + '...'"
          />
        </div>
        <div class="control">
          <button
              class="button is-primary"
              @click="sendMessage"
              :disabled="!newMessage.trim()"
          >
            Send
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    ...mapState({
      isPanelOpen: (state) => state.messaging.isPanelOpen,
      messages: (state) => state.messaging.messages,
      loading: (state) => state.messaging.loading,
      currentApplicant: (state) => state.base.applicant, // Access from base.js
    }),
  },
  methods: {
    ...mapActions(["fetchMessages", "sendMessageToServer", "closePanel", "openPanel", "connectSSE"]),
    async sendMessage() {
      if (!this.newMessage.trim()) return;

      try {
        await this.sendMessageToServer({
          applicantId: this.currentApplicant.id,
          text: this.newMessage.trim(),
        });
        this.newMessage = "";
        this.scrollToBottom();
      } catch (error) {
        console.error("Failed to send message:", error);
        alert("Error sending message. Please try again.");
      }
    },
    formatTime(time) {
      return new Date(time).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
  },

  watch: {
    messages() {
      this.scrollToBottom();
    },
  },

  mounted() {
    this.connectSSE()
  }
};
</script>