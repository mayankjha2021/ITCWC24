//nav animation started
var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function () {
   /* gsap.to("#nav-bottom",{
        height:"21vh"
    })*/ /*it is good but it is better to use timeline
     in gsap so that it will work one by one */
    let  t1 = gsap.timeline()

     t1.to("#nav-bottom",{
        height:"21vh"
     })
     t1.to(".nav-part2 h5",{
        display:"block"
     })
     t1.to(".nav-part2 h5 span",{
         y:0,
         duration:0.3,
         stagger:0.1
     })
})
nav.addEventListener("mouseleave",function () {
    
      let t1 = gsap.timeline()

      t1.to(".nav-part2 h5 span",{
          y:25,
          duration:0.2,
          stagger:0.1
      })
      t1.to(".nav-part2 h5",{
        display:"none",
        duration:0.05
     })
     t1.to("#nav-bottom",{
        height:0,
        duration:0.2
     })
 })
 //nav animation completed

