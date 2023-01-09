<template>
  <div class="">

<div id="startofpage" class="">
</div>
  <div class="segment">
    <svg width="100%" height="80%" viewBox="-20 0 557 190" id="svg">
      <path id="path" fill="transparent" stroke="black" d="M508.375,19.891 C515.371,0.904 395.221,36.455 455.129,78.195 512.049,117.853 454.506,138.642 480.514,166.664 513.509,200.658 536.071,186.486 511.924,230.144 469.827,306.254 514.994,265.027 485.618,334.863 "/>
      <g id="rect">
        <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:rgb(157, 144, 0);
              stop-opacity:0" />
              <stop offset="100%" style="stop-color:rgb(117, 134, 0);stop-opacity:1" />
            </radialGradient>
          </defs>
          <circle class="ball ball01" id="ball01" r="20" cx="50" cy="100"></circle>

          <!-- <ellipse width="85" height="30" cx="200" cy="70" rx="42" ry="23" fill="url(#grad1)" /> -->
      </g>
    </svg>
  </div>
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

    Where can I get some?
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem IpWhat is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ip
<div id="endofpages">

</div>
  </div>
</template>

<script>
export default {
  mounted() {

   this.$gsap.to('#rect', {
     scrollTrigger:{
       trigger: "#svg",
       start: "top top",
       // startTrigger:"#startostartofpage",
       endTrigger: "#endofpages",
       end:"center bottom",
       // end: "+=100%",
       // end: "bottom -50%",
       scrub: 8,
       markers: true,
       pinSpacing: true
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
     } }, 0)

   }

}
</script>
<style media="screen">
html,body{
  font-size:48pt;
}
.segment{
 /* position: fixed; */
 /* width: 100%;
 height: 100%;
 top: 0;
 z-index: -9; */
}
svg {
  /* overflow: visible;
  height: 100%; */
  /* Fix Safari rendering bug */
  /* transform: translateZ(0); */
}
</style>
