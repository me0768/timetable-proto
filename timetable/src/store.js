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
    // user가 선택한 강좌 리스트
    userLectures: [
    ],
    subjectLecture: [],
    majorList: []
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
    },
    getSubjectLecture1: function (state) {
      console.log(state.subjectLecture[0])
      console.log('^^')
      return state.subjectLecture[0]
    },
    getSubjectLecture2: function (state) {
      return state.subjectLecture[1]
    },
    getSubjectLecture3: function (state) {
      return state.subjectLecture[2]
    },
    getSubjectLecture4: function (state) {
      return state.subjectLecture[3]
    }
  },
  mutations: {
    setMajorList: function (state, payload) {
      state.majorList = payload
      return state.majorList
    },
    updateCampus: function (state, payload) {
      state.campus = payload
      return state.campus
    },
    updateMajor: function (state, payload) {
      state.major = payload
      return state.major
    },
    updateGrade: function (state, payload) {
      state.grade = payload
      return state.grade
    },
    updateLectures: function (state, payload) {
      state.lectures = payload
      return state.lectures
    },
    addUserLectures: function (state, payload) {
      if (state.userLectures.length === 0) {
        return state.userLectures.push(payload)
      }
      for (var i = 0; i < state.userLectures.length; i++) {
        if (state.userLectures[i] !== payload) {
          state.userLectures.push(payload)
        }
      }
      return state.userLectures
    },
    createSubjectLecture: function (state, payload) {
      state.lectures = payload
      let grade = 1
      while (true) {
        const gradeObj = {}
        // set에 담아 중복된 과목을 없애기
        const set = new Set()
        const lectures = state.lectures
        console.log(state.subjectLecture)
        console.log(payload)
        console.log('lectures')
        for (let i in lectures) {
          if (parseInt(lectures[i].isuGrade) === grade) {
            set.add(lectures[i].gwamokNm)
            console.log(lectures[i].gwamokNm)
            console.log(lectures[i].isuGrade)
            console.log('added/')
          }
        }
        const subjectArr = Array.from(set)

        // 학년-과목-강좌 자료구조에 담기
        const subjectObjArr = []

        for (let i in subjectArr) {
          const lectureArr = []
          for (let j in lectures) {
            if (subjectArr[i] === lectures[j].gwamokNm) {
              lectureArr.push(lectures[j])
              console.log(lectureArr)
              console.log('lecureArr')
            }
          }
          const subjectObj = {}
          subjectObj[subjectArr[i]] = lectureArr
          subjectObjArr.push(subjectObj)
        }

        gradeObj[grade] = subjectObjArr
        state.subjectLecture.push(gradeObj)
        grade += 1
        console.log('grade')
        console.log(state.subjectLecture)
        console.log(grade)
        if (grade > 4) {
          break
        }
      }
      console.log('return:')
      console.log(state.subjectLecture)
      return state.subjectLecture
    }
  }
})
