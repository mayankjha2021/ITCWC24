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

 //page2 animation started

 /* var relem = document.querySelector("#right-elem1")
var relemImg = document.querySelector("#right-elem1 img") 

elem.addEventListener("mouseenter",function(){
   relemImg.style.opacity =1
}) */
/* this is good but it will be use for only one img but we have to work on all so we will
   use queryselectorall
*/

 var rightElems = document.querySelectorAll(".right-elem")
  
 rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
      gsap.to(elem.childNodes[3],{
         opacity:1,
         scale:1
      })
      /*here childnodes is elemnts inside each right-elem
       childnodes[1] is h2 inside it,[2]is paragraph &[3] means image,here we are working on img
      */ })
    elem.addEventListener("mouseleave",function(){
      gsap.to(elem.childNodes[3],{
         opacity:0,
         scale:0
      })
    })
    elem.addEventListener("mousemove",function(dets){
       gsap.to(elem.childNodes[3],{
         x:dets.x - elem.getBoundingClientRect().x-50,
         y:dets.y - elem.getBoundingClientRect().y-150
         
       })
    })
 })
 //page2 animation ended

 //pag3 video animation started

 var page3Center = document.querySelector(".page3-center")
 var video = document.querySelector("#page3 video")

 page3Center.addEventListener("click",function(){
    video.play() //for playing video
    
    gsap.to(video,{
       transform:"scaleX(1) scaleY(1)",
       opacity:1,
       borderRadius:0
    })
 })

 video.addEventListener("click",function(){
    video.pause() //video will pause after clicking onit
    
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
   })
 })
 //page3 video animation ended

 