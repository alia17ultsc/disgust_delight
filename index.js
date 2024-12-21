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
 setTimeout(buildingFlowerPart1, 25);

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
      showFlower();
    }
    else{
 setTimeout(buildingFlowerPart3, 25);

    }
}

function buildingFlowerPart3(){


  
  setTimeout(showFlower, 25);
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

var flowerOpacity=0;
var flowerWidth=0;

function createRealFlower(){
  var realFlower = document.getElementById("flwr");
  realFlower.style.opacity=`${flowerOpacity}`;
  realFlower.style.width=`${flowerWidth}vw`;
  flowerOpacity+=0.05;
  flowerWidth+=0.5;
  if(flowerWidth<43){
     setTimeout(createRealFlower, 20);
  }
 
 
}

function showFlower(){
  reducePetals();
  createRealFlower();
 
}