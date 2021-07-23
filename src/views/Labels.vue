<template>
    <div>
      11
      <option-alter :myType.sync="tags"></option-alter>
    </div>
</template>

<script lang="ts">
import OptionAlter from "@/components/optionAlter.vue";
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components:{OptionAlter}
})
export default class Labels extends Vue {
  tags:Array= ['支出','收入','其他']
}
</script>

<style scoped>

</style>
