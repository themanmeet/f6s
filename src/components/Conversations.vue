<script>
import Message from './Message.vue';
import { mapState } from 'vuex';
  
  export default {
      components: {
    Message
  },
    computed: {
      ...mapState(['conversation', 'currentUser']),
    },
  };


</script>

<template>
  <div class="conversation-wrapper">
    <Message v-for="message in conversation" :key="message.id" :message="message" :currentUser="currentUser" />
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
