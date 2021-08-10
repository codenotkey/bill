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
      state.budgetData =JSON.parse(window.localStorage.getItem('budgetData') || '{}')
      // console.log(state.budgetData.totalMoney);
    },
    saveBudget(state,value){
      state.budgetData = value
      window.localStorage.setItem('budgetData',JSON.stringify(state.budgetData))
    }
  },

  actions: {
  },
  modules: {
  }
})

store.commit('fetchBudget')
store.commit('fetchRecords')
// store.state.budgetData.totalMoney
// store.state.budgetData.sTime
// store.state.budgetData.eTime

//获取当月消费记录
store.state.monthResult = store.state.recordList.filter(r =>dayjs(r.createdAt).isAfter(dayjs(store.state.budgetData.sTime)))
//获取当月消费总额
for (let i=0 ;i<store.state.monthResult.length; i++){
  store.state.totalSpend +=parseFloat(store.state.monthResult[i].amount)
}

//计算当月余额并存入
// @ts-ignore
store.state.budgetData.remainMoney=parseFloat(store.state.budgetData.totalMoney)-store.state.totalSpend
store.commit('saveBudget',store.state.budgetData)



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
