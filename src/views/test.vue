<template>
  <div class="altBud">
    <van-field v-model="value" label="预算" placeholder="输入预算" class="input"/>
    <van-cell title="选择日期区间" :value="this.date" @click="show = true"  class="input" />
    <van-calendar v-model="show" type="range" @confirm="onConfirm" color="#3247d3" :style="{ height: '500px' }"   />
    <button class="btn" @click="sendBudget" >确认提交</button>
  </div>
</template>

<script>
import 'vant/lib/button/style';
import 'vant/lib/calendar/style';
import 'vant/lib/cell/style';
export default {
  name: 'test',
  data() {
    return {
      showOverlay: false,
      date: '',
      show: false,
      value: '',
      showAlt:false,
      start:''
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.start = this.formatDate(start)
      this.end = this.formatDate(end)
      this.date = `${this.formatDate(start)} 至 ${this.formatDate(end)}`;
      // console.log(this.date);
    },
    sendBudget(){
      if(this.value === '' ){
        window.alert('没有输入预算')
      }else if(this.date ===''){
        window.alert('没有输入时间')
      }else {
        this.show = false;
        let budgetData = {
          sTime:this.start,
          eTime:this.end,
          totalMoney:this.value,
          remainMoney:this.value
        }
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
