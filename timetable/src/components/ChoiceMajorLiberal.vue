<template>
  <div class="choice-ml">
    <!--이친구도 자식컴포넌트로 넣어버리자 일관성있게 -->
    <transition name="fade" mode="out-in">
    <div id="choice-ml" v-on:click="selectMajor" v-if="choiceMl">
      <div id="title">
        <h2>어느 과목 먼저 볼래요?</h2>
      </div>
      <div id="major">
        <h1>전공</h1>
      </div>
      <div id="liberal">
        <h1>교양</h1>
      </div>
    </div>
    </transition>

    <!-- 전공, 학년선택 뷰-->
    <div id="container">
      <keep-alive>
        <transition name="fade" mode="out-in">
          <component v-on:view="changeView($event)" v-bind:is="currentView"></component>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MajorSelect from './MajorSelect.vue'
import Grade from './Grade.vue'

export default {
  components: {
    'major-select': MajorSelect,
    'grade': Grade
  },
  data () {
    return {
      choiceMl: true,
      currentView: null
    }
  },
  methods: {
    // 전공-교양 선택 뷰에서 전공입력 뷰로 넘어갑니다
    selectMajor: function () {
      this.choiceMl = false
      this.currentView = 'major-select'
    },
    changeView: function (view) {
      this.currentView = view
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*this css code has to be changed later */
#major, #liberal {
    display: inline-block;
    width: 48vw;
    height: 80vh;
    border-right: 1px solid lightgray;
}
#major:hover{
  background: #fce4ec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
#liberal:hover{
  background: #e1f5fe;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}

h1{
  padding-top: 40vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-transition {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
