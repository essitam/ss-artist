<template lang="html">
  <div class="">
    <div class="">
      <div class="">
        2014
      </div>
    </div>
      <div class="" v-for="md in filterResult('2014', 'year')">
        2014
        <nuxt-content :document="md"/>
      </div>
      <div class="" v-for="md in filterResult('2015', 'year')">
        2015
        <nuxt-content :document="md"/>
      </div>
      <div class="" v-for="md in filterResult('2016', 'year')">
        <nuxt-content :document="md"/>
      </div>
      <div class="" v-for="md in filterResult('2017', 'year')">
        <nuxt-content :document="md"/>
      </div>
  </div>
</template>

<script>
export default {
    async asyncData ({ $content }) {
      const doc = await $content('archive').fetch()
      return {doc}
    },
    data (){
      return {
        type: 'all',
        collection: [],
        queries: []
      }
    },
    computed: {

    },
    mounted(){
      console.log(this.filtered)
    },
    methods:{
      filterResult(array, query, queryKey){
        return array.filter(item => item[queryKey] === query)
      },
      onRadioSelect (val) {
        if (!this.queries.includes(val)) {
          this.queries.push(val)
        } else {
          // this.queries.splice(this.queries.indexAt)
          // function to remove val from this.queries
        }
      }
    }
}
</script>

<style lang="css" scoped>
html, body{
  background: #ffbb00;
}
</style>

<!--// doc.sort((a, b) => a.slug.localeCompare(b.slug));
// const articles = await this.$content('articles').where({ title: 'Home' }).fetch() -->
