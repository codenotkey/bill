<template>
    <div>
<!--      <optionAlter :typeList=tags  fieldName="标签名" font-color="#fff"></optionAlter>-->
      <Statistics my-index="1"></Statistics>
    </div>
</template>

<script lang="ts">
import OptionAlter from "@/components/optionAlter.vue";
import Vue from "vue";
import Component from "vue-class-component";
import Statistics from "@/views/Budget.vue";
@Component({
  components:{Statistics, OptionAlter,}
})
export default class Labels extends Vue {
  tags:string[]= ['支出','收入','其他']
}
</script>

<style scoped>

</style>
