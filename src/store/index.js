import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      id: -1,
      name: "",
      mail: "",
      lineid: ""
    },
    selectedProject: {
      project_id: -1,
      project_user_id: -1
    },
    selectedPhase: {
      phase_id: -1
    },
    selectedTask: {
      task_id: -1,
      task_name: "",
      task_progress: 0
    },
    phaseReloadHook: {
      hook: false
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getSelectedProject(state) {
      return state.selectedProject;
    },
    getSelectedPhase(state) {
      return state.selectedPhase;
    },
    getSelectedTask(state) {
      return state.selectedTask;
    },
    getPhaseReloadHook(state) {
      return state.phaseReloadHook;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
    },
    setSelectedProject(state, payload) {
      state.selectedProject = payload.selectedProject;
    },
    setSelectedPhase(state, payload) {
      state.selectedPhase = payload.selectedPhase;
    },
    setSelectedTask(state, payload) {
      state.selectedTask = payload.selectedTask;
    },
    setPhaseReloadHook(state, payload) {
      state.phaseReloadHook = payload.phaseReloadHook;
      console.log("PhaseReloadHook called");
    }
  }
})

export default store