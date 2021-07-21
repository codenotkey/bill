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
  </div>
</template>

<script lang="js">

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
</style>
