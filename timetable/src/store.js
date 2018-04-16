// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    campus: '서울',
    major: 'OO학과',
    secondMajor: '',
    thirdMajor: '',
    grade: 1
  },
  getters: {
    getCampus: function (state) {
      return state.campus
    },
    getMajor: function (state) {
      return state.major
    },
    getGrade: function (state) {
      return state.grade
    }
  },
  mutations: {
    setCampus: function (state, payload) {
      state.campus = payload
      return state.campus
    },
    setMajor: function (state, payload) {
      state.major = payload
      return state.major
    },
    setGrade: function (state, payload) {
      state.grade = payload
      return state.grade
    }
  }
})
