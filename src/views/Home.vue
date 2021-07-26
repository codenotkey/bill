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
        <span>我的预算</span>
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
    <div class="day">
      <div class="dayTitle">
        <div class="today">
          <h3>今天</h3>
          <span>5月10日</span>
        </div>
        <div class="dayData">
          <span>支：1312.00</span>
          <span>收：312.00</span>
        </div>
      </div>
      <ul class="dayList">
        <li class="listContent">
          <div class="listTitle">
            <icon name="交通"></icon>
            交通
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="基金"></icon>
            基金
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="电影"></icon>
            电影
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="红包"></icon>
            红包
          </div>
          <span>53.20</span>
        </li>
      </ul>
    </div>
    <div class="day">
      <div class="dayTitle">
        <div class="today">
          <h3>今天</h3>
          <span>5月10日</span>
        </div>
        <div class="dayData">
          <span>支：1312.00</span>
          <span>收：312.00</span>
        </div>
      </div>
      <ul class="dayList">
        <li class="listContent">
          <div class="listTitle">
            <icon name="交通"></icon>
            交通
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="基金"></icon>
            基金
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="电影"></icon>
            电影
          </div>
          <span>53.20</span>
        </li>
        <li class="listContent">
          <div class="listTitle">
            <icon name="红包"></icon>
            红包
          </div>
          <span>53.20</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default class Money extends Vue {

}

</script>

<style lang="scss" scoped>
@import "@/assets/style/myscss.scss";
.home {
  background: #f1f1f5;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid red;
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
          font-size: 0.9rem;
          .icon{
            height: 22px;
            width: 22px;
            margin-right: 6px;
            color: $brandColor;
          }
        }
      }
    }
  }

}
</style>
