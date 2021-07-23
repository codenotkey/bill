<template>
  <div>
    <ul>
      <li v-for="tag in myType" :key="tag">
        {{tag}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Prop} from "vue-property-decorator";

export default class optionAlter extends Vue{
  props:{
    myType:{           //这个就是父组件中子标签自定义名字
      type:Array,
      required:true,
      default: ()=>[]
    }
  }

  checkIndex = 0
  toggle(index){
    this.checkIndex = index
  }
}
</script>

<style scoped>
li{
  display: block;
}
</style>
