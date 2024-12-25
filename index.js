function showCircle(){
  document.getElementsByClassName("neonObject")[0].style.display="block";
}

var currentSize = 5;

function turnTextToFlower(){
  console.log("hdfgfgds");
  setTimeout(changefontSize, 50);
}

function changefontSize(){
  var cap = document.getElementsByClassName("cap_tion")[0];
  currentSize-=0.1;
  cap.style.fontSize = `${currentSize}vw`;
  if (currentSize>0){
    setTimeout(changefontSize, 5);
  }
  else{
buildingFlowerPart1();
  }
}

var positionX=0;
var positionY=0;
var positionX2=15;
var positionY2=60;
var positionX3=10;
var positionY3=2;
function buildingFlowerPart1(){
  var petal1 = document.getElementsByClassName("p1")[0];
  positionX+=1;
  positionY+=0.7;
  petal1.style.left=`${positionX}vw`;
  petal1.style.top=`${positionY}vh`;

  var petal2=document.getElementsByClassName("p6")[0];
  positionX2-=0.35;
  positionY2-=1.2;
  petal2.style.left=`${positionX2}vw`;
  petal2.style.top=`${positionY2}vh`;

  var petal3=document.getElementsByClassName("p20")[0];
  positionX3-=0.55;
  positionY3+=0.59;
  petal3.style.left=`${positionX3}vw`;
  petal3.style.top=`${positionY3}vh`;
  if (positionX>28)
    {
      positionX=30;
      positionY=-2;
      buildingFlowerPart2();
      
    }
    else{
 setTimeout(buildingFlowerPart1, 5);

    }
 
}

function buildingFlowerPart2(){
  
  var petal=document.getElementsByClassName("p4")[0];
  positionX-=0.3;
  positionY+=0.59;
  petal.style.left=`${positionX}vw`;
  petal.style.top=`${positionY}vh`;

  var petal2=document.getElementsByClassName("p2")[0];
  positionX2+=0.6;
  positionY2+=0.2;
  petal2.style.left=`${positionX2}vw`;
  petal2.style.top=`${positionY2}vh`;

  var petal3=document.getElementsByClassName("p3")[0];
  positionX3+=0.7;
  positionY3+=0.15;
  petal3.style.left=`${positionX3}vw`;
  petal3.style.top=`${positionY3}vh`;

  if (positionX<18)
    {
      positionX=8;
      positionY=5;
      positionX2=17;
      positionY2=30;
      positionX3=4;
      positionY3=20;
      buildingFlowerPart3();
    }
    else{
 setTimeout(buildingFlowerPart2, 5);

    }
}

function buildingFlowerPart3(){
var petal=document.getElementsByClassName("p5")[0];
  positionX+=0.03;
  positionY+=0.3;
  petal.style.left=`${positionX}vw`;
  petal.style.top=`${positionY}vh`;

  var petal2=document.getElementsByClassName("p9")[0];
  positionX2-=0.38;
  positionY2+=0.03;
  petal2.style.left=`${positionX2}vw`;
  petal2.style.top=`${positionY2}vh`;

  var petal3=document.getElementsByClassName("p11")[0];
  positionX3-=0.39;
  positionY3+=0;
  petal3.style.left=`${positionX3}vw`;
  petal3.style.top=`${positionY3}vh`;

  if (positionX>10)
    {
      positionX=20;
      positionY=40;
      positionX2=6;
      positionY2=20;
      positionX3=-20;
      positionY3=65;      
      buildingFlowerPart4();
    }
    else{
  setTimeout(buildingFlowerPart3, 5);

    }
}

var pX4=4;
var pY4=2;
var pX5=3;
var pX6=5;
var pY6=30;

function buildingFlowerPart4(){
  var petal=document.getElementsByClassName("p7")[0];
    positionX-=0.5;
    positionY-=0.2;
    petal.style.left=`${positionX}vw`;
    petal.style.top=`${positionY}vh`;
    var petal2=document.getElementsByClassName("p8")[0];
    positionX2-=0.3;
    positionY2+=0.02;
    petal2.style.left=`${positionX2}vw`;
    petal2.style.top=`${positionY2}vh`;
    var petal3=document.getElementsByClassName("p10")[0];
    positionX3+=0.02;
    positionY3-=1.3;
    petal3.style.left=`${positionX3}vw`;
    petal3.style.top=`${positionY3}vh`;
    var petal4=document.getElementsByClassName("p12")[0];
    pX4-=1.2;
    pY4+=1.3;
    petal4.style.left=`${pX4}vw`;
    petal4.style.top=`${pY4}vh`;
    var petal5=document.getElementsByClassName("p13")[0];
    pX5-=1.2;
    petal5.style.left=`${pX5}vw`;
    var petal6=document.getElementsByClassName("p14")[0];
    pX6+=1.2;
    pY6-=0.3;
    petal6.style.left=`${pX6}vw`;
    petal6.style.top=`${pY6}vh`;

  
    if (positionX<7)
      {
        showFlower();
      }
      else{
    setTimeout(buildingFlowerPart4, 5);
  
      }
  }

var allpetalSize = 4.0;

function reducePetals(){
  var petalAll = document.getElementsByClassName("petal");
  for (var i=0; i<petalAll.length; i++){
    petalAll[i].style.width=`${allpetalSize}vw`;
  }    
  allpetalSize-=0.1;
  if (allpetalSize>0.5){
  setTimeout(reducePetals, 15);
  }
}

var flowerOpacity=0.5;
var flowerWidth=0;

function createRealFlower(){
  var realFlower = document.getElementById("flwr");
  realFlower.style.width=`${flowerWidth}vw`;
  flowerWidth+=0.5;
  if(flowerWidth<43){
     setTimeout(createRealFlower, 20);
  }
  else{
    finalFlower();
  }
 
 
}

function showFlower(){
  reducePetals();
  createRealFlower();
}

function finalFlower(){
  var realFlower = document.getElementById("flwr");
  realFlower.style.opacity=`${flowerOpacity}`;
  realFlower.style.width=`${flowerWidth}vw`;
  flowerOpacity+=0.03;
  flowerWidth-=0.5;
  if(flowerWidth>25){
     setTimeout(finalFlower, 20);
  }
 // realFlower.style.opacity="1";
}