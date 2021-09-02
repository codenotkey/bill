<template>
  <div>
    <div class="infoCard">
      <div class="resentCard">
        <div class="useType">
          <span>最近使用</span>
          <span @click="show" >{{ initType.typeText }}<icon name="展开" :style="{transform:'rotate('+initType.typeDeg+')'}" ></icon></span>
        </div>
        <ul class="typeIcon" :style="{height:initType.resentCardHeight}">
          <li v-for="(item, i) in typeList" :key="i" @click="selectType(item) , toggle(i)" :class="{'active':i===initType.typeIndex}">
            <icon :name=item></icon>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="timeCard">
        <span>时间</span>
        <input type="datetime-local"  placeholder="星期天 21/3/4 上午11:20" v-model="info.date">
      </div>
      <div class="remarkCard">
        <span>备注</span>
        <input type="text" placeholder="填写备注信息" v-model="info.note" required>
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
  typeList = ['餐饮','饮料','服饰','交通','医药','红包','购物','基金','电影','水果','房租','教育']
  info = {
    type:'',
    note:'',
    date:''
  }
  selected:boolean=false
  initType = {
    resentCardHeight :'57px',
    typeIndex: -1,
    typeText:'展开',
    typeDeg :'0deg',
  }

  @Prop() readonly value!: string;
  showMore = false

  toggle(index:number) {
    this.initType.typeIndex = index
  }
  selectType(item:string) {
    this.info.type = item
    this.selected=!this.selected
    // console.log(item);
  }
  show(){
    if(this.initType.resentCardHeight ==='57px'){
      this.initType.typeText = '收起'
      this.initType.resentCardHeight = '114px'
      this.initType.typeDeg = '180deg'
    }else{
      this.initType.resentCardHeight ='57px'
      this.initType.typeText = '展开'
      this.initType.typeDeg = '0deg'
    }
  }
  sendInfo(){
    if(this.info.date === '' && this.info.type ===''){
      window.alert('时间和类型没有选择！😶')
    }
    else if(this.info.date === ''){
      window.alert('希望你没有忘记时间！ 🤨')
    }else if(this.info.type === ''){
      window.alert('这笔钱花哪了？ 🤑')
    }
    else{
      this.$emit('submit', this.info)
      this.initType.typeIndex = -1
    }

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
      transition: all .3s ease-in-out;
    }
  }
  .typeIcon{
    font-family: inherit;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 6px 0;
    //width: 360px;
    height: 57px;
    overflow: hidden;
    transition: all .3s ease-in-out;
    li{
      font-family: FZYH,serif;
      white-space: nowrap;
      margin: 7px 12px;
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
      &.active{
        color: $brandColor;
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
  white-space: nowrap;
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
