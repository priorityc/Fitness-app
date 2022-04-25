
count=0;

//add one to count
function increment() {
  let countEl=document.getElementById('count-el');
  count=count+1;
  console.log(count);
  countEl.innerText = count;
 
   
  }
  //save count entry
  function save() {
    let saveElone = document.getElementById("save-el");
    countStr = count + " - ";
    saveElone.innerText += countStr;
    console.log(count);
  }

  function repeatCount (string, times) {
    let newCount='';
    while (times>0);
    newCount += string;
  }

//count + 10

function addTen () {
  let countEl=document.getElementById('count-el');
  count=count+10;
  console.log(count);
  countEl.innerHTML= count;
}
//set function to add exercise add exercise
function addPushup() {
  let addExercise=document.getElementById("add-ex");
  let first = "Count pus-ups";
  addExercise.innerText= first;
}
function addBack() {
  let addExercise=document.getElementById("add-extwo");
  let second = "Count back";
  addExercise.innerText= second;
}
function addSquats() {
  let addExercise=document.getElementById("add-exthree");
  let third = "Count squats";
  addExercise.innerText= third;
}
//reset counting to start from 0
function resetCount() {
  let saveElone=document.getElementById('count-el');
  count=0;
  saveElone.innerText=count;
 }

 //count the entryes numbers
 function countPushups ()  {
   let result=document.getElementById('result');
   res=countStr + countStr;
   result.innerText= res;
 }




