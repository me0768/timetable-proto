<template>
  <div class="card" v-bind:class="{ 'selected' : isSelected }">
    <div id="image">
      <!-- <img src="../assets/professor.jpg" alt="professor"> -->
    </div>

    <!--과목 이름/교수님 : 클릭하면 모달창open -->
    <div id="text">
        <span id="subjectName" @click="modalOpen">{{subject}}</span>
        <i class="fa fa-plus" id="add" v-on:click="addAndRemoveItem" aria-hidden="true"></i>
        <p>{{ lecture[subject][0]['daepyoGangsaNm'] }} 교수님</p>
        <subject-detail v-bind:display="display" v-on:display="modalClose($event)"></subject-detail>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import Detail from './SubjectDetail.vue'
export default {
  name: 'card',
  components: {
    'subject-detail' : Detail
  },
  props: {
    //subjects: {
    //  type:Array
    //},
    // subject: {
    //   type:Object
    // },
    lecture: {
      type: Object
    }
  },
  computed: {
    lectures() {
      return this.$store.state.lectures
    },
    subject(){
      return Object.keys(this.lecture)[0]
    }
  },
  data () {
    return {
      isSelected: false,
      display: 'none'
    };
  },
  methods: {
    modalOpen:function () {
      this.display = 'block'
    },
    modalClose: function (display) {
      this.display = display
    },
    addAndRemoveItem: function () {
      this.$emit('lecture', this.subject);
      this.isSelected = !this.isSelected;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  width: 18vw;
  height: 70px;
  background-color: #b5efe9;
  color: #1995ad;
  border-radius: 6px;
  border: 2px solid transparent;
  margin: 3px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.selected {
  border: 2px solid #1995ad;
}
#image {
  grid-column: 1 / span 1;
}
#text {
  grid-column: 2/ span 3;
}
#subjectName{
  cursor: pointer;
}
h3{
  cursor: pointer;
}
p {
  margin: 8px 0;
}
#image > img {
  width: 50px;
  height: 55px;
  border-radius: 50%;
  margin: 10px 10px;
}
#image, #text {
  display: inline-block;
}

#add {
  cursor: pointer;
  position: relative;
  right: -20px;
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
