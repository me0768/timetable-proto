<template>
  <div id="simpleModal" class="modal" v-bind:style="{'display': display }" v-on:click.self="modalClose">
    <div class="modal-content">
      <span class="closeBtn" @click="modalClose">&times;</span>
      <p>Hello {{ subjectName }}</p>
      <div id="lecture-list" v-for="(lec, index) in lectureList">
        <p> {{ lec.daepyoGangsaNm }} 교수님</p>
        <p> {{ lec.banSosokNm }} </p>
        <p>{{ lec.suupRoomNms }}</p>
        <p>{{ lec.suupTimes }}</p>
        <button id="select-lecture" @click="selectLecture(lec)">선택하기</button>
      </div> 
      
    </div>
  </div>
<!--End of Modal -->
</template>

<script>
/* eslint-disable*/

export default {
  name: 'card',
  computed: {
    lectureList() {
      console.log(this.lecture)
      console.log(this.lecture[this.subjectName])
      console.log("@#@@#")
      return this.lecture[this.subjectName]
    },
    subjectName(){
      return Object.keys(this.lecture)[0]
    }
  },
  data () {
      return {
      }
  },
  methods: {
    modalClose: function () {
      this.$emit('display', 'none')
    },
    selectLecture: function (lecture) {
      this.$emit('lecture', lecture)
      this.$store.commit('addUserLectures', lecture)
    }
  },
  props: {
    display: {
      type: String
    },
    subject: {
      type: String
    },
    lecture: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* modal */
.modal {
  display: none; 
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.3);
}
.modal-content{
  background-color: #dbfdf8;
  margin : 20% auto;
  padding: 20px;
  width: 70%;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
}
.closeBtn{
  color: #ccc;
  float: right;
  font-size: 30px;
}
.closeBtn:hover, .closeBtn:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#lecture-list {
  width: 500px;
  display: inline-block;
  background: white;
}

/* fade effect */
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
