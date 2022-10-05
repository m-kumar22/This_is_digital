// -----------------------------nav---------------------------------
gsap.from("#nav",{
    opacity:0,
    duration:1.5,
    y:-100
})

// --------------------------------pre commands---------------
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init();


// ---------------------------section 1-----------------------------

gsap.to("#img1",{
    opacity:1,
    duration:1.5,
    y:"-6vh"
})
gsap.to("#img2",{
    opacity:1,
    duration:1.5,
    delay:0.2,
    x:"-3vw"
})
gsap.to("#img3",{
    opacity:1,
    duration:1.5,
    delay:0.4,
    x:"4vw"
})

gsap.from("#section1>h1",{
    opacity:0,
    duration:5,
    y:150,
    ease: Expo.easeInOut
})
gsap.from("#find",{
    opacity:0,
    duration:7,
    y:150,
    ease: Expo.easeInOut
})

// ------------------------------------------section 2------------------
gsap.from("#section2 h4",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 h4",
        start: "top 80%"
    },
    y:20,
    opacity:0,
    ease: Expo.easeInOut,
    duration:1
})
gsap.from("#section2 h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 h1",
        start: "top 80%"
    },
    y:20,
    opacity:0,
    ease: Expo.easeInOut,
    duration:1
})
gsap.from("#section2 #about",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section2 #about",
        start: "top 80%"
    },
    y:20,
    opacity:0,
    ease: Expo.easeInOut,
    duration:1
})

// ------------------------------------------section 3------------------
gsap.from("#section3 #s3left",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3left",
        start: "top 70%"
    },
    y:50,
    opacity:0,
    ease: Expo.easeInOut,
    duration:3
})
gsap.from("#section3 #s3right h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3left",
        start: "top 50%"
    },
    y:50,
    opacity:0,
    ease: Expo.easeInOut,
    duration:1
})
gsap.from("#section3 #s3right p",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3left",
        start: "top 50%"
    },
    y:50,
    opacity:0,
    ease: Expo.easeInOut,
    duration:1
})
gsap.from("#section3 #s3right h2",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section3 #s3left",
        start: "top 25%"
    },
    y:50,
    opacity:0,
    ease: Expo.easeInOut,
    duration:2
})

// ------------------------------------------section 4------------------
gsap.from("#section4 h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section4 h1",
        start: "top 75%"
    },
    y:50,
    opacity:0,
    ease: Expo.easeInOut,
    duration:2
})

// ------------------------------------------section 5------------------
gsap.from("#section5 #s5box .s5square",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section5 #s5box .s5square",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1.5
})
gsap.from("#section5 #s5see",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section5 #s5see",
        start: "top 85%"
    },
    y:50,
    opacity:0,
    duration:1.5
})
// ------------------------------------------section 6------------------
gsap.from("#section6",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#section6",
        start: "top 70%"
    },
    opacity:0,
    duration:1
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// ------------------------------------------section overlayer------------------
gsap.from("#s7last #overlay #overlayer",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #overlay #overlayer",
        start: "top 70%"
    },
    opacity:0,
    duration:1
})

// ------------------------------------------section7------------------
gsap.from("#s7last #s7up #s7upone",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #s7up #s7upone",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1
})

gsap.from("#s7last #s7up #s7uptwo",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #s7up #s7uptwo",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1,
    delay:0.3
})

gsap.from("#s7last #s7up #s7upthree",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #s7up #s7upthree",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1,
    delay:0.6
})

gsap.from("#s7last #s7up #s7upfour",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #s7up #s7upfour",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1,
    delay:0.9
})

gsap.from("#s7last #s7up #s7upfive",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s7last #s7up #s7upfive",
        start: "top 80%"
    },
    y:50,
    opacity:0,
    duration:1,
    delay:1.2
})