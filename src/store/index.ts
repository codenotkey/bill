import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import dayjs from "dayjs";

Vue.use(Vuex)

type RootState = {
  recordList: RecordItem[],
  budgetData:budgetData
  monthResult:RecordItem[],
  totalSpend:number,
  typeTotalList:[]
}

const store = new Vuex.Store({
  state: {
    recordList:[],
    budgetData:{
      sTime:'',
      eTime:'',
      totalMoney:'',
      remainMoney:''
    },
    monthResult:[],
    totalSpend:0,
    typeTotalList:[]
  } as RootState,
  mutations: {
    fetchRecords(state){
      state.recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]')
      if(state.recordList.length===0){
        let temp = {spendOrIncome: "spend", type: "饮料", notes: " ", amount: "88", createdAt: "2021-09-02T16:22"}
        state.recordList.push(clone(temp))
      }
    },
    createRecord(state,record){
      state.recordList.push(clone(record))
      store.commit('saveRecord');
    },
    saveRecord(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    },
    deleteRecord(state,index){

    },
    updateRecord(state,newInfo){

    },
    fetchBudget(state){
      state.budgetData =JSON.parse(window.localStorage.getItem('budgetData') || '{"sTime":"2021-09-01","eTime":"2021-09-30","totalMoney":"5000","remainMoney":4912}')
      // console.log(state.budgetData.totalMoney);
    },
    saveBudget(state,value){
      state.budgetData = value
      window.localStorage.setItem('budgetData',JSON.stringify(state.budgetData))
    },
    currentData(state){
      //获取当月消费记录
      state.monthResult = store.state.recordList.filter(r =>dayjs(r.createdAt).isAfter(dayjs(store.state.budgetData.sTime)))
      state.totalSpend=0
      //获取当月消费总额
      for (let i=0 ;i<store.state.monthResult.length; i++){
        state.totalSpend +=parseFloat(store.state.monthResult[i].amount)
      }
      console.log('spend')
      console.log(state.totalSpend);
      //计算当月余额并存入

      // @ts-ignore
      state.budgetData.remainMoney=parseFloat(store.state.budgetData.totalMoney)-store.state.totalSpend
      store.commit('saveBudget',store.state.budgetData)
    }
  },

  actions: {
  },
  modules: {
  }
})

store.commit('fetchBudget')
store.commit('fetchRecords')
store.commit('currentData')






// 当月类型数据
let arr= []
for (let i = 0; i < store.state.monthResult.length; i++) {
  arr.push({name:store.state.monthResult[i].type,value:store.state.monthResult[i].amount})
}

let map = {}, arr1 = [];
for (let i = 0; i < arr.length; i++) {
  let ai = arr[i];
  // @ts-ignore
  if (!map[ai.name]) {
    arr1.push({
      name: ai.name,
      value: ai.value
    });
    // @ts-ignore
    map[ai.name] = ai;
  } else {
    for (let j = 0; j < arr1.length; j++) {
      let dj = arr1[j];
      if (dj.name == ai.name) {
        dj.value = (parseFloat(dj.value) + parseFloat(ai.value)).toString();
        break;
      }
    }
  }
}

// @ts-ignore
store.state.typeTotalList = arr1


export  default store
