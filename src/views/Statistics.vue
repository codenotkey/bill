<template>
  <div class="content">
    <div class="title">支出发布</div>
    <div id="main"  style="width:100%; height:260px; z-index: 0"></div>
    <div class="monthData">
      <div class="data">
        <span>支出笔数</span>
        {{ this.$store.state.monthResult.length }}
      </div>
      <div class='myBorder'></div>
      <div class="data">
        <span>共计支出</span>
        ￥{{ this.$store.state.totalSpend }}
      </div>
      <div class='myBorder'></div>
      <div class="data">
        <span>日均支出</span>
        ￥{{ parseInt(this.$store.state.totalSpend/this.dayDiff) }}
      </div>
    </div>
    <div>
      <div class="title">支出分类</div>
      <div id="PieChart" style="width:100%; height:330px;"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import dayjs from "dayjs";
export default {
  name: 'Statistics',
  data(){
    return {
      category:[],
      dottedBase : +new Date(),
      lineData : [],
      lineInfo : [],
      barData : [],
      dayDiff:30
    }
  },
  mounted() {
    for (let i = 0; i <this.$store.state.monthResult.length; i++) {
      this.category.push(dayjs(this.$store.state.monthResult[i].createdAt).format('MM-DD'))
      this.lineData.push(this.$store.state.monthResult[i].amount);
      this.lineInfo.push(this.$store.state.monthResult[i].type)
    }
    this.myDraw()
    this.myDraw2()
    this.dayDiff = dayjs().diff(dayjs(this.$store.state.budgetData.sTime), 'day')
  },
  methods:{
    myDraw(){
      this.charts = echarts.init(document.getElementById('main'), {}, {renderer: 'svg'})
      let option = {
        backgroundColor: '#ffffff',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['line'],
          textStyle: {
            color: '#000000'
          }
        },
        xAxis: {
          data: this.category,
          axisLine: {
            lineStyle: {
              color: '#000000'
            }
          }
        },
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          }
        },
        series: [{
            name: '消费',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            data: this.lineData
          },
         ]
      };
      this.charts.setOption(option);
    },
    myDraw2(){
      this.charts = echarts.init(document.getElementById('PieChart'), {}, {renderer: 'svg'})
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left',
        },
        series: [
          {
            name: '共记消费',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.$store.state.typeTotalList
          }
        ]
      };
      this.charts.setOption(option);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/myscss.scss";
.content{
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  .title{
    font-family: 'FZYH-510M', serif;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: black;
  }
  .monthData{
    z-index: 1;
    @extend %cardStyle;
    background: $brandColor;
    color: white;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    span{
      font-size: 14px;
      opacity: 0.8;
    }
    .data{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      position: relative;
    }
    .myBorder{
      position: relative;
    }
    .myBorder::after{
      content: '';
      position: absolute;
      left: 0;
      height: 1.4rem;
      width:1px;
      border: 1px solid;
      color: white;
      opacity: 0.2;
    }
  }
}

</style>
