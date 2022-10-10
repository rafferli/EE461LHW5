/**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
const el = document.getElementById("section3")

let rect = el.getBoundingClientRect(), windowHeight = (window.innerHeight || document.documentElement.clientHeight);

var count = 80;

const linkDiv = document.getElementById("links")
const citcleDiv = document.getElementById("circle")

var linkopen = false
citcleDiv.onclick = function(){

    if(window.innerWidth <= 800 && linkopen == false){
        linkDiv.style.marginLeft = "-5vw"
        citcleDiv.style.marginLeft = "60vw"
        citcleDiv.style.transform = "rotate(180deg)";
        linkopen = true;
    }else   if(window.innerWidth <= 800 && linkopen == true){
        linkDiv.style.marginLeft = "-130vw"
        citcleDiv.style.marginLeft = "0"
        citcleDiv.style.transform = "rotate(0deg)";
        linkopen = false;
    }
};


var isMobile = false

var BY, BR, BX, BF, Bwidth, Bheight, BLeft, BRight

BR = 50
BF = 50
Bwidth = 70
Bheight = 70

document.documentElement.style.setProperty('--badgeWidth', (Bwidth + 'px'))
document.documentElement.style.setProperty('--badgeHeight', (Bheight + 'px'))
document.documentElement.style.setProperty('--fontsize', (BF + 'px'))
document.documentElement.style.setProperty('--BR', (BR + '%'))

function updateBadge() {

    if(window.innerWidth <= 800){
        isMobile = true
        document.getElementById("circle").innerHTML = "→"
        document.getElementById("main").style.position = "absolute"
        document.getElementById("main").style.overflowX = "hidden"

    }else{
        isMobile = false
        document.getElementById("circle").innerHTML = "↓"
        linkDiv.style.marginLeft = ""
        citcleDiv.style.marginLeft = ""
        citcleDiv.style.transform = "";
    }
    

    const sec2 = document.getElementById("section2")
    let rect2 = sec2.getBoundingClientRect()

    let percent = Math.floor(100 - ((rect2.bottom - window.innerHeight) / rect2.height) * 100)

    if(window.innerWidth > 800){
        if (percent > 30) {
            if (percent < 70) {
                document.getElementById("badge").innerHTML = "1"
                BY = 0
                BX = 0
                BR = 50
                BF = 50
                Bwidth = 70
                Bheight = 70

            } else if (percent < 80) {
                document.getElementById("badge").innerHTML = "5"
                BY = 0
                BX = 0
                BR = 50
                BF = 50
                Bwidth = 70
                Bheight = 70

            } else if (percent < 90) {
                document.getElementById("badge").innerHTML = "19"
                BY = 10
                BX = -30
                BR = 45
                BF = 60
                Bwidth = 100
                Bheight = 90

            } else if (percent < 100) {
                document.getElementById("badge").innerHTML = "514"
                BY = 75
                BX = -150
                BR = 40
                BF = 60
                Bwidth = 170
                Bheight = 110

            } else if (percent < 110) {
                document.getElementById("badge").innerHTML = "713"
                BY = 40
                BX = -155
                BR = 35
                BF = 70
                Bwidth = 180
                Bheight = 180

            } else {
                document.getElementById("badge").innerHTML = "1000"
                BY = 10
                BX = -185
                BF = 90
                Bwidth = 240
                Bheight = 240
                BR = 20

            }
        }

        document.documentElement.style.setProperty('--BR', (BR + '%'))
        document.documentElement.style.setProperty('--BY', (BY + 'px'))
        document.documentElement.style.setProperty('--BX', (BX + 'px'))
        document.documentElement.style.setProperty('--badgeWidth', (Bwidth + 'px'))
        document.documentElement.style.setProperty('--badgeHeight', (Bheight + 'px'))
        document.documentElement.style.setProperty('--fontsize', (BF + 'px'))
    }
    
    else{

            if (percent < 70) {
                document.getElementById("badgeSmall").innerHTML = "1"
                BY = 6
                BX = 15
                BR = 50
                BF = 10
                Bheight = 15
                BLeft = 62
                BRight = 18

            } else if (percent < 80) {
                document.getElementById("badgeSmall").innerHTML = "5"
                BY = 6
                BX = 15
                BR = 50
                BF = 10
                Bheight = 15
                BLeft = 62
                BRight = 18

            } else if (percent < 90) {
                document.getElementById("badgeSmall").innerHTML = "19"
                BY = 6
                BX = 20
                BR = 45
                BF = 12
                Bheight = 17
                BLeft = 57
                BRight = 23

            } else if (percent < 100) {
                document.getElementById("badgeSmall").innerHTML = "514"
                BY = 17
                BX = 36
                BF = 12
                Bheight = 30
                BR = 40
                BLeft = 32
                BRight = 32

            } else if (percent < 110) {
                document.getElementById("badgeSmall").innerHTML = "713"
                BY = 13
                BX = 38
                BF = 12
                Bheight = 38
                BR = 20
                BLeft = 31
                BRight = 31


            } else {
                document.getElementById("badgeSmall").innerHTML = "1000"
                BY = 8
                BX = 50
                BF = 18
                Bheight = 48
                BR = 20
                BLeft = 25
                BRight = 25

            }
        
        document.documentElement.style.setProperty('--BR', (BR + '%'))
        document.documentElement.style.setProperty('--BY', (BY + 'vw'))
        document.documentElement.style.setProperty('--BX', (BX + '%'))
        document.documentElement.style.setProperty('--BLeft', (BLeft + '%'))
        document.documentElement.style.setProperty('--BRight', (BRight + '%'))
        document.documentElement.style.setProperty('--badgeWidth', (Bwidth + 'vw'))
        document.documentElement.style.setProperty('--badgeHeight', (Bheight + 'vw'))
        document.documentElement.style.setProperty('--fontsize', (BF + 'vw'))
    }



}

const body = document.body;
const main = document.getElementById('main');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;


body.style.height = main.clientHeight + 'px';


main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  let scaling = 15 * dy / windowHeight;
  if(isMobile == false){
    main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
    document.getElementById("igfill").style.clipPath = "inset(0 " + (80 - 1.3*scaling) + "% 0 0)";
    document.getElementById("tfill").style.clipPath = "inset(0 " + (80 -   1.3*scaling) + "% 0 0)";
    document.getElementById("scfill").style.clipPath = "inset(0 " + (80 -  1.3*scaling) + "% 0 0)";
  }else{
    main.style.transform = `translate3d(0px,0px,0px)`;
    document.getElementById("igfill").style.clipPath = "inset(0 " + (120 - 2*scaling) + "% 0 0)";
    document.getElementById("tfill").style.clipPath = "inset(0 " + (120 -   2*scaling) + "% 0 0)";
    document.getElementById("scfill").style.clipPath = "inset(0 " + (120 -  2*scaling) + "% 0 0)";
  
  }
  

  updateBadge()
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

