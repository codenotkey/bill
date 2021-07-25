<template>
  <div>
    <div class="infoCard">
      <div class="resentCard">
        <div class="useType">
          <span>最近使用</span>
          <span @click="show">展开<icon name="展开" ></icon></span>
        </div>
        <ul class="typeIcon" >
          <li v-for="(item, i) in typeList" :key="i" @click="selectType(item)" >
            <icon :name=item></icon>
            {{item}}
          </li>
        </ul>
        <ul class="typeIcon" v-show=showMore>
          <li v-for="(item, i) in typeList2" :key="i" @click="selectType(item)">
            <icon :name=item></icon>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="timeCard">
        <span>时间</span>
        <input type="text"  placeholder="星期天 21/3/4 上午11:20" v-model="info.date">
      </div>
      <div class="remarkCard">
        <span>备注</span>
        <input type="text" placeholder="填写备注信息" v-model="info.note">
      </div>
      <div class="optionBtn">
        <button @click="sendInfo">
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
export default class InfoBlock extends Vue {
  typeList = ['餐饮','饮料','服饰','交通','医药','红包']
  typeList2 = ['购物','基金','电影','水果','房租','教育']
  info = {
    type:'',
    note:'',
    date:''
  }
  selected:false
  @Prop() readonly value!: string;
  showMore = false
  selectType(item:string) {
    this.info.type = item
    this.selected=!this.selected
    console.log(item);
  }
  show(){
    this.showMore =! this.showMore
  }
  sendInfo(){
    this.$emit('submit', this.info)
    // console.log(this.info)
  }
  @Watch('info')
  onValueChanged(value:object){
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";
.infoCard{
  @extend%cardStyle;
  padding: 8px;
  z-index: 0;
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
    .icon{
      padding-top: 2px;
      color: #d6d9df;
    }
  }
  .typeIcon{
    font-family: inherit;
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    li{
      font-family: FZYH,serif;
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      fill: currentColor;
      color: $textColor1;
      font-size: 16px;
      .icon{
        width: 1.6em;
        height: 1.6em;
      }
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
