var h;
var isP= false;
var er = document.getElementById("err");
var id;
function createAudioObj(){
 /* document.getElementById("err").innerHTML = "yep" +"<br />"+ document.getElementById("audio_title_bar").innerHTML;;*/
  var url = document.getElementById("audio_title_bar").getAttribute("data-url");
  h = new Howl({
    src: [url],
    html5: true,
    format: "mp3"
  });
}

function playPause(){
  
 try{
 //er.innerHTML = er.innerHTML +'<br />' + isPlaying();
 if(!isPlaying()){
   id = h.play();
   isP = true;
  // er.innerHTML =  er.innerHTML +'<br />' + isPlaying() + "Play";
 }else{
   h.stop();
   isP = false;''
  // er.innerHTML =  er.innerHTML +'<br />' + isPlaying()+ "stop";
}}catch(error){
   er.innerHTML= er.innerHTML+'<br />'+ error.stack;
 }
}

function isPlaying(){
  if(isP === true){
    return true;
  }
  return false;
}