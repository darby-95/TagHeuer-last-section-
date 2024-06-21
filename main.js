
gsap.registerPlugin(ScrollTrigger)

function lenis(){   
const lenis = new Lenis()
lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}
lenis()

////////////////////////////////////////////////////////////////////

// 3D SPLINE
import {Application} from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/32hOyvPz1u6CrKpP/scene.splinecode')
    .then(() => {

        let luminova = app.findObjectByName('watch-luminova');
        let devided = app.findObjectByName('watch-devided');
        let basic = app.findObjectByName('watch-basic');

        let objects = [luminova, devided, basic]

        function showObject(){
            gsap.to(luminova.scale,0.3,{x:1.3, y:1.3, z:1.3, delay:0.5, ease:"expo.inOut"},0)
            gsap.to(luminova.position,{x:0,y:-200},0)

        }

        function reduceObject(){
            gsap.to(luminova.scale,0.3,{x:0, y:0, z:0, delay:0.5, ease:"expo.inOut"},0)
        }


        objects.forEach((object) => {
            gsap.set(object.scale,{x:0,y:0,z:0})
        })

        gsap.set(devided.scale, {x: 1.5,y: 1.5,z: 1.5})
        gsap.set(devided.position, {x: 0,y: 0,z: 0})
        gsap.to(devided.rotation,10,{y:Math.PI * 2, repeat:-1, ease:"none"})
        

        gsap.timeline({
            scrollTrigger:{
                trigger:"#sec1",
                start:"top top",
                end:"bottom top",
                scrub:1,
                pin:true,
                toggleActions:"restart none reverse none",
            }
        })
        .to(devided.scale, {x: 1.5,y: 1.5,z: 1.5})
        .to(devided.position, {x: -2000,y: 0,z: 0, duration:2,})

        gsap.timeline({
            scrollTrigger:{
                trigger:"#sec2",
                start:"top -10%",
                end:"bottom top",
                scrub:1,
                pin:true
            }
        })
        .to(basic.scale, {x: 1,y: 1,z: 1})
        .to(basic.position,{x:-500,y:0},0)
        .to(basic.rotation,{y:Math.PI * 2})

        gsap.timeline({
            scrollTrigger:{
                trigger:"#sec3",
                start:"top -10%",
                end:"bottom top",
                scrub:1,
                pin:true,
                }
        })
        .to(basic.scale,{x:2.5,y:2.5,z:2.5},0)
        .to(basic.position,{x:450,y:-200,z:2},0)
        .to(basic.rotation,{x:-(Math.PI * 0.5) / 2, y:Math.PI * 2},0)

        gsap.timeline({
            scrollTrigger:{
                trigger:"#sec4",
                start:"top -10%",
                end:"bottom top",
                scrub:1,
                pin:true,
                }
        })
        .to(basic.scale,{x:1.5,y:1.5,z:1.5},0)
        .to(basic.position,{x:-550,y:0,z:2},0)
        .to(basic.rotation,{x:0, y:Math.PI * 2, z:0},0)

        gsap.timeline({
            scrollTrigger:{
                trigger:"#sec5",
                start:"top -10%",
                end:"bottom top",
                scrub:1,
                pin:true,
                onLeave: () => reduceObject(),
                }
        })
        .to(basic.scale,{x:1.5,y:1.5,z:1.5},0)
        .to(basic.position,{x:-5000,y:-200, duration:2},0)
        .to(basic.rotation,{x:0, y:Math.PI * 2, z:0},0)


        document.querySelector(".sunny").addEventListener("click", function(){showObject();});
        document.querySelector(".moon").addEventListener("click", function() {reduceObject(luminova);});

})


let clutter = " "

//////////////////////////////////////////////////////////////////// sec0
let sec0_h2 = document.querySelector("#sec0 h2.split").textContent.split("")
sec0_h2.forEach(function (dets) {
    clutter += `<span>${dets}</span>`
    document.querySelector("#sec0 h2.split").innerHTML = clutter
  })
gsap.to("#sec0 h2.split>span", {
    stagger: "0.2",
    color: "#FAD1B1",
    repeat:-1,
})
gsap.to("#sec0 .arrow",{
    y:"100%",
    repeat:-1,
    duration:1,
    yoyo:true,
    ease: "expo.in",
})

//////////////////////////////////////////////////////////////////// sec0 - Hover
function mouseMove(){
    let cardMoves=document.querySelectorAll(".card_move");

    cardMoves.forEach(function(card){
        card.addEventListener("mousemove",function(e){
            let x = e.offsetX;
            let y = e.offsetY;
            let cardClip=card.querySelector(".card_clip")
            cardClip.style.clipPath=`circle(150px at ${x}px ${y}px)`;
        })

    })

}
mouseMove()

gsap.timeline({
    scrollTrigger:{
        trigger:'#sec1',
        start:"top 10%",
        end:"bottom top",
        scrub:2,
        pin:true,
    }
})
.fromTo("#sec1 .sec1-img",{width:'25%'},{width:'100%', opacity:'50%'})

gsap.timeline()
.to('#sec2 .sec2-inner',{
    x:-750,
    opacity:'90%',
    scrollTrigger:{
        trigger:"#sec2",
        start:"top -10%",
        end:"bottom top",
        scrub:1,
    },
})  

.to('#sec3 .info', {
    x: -20,
    z:5,
    duration: 1,
    repeat: -1,
    yoyo: true
})


.to("#sec4 img",{
    rotation:360,
    duration:5,
    ease:"none",
    repeat:-1
})

//////////////////////////////////////////////////////////////////// sec5 - toggle
function toggleButton(){

    let toggleButton=document.querySelector('.toggleButton')
    let sec5_tit = document.querySelector("#sec5 .wrap h2").textContent.split("")
    let sec5_desc = document.querySelector("#sec5 .wrap p").textContent.split("")
        
        sec5_tit.forEach(function (dets) {
        clutter += `<span>${dets}</span>`
        document.querySelector("#sec5 .wrap h2").innerHTML = clutter})
        sec5_desc.forEach(function (dets) {
        clutter += `<span>${dets}</span>`
        document.querySelector("#sec5 .wrap p").innerHTML = clutter
        })
    
     toggleButton.addEventListener('click', function() {
    
            if(toggleButton.classList.contains("on")){
    
            document.getElementById('sec5').style.backgroundImage = "url('./img/sec05-bg-day.svg')"
            gsap.to("#sec5 .wrap h2>span", {stagger: "0.03",color: "#FFF",})        
            gsap.to("#sec5 .wrap p>span", {stagger: "0.03",color: "#FFF",})
            gsap.to("#sec5 .dark-bg", {x:'-100%'})
            } else {
            document.getElementById('sec5').style.backgroundImage = "url('./img/sec05-bg-night.svg')"; 
            gsap.to("#sec5 .wrap h2>span",{stagger:"0.03",color:"#00FF34",})        
            gsap.to("#sec5 .wrap p>span", { stagger:"0.03",color:"#00FF34",})
            gsap.to("#sec5 .dark-bg", {x:'100%'})
            }
            toggleButton.classList.toggle('on');
            });
}
toggleButton()
