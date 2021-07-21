<template>
  <div>
    <div class="outlay">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
        <li>其他</li>
      </ul>
      <div>
        <input type="number" placeholder="0.00">
      </div>
      <div class="outType">
        <img src="@/assets/image/微信支付.png">
        支付方式
      </div>
    </div>
    <div class="numKey">
      <div class="tool">
        <ul>
          <li>支出</li>
          <li>收入</li>
          <li>其他</li>
        </ul>
        <div class="furl"><Icon name="向下"></Icon></div>
      </div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>C</button>
      <button>确定</button>
    </div>
  </div>
</template>

<script lang="ts">
// import Component from "vue-class-component";
//
// @Component
//   export default  class TallyBlock extends Vue{
//
// }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";
.outlay{
  padding-top: 3vh;
  padding-left: 3vw;
  padding-bottom: 4vh;
  background: $outlayColor;
  border-radius:$border-radius20 $border-radius20 $border-radius20 $border-radius20;
  ul{
    display: flex;
    align-items: center;
    li{
      font-family:'FZYH-509R',serif;
      padding: 0px 10px 8px 10px;
      color: #84c0a8;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    &.selected{
       font-family:'FZYH-510M',serif;
       font-size: 20px;
       color: #ffffff;
     }
    &.selected::after{
       content: '';
       width: 14px;
       height: 1px;
       border: 2px solid;
       border-radius: 2px;
       position: absolute;
       bottom: 0;
     }
    }
  }
input{
  padding: 12px 0;
  font-size: 44px;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  height: 40px;
  width: 100vw;
  background: transparent;
  color: #84c0a8;
  &::-webkit-input-placeholder { /* WebKit browsers */
   color: #84c0a8;
   font-family: 'FZYH-510M', serif;
 }
}
.outType{
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family:'FZYH-509R',serif;
  padding-top: 16px;
  padding-bottom: 20px;
  padding-left: 10px;
    > img{
      width: 20px;
    }
  }
}
.numKey{
  position: absolute;
  bottom: 0;
  left: 0;
  background: #e6eaec;
  color: #3e4445;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .tool{
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .furl{
      float: right;

    }
    li{
      display: inline-block;
      padding: 0 4px;
      position: relative;
    }
    li::after{
      content: '  ';
      //padding-top: 10px;
      margin-left: 10px;
      width: 14px;
      height: 1px;
      border: 2px solid;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  button{
    white-space: nowrap;
    border-radius: 12px;
    background: #ffffff;
    color: #3e4445;
    width: 22.5%;
    font-size: 24px;
    padding: 10px 10px;
    margin: 4px;
  }
}
</style>
