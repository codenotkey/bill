import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex)

type RootState = {
  recordList: RecordItem[],
  budgetData:budgetData
}

const store = new Vuex.Store({
  state: {
    recordList:[],
    budgetData:{
      sTime:'',
      eTime:'',
      totalMoney:'',
      remainMoney:''
    }
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

// store.commit('fetchRecords')
// console.log(store.state.recordList);
export  default store
