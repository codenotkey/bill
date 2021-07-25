<template>
  <div class="content" v-bind:style="{background:currentTheme.bgColor[currentThemeIndex]}">
    <div class="title">
      <router-link to="/">
        <icon name="返回" class="icon"></icon>
      </router-link>
      <h1>我的预算</h1>
      <span>2021年7月10日-8月10日</span>
      <span>今天：7月20日</span>
    </div>
    <div class="picData">
      <div id="liquidfill-chart" style="width:100%; height:350px;background: transparent"></div>
    </div>
    <div class="budget">
      <div>
        <span>总预算</span>
        8500.00
      </div>
      <span>&nbsp;</span>
      <div>
        <span>剩余预算</span>
        6074.00
      </div>
    </div>
    <button v-bind:style="{color:currentTheme.buttonColor[currentThemeIndex]}">更改我的预算</button>
  </div>
</template>

<script>
let echarts = require('echarts')
import "echarts-liquidfill";

// let a
// let per
export default {
  name: 'Statistics',
  data() {
    return {
      charts: '',
      per: 0,
      currentThemeIndex: 0,
      currentTheme: {
        buttonColor: ['#65a7a2', '#f3ae87', '#ef7371'],
        bgColor: ['repeating-linear-gradient(#4ea28d,#72a9ac)', 'repeating-linear-gradient(#e9b586,#f4a275)', 'repeating-linear-gradient(#e88b84,#f47676)'],
        chartData: []
      }
    }
  },
  beforeCreate() {
    // alterTheme(per)
  },
  mounted() {
    this.per = this.balance(8500, 500)
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
  computed:{

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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/myscss";

h1 {
  font-weight: normal;
}

.content {
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
}
</style>
