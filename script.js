let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let winnerbox = document.querySelector(".winnerbox");
let span = document.querySelector("#result");
let restart = document.querySelector(".restart");
let newgame = document.querySelector(".new-game");


let winnercondition = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [0,4,8]
]

let turnX = true;
boxes.forEach( box=>{
box.addEventListener('click',()=>
{
   if(turnX)
   {

    box.innerText="X";
    box.style.color = " rgb(240, 28, 28)";
    turn2.classList.add("b-s");
    turn1.classList.remove("b-s");
   
    turnX=false;
   }
   else
   {
    box.innerText="O";
    box.style.color = " rgb(28, 233, 240)";
    turn1.classList.add("b-s");
    turn2.classList.remove("b-s");
    turnX=true;
   }

   checkwinner();

  
});

});

function checkwinner()
{
  for( let condition of winnercondition ) 
  {
   let b1 = boxes[condition[0]].innerText;
   let b2 = boxes[condition[1]].innerText;
   let b3 = boxes[condition[2]].innerText;
   
   if(b1!="" && b2!="" && b3!="")
   {
      if(b1===b2 && b2===b3)
      {
        showresult(b1);
        boxes.forEach(box =>
         {
            box.classList.add("b-s");
         })
         boxes[condition[0]].classList.remove("b-s");
         boxes[condition[1]].classList.remove("b-s");
         boxes[condition[2]].classList.remove("b-s");

      }

     
               
   }

  

  }
}

function showresult(result)
{
   boxes.forEach(box =>
   {
      box.disabled= true;
      box.classList.remove("hover1");

     
   }
   )
   winnerbox.classList.remove("hide");
   span.innerHTML = result;
   if(result==="X")
   {
      span.style.color=" rgb(240, 28, 28)";
   }
   else{
      span.style.color= " rgb(28, 233, 240)";
   }
  

   
}
restart.addEventListener('click',()=>
{
   boxes.forEach(box =>
   {
       box.innerText = "";
       box.disabled= false;
       box.classList.add("hover1");
       winnerbox.classList.add("hide");
       span.innerHTML = "";
       turnX = true;
       box.classList.remove("b-s");
   })
   turnX = true;

});
newgame.addEventListener('click',()=>
{
   boxes.forEach(box=>
   {
      box.innerText = "";
      box.disabled=false;
      winnerbox.classList.add("hide");
      span.innerHTML="";
      box.classList.add("hover1");
      box.classList.remove("b-s");
     

   } )
   turnX = true;

});

