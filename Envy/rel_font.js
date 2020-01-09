window.onload= (function(){
 /* var text = [document.getElementById("hmdt1"), document.getElementById("hmdt2"),
       document.getElementById("hmdt3"), 
       document.getElementById("hmdt4"), 
       document.getElementById("hmdt5"), 
       document.getElementById("hmdt6"), 
       document.getElementById("hmdt7"),
       document.getElementById("hmdt8"),
       document.getElementById("hmdt9"),
       document.getElementById("hmdt10"),
       document.getElementById("hmdt11")];
}

for(var i=0; i<text.length; i++){
  if((i+1)%2===0){
    
  }else if((i+1)%3===0){
    
  }else{
    
  }*/
  
  var root = document.getElementById("root");
  var list = root.innerHTML;
  var i = 0,j = 0;
  var id = ["",""];
  var temp = "";
  while(list.charAt(i)!=';'){
    if(list.charAt(i)==','){
      j++;
      i++;
      temp = "";
      id[j]= temp;
      continue;
    }
    temp = temp + list.charAt(i);
    
    i++;
  }
  console.log(id.length);
  
  var p = document.getElementById("div1_text1");
  var pp = p.parentElement;
  var f = window.getComputedStyle(p);
  var ifs = parseInt(f.getPropertyValue('font-size'));
  p.style.fontSize = ifs + "px";
  p.style.position = "absolute";
  //p.style.color = "yellow";
  //p.style.width= "50vw";
  //p.style.border ="solid 3px red";
  var text = p.innerHTML;
  var len = text.length;
  //document.body.appendChild(p);
  var s = parseFloat(f.getPropertyValue('width'))/len;
  console.log(s);
  var vw= parseFloat($(pp).width());
  console.log(vw);
  var nw=(0.01*ifs*vw)/len;
  console.log(nw);
  var nf=(ifs/s)*nw;
  p.style.fontSize = nf + "px";
  console.log(nf);
 
});
window.addEventListener('scroll',function(){
  //console.log("ok");
  if(this.scrollLeft>0){
    console.log("next");
  }else if(this.scrollLeft<0){
    console.log("previous");
  }
});
