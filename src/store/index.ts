import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex)

type RootState = {

  recordList: RecordItem[],
}

const store = new Vuex.Store({
  state: {
    recordList:[]
  } as RootState,
  mutations: {
    fetchRecords(state){
      state.recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
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
