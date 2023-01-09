<template lang="html">
  <div class="">
  <h1 class="header-section">Scroll to see a timeline animation</h1>

  <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
    <path class="line01 line" d="M 10 200  600 200" ></path>
    <path class="line02 line" d="M 10 400  600 400" ></path>
    <path class="line03 line" d="M 10 600  600 600" ></path>
    <path class="line04 line" d="M 10 800  600 800" ></path>
    <path class="line05 line" d="M 10 1000  600 1000" ></path>
    <!-- <text class="text01" x="30" y="190">2018</text>
    <text class="text02" x="30" y="390">2019</text>
    <text class="text03" x="30" y="590">2020</text> -->

    <path class="theLine" id="theLine"
          d="M -5,0
             Q 450 230 300 450
             T 130 750
             Q 100 850 300 1000
             T 150 1200"
          fill="none" stroke="white" stroke-width="10px" />



    <circle class="ball ball01" id="ball01" r="20" cx="50" cy="100"></circle>
    <circle class="ball ball02" r="20" cx="278" cy="201"></circle>
    <circle class="ball ball03" r="20" cx="327" cy="401"></circle>
    <circle class="ball ball04" r="20" cx="203" cy="601"></circle>

  </svg>
  <text class="text01" x="30" y="190">2018</text>
  <text class="text02" x="30" y="390">2019</text>
  <text class="text03" x="30" y="590">2020</text>

  </div>

</template>

<script>
export default {
    mounted() {
    //   this.$gsap.defaults({ease: "none"});
    //
    this.$gsap.defaults({ease: "none"});

    let pulses = this.$gsap.timeline({
      defaults: {
        scale: 2,
        autoAlpha:1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }
      // scrollTrigger: {
      //       trigger: "#svg",
      //       scrub: true,
      //       start: "top center",
      //       end: "bottom center"
      // }

    });
    this.$gsap.to(".ball02, .text01", {}, 0.84)
    this.$gsap.to(".ball03, .text02", {}, 1.36)
    this.$gsap.to(".ball04, .text03", {}, 1.92)
    //
    // const main = this.$gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#svg",
    //     scrub: true,
    //     start: "top center",
    //     end: "bottom center"
    //   }
    // })

    //// this.$gsap.from(".theLine", {drawSVG:0, duration:4}, 0)
    let tl = this.$gsap.timeline({
      scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          // start: "top top",
              start: "top center",
              end: "bottom center",
          // end: "+=100%"
        }
    })
    tl.to(".ball01", {autoAlpha:1, duration:0.05})
    tl.to("#ball01",{
      // scrollTrigger:
      // {
      //       trigger: "#svg",
      //       scrub: true,
      //       start: "top center",
      //       end: "bottom center"
      // },
      motionPath:
      {
      path:".theLine",
      align:".theLine",
      alignOrigin:[0.5, 0.5],
    }, duration:4}, 0)
      // }
    // this.$gsap.add(pulses, 0)
  // })
  }
}

</script>

<style lang="css" >
html,body {
	height: 400vh;
  background: grey;
  color: white;
}

.line{
  stroke: black;
}
{/*

.header-section {
  margin: 100px auto 0;
}

svg {
  max-width: 600px;
  overflow: visible;
  margin-top: 60vh;
}

.ball {
  fill: white;
  visibility: hidden;
}

.line {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}
text {
  fill: white;
  font-size: 15px;
  font-family: "Signika Negative", sans-serif;
  visibility: hidden;
} */}
</style>
