var _ =require('lodash');
console.log(_);

var heading=document.querySelector("h3");
var col1=document.querySelector(".c1");
var col2=document.querySelector(".c2");
var body=document.getElementById("bod");

function setColor(){
	body .style.background="linear-gradient(to right,"+ col1.value +" ,"+col2.value+ ")";
	heading.textContent= body.style.background + " ;" ;
}

col1.addEventListener("input", setColor);
col2.addEventListener("input", setColor);
 
 