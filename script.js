// function canvasMaker (){
//     let cl = document.querySelector('canvas')
// console.log(cl)


// cl.width = window.innerWidth;
// cl.height = window.innerHeight;

// let context = cl.getContext('2d');


// window.addEventListener('resize', function(){
//     cl.width = window.innerWidth;
//     cl.height = window.innerHeight;
//     render();
// })


// function files(index){
//     // images here  
//     var data = `https://zelt.app/assets/img/home/hero/sequence/1.webp
//   https://zelt.app/assets/img/home/hero/sequence/2.webp
//   https://zelt.app/assets/img/home/hero/sequence/3.webp
//   https://zelt.app/assets/img/home/hero/sequence/4.webp
//   https://zelt.app/assets/img/home/hero/sequence/5.webp
//   https://zelt.app/assets/img/home/hero/sequence/6.webp
//   https://zelt.app/assets/img/home/hero/sequence/7.webp
//   https://zelt.app/assets/img/home/hero/sequence/8.webp
//   https://zelt.app/assets/img/home/hero/sequence/9.webp
//   https://zelt.app/assets/img/home/hero/sequence/10.webp
//   https://zelt.app/assets/img/home/hero/sequence/11.webp
//   https://zelt.app/assets/img/home/hero/sequence/12.webp
//   https://zelt.app/assets/img/home/hero/sequence/13.webp
//   https://zelt.app/assets/img/home/hero/sequence/14.webp
//   https://zelt.app/assets/img/home/hero/sequence/15.webp
//   https://zelt.app/assets/img/home/hero/sequence/16.webp
//   https://zelt.app/assets/img/home/hero/sequence/17.webp
//   https://zelt.app/assets/img/home/hero/sequence/18.webp
//   https://zelt.app/assets/img/home/hero/sequence/19.webp
//   https://zelt.app/assets/img/home/hero/sequence/20.webp
//   https://zelt.app/assets/img/home/hero/sequence/21.webp
//   https://zelt.app/assets/img/home/hero/sequence/22.webp
//   https://zelt.app/assets/img/home/hero/sequence/23.webp
//   https://zelt.app/assets/img/home/hero/sequence/24.webp
//   https://zelt.app/assets/img/home/hero/sequence/25.webp
//   https://zelt.app/assets/img/home/hero/sequence/26.webp
//   https://zelt.app/assets/img/home/hero/sequence/27.webp
//   https://zelt.app/assets/img/home/hero/sequence/28.webp
//   https://zelt.app/assets/img/home/hero/sequence/29.webp
//   https://zelt.app/assets/img/home/hero/sequence/30.webp
//   https://zelt.app/assets/img/home/hero/sequence/31.webp
//   https://zelt.app/assets/img/home/hero/sequence/32.webp
//   https://zelt.app/assets/img/home/hero/sequence/33.webp
//   https://zelt.app/assets/img/home/hero/sequence/34.webp
//   https://zelt.app/assets/img/home/hero/sequence/35.webp
//   https://zelt.app/assets/img/home/hero/sequence/36.webp
//   https://zelt.app/assets/img/home/hero/sequence/37.webp
//   https://zelt.app/assets/img/home/hero/sequence/38.webp
//   https://zelt.app/assets/img/home/hero/sequence/39.webp
//   https://zelt.app/assets/img/home/hero/sequence/40.webp
//   https://zelt.app/assets/img/home/hero/sequence/41.webp
//   https://zelt.app/assets/img/home/hero/sequence/42.webp
//   https://zelt.app/assets/img/home/hero/sequence/43.webp
//   https://zelt.app/assets/img/home/hero/sequence/44.webp
//   https://zelt.app/assets/img/home/hero/sequence/45.webp
//   https://zelt.app/assets/img/home/hero/sequence/46.webp
//   https://zelt.app/assets/img/home/hero/sequence/47.webp
//   https://zelt.app/assets/img/home/hero/sequence/48.webp
//   https://zelt.app/assets/img/home/hero/sequence/49.webp
//   https://zelt.app/assets/img/home/hero/sequence/50.webp
//   https://zelt.app/assets/img/home/hero/sequence/51.webp
//   https://zelt.app/assets/img/home/hero/sequence/52.webp
//   https://zelt.app/assets/img/home/hero/sequence/53.webp
//   https://zelt.app/assets/img/home/hero/sequence/54.webp
//   https://zelt.app/assets/img/home/hero/sequence/55.webp
//   https://zelt.app/assets/img/home/hero/sequence/56.webp
//   https://zelt.app/assets/img/home/hero/sequence/57.webp
//   https://zelt.app/assets/img/home/hero/sequence/58.webp
//   https://zelt.app/assets/img/home/hero/sequence/59.webp
//   https://zelt.app/assets/img/home/hero/sequence/60.webp
//   https://zelt.app/assets/img/home/hero/sequence/61.webp
//   https://zelt.app/assets/img/home/hero/sequence/62.webp
//   https://zelt.app/assets/img/home/hero/sequence/63.webp
//   https://zelt.app/assets/img/home/hero/sequence/64.webp
//   https://zelt.app/assets/img/home/hero/sequence/65.webp
//   https://zelt.app/assets/img/home/hero/sequence/66.webp
//   https://zelt.app/assets/img/home/hero/sequence/67.webp
//   https://zelt.app/assets/img/home/hero/sequence/68.webp
//   https://zelt.app/assets/img/home/hero/sequence/69.webp
//   https://zelt.app/assets/img/home/hero/sequence/70.webp
//   https://zelt.app/assets/img/home/hero/sequence/71.webp
//   https://zelt.app/assets/img/home/hero/sequence/72.webp
//   https://zelt.app/assets/img/home/hero/sequence/73.webp
//   https://zelt.app/assets/img/home/hero/sequence/74.webp
//   https://zelt.app/assets/img/home/hero/sequence/75.webp
//   https://zelt.app/assets/img/home/hero/sequence/76.webp
//   https://zelt.app/assets/img/home/hero/sequence/77.webp
//   https://zelt.app/assets/img/home/hero/sequence/78.webp
//   https://zelt.app/assets/img/home/hero/sequence/79.webp
//   https://zelt.app/assets/img/home/hero/sequence/80.webp
//   https://zelt.app/assets/img/home/hero/sequence/81.webp
//   https://zelt.app/assets/img/home/hero/sequence/82.webp
//   https://zelt.app/assets/img/home/hero/sequence/83.webp
//   https://zelt.app/assets/img/home/hero/sequence/84.webp
//   https://zelt.app/assets/img/home/hero/sequence/85.webp
//   https://zelt.app/assets/img/home/hero/sequence/86.webp
//   https://zelt.app/assets/img/home/hero/sequence/87.webp
//   https://zelt.app/assets/img/home/hero/sequence/88.webp
//   https://zelt.app/assets/img/home/hero/sequence/89.webp
//   https://zelt.app/assets/img/home/hero/sequence/90.webp
//   https://zelt.app/assets/img/home/hero/sequence/91.webp
//   https://zelt.app/assets/img/home/hero/sequence/92.webp
//   https://zelt.app/assets/img/home/hero/sequence/93.webp
//   https://zelt.app/assets/img/home/hero/sequence/94.webp
//   https://zelt.app/assets/img/home/hero/sequence/95.webp
//   https://zelt.app/assets/img/home/hero/sequence/96.webp
//   https://zelt.app/assets/img/home/hero/sequence/97.webp
//   https://zelt.app/assets/img/home/hero/sequence/98.webp
//   https://zelt.app/assets/img/home/hero/sequence/99.webp
//   https://zelt.app/assets/img/home/hero/sequence/100.webp
//   https://zelt.app/assets/img/home/hero/sequence/101.webp
//   https://zelt.app/assets/img/home/hero/sequence/102.webp
//   https://zelt.app/assets/img/home/hero/sequence/103.webp
//   https://zelt.app/assets/img/home/hero/sequence/104.webp
//   https://zelt.app/assets/img/home/hero/sequence/105.webp
//   https://zelt.app/assets/img/home/hero/sequence/106.webp
//   https://zelt.app/assets/img/home/hero/sequence/107.webp
//   https://zelt.app/assets/img/home/hero/sequence/108.webp
//   https://zelt.app/assets/img/home/hero/sequence/109.webp
//   https://zelt.app/assets/img/home/hero/sequence/110.webp
//   https://zelt.app/assets/img/home/hero/sequence/111.webp
//   https://zelt.app/assets/img/home/hero/sequence/112.webp
//   https://zelt.app/assets/img/home/hero/sequence/113.webp
//   https://zelt.app/assets/img/home/hero/sequence/114.webp
//   https://zelt.app/assets/img/home/hero/sequence/115.webp
//   https://zelt.app/assets/img/home/hero/sequence/116.webp
//   https://zelt.app/assets/img/home/hero/sequence/117.webp
//   https://zelt.app/assets/img/home/hero/sequence/118.webp
//     `;
//     return data.split("\n")[index];
// }

// const frameCount = 118;
// const images = [];
// const imageSeq ={
//     frame: 1,

// };

// for (let i = 0; i<frameCount; i++){
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
// }


// gsap.to(imageSeq, {
//     frame: frameCount-1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger:{
//         scrub:.15,
//         pin:true,
//         trigger:".page",
//         scroller:'body'
//     },
//     onUpdate: render,
// })


// images[0].onload = render;

// function render(){
//     scaleImages(images[imageSeq.frame],context)
// }


// function scaleImages(img, ctx){
//  var canvas = ctx.canvas;
//  var hRatio = canvas.width / img.width;
//  var vRatio = canvas.height / img.height;
//  var ratio = Math.max(hRatio, vRatio);
//  var centerShift_x = (canvas.width - img.width * ratio) / 2 ;
//  var centerShift_y = (canvas.height - img.height * ratio) / 2 ;
//  ctx.clearRect(0,0, canvas.width, canvas.height);
//  ctx.drawImage(img,0,0,img.width,img.height, centerShift_x, centerShift_y, img.width * ratio , img.height * ratio)
// }



// // to make the images small

// // gsap.to('.page>canvas', {
// //     scale: 0.8,
// //     scroolTrigger:{
// //         scrub: .1,
// //         trigger:".page",
// //         start:'bottom 100%',
// //         markers:true,

// //     },
// // })


// // ScroolTrigger.create({
// //     trigger:".page",
// //     pin:true,
// //     start:"bottom 100%",
// // })
// }

// canvasMaker()


// gsap.to('.content-page',{
//     y:- 1600,
//     scrollTrigger:{
//         scrub:true,
//         pin:true,
//         trigger:".content-page",
//         start:"top top",
//     }
// })




// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });
  
  
//   }
//   loco();
  




function loco() {
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
  
  
  }
  // loco();








const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://zelt.app/assets/img/home/hero/sequence/1.webp
https://zelt.app/assets/img/home/hero/sequence/2.webp
https://zelt.app/assets/img/home/hero/sequence/3.webp
https://zelt.app/assets/img/home/hero/sequence/4.webp
https://zelt.app/assets/img/home/hero/sequence/5.webp
https://zelt.app/assets/img/home/hero/sequence/6.webp
https://zelt.app/assets/img/home/hero/sequence/7.webp
https://zelt.app/assets/img/home/hero/sequence/8.webp
https://zelt.app/assets/img/home/hero/sequence/9.webp
https://zelt.app/assets/img/home/hero/sequence/10.webp
https://zelt.app/assets/img/home/hero/sequence/11.webp
https://zelt.app/assets/img/home/hero/sequence/12.webp
https://zelt.app/assets/img/home/hero/sequence/13.webp
https://zelt.app/assets/img/home/hero/sequence/14.webp
https://zelt.app/assets/img/home/hero/sequence/15.webp
https://zelt.app/assets/img/home/hero/sequence/16.webp
https://zelt.app/assets/img/home/hero/sequence/17.webp
https://zelt.app/assets/img/home/hero/sequence/18.webp
https://zelt.app/assets/img/home/hero/sequence/19.webp
https://zelt.app/assets/img/home/hero/sequence/20.webp
https://zelt.app/assets/img/home/hero/sequence/21.webp
https://zelt.app/assets/img/home/hero/sequence/22.webp
https://zelt.app/assets/img/home/hero/sequence/23.webp
https://zelt.app/assets/img/home/hero/sequence/24.webp
https://zelt.app/assets/img/home/hero/sequence/25.webp
https://zelt.app/assets/img/home/hero/sequence/26.webp
https://zelt.app/assets/img/home/hero/sequence/27.webp
https://zelt.app/assets/img/home/hero/sequence/28.webp
https://zelt.app/assets/img/home/hero/sequence/29.webp
https://zelt.app/assets/img/home/hero/sequence/30.webp
https://zelt.app/assets/img/home/hero/sequence/31.webp
https://zelt.app/assets/img/home/hero/sequence/32.webp
https://zelt.app/assets/img/home/hero/sequence/33.webp
https://zelt.app/assets/img/home/hero/sequence/34.webp
https://zelt.app/assets/img/home/hero/sequence/35.webp
https://zelt.app/assets/img/home/hero/sequence/36.webp
https://zelt.app/assets/img/home/hero/sequence/37.webp
https://zelt.app/assets/img/home/hero/sequence/38.webp
https://zelt.app/assets/img/home/hero/sequence/39.webp
https://zelt.app/assets/img/home/hero/sequence/40.webp
https://zelt.app/assets/img/home/hero/sequence/41.webp
https://zelt.app/assets/img/home/hero/sequence/42.webp
https://zelt.app/assets/img/home/hero/sequence/43.webp
https://zelt.app/assets/img/home/hero/sequence/44.webp
https://zelt.app/assets/img/home/hero/sequence/45.webp
https://zelt.app/assets/img/home/hero/sequence/46.webp
https://zelt.app/assets/img/home/hero/sequence/47.webp
https://zelt.app/assets/img/home/hero/sequence/48.webp
https://zelt.app/assets/img/home/hero/sequence/49.webp
https://zelt.app/assets/img/home/hero/sequence/50.webp
https://zelt.app/assets/img/home/hero/sequence/51.webp
https://zelt.app/assets/img/home/hero/sequence/52.webp
https://zelt.app/assets/img/home/hero/sequence/53.webp
https://zelt.app/assets/img/home/hero/sequence/54.webp
https://zelt.app/assets/img/home/hero/sequence/55.webp
https://zelt.app/assets/img/home/hero/sequence/56.webp
https://zelt.app/assets/img/home/hero/sequence/57.webp
https://zelt.app/assets/img/home/hero/sequence/58.webp
https://zelt.app/assets/img/home/hero/sequence/59.webp
https://zelt.app/assets/img/home/hero/sequence/60.webp
https://zelt.app/assets/img/home/hero/sequence/61.webp
https://zelt.app/assets/img/home/hero/sequence/62.webp
https://zelt.app/assets/img/home/hero/sequence/63.webp
https://zelt.app/assets/img/home/hero/sequence/64.webp
https://zelt.app/assets/img/home/hero/sequence/65.webp
https://zelt.app/assets/img/home/hero/sequence/66.webp
https://zelt.app/assets/img/home/hero/sequence/67.webp
https://zelt.app/assets/img/home/hero/sequence/68.webp
https://zelt.app/assets/img/home/hero/sequence/69.webp
https://zelt.app/assets/img/home/hero/sequence/70.webp
https://zelt.app/assets/img/home/hero/sequence/71.webp
https://zelt.app/assets/img/home/hero/sequence/72.webp
https://zelt.app/assets/img/home/hero/sequence/73.webp
https://zelt.app/assets/img/home/hero/sequence/74.webp
https://zelt.app/assets/img/home/hero/sequence/75.webp
https://zelt.app/assets/img/home/hero/sequence/76.webp
https://zelt.app/assets/img/home/hero/sequence/77.webp
https://zelt.app/assets/img/home/hero/sequence/78.webp
https://zelt.app/assets/img/home/hero/sequence/79.webp
https://zelt.app/assets/img/home/hero/sequence/80.webp
https://zelt.app/assets/img/home/hero/sequence/81.webp
https://zelt.app/assets/img/home/hero/sequence/82.webp
https://zelt.app/assets/img/home/hero/sequence/83.webp
https://zelt.app/assets/img/home/hero/sequence/84.webp
https://zelt.app/assets/img/home/hero/sequence/85.webp
https://zelt.app/assets/img/home/hero/sequence/86.webp
https://zelt.app/assets/img/home/hero/sequence/87.webp
https://zelt.app/assets/img/home/hero/sequence/88.webp
https://zelt.app/assets/img/home/hero/sequence/89.webp
https://zelt.app/assets/img/home/hero/sequence/90.webp
https://zelt.app/assets/img/home/hero/sequence/91.webp
https://zelt.app/assets/img/home/hero/sequence/92.webp
https://zelt.app/assets/img/home/hero/sequence/93.webp
https://zelt.app/assets/img/home/hero/sequence/94.webp
https://zelt.app/assets/img/home/hero/sequence/95.webp
https://zelt.app/assets/img/home/hero/sequence/96.webp
https://zelt.app/assets/img/home/hero/sequence/97.webp
https://zelt.app/assets/img/home/hero/sequence/98.webp
https://zelt.app/assets/img/home/hero/sequence/99.webp
https://zelt.app/assets/img/home/hero/sequence/100.webp
https://zelt.app/assets/img/home/hero/sequence/101.webp
https://zelt.app/assets/img/home/hero/sequence/102.webp
https://zelt.app/assets/img/home/hero/sequence/103.webp
https://zelt.app/assets/img/home/hero/sequence/104.webp
https://zelt.app/assets/img/home/hero/sequence/105.webp
https://zelt.app/assets/img/home/hero/sequence/106.webp
https://zelt.app/assets/img/home/hero/sequence/107.webp
https://zelt.app/assets/img/home/hero/sequence/108.webp
https://zelt.app/assets/img/home/hero/sequence/109.webp
https://zelt.app/assets/img/home/hero/sequence/110.webp
https://zelt.app/assets/img/home/hero/sequence/111.webp
https://zelt.app/assets/img/home/hero/sequence/112.webp
https://zelt.app/assets/img/home/hero/sequence/113.webp
https://zelt.app/assets/img/home/hero/sequence/114.webp
https://zelt.app/assets/img/home/hero/sequence/115.webp
https://zelt.app/assets/img/home/hero/sequence/116.webp
https://zelt.app/assets/img/home/hero/sequence/117.webp
https://zelt.app/assets/img/home/hero/sequence/118.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 118;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page>canvas`,
    start: `top top`,
    end: `300% top`,
    // scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: ".page",
  pin: true,
  // markers:true,
  // scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});



gsap.to('.content-page',{
    y:- 1700,
    scrollTrigger:{
        scrub:true,
        pin:true,
        trigger:".content-page",
        start:"top top",
    }
})




// const slider = document.querySelector('.slider');
// const slides = slider.querySelectorAll('.slide');
// let currentSlide = 0;

// function nextSlide() {
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//   slider.style.transform = `translateX(${currentSlide * -100}%)`;
// }

// slider.addEventListener('transitionend', nextSlide);




// const md = document.getElementById('md')

// console.log(md)
// md.addEventListener('mousedown',(e)=>{
//   console.log(e)
// })




// function crouselSlider(){
// const slider = document.querySelector('.card-crousel')
// const cards = document.querySelector('.card-img')
// let isPressed = false;
// let cursorX;
//   slider.addEventListener("mousedown", (e) => {
//     isPressed = true;
//     cursorX = e.offsetX - cards.offsetLeft;
//     slider.style.cursor = "grabbing";
//     console.log("clicked")
//   });
  
//   slider.addEventListener("mousemove", (e) => {
//     if (!isPressed) return;
//     e.preventDefault();
//     cards.style.left = `${e.offsetX - cursorX}px`;
//     console.log("clicked and")
// });
// }


// crouselSlider()


// const slider = document.querySelector('.card-crousel')
// const cards = document.querySelector('.card-img')

// console.log(slider, cards)







// dragElement(document.getElementById("mydiv"));

//     function dragElement(elmnt) {
//       var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//       console.log(elmnt)
//       if (document.getElementById('div')) {
//         // if present, the header is where you move the DIV from:
//         console.log("yes")
//         document.getElementById("div").onmousedown = dragMouseDown;
//       } else {
//         // otherwise, move the DIV from anywhere inside the DIV:
//         elmnt.onmousedown = dragMouseDown;
//       }

//       function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//       }

//       function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//       }

//       function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//       }
//     }





dragElement(document.getElementById("mydiv"));

      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        console.log(elmnt)
        if (document.getElementById('div')) {
          // if present, the header is where you move the DIV from:
          console.log("yes")
          document.getElementById("div").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }
        
        
        
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          var mydiv = parseInt(document.getElementById('mydiv').style.left)
          console.log(mydiv)
          
          if (mydiv >= 201) {
            console.log('yes it is');
            const leftPosition = Math.min(mydiv, 200) + 'px';
            elmnt.style.left = leftPosition;
            console.log(leftPosition);
          } else if (mydiv <= -1601) {
            console.log("not it is not");
            closeDragElement();
            const leftPosition = Math.max(mydiv, -1600) + 'px';
            document.getElementById('mydiv').style.left = leftPosition;
          }
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }






      // const mydiv = document.getElementById('mydiv')
      //     if (mydiv.style.left === '-1500px' || mydiv.style.cssText.includes('left: -1500px')) {
      //       console.log("yes it is");
      //     }
      //     console.log(mydiv.style.left)










gsap.from('.scrolllertag',{
  y:-150,
  scrollTrigger:{
    scrub:true,
    trigger:"footer",
    // pin:true,
    // markers:true,
    start:'-900px top',
    // end:'-400px top'

  }
})