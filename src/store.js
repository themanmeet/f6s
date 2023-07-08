// store.js
import { createStore } from 'vuex';
import { conversation, currentUser } from './api/mock';

const store = createStore({
  state: {
    conversation: conversation,
    currentUser: currentUser
  },
  mutations: {
    updateConversation(state, newConversation) {
      state.conversation = [...state.conversation, newConversation];
    }
  },
  actions: {
    addReply({ commit }, newConversation) {
      commit('updateConversation', newConversation);
    }
  },
  getters: {
    getConversation(state) {
      return state.conversation;
    }
  }
});

export default store;
