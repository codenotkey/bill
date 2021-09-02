<template>
  <div class="altBud">
    <van-field v-model="value" label="预算" placeholder="输入预算" class="input"/>
    <van-cell title="选择日期区间" :value="this.date" @click="show = true"  class="input" />
    <van-calendar first-day-of-week="1" v-model="show"  type="range" @confirm="onConfirm" color="#3247d3" :style="{ height: '500px' }"   />
    <button class="btn" @click="sendBudget">确认提交</button>
  </div>
</template>

<script>
import 'vant/lib/button/style';
import 'vant/lib/calendar/style';
import 'vant/lib/cell/style';
import dayjs from "dayjs";
export default {
  name: 'AltBudget',
  props:['showOverlay'],
  data() {
    return {
      date: '',
      show: false,
      value: '',
      showAlt:false,
      start:'',
      minDate: new Date(2021, 7, 1),
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.start = start
      this.end = end
      this.date = `${this.formatDate(start)} 至 ${this.formatDate(end)}`;
      // console.log(this.start);
    },
    sendBudget(){
      if(this.value === '' ){
        window.alert('没有输入预算')
      }else if(this.date ===''){
        window.alert('没有输入时间')
      }else {
        // this.show = false;
        let budgetData = {
          sTime:dayjs(this.start).format('YYYY-MM-DD'),
          eTime:dayjs(this.end).format('YYYY-MM-DD'),
          totalMoney:this.value,
          remainMoney:this.value
        }
        this.$emit('update:showOverlay',false)
        this.$store.commit('saveBudget',budgetData)
        window.alert('提交成功')
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/style/myscss.scss";
.altBud{
  //background: #e9ebee;
  //margin-top: 10vh;
}
.input{
  @extend%cardStyle;
  font-size:18px;
  padding: 20px;
}
.btn{
  @extend%cardStyle;
  font-size:18px;
  color: $brandColor;
  //width: 100%;
  float: right;
}
</style>
