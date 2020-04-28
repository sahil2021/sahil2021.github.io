var howlPool = [];
var isP= false;
var er = document.getElementById("err");
var id = [];
var howlIndex = -1;
var previousINX = null;

function createAudioObj(url){
  
 /*document.getElementById("err").innerHTML = "yep" +"<br />"+ document.getElementById("audio_title_bar").innerHTML+'<br />'+er.innerHTML;*/
   er.innerHTML = url + "<br />" +er.innerHTML;
   howlPool[++howlIndex] = new Howl({
    src: [url],
    html5: true,
    format: "mp3"
  });
  
}

function playAudio(iNX){
 try{
   if(previousINX !== null){
     stopAudio(previousINX);
   }
    id[iNX] = howlPool[iNX].play();
    previousINX = iNX;
}catch(error){
   er.innerHTML= er.innerHTML+'<br />'+ error.stack;
 }
}

function pauseAudio(iNX){
  howlPool[iNX].pause(id[iNX]);
}

function stopAudio(iNX){
  howlPool[iNX].stop(id[iNX]);
}

function isPlaying(){
  if(isP === true){
    return true;
  }
  return false;
}
