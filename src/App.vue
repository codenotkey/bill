<template>
  <div id="app">
    <router-view/>
<!--    <NavTab class="nav_tab"></NavTab>-->
  </div>
</template>

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
.nav_tab{
  display: flex;
  justify-content: space-around;
  position: absolute;
  border: 1px solid gray;
  bottom: 0;
  width: 100%;
}
#app {
  height: 100vh;
  font-size: 16px;
  font-family: FZYH-509R,serif;
  //font-family: 'FZYH-510M', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
