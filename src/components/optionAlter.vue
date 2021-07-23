<template>
  <div>
    <ul>
      <li v-for="(item,index) in typeList" :key="index"
          :class="{'active':index ===checkIndex }" @click="toggle(index)" v-bind:style="{color: fontColor }" >{{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class optionAlter extends Vue {
  @Prop({required: true}) fieldName!: string;
  @Prop({type: Array, required: true, default: () => []}) typeList: Array
  @Prop({default:'inherit'}) fontColor:string
  checkIndex = 0
  activeColor: 'red'
  styleObject = {
    // color: this.fontColor,
    // fontSize: '13px'
  }
  // cc:'red'
  toggle(index) {
    this.checkIndex = index
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  height: 31px;

  li {
    font-family: 'FZYH-509R', serif;
    padding: 0px 10px 8px 10px;
    color: #84c0a8;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
      font-family: 'FZYH-510M', serif;
      font-size: 20px;
      color: #ffffff;
      transition: 0.2s all ease-in-out;
    }

    &.active::after {
      content: '';
      width: 14px;
      height: 1px;
      border: 2px solid;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      transition: 0.1s all ease-in-out;
    }
  }
}
</style>
