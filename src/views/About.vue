<template>
  <div class="about">
    <water-ball :per="this.per"></water-ball>
  </div>
</template>
<script lang="ts">
import WaterBall from "@/components/waterBall.vue";
export  default {
  name:'about',
  components: {WaterBall},
  data(){
    return{
      per:0.19
    }
  }
}

</script>
