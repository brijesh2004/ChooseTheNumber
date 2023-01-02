const balls = document.querySelectorAll(".ball1");
const wingame = document.querySelector(".winTheGame");
const container = document.querySelector(".container");
const sec = document.getElementById("sec");
const lossTheGame = document.querySelector(".lossTheGame");
// console.log(balls[1].innerHTML);
// const f = balls[1].innerHTML;

// console.log(f);
// console.log(typeof (f));
let f=13;

// console.log(r);
// console.log(typeof (r));
function popTheBallone() {
   let p = event.target;
   let r = event.target.innerHTML;
   
   // console.log(r);
//  console.log(event.target.innerHTML)

   if (f == r) {
      event.target.style.display="none";
     
      f--;
   }
   else {
      p.style.backgroundColor="red";
       setInterval(function frame(){
         p.style.backgroundColor="yellow";
      }, 1000);
   

     
      
   }
   if(f==0){
     container.style.display="none";
     wingame.style.display="block";
     return;
   }
   // event.target.style.backgroundColor="yellow";

}
let seco=15;
setInterval(function frame(){
  sec.innerText=seco;
  if(f==0){
   return;
  }
  if(seco == 0){
   container.style.display="none";
   lossTheGame.style.display="block";
   return;
  }
 
  seco--;
}, 1000);


