<template lang="html">
  <div class="">
    <Header/>
      <!-- <div class="topPage"> -->
        <!-- header -->
        <!-- Sidney Starkman -->
        <div class="">
          <!-- eventual radio -->
        </div>
      <div id="startofpage" class="">
      </div>
        <div class="segment">
          <svg width="100%" height="70%" viewBox="-20 0 557 190" id="svg">
            <path id="path" class="theLine" fill="transparent" stroke="black" d="M508.375,19.891 C515.371,0.904 395.221,36.455 455.129,78.195 512.049,117.853 454.506,138.642 480.514,166.664 513.509,200.658 536.071,186.486 511.924,230.144 469.827,306.254 514.994,265.027 485.618,334.863 "/>
            <!-- <g id="rect">
              <defs>
                  <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:rgb(157, 144, 0);
                    stop-opacity:0" />
                    <stop offset="100%" style="stop-color:rgb(117, 134, 0);stop-opacity:1" />
                  </radialGradient>
                </defs> -->
                <circle class="ball ball01" id="ball01" r="20" cx="50" cy="100"></circle>
            <!-- </g> -->
          </svg>
        </div>
      <div id="scroller">
      </div>
    <div class="archiveSection">
        <div class="year"><b>2022</b></div>
          <div ref="div1" class="" v-for="md in filterResult('2022', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div class="" :class="md.type" v-for="md in filterResult('2021', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div class="">
            20-21
          </div>
          <div ref="div2" class="" v-for="md in filterResult('2020-2021', 'year')">
            <nuxt-content :class="md.type" :document="md"/>
            {{md.name}}
          </div>
          <div class="" v-for="md in filterResult('2020', 'year')">
            <nuxt-content :class="md.type" :document="md"/>
            {{md.name}}
          </div>
          <div class="" v-for="md in filterResult('2019', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
           <div class="" v-for="md in filterResult('2018', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div class="" v-for="md in filterResult('2017', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div class="" v-for="md in filterResult('2016', 'year')">
            <div class="year">2016</div>
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div class="" v-for="md in filterResult('2015', 'year')">
            <nuxt-content :document="md"/>
            {{md.name}}
          </div>
          <div id="endofpages">hello</div>
      </div>
      <div id="endofpages">hello</div>
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
      this.$gsap.defaults({ease: "none"});

      // console.log(this.filtered),
      let tl = this.$gsap.timeline({
        scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            // start: "top top",
                start: "top top",
                  endTrigger: "#endofpages",
                end: "bottom bottom",
                  markers: true,
                  pinSpacing: true
            // end: "+=100%"
          }
      })
      tl.to(".ball01", {autoAlpha:1, duration:0.05})
      tl.to('.ball01', {
        // scrollTrigger:{
        //   trigger: "#svg",
        //   start: "top top",
        //   // startTrigger:"#startostartofpage",
        //   endTrigger: "#endofpages",
        //   end:"center bottom",
        //   // end: "+=100%",
        //   // end: "bottom -50%",
        //   scrub: true,
        //   markers: true,
        //   pinSpacing: true
        // },
        // duration: 5,
        // repeat: 12,
        // repeatDelay: 1,
        // yoyo: true,
        // ease: "power1.inOut",
        motionPath:
        {
          path: "#path",
          align: "#path",
          // autoRotate: true,
          alignOrigin: [0.5, 0.5]
        } }, 0)
    },
    methods:{
      filterResult(query, queryKey){
        return this.doc.filter(item => item[queryKey] === query)
      },
    //   goto(refName) {
    //   var element = this.$refs[refName];
    //   var top = element.offsetTop;
    //
    //   window.scrollTo(0, top);
    // },
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

<style lang="css">
html {
  background-color:orange;
  font-family: 'DM Serif Text', serif;
  /* font-family: 'Durwent'; */
}
.archiveSection{
  /* text-align: center; */
  max-height: 60vh;
  max-width: 60vw;
}
.archiveSection img{
  /* max-height: 10vh; */
  /* max-width: 200px; */
  width: 250px;
}
.topPage{
  font-size:42pt;
}
#scroller{
  /* position: fixed; */
  /* top:0; */
}
</style>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet">

<!--// doc.sort((a, b) => a.slug.localeCompare(b.slug));
// const articles = await this.$content('articles').where({ title: 'Home' }).fetch() -->
