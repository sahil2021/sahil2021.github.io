var repeatState = false;
var shuffleState = false;
function loadSong(li){
  //er.innerHTML = er.innerHTML + previousINX+" "+currentINX+' '+nextINX+'</br>';
  try{
  var iNX = li.getAttribute("data-index");
  if(iNX == currentINX){
    //do nothing; 
   }else{
    loadInfo(li);
    playAudio(iNX);
   }
  }catch(err){
    document.getElementById("err").innerHTML = err.stack;
  }
}
function loadInfo(li){
 // er.innerHTML = er.innerHTML + previousINX+" "+currentINX+' '+nextINX+'</br>';
  var c = li.childNodes;
   document.getElementById("audio_name").innerHTML = li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML = li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src", c[0].getAttribute("src"));
} 
function playPause(){
  if(howlPool[currentINX].playing(id[currentINX])){
    pauseAudio(currentINX);
  }else{
    howlPool[currentINX].play(id[currentINX]);
  }
}

function next(){
  if(nextINX == -1){
    //do nothing 
  }else{
    if (shuffleState == true) {
      nextINX = Math.floor(Math.random() * howlPool.length);
    }
    loadInfo(playlist[parseInt(nextINX)+1]);
    playAudio(nextINX);
  }
}

function previous(){
  if(previousINX == -1){
    //do nothing
  }else{
    loadInfo(playlist[parseInt(previousINX)+1]);
    playAudio(previousINX);
  }
}

function shuffle(){
  var shuffle = document.getElementById('shuffle');
  
  if (shuffleState == true) {
    shuffle.style.background = 'transparent';
    shuffleState = false;
  } else {
    shuffle.style.background = 'white';
    shuffleState = true;
  }
}

function repeat(){
  var repeat = document.getElementById('repeat');
  
  if(repeatState == true){
     repeat.style.background = 'transparent';
     repeatState = false;
  }else{
     repeat.style.background = 'white';
     repeatState = true;
  }
  
}

function seekPlayback(){
  var pos = howlPool[currentINX].seek(id[currentINX]);
  seekBar.value = pos;

}

function seekInput() { 
  var cVal = seekBar.value;
  howlPool[currentINX].seek(cVal,id[currentINX]);
}
