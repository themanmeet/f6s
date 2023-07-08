<script>
import Message from './Message.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    Message
  },
  computed: {
    ...mapState(['conversation', 'currentUser']),
    ...mapGetters(['getConversation']),
    updatedConversation() {
      return this.getConversation;
    }
  },
};
</script>

<template>
  <div class="conversation-wrapper">
    <Message v-for="message in JSON.parse(updatedConversation)" :key="message.id" :message="message" :currentUser="JSON.parse(currentUser)" />
  </div>
</template>

<style scoped>
.conversation-wrapper {
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
}
</style>
