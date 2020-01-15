window.onload = function(){
  /*
//var v = document.getElementById("div1_text");
var d1t1= document.getElementById("tag");
var d = document.getElementById("tag").parentElement;
//d.style.display = "none";*/
console.log("yj");
/*
var style2 = window.getComputedStyle(d1t1);

var h=style2.getPropertyValue('height');
var w=style2.getPropertyValue('width');
console.log(h);
console.log(w);

var p = document.createElement("p");
p.style.fontSize = 45 + "px";
p.style.position = "absolute";
p.innerHTML = "Sahil";
var f = window.getComputedStyle(p);
document.body.appendChild(p);
console.log(f.getPropertyValue('font-family'));
p.style.display = "none";
*/
var temp =1.0;
var t1=false, t2=false, t3=false;
//var vh= $(window).height();
//var vw= parseFloat($(window).width());

//var id1 = setInterval(div1_animate, 10);
//var id2 = setInterval(div2_1animate, 10);

function div1_animate() {
   //d1t1.style.marginLeft = temp + "px";
}
function div2_1animate() {
  if(temp<=0){
    d2t1.style.display = "none";
    temp = 1.0;
    clearInterval(id2);
    id2=setInterval(div2_2animate,10);    
  }
  d2t1.style.display = "block";
  if (parseFloat(style2[0].getPropertyValue("opacity")) <= 0) {
    temp = temp + 0.01;
  } else {
    temp = temp - 0.01;
  }
  d2t1.style.opacity = temp;
}
function div2_2animate() {
  if(temp<=0){
    d2t2.style.display = "none";
    temp = 1.0;
    clearInterval(id2);
    id2=setInterval(div2_3animate,10);    
  }
  d2t2.style.display = "block";
  if(parseFloat(style2[1].getPropertyValue("opacity"))<=0){ 
    temp = temp + 0.01;
  }else{
    temp = temp - 0.01;
  }
  d2t2.style.opacity = temp;
}
function div2_3animate() {
  if(temp<=0){
    d2t1.style.display = "none";
    temp = 1.0;
    clearInterval(id2);
    id2=setInterval(div2_1animate,10);    
  }
  d2t3.style.display = "block";
  if (parseFloat(style2[2].getPropertyValue("opacity")) <= 0){
    temp = temp + 0.01;
  } else {
    temp = temp - 0.01;
  }
  d2t3.style.opacity = temp;
}

};
