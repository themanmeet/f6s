<script>
import { currentUser } from '../api/mock';
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['currentUser'])
    },
    data() {
        return {
        messageInput: ''
        };
    },
    methods: {
        sendMessage() {
            this.$store.dispatch('addReply', {
            id: Math.random()*100,
            from: currentUser,
            message: this.messageInput,
            date: `${new Date()}`,
        });
        }
    }
};
</script>

<template>
 <div class="compose-area">
    <textarea name="" id="" class="message" rows="1"


    v-model="messageInput"
    
    ></textarea>
    <button class="send-message" @click="sendMessage">
        <img src="../assets/plane.svg" alt="Image"  width="30" />
    </button>
</div>
</template>
<style scoped>
.compose-area{display: flex; align-items: center; margin-top: 15px;}
.message{width: 100%; box-sizing: border-box; min-height: 24px; max-height: 90px; border: 1px solid #dddddd; border-radius: 8px; padding: 8px; font-family: inherit;}
.send-message{width: 60px; min-width: 60px; display: inline-flex; justify-content: center; align-items: center; margin-left: 12px; background: none; border: none;}
</style>