var randomnum1=Math.floor(Math.random()*6)+1;
var randomdiceimg1="images/dice"+randomnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg1);
var randomnum2=Math.floor(Math.random()*6)+1;
var randomdiceimg2="images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);

if(randomnum1 > randomnum2){
  document.querySelector("h1").innerHTML="winner-player-1";
}
else if(randomnum1 <randomnum2){
  document.querySelector("h1").innerHTML="winner-player-2";
}
else{
  document.querySelector("h1").innerHTML="~game was draw~";
}
