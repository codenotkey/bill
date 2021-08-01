<template>
  <div class="home">
    <div class="expense">
      本月支出（元）
      <h1>6397.10</h1>
    </div>
    <div class="budget">
      <div class="circleData">
        <icon name="速度"></icon>
      </div>
      <div class="bugDataContent">
        <router-link to="labels">我的预算</router-link>
        <div class="bugData">
          <div>
            <h5>本月预算</h5>
            8500
          </div>
          <div>
            <h5>剩余预算</h5>
            5925.40
          </div>
        </div>
      </div>
    </div>
    <div class="day"  v-for="(group,index) in groupList" :key="index">
      <div class="dayTitle">
        <div class="today">
          <h3>{{ beautify(group.title) }}</h3>
          <span>{{ group.title }}</span>
        </div>
        <div class="dayData">
          <span>支：{{ group.total }}</span>
          <span>收：0</span>
        </div>
      </div>
      <ul class="dayList">
        <li class="listContent" v-for="(item,index) in group.items" :key="index">
          <div class="listTitle">
            <icon :name="item.type"></icon>
            <div>
              <span>{{ item.type }}</span>
              <span>{{ itemDate(item.createdAt)}}{{item.notes}}</span>
            </div>
          </div>
          <span>{{ item.amount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import clone from "@/lib/clone";
import dayjs from "dayjs";

@Component
export default class Money extends Vue {
    get groupList(){
      let newList = clone(this.recordList).sort((a,b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
      type Result = { title: string, total?: number, items: RecordItem[] }[]
      const result: Result = [{title: dayjs(newList[0].createdAt).format('MM-DD'), items: [newList[0]]}];
      console.log(newList);
      for(let i = 1 ; i<newList.length; i++){
        const temp = newList[i]
        const last = result[result.length-1]
        if(dayjs(last.title).isSame(dayjs(temp.createdAt).format('MM-DD'),'day')){
          last.items.push(temp)
        }else{
          result.push({title: dayjs(temp.createdAt).format('MM-DD'), items: [temp]})
        }
      }
      console.log(result);
      result.map(group =>{
        group.total = group.items.reduce((sum, item) => {
          return sum + parseFloat(item.amount);
        }, 0);
      })
      return result
    }
    get recordList(){
      return this.$store.state.recordList
    }
    itemDate(string:string){
      return dayjs(string).format('HH:mm')
    }
    beautify(string:string){
      const now = dayjs().format('MM-DD')
      console.log('day is '+ string);
      console.log('now is' + now);
      if(string === now) {
        return '今天'
      }
      else{
        return
      }
    }
    beforeCreate(){
      this.$store.commit('fetchRecords')
    }
    mounted(){
      this.groupList
    }
}

</script>

<style lang="scss" scoped>
@import "@/assets/style/myscss.scss";
.home {
  background: #f1f1f5;
  display: flex;
  flex-direction: column;
  padding: 5px;
  .expense{
    margin: 10px;
    color: $textColor1;
    font-size: 0.9rem;
    h1{
      //font-weight:blod;
      color: #3e4445;
      font-family: 'FZYH-510M', serif;
    }
  }
  .budget{
    margin:10px 5px;
    background: #65a7a2;
    border-radius: 20px;
    min-height: 13vh;
    padding: 10px 20px;
    display: flex;
    .icon{
      height: 65px;
      width: 65px;
      color: white;
    }
    .circleData{
      margin-right: 20px;
    }
    .bugDataContent{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span{
        color: white;
        font-size: 1rem;
        font-family: 'FZYH-510M', serif;
        letter-spacing:0.5px
      }
      .bugData{
        padding-top: 5px;
        display: flex;
        justify-content: space-between;
        h5{
          color: #f6f4f4;
          letter-spacing:0.5px
        }
        div{
          margin-right: 40px;
        }
      }
    }
  }
  .day{
    padding:2px 5px 4px;
    .dayTitle{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .today{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
          font-weight: bold;
          padding-right: 10px;
        }
        span{
          font-size: 14px;
          color: $brandColor;
        }
      }
      .dayData{
        display: flex;
        flex-direction: column;
        color: $textColor1;
        text-align: right;
        font-size: 0.8rem;
      }
    }
    .dayList{
      @extend %cardStyle;
      padding: 5px 20px;
      li:last-child::after{
          height: 0px;
      }
      li:last-child{
        padding-bottom: 0;
      }
      margin-top: 5px;
      .listContent{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        margin-bottom: 5px;
        position: relative;
        >span{
          font-family: 'FZYH-510M', serif;
          color: $outlayColor;
        }
        &::after{
          content: '';
          bottom: 0;
          right: 0;
          width: 91%;
          height: 1px;
          border-radius: 50%;
          //border: 1px solid;
          background: #e0dada;
          position: absolute;
          opacity: 0.8;
          color: #3e4445;
        }
        .listTitle{
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          font-size: 1rem;
          .icon{
            height: 26px;
            width: 26px;
            margin-right: 6px;
            color: $brandColor;
          }
          >div{
            text-align: left;
            display: flex;
            flex-direction: column;
            span:nth-child(2){
              font-size: 0.8rem;
              color: $textColor1;
            }
          }
        }
      }
    }
  }

}
</style>
