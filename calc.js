/*
*
*
*             Andrew Puett
*             1/19/2020
*
*
*
*
*/








var numClicked;
var currentNum = 0;
var prevNum=0;
var dec=0;
var lowDec=0;
var op=0;
var error=false;
var opDisplay = document.createElement("div");

function setInterface(){
  currentNum = Math.round(currentNum*Math.pow(10,Math.abs(dec)))/Math.pow(10,Math.abs(dec));
  document.getElementById("interface").innerHTML = currentNum;
}

function setZero(evt){
  if(dec==0){
  currentNum *=10;
  setInterface();
}else {
  document.getElementById("interface").innerHTML +="0";
  dec--;}
}
function setNum(x){
  if(dec==0){
  currentNum *=10;
  }
  currentNum +=x*Math.pow(10,dec);
  if(dec!==0){dec--;}
  setInterface();
  document.getElementById("clear").innerHTML="C";
}

function toPercent(){
  currentNum /= 100;
  dec -=2;
  setInterface();
}
function toNeg(){
  currentNum *= -1;
  setInterface();
}
function addDot(){
  if(dec==0) {
    document.getElementById("interface").innerHTML=currentNum+".";
    dec=-1;
  }
}


function clearNum(){
  if(currentNum ==0){
    prevNum=0;
  }
  dec = 0;op=0;currentNum = 0;
  document.getElementById("clear").innerHTML ="AC";
  setInterface();
}


function add(){
  calculate();
  op=0;
  opDisplay.innerHTML="&#43;";
  document.getElementById("interface").appendChild(opDisplay);
}
function sub(){
  calculate();
  op=1;
  opDisplay.innerHTML="&#45;";
  document.getElementById("interface").appendChild(opDisplay);
}
function mult(){
  calculate();
  op=2;
  opDisplay.innerHTML="&#215;";
  document.getElementById("interface").appendChild(opDisplay);
}
function divi(){
  calculate();
  op=3;
  opDisplay.innerHTML="&#247;";
  document.getElementById("interface").appendChild(opDisplay);
}
function equal(){
  calculate();
  op=0;currentNum=0;prevNum=0;
}

function calculate(){
  switch(op){
    case 0:
      prevNum += currentNum;
      break;
    case 1:
      prevNum -= currentNum;
      break;
    case 2:
      prevNum *= currentNum;
      break;
    case 3:
      if(currentNum!==0){
        prevNum=  prevNum/currentNum;dec=-10;
    }else {error=true;}
      break;
  }
  lowDec=Math.min(lowDec,dec);
  if(!error){
    prevNum = Math.round(prevNum*Math.pow(10,Math.abs(lowDec)))/Math.pow(10,Math.abs(lowDec));
    document.getElementById("interface").innerHTML = prevNum;
  }else {
    document.getElementById("interface").innerHTML = "Error";
    error=false;
  }
  currentNum=0;dec=0;
}
