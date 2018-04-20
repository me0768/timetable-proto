<template>
  <div id="simpleModal" class="modal" v-bind:style="{'display': display }" v-on:click.self="modalClose">
    <div class="modal-content">
      <span class="closeBtn" @click="modalClose">&times;</span>
      <p>Hello ...i m a modal</p>
    </div>
  </div>
<!--End of Modal -->
</template>

<script>
/* eslint-disable*/

export default {
  name: 'card',
  data () {
      return {
        subjectName: '논리적사고',
        professorName: '최원배',
      }
  },
  methods: {
    modalClose: function () {
      this.$emit('display', 'none');
    }
  },
  props: {
    display: {
      type: String
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
  background-color: #f4f4f4;
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
