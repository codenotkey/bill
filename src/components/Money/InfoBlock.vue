<template>
  <div>
    <div class="infoCard">
      <div class="resentCard">
        <div class="useType">
          <span>最近使用</span>
          <span>展开▼</span>
        </div>
        <ul class="typeIcon">
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
        </ul>
        <ul class="typeIcon">
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
          <li>
            <img src="@/assets/image/餐饮.png">
            餐饮
          </li>
        </ul>
      </div>
      <div class="timeCard">
        <span>时间</span>
        <input type="text" placeholder="星期天 21/3/4 上午11:20">
      </div>
      <div class="remarkCard">
        <span>备注</span>
        <input type="text" placeholder="填写备注信息">
      </div>
      <div class="optionBtn">
        <button>
          保存
        </button>
        <button>
          再记一笔
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";
.infoCard{
  @extend%cardStyle;
  padding: 8px;
  z-index: 10;
  margin-top: -30px;
  position: relative;
  background: #f9fafb;
}
.resentCard{
  @extend%cardStyle;
  .useType{
    font-family:'FZYH',serif;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span:nth-child(2){
      font-size: 15px;
      color: $brandColor;
    }
  }
  .typeIcon{
    font-family: inherit;
    display: flex;
    justify-content: space-between;
    li{
      display: flex;
      flex-direction: column;
      color: $textColor1;
    }
    img{
      width: 28px;
      padding: 10px 0;
    }
  }
}
.timeCard{
  @extend%cardStyle;
  span:nth-child(1){
    padding-right: 12px;
  }
}
.remarkCard{
  @extend%cardStyle;
  span:nth-child(1){
    padding-right: 12px;
  }
}
.optionBtn{
  //position: absolute;
  bottom: 0;
  margin-top: 30px;
  button:nth-child(1){
    background: #50a582;
    color: white;
    width: 55vw;
    font-size: 20px;
    padding: 14px 40px;
    border-radius: 20px;
    margin-right: 5vw;
  }
  button:nth-child(2){
    border: 1px #50a582 solid;
    color: #50a582;
    background: white;
    width: 34vw;
    font-size: 20px;
    padding: 14px;
    border-radius: 20px;
  }
}
</style>
