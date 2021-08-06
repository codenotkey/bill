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
store.state.budgetData.totalMoney
store.state.budgetData.sTime
store.state.budgetData.eTime
store.state.monthResult = store.state.recordList.filter(r =>dayjs(r.createdAt).isAfter(dayjs(store.state.budgetData.sTime)))
console.log(store.state.monthResult);

for (let i=0 ;i<store.state.monthResult.length; i++){
  store.state.totalSpend +=parseFloat(store.state.monthResult[i].amount)
}
let typeData = {}
for (let i=0 ;i<store.state.monthResult.length; i++){
  let temp =store.state.monthResult[i].type
  // @ts-ignore
  typeData[temp] = 1
}
console.log(store.state.totalSpend);
//获取当月数据
// @ts-ignore
store.state.budgetData.remainMoney=parseFloat(store.state.budgetData.totalMoney)-store.state.totalSpend
console.log(store.state.budgetData.remainMoney);

store.state.budgetData.totalMoney

// 当月类型数据
let arr= []
for (let i = 0; i < store.state.monthResult.length; i++) {
  arr.push({name:store.state.monthResult[i].type,value:store.state.monthResult[i].amount})
}
console.log(arr);
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
console.log(arr1);
// for (let i = 1; i < arr.length; i++) {
//   let map = clone(arr[i])
//   console.log('i的值'+i);
//   console.log(map);
//   arr[i]=[]
//   for (let j=0 ; j<arr1.length;j++){
//     console.log('j的值'+j);
//     if(map.name === arr1[j].name){
//       arr1[j].value+= parseFloat(map.value)
//     }else{
//       arr1.push(map)
//     }
//   }
// }


export  default store
