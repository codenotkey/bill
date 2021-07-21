<template>
  <div>
    <div class="outlay">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
        <li>其他</li>
      </ul>
      <div>
        <input type="text" placeholder="0.00" :value=output>
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
      <button @click="inputNum">7</button>
      <button @click="inputNum">8</button>
      <button @click="inputNum">9</button>
      <button @click="deleteNum" class="operateNum"><icon name="删除"></icon> </button>
      <button @click="inputNum">4</button>
      <button @click="inputNum">5</button>
      <button @click="inputNum">6</button>
      <button class="operateNum">+</button>
      <button @click="inputNum">1</button>
      <button @click="inputNum">2</button>
      <button @click="inputNum">3</button>
      <button class="operateNum">-</button>
      <button @click="inputNum">.</button>
      <button @click="inputNum">0</button>
      <button @click="clear" class="operateNum">C</button>
      <button @click="submitData" class="submit">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class TallyBlock extends Vue {
  output = ''
  inputNum(event:MouseEvent){
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    if (this.output.length === 16) { return; }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
  }
  deleteNum(){
    console.log('cc');
    if (this.output.length ===1){
      this.output = ''
    }else{
      this.output = this.output.slice(0,-1)
    }

  }
  clear(){
    this.output = ''
  }
  submitData(){
    console.log(this.output)
    this.$emit('billData',this.output)
    this.output=''
  }
}
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
  color: #ffffff;
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
  .submit{
    background: $brandColor;
    color: white;
  }
  .operateNum{
    background: #d6d9df;
  }
}
</style>
