<template>
  <div id="app">
    <router-view class="content"/>
    <NavTab class="nav_tab" style="" v-show="!($route.path ==='/budget')"></NavTab>
  </div>
</template>


<script>
export default {
  name: 'app',
  // watch:{
  //   console.log(this.$route.path)
  // },
  data(){
    return{
        show:true
    }
  },
  methods:{

  }
}

</script>
<style lang="scss">
@import 'assets/fonts/font.css';
@import "assets/style/reset.css";
@import "assets/style/myscss.scss";

*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,ol{
  list-style: none;
}
body{
background: #f9fafb;
}
a{
  text-decoration: none;
  color: rgb(138, 143, 144);
}
#app {
  font-size: 16px;
  font-family: FZYH-509R,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .nav_tab{
    display: flex;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
    flex: 0 0;
  }
  .content{
    overflow: auto;
    flex-grow: 1;
  }
}

#app::-webkit-scrollbar { width: 0 !important }
</style>
