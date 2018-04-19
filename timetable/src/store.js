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
    lectures: [
      {'isuGrade': '1', 'banNo': '2', 'isuGbNm': '전공핵심', 'yungyukNm': '영역없음', 'suupNo2': '12005', 'haksuNo': 'PPL1005', 'chgGwamokNm': '', 'gwamokNm': '사회윤리사상사', 'suupMsg': '', 'abekGb': 'N', 'hakwiNm': '학사', 'daepyoGangsaNm': '김성호', 'hakjeom': '3', 'ironSigan': '3', 'silsSigan': '0', 'suupTypeNm': '일반', 'jehanInwon': '60/60', 'suupTimes': '화(15:00-16:30)\n화(16:30-18:00)', 'suupRoomNms': '서울 융합교육관 강의실(705-202),서울 융합교육관 강의실(705-202)', 'isuJehanYn': 'O', 'suupTypeGb': '', 'banSosokNm': '정책학과', 'gnjSosokNm': '정책학과'},
      {'isuGrade': '1', 'banNo': '1', 'isuGbNm': '전공기초(필수)', 'yungyukNm': '영역없음', 'suupNo2': '12007', 'haksuNo': 'PPL1016', 'chgGwamokNm': '', 'gwamokNm': '정치학원론', 'suupMsg': '', 'abekGb': 'N', 'hakwiNm': '학사', 'daepyoGangsaNm': '송병권', 'hakjeom': '3', 'ironSigan': '3', 'silsSigan': '0', 'suupTypeNm': '일반', 'jehanInwon': '61/60', 'suupTimes': '목(13:00-14:30)\n금(13:00-14:30)', 'suupRoomNms': '서울 융합교육관 강의실(705-201),서울 융합교육관 강의실(705-201)', 'isuJehanYn': 'O', 'suupTypeGb': '영어전용', 'banSosokNm': '정책학과', 'gnjSosokNm': '정책학과'},
      {'isuGrade': '1', 'banNo': '2', 'isuGbNm': '전공기초(필수)', 'yungyukNm': '영역없음', 'suupNo2': '12008', 'haksuNo': 'PPL1016', 'chgGwamokNm': '', 'gwamokNm': '정치학원론', 'suupMsg': '', 'abekGb': 'N', 'hakwiNm': '학사', 'daepyoGangsaNm': '송병권', 'hakjeom': '3', 'ironSigan': '3', 'silsSigan': '0', 'suupTypeNm': '일반', 'jehanInwon': '61/60', 'suupTimes': '목(10:30-12:00)\n금(10:30-12:00)', 'suupRoomNms': '서울 융합교육관 강의실(705-201),서울 융합교육관 강의실(705-201)', 'isuJehanYn': 'O', 'suupTypeGb': 'SMART-F', 'banSosokNm': '정책학과', 'gnjSosokNm': '정책학과'},
      {'isuGrade': '1', 'banNo': '1', 'isuGbNm': '전공기초(필수)', 'yungyukNm': '영역없음', 'suupNo2': '12011', 'haksuNo': 'PPL2011', 'chgGwamokNm': '', 'gwamokNm': '행정학개론', 'suupMsg': '', 'abekGb': 'N', 'hakwiNm': '학사', 'daepyoGangsaNm': '이석환', 'hakjeom': '3', 'ironSigan': '3', 'silsSigan': '0', 'suupTypeNm': '일반', 'jehanInwon': '61/60', 'suupTimes': '월(13:00-14:30)\n금(09:00-10:30)', 'suupRoomNms': '서울 제3법학관 103호,서울 제3법학관 103호', 'isuJehanYn': 'O', 'suupTypeGb': '', 'banSosokNm': '정책학과', 'gnjSosokNm': '행정학과'},
      {'isuGrade': '1', 'banNo': '2', 'isuGbNm': '전공기초(필수)', 'yungyukNm': '영역없음', 'suupNo2': '12012', 'haksuNo': 'PPL2011', 'chgGwamokNm': '', 'gwamokNm': '행정학개론', 'suupMsg': '', 'abekGb': 'N', 'hakwiNm': '학사', 'daepyoGangsaNm': '이석환', 'hakjeom': '3', 'ironSigan': '3', 'silsSigan': '0', 'suupTypeNm': '일반', 'jehanInwon': '85/60', 'suupTimes': '월(14:30-16:00)\n화(11:00-12:30)', 'suupRoomNms': '서울 제3법학관 103호,서울 제3법학관 103호', 'isuJehanYn': 'O', 'suupTypeGb': '', 'banSosokNm': '정책학과', 'gnjSosokNm': '행정학과'}
    ],
    // user가 선택한 강좌 리스트
    userLectures: [
    ]
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
    updateUserLectures: function (state, payload) {
      state.userLectures = payload
      return state.userLectures
    }
  }
})
