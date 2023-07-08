import { createStore } from 'vuex';
import {conversation, currentUser} from '../src/api/mock';

export default createStore({
  state: {
    conversation: [...conversation],
    currentUser: {...currentUser}
  },
  mutations: {
    ADD_REPLY(state, data) {
      state.conversation.push(data);
    }
  },
  actions: {
    addReply({ commit }, data) {
      commit('ADD_REPLY', data);
    }
  },
  getters: {
    allconversation(state) {
      return state.conversation;
    },
  },
});
