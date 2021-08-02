<template>
  <div class="parent">
    <div class="content" v-bind:style="{background:currentTheme.bgColor[currentThemeIndex]}">
      <div class="title">
        <router-link to="/">
          <icon name="返回" class="icon"></icon>
        </router-link>
        <h1>我的预算</h1>
        <span>2021年{{this.$store.state.budgetData.sTime}}-{{this.$store.state.budgetData.eTime}}</span>
        <span>今天：{{this.now}}</span>
      </div>
      <div class="picData">
        <div id="liquidfill-chart" style="width:100%; height:350px;background: transparent"></div>
      </div>
      <div class="budget">
        <div>
          <span>总预算</span>
          {{ this.$store.state.budgetData.totalMoney }}
        </div>
        <span>&nbsp;</span>
        <div>
          <span>剩余预算</span>
          {{ this.$store.state.budgetData.remainMoney }}
        </div>
      </div>
      <button v-bind:style="{color:currentTheme.buttonColor[currentThemeIndex]}" @click="showOverlay = true">更改我的预算</button>
      <van-overlay :show="showOverlay" @click="showOverlay = false">
        <div class="wrapper" @click.stop>
          <test></test>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
import Test from "@/views/test";
let echarts = require('echarts')
import "echarts-liquidfill";
import dayjs from "dayjs";

// let a
// let per
export default {
  name: 'Statistics',
  components: {Test},
  data() {
    return {
      charts: '',
      per: 0,
      currentThemeIndex: 0,
      currentTheme: {
        buttonColor: ['#65a7a2', '#f3ae87', '#ef7371'],
        bgColor: ['repeating-linear-gradient(#4ea28d,#72a9ac)', 'repeating-linear-gradient(#e9b586,#f4a275)', 'repeating-linear-gradient(#e88b84,#f47676)'],
        chartData: []
      },
      showAlt:false,
      showOverlay: false,
      now:''
    }
  },
  mounted() {
    this.now = dayjs().format('M月D日')
    this.$store.commit('fetchBudget')
    // console.log(this.$store.state.budgetData.totalMoney);
    this.per = this.balance(parseFloat(this.$store.state.budgetData.totalMoney), parseFloat(this.$store.state.budgetData.remainMoney))
    this.currentTheme.chartData = [
      [ {value: this.per, itemStyle: {normal: {color: '#749fa3'}}},
        {value: this.per-0.1, itemStyle: {normal: {color: '#72a9ad'}}},
        {value: this.per-0.15, itemStyle: {normal: {color: '#5ba599'}}},
        {value: this.per-0.2, itemStyle: {normal: {color: '#4ea28d'}}} ],

      [ {value: this.per, itemStyle: {normal: {color: '#f5a276'}}},
        {value: this.per - 0.1, itemStyle: {normal: {color: '#e59c67'}}},
        {value: this.per - 0.15, itemStyle: {normal: {color: '#e4a876'}}},
        {value: this.per - 0.2, itemStyle: {normal: {color: '#e9b586'}}} ],

      [ {value: this.per, itemStyle: {normal: {color: '#f47676'}}},
        {value: this.per - 0.1, itemStyle: {normal: {color: '#e88b84'}}} ],
    ]
    this.alterTheme(this.per)
    this.myDraw('liquidfill-chart')
  },
  methods: {
    balance(allMoney, remainMoney) {
      return Math.floor((remainMoney / allMoney) * 100) / 100;
    },
    alterTheme(value) {
      if (value > 0.5) {
        this.currentThemeIndex = 0
      } else if (0.2 < value && 0.5 > value) {
        this.currentThemeIndex= 1
      } else {
        this.currentThemeIndex = 2
      }
    },
    myDraw(id) {
      this.charts = echarts.init(document.getElementById('liquidfill-chart'), {}, {renderer: 'svg'})
      let option = {
        series: [{
          type: 'liquidFill',
          data: this.currentTheme.chartData[this.currentThemeIndex],
          outline: {
            show: false
          },
          label: {
            normal: {
              textStyle: {
                fontFamily: 'FZYH,sans-serif',
                color: '#ffffff',
                insideColor: '#fff',
                fontSize: 50
              }
            }
          }
        }],
      };
      this.charts.setOption(option);
    },
    altBudget(){
      this.showAlt =!this.showAlt
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/myscss";

h1 {
  font-weight: normal;
}
.parent{
  position: relative;
}
.content {
  position: relative;
  //z-index: -1;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  flex-direction: column;
  //background: repeating-linear-gradient(#4ea28d,#72a9ac);
  //background: repeating-linear-gradient(#e9b586,#f4a275);
  background: repeating-linear-gradient(#e88b84, #f47676);

  .title {
    align-self: flex-start;
    color: white;
    font-weight: lighter;

    h1 {
      padding-bottom: 0.2em;
    }

    span {
      color: #ece3e3;
      display: block;
      margin-bottom: 6px;
    }

    a {
      display: block;
      margin-bottom: 20px;
    }
  }

  .picData {
    align-self: center;
    width: 400px;
    height: 400px;

  }

  .budget {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
      font-size: 1.7rem;
      color: white;
    }

    & > span {
      display: inline-block;
      border: 2px solid white;
      height: 5px;
      width: 1px;
      opacity: 60%;
    }
    & > div > span {
      display: block;
      color: white;
      opacity: 60%;
      font-size: 1rem;
    }
  }
  button {
    @extend %cardStyle;
    font-size: 1.5rem;
    //color:#65a7a2;
    //color:#f3ae87;#65a7a2;#ef7371;
    color: #ef7371;
    margin-top: 5vh;

  }
  .wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 30%;
  }
}

</style>
