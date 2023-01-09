<template lang="html">
  <div>
    <nuxt-content :document="doc"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const doc = await $content('currentwork').fetch()
    return {doc}
  },
  mounted(){
    console.log(doc)
  }
}
</script>

<style lang="css" scoped>
</style>
