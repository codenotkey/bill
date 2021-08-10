<template>
  <div>
      <div id="liquidfill-chart"  style="width:100%; height:100%;background: transparent;"></div>
  </div>
</template>

<script>
let echarts = require('echarts')
import "echarts-liquidfill";
export default {
  name: 'waterBall',
  props:['per','fontSize'],
  mounted() {
    // console.log(this.per);
    this.alterTheme(this.per)
    this.currentTheme.chartData =[
      [ {value: this.per, itemStyle: {normal: {color: '#749fa3'}}},
        {value: this.per-0.1, itemStyle: {normal: {color: '#72a9ad'}}},
        {value: this.per-0.15, itemStyle: {normal: {color: '#5ba599'}}},
        {value: this.per-0.2, itemStyle: {normal: {color: '#4ea28d'}}} ],
      [ {value: this.per, itemStyle: {normal: {color: '#f5a276'}}},
        {value: this.per - 0.1, itemStyle: {normal: {color: '#e59c67'}}},
        {value: this.per - 0.15, itemStyle: {normal: {color: '#e4a876'}}},
        {value: this.per - 0.2, itemStyle: {normal: {color: '#e9b586'}}}],
      [ {value: this.per, itemStyle: {normal: {color: '#f47676'}}},
        {value: this.per - 0.1, itemStyle: {normal: {color: '#e88b84'}}}]
    ]
    this.myDraw()
  },
  data(){
    return {
      currentThemeIndex:0,
      currentTheme: {
        buttonColor: ['#65a7a2', '#f3ae87', '#ef7371'],
        bgColor: ['repeating-linear-gradient(#4ea28d,#72a9ac)', 'repeating-linear-gradient(#e9b586,#f4a275)', 'repeating-linear-gradient(#e88b84,#f47676)'],
        chartData: []
      }
    }
  },
  methods:{
    myDraw() {
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
                fontSize: this.fontSize
              }
            }
          }
        }],
      };
      this.charts.setOption(option);
    },
    alterTheme(value) {
      if (value >= 0.5) {
        this.currentThemeIndex = 0
      } else if (0.2 <= value && 0.5 > value) {
        this.currentThemeIndex= 1
      } else {
        this.currentThemeIndex = 2
      }
    }
  }
}
</script>

<style scoped>

</style>
