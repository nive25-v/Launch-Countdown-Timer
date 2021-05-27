

const numberContainers = document.querySelectorAll(".number-container");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

var totalSeconds = 10 * 24 * 60 * 60;

( () => {

    const elems = document.querySelectorAll(".timer");

    elems.forEach( elem => {
        gsap.set( elem.querySelector(".bottom-front") , { rotationX: 180 } );
    })

    flipUpdate();
})();

function flipUpdate()
{

    let curDay = Math.floor( totalSeconds / ( 24*60*60 ) );
    flip( days , curDay );

    let curHour = Math.floor( ( totalSeconds / ( 60*60 ) ) ) % 24;
    flip( hours , curHour );

    let curMinute = Math.floor( ( totalSeconds / 60 ) ) % 60;
    flip( minutes, curMinute );

    let cursecond = totalSeconds % 60;
    flip( seconds , cursecond );
}

let curSecs = 60;

setInterval( () => {

    totalSeconds--;
    flipUpdate();

} , 1000 );

function flip( elem , num ) {

    if( num < 10 ) num = '0' + num;

    if( elem.querySelector(".number-container").innerText == num ) return;

    elem.querySelector(".top-back .number-container").innerText = num;
    elem.querySelector(".bottom-front .number-container").innerText =num;

    gsap.to( elem.querySelector('.top-front') , 0.7 , {
        rotationX : -180,
        ease: "quart.easeOut",
        onComplete: () => {
            elem.querySelector(".top-front .number-container").innerText =num;
            elem.querySelector(".bottom-back .number-container").innerText = num;
            gsap.set( elem.querySelector(".top-front") , { rotationX: 0 } );
        }

    })

    gsap.to( elem.querySelector(".bottom-front"), 0.7 , {
        rotationX : 0,
        ease: "quart.easeOut",
        onComplete: () => {
            gsap.set( elem.querySelector(".bottom-front") , { rotationX: 180 } );
        }
    })

}

