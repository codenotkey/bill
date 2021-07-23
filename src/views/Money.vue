<template>
    <ContentTemplate >
      <TallyBlock :value.sync="record.amount"  @billData="getBillData" @update:value="getBillData"></TallyBlock>
      <InfoBlock @update:value="getInfoData" @submit="getInfoData" ></InfoBlock>
<!--      <InfoBlock @submit="getInfoData"></InfoBlock>-->
    </ContentTemplate>
</template>

<script lang="ts">
// @ts-ignore
import TallyBlock from '@/components/Money/TallyBlock'
// @ts-ignore
import InfoBlock from '@/components/Money/InfoBlock'
import Component from "vue-class-component"
import Vue from "vue";
import { Watch } from 'vue-property-decorator';

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

type Record = {
  type: string
  notes: string
  // type: string
  amount: string // 数据类型 object | string
  createdAt?: Date  // 类 / 构造函数
}

@Component({
  components:{TallyBlock,InfoBlock}
})
export default class Money extends Vue{
  record: Record = {
    type: '',
    notes: '',
    amount: '',
    createdAt:undefined
  }
  recordList: Record[] = recordList
  @Watch('record')
  onRecordListChange() {

  }
  getBillData(value:string){
    // this.record.amount = value
    // console.log(this.record.amount);
  }
  getInfoData(value: object){
    this.record.type = value.type
    this.record.notes = value.note
    this.record.createdAt = new Date()
    const record2: Record = JSON.parse(JSON.stringify(this.record))
    this.recordList.push(record2)
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/myscss.scss";

</style>
