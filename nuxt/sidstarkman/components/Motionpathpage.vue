<template>
  <div class="segment">
    <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">

      <path id="path" fill="transparent" stroke="black"
          d="M505.493,8.679 C512.491,-10.32 404.662,67.04 477.681,66.049 552.665,66.049 484.087,123.535 510.099,151.538 543.094,185.532 458.703,173.277 455.52,207.75 447.522,294.368 485.579,305.568 492.579,282.58"/>
      <!-- <g id="rect"> -->
        <!-- <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:rgb(157, 144, 0);
              stop-opacity:0" />
              <stop offset="100%" style="stop-color:rgb(117, 134, 0);stop-opacity:1" />
            </radialGradient>
          </defs> -->
          <circle class="ball ball01" id="ball01" r="20" cx="50" cy="100"></circle>

          <!-- <ellipse width="85" height="30" cx="200" cy="70" rx="42" ry="23" fill="url(#grad1)" /> -->
      <!-- </g> -->
    </svg>

  </div>
</template>

<script>
export default {

  // props:{
  //   svgPath: String
  // },
  mounted() {

   this.$gsap.to('#ball01', {
     scrollTrigger:{
       trigger: "#svg",
       start: "top top",
       endTrigger: "#endofpages",
       end:"center bottom",
       pinSpacing: true,
       scrub: true
     },
     // duration: 5,
     // repeat: 12,
     // repeatDelay: 1,
     // yoyo: true,
     // ease: "power1.inOut",
     motionPath:{
       path: "#path",
       align: "#path",
       // autoRotate: true,
       alignOrigin: [0.5, 0.5]
     }, duration:4 }, 0)

   }

}
</script>
<style media="screen">
.segment{
 position: fixed;
 width: 100%;
 height: 100%;
 top: 0;
 z-index: -9;
}
svg {
  overflow: visible;
  height: 100%;
  /* Fix Safari rendering bug */
  transform: translateZ(0);
}
</style>
