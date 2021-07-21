<template>
  <div>
    <slot >
      {{name}}
    </slot>
  </div>
</template>

<script>
export default {
  props: ['name'],
  name: 'NavTab'
}
</script>

<style scoped>

</style>
