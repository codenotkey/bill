<template>
    <nav>
      <router-link to="/labels" class="item" active-class="selected">
        <Icon name="记账"/>
      </router-link>

      <router-link to="/money" class="item"  active-class="selected">
        <Icon name="统计"/>
      </router-link>

      <router-link to="/statistics" class="item"  active-class="selected">
        <button class="addBill">+</button>
      </router-link>

      <router-link to="/statistics" class="item"  active-class="selected">
        <Icon name="趋势"/>
      </router-link>

      <router-link to="/labels" class="item" active-class="selected">
        <Icon name="个人"/>
      </router-link>
    </nav>
</template>

<script lang="ts">

export default {
  name: 'NavTab'
}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";
  nav{
    //@extend%cardStyle;
    border: none;
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    border-radius: 12px;
    > .item{
      padding: 2px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .icon {
      width: 34px;
      height: 34px;
    }
    > .item.selected {
      fill: currentColor;
      color: #3247d3;
    }
    .addBill{
      background: $brandColor;
      font-size: 40px;
      padding: 5px 32px;
      border-radius: 20px;
      color: white;
    }
  }
</style>
