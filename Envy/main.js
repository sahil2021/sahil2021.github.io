window.onload= function() {
//var v = document.getElementById("div1_text");
var d1t1= document.getElementById("div1_text1");
var d2t1= document.getElementById("div2_text1");
var d2t2= document.getElementById("div2_text2");
var d2t3= document.getElementById("div2_text3");
var style2 = [window.getComputedStyle(d2t1),                  window.getComputedStyle(d2t2),
              window.getComputedStyle(d2t3)];

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
