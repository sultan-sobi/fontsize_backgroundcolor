
console.clear();
const selectF=document.getElementById("selectF");
const selectB=document.getElementById("selectB");

const reset=document.querySelector(".reset");

const main=document.querySelector("main");
 
const getL=()=>{
  changeValueF=localStorage.getItem("fontSize");
  changeValueB= localStorage.getItem("bgColor");
 if(changeValueF && changeValueB){
  main.style.fontSize=changeValueF; 
  main.style.backgroundColor=changeValueB;
 }
 if(! changeValueF && !changeValueB){
  main.style.fontSize="16px"; 
  main.style.backgroundColor="aqua";
 }
}

reset.addEventListener("click",()=>{
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  main.style.backgroundColor="aqua";
  main.style.fontSize="16px"; 
})

selectF.addEventListener("change",(event)=>{
     let changeValueF=event.target.value;
     main.style.fontSize=changeValueF;

     localStorage.setItem("fontSize",changeValueF);

});


selectB.addEventListener("change",(event)=>{
  let changeValueB=event.target.value;
  main.style.backgroundColor=changeValueB;
  localStorage.setItem("bgColor",changeValueB);

})

getL();