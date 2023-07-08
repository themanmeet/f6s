<script>

import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['currentUser']),
    },
    data() {
      return {
        messageInput: '',
      };
    },
    methods: {
      ...mapActions(['addReply']),
      sendReply() {
        if (this.messageInput) {
          this.addReply({
            id: Math.random()*100,
            from: this.currentUser,
            message: this.messageInput,
            date: `${new Date()}`,
        });
        
        // botReply
        let botUser = JSON.parse(JSON.stringify(this.currentUser));
        botUser.id = 25;
        setTimeout(() => {
          this.addReply({
            id: Math.random()*100,
            from: botUser,
            message: 'Did they end up driving to the seaside and sleeping in the sun until they got severe sunburn like we did?',
            date: `${new Date()}`,
        });
        }, 4000);

        this.messageInput = '';
        }
      },
    },
  };

</script>

<template>
 <div class="compose-area">
    <textarea name="" id="" class="message" rows="1"
    placeholder="Type a message..."
    v-model="messageInput"
    ></textarea>
    <button class="send-message" @click="sendReply">
        <img src="../assets/plane.svg" alt="Image"  width="30" />
    </button>
</div>
</template>
<style scoped>
.compose-area{display: flex; align-items: center; margin-top: 15px;}
.message{width: 100%; box-sizing: border-box; min-height: 24px; max-height: 90px; border: 1px solid #dddddd; border-radius: 8px; padding: 8px; font-family: inherit;}
.send-message{width: 60px; min-width: 60px; display: inline-flex; justify-content: center; align-items: center; margin-left: 12px; background: none; border: none;}
</style>