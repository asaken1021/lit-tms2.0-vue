import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    state: {
      name: "",
      token: ""
    },
    selectedProject: {
      project_id: -1,
      project_user_id: -1,
      project_progress: 0.0
    },
    selectedPhase: {
      phase_id: -1
    },
    selectedTask: {
      task_id: -1,
      task_name: "",
      task_progress: 0
    }
  },
  getters: {
    getState(state) {
      return state.state;
    },
    getSelectedProject(state) {
      return state.selectedProject;
    },
    getSelectedPhase(state) {
      return state.selectedPhase;
    },
    getSelectedTask(state) {
      return state.selectedTask;
    }
  },
  mutations: {
    setState(state, payload) {
      state.state = payload.state;
    },
    setSelectedProject(state, payload) {
      state.selectedProject = payload.selectedProject;
    },
    setSelectedPhase(state, payload) {
      state.selectedPhase = payload.selectedPhase;
    },
    setSelectedTask(state, payload) {
      state.selectedTask = payload.selectedTask;
    }
  }
})

export default store