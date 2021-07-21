<template>
    <ContentTemplate >
      <TallyBlock></TallyBlock>
      <InfoBlock></InfoBlock>
    </ContentTemplate>
</template>

<script>
import TallyBlock from '@/components/Money/TallyBlock'
import InfoBlock from '@/components/Money/InfoBlock'
export default {
  name: 'Money',
  components: { InfoBlock, TallyBlock }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/myscss.scss";

</style>
