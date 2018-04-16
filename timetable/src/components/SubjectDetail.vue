<template>
  <div class="modal__overlay" role="dialog" aria-labelledby="modal__title" aria-describedby="modal_desc" id="modal_dialog">
        <div class="modal__wrap">
            <label for="modal__trigger">&#10006;</label>
            <h2 id="modal__title">논리적 사고 </h2>
            <p id="modal__desc"> {{professorName}} 교수님</p>
            <p>수 11:00~13:00, 목 11:00~13:00</p>
            <p>정책학과</p>
        </div>
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
      professorName: '최원배'
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
