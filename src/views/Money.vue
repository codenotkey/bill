<template>
    <ContentTemplate >
      <TallyBlock @billData="getBillData"></TallyBlock>
<!--      <InfoBlock></InfoBlock>-->
    </ContentTemplate>
</template>

<script lang="ts">
import TallyBlock from '@/components/Money/TallyBlock'
import InfoBlock from '@/components/Money/InfoBlock'
import Component from "vue-class-component"
import Vue from "vue";

@Component({
  components:{TallyBlock,InfoBlock}
})
export default class Money extends Vue{
  getBillData(value:string){
    console.log(value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";

</style>
