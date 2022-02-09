"use strict";

const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");

const string = document.querySelector("#typewriter").textContent;
//tømmer "string" elementet 
document.querySelector("#typewriter").textContent="";

//udskrifter "string" indhold i konsol
// console.log("string",string);
let iterator = 0; 

window.addEventListener("load", init);

function init(){
    console.log("init this shit");
    document.addEventListener("click", typeWriter);
    // let iterator = 0; 
}

function typeWriter() {
    console.log("I'm looping");

    if (iterator < string.length) {
        document.querySelector("#typewriter").textContent += string.charAt(iterator);
        // stringTom.textContent += string.charAt(iterator)
        iterator++;
        setTimeout(typeWriter, 1000);
    }

    let playRandom = Math.floor((Math.random() * 2) + 1);
    // typekey1.play();
    if (playRandom == 1){
        typekey1.play();
    } else if (playRandom == 2){
        typekey2.play(); 
    } 

    if (string.charAt(iterator -1) === " "){
        typespace.play(); 
    }

    
}



// let middleName = myName.substring(myName.indexOf(" "), myName.lastIndexOf(" "));
// console.log("middleName;", middleName.trim());

// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

