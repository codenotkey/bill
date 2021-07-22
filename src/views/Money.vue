<template>
    <ContentTemplate >
      <TallyBlock :value.sync="record.amount"  @billData="getBillData"></TallyBlock>
      <InfoBlock></InfoBlock>
    </ContentTemplate>
</template>

<script lang="ts">
// @ts-ignore
import TallyBlock from '@/components/Money/TallyBlock'
// @ts-ignore
import InfoBlock from '@/components/Money/InfoBlock'
import Component from "vue-class-component"
import Vue from "vue";

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

type Record = {
  type: string
  notes: string
  // type: string
  amount: string // 数据类型 object | string
  // createdAt?: Date  // 类 / 构造函数
}

@Component({
  components:{TallyBlock,InfoBlock}
})
export default class Money extends Vue{
  record: Record = {
    type: '', notes: '', amount: ''
  };
  getBillData(value:string){
    this.record.amount = value
    // console.log(this.record.amount);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";

</style>
