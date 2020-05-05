var repeatState = false;
function loadSong(li){
  //er.innerHTML = er.innerHTML + previousINX+" "+currentINX+' '+nextINX+'</br>';
  try{
  var iNX = li.getAttribute("data-index");
  if(iNX == currentINX){
    //do nothing; 
   }else{
    loadInfo(li);
    playAudio(iNX,2);
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
    loadInfo(playlist[parseInt(nextINX)+1]);
    playAudio(nextINX,0);
  }
}

function previous(){
  if(previousINX == -1){
    //do nothing
  }else{
    loadInfo(playlist[parseInt(previousINX)+1]);
    playAudio(previousINX,1);
  }
}

function shuffle(){
  
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
