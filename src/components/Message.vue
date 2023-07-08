<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    currentUser : {
      type: Object,
    }
  },
  mounted() {
  }
};
</script>

<template>
  <div :class="['chat-group-parent', {'logged-in-user': currentUser?.id == message?.from.id}]">
    <div class="chat-group">
      <div class="chat-user-parent">
        <img src="../assets/user.svg" alt="User" class="chat-user">
      </div>
        <p class="chat-message">{{message.message}}</p>
  </div>
  </div>
</template>
<style scoped>
.chat-group{display: flex; max-width: 60%; align-items: end; margin-top: 20px;}
.chat-message{border-radius: 8px; padding: 15px; background-color: aliceblue;}
.chat-user-parent{width: 48px; height: 48px; min-width: 48px; border: 1px solid #dddddd; border-radius: 50%; padding: 10px;margin-right: 12px;}
.chat-user{width: 100%; display: block;}
.chat-group-parent.logged-in-user .chat-user-parent{order: 2; margin-right: 0; margin-left: 12px;}
.chat-group-parent.logged-in-user{
  display: flex;
    justify-content: end;
}
.chat-group-parent.logged-in-user .chat-message{background-color: #cad8ff;}
</style>