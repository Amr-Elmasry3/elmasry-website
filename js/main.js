let otherLinksLink= document.querySelector(".appere");
let otherLinks= document.querySelector(".mega-menu");
let skills= document.querySelector(".our-skills");
let progressOne= document.querySelector(".progress1");
let progressTwo= document.querySelector(".progress2");
let progressThree= document.querySelector(".progress3");
let progressFour= document.querySelector(".progress4");

let stats= document.querySelector(".stats");
let arrOfSpans= document.querySelectorAll(".box .number");
let played= false;
let count= 0;

otherLinksLink.onclick= function (){
  if (count === 0){
    otherLinks.style.cssText= "display: flex ; top: calc(100% + 0px) ; transition: 0.4s";
    count= 1;
  }
  else {
    otherLinks.style.cssText= "display: none ; top: calc(100% + 50px) ; transition: 0.4s";
    count= 0;
  }
}


window.onscroll= function (){
  if (window.scrollY >= skills.offsetTop){
    progressOne.style.cssText= "width: 85% ; transition: 1s";
    progressTwo.style.cssText= "width: 80% ; transition: 1s";
    progressThree.style.cssText= "width: 90% ; transition: 1s";
    progressFour.style.cssText= "width: 75% ; transition: 1s";
  }
  if (window.scrollY >= stats.offsetTop){
    if (!played){
      arrOfSpans.forEach((ele) => {
        let goal= ele.dataset.goal;
        let counter2= setInterval(() => {
          ele.textContent++;
          if (ele.textContent == goal){
            clearInterval(counter2);
          }
          played= true;
        },2000 / goal);
      })
    }
  }
}

let events= document.querySelector(".latest-events");
let numOne= document.querySelector(".num1")
let numTwo= document.querySelector(".num2")
let numThree= document.querySelector(".num3")
let numFour= document.querySelector(".num4")

let counter= setInterval(()=>{
  let endDate= new Date("Sep 3 2025 23:59:59").getTime();
  let nowDate= new Date().getTime();
  let difference= endDate - nowDate;

  let day= Math.floor(difference / (1000 * 60 * 60 * 24));
  numOne.innerHTML= day;

  let hour= difference % (1000 * 60 * 60 * 24);
  numTwo.innerHTML= Math.floor(hour / (1000 * 60 * 60));

  let minute= difference % (1000 * 60 * 60);
  numThree.innerHTML= Math.floor(minute / (1000 * 60));

  let second= difference % (1000 * 60);
  numFour.innerHTML= Math.floor(second / (1000));

  if (day === 0 && hour === 0 && minute === 0 && second === 0){
    clearInterval(counter);
  }
},1000);