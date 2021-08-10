<template>
    <ContentTemplate >
      <TallyBlock :value.sync="record.amount"   @update:value="getBillData"></TallyBlock>
      <InfoBlock @update:value="submitSpendingData" @submit="submitSpendingData" ></InfoBlock>
    </ContentTemplate>
</template>

<script lang="ts">
// @ts-ignore
import TallyBlock from '@/components/Money/TallyBlock'
// @ts-ignore
import InfoBlock from '@/components/Money/InfoBlock'
import Vue from "vue";
import { Watch,Component} from 'vue-property-decorator';
// @ts-ignore
const recordList: Record[]= JSON.parse(window.localStorage.getItem('recordList') || '[]');

type info = {
  type:'',
  note:'',
  date:''
}

@Component({
  components: {TallyBlock, InfoBlock},
})

export default class Money extends Vue{
  record: RecordItem ={
    spendOrIncome:'',
    type: '',
    notes: '',
    amount: '', // 数据类型 object | string
    createdAt: undefined,  // 类 / 构造函数
  }
  get recordList() {
    return this.$store.commit('fetchRecords')
  }
  @Watch('record')
  onRecordListChange() {

  }
  getBillData(value:string){

  }
  submitSpendingData(value: info){
    this.record.type = value.type
    this.record.notes = value.note
    // @ts-ignore
    this.record.createdAt = value.date
    this.record.spendOrIncome = 'spend'
    if(this.record.amount === ''){
      window.alert('今天用了多少钱？')
    }
    else if(this.record.amount !== ''){
      // @ts-ignore
      const record2: Record = JSON.parse(JSON.stringify(this.record))
      this.$store.commit('createRecord',record2)
      window.alert('成功记账💧')
      // location.reload();
      // console.log(record2);


    }
  }
}
</script>

<style lang="scss" scoped>

</style>
