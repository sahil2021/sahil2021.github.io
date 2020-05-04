var playlist;
var repeatState = false;
function loadSong(li){
  try{
  rqf = false;
  var iNX = li.getAttribute("data-index");
  playlist = document.getElementById("playlist").childNodes;
  loadInfo(li);
  playAudio(iNX,2);
  }catch(err){
    document.getElementById("err").innerHTML = err.stack;
  }
}
function loadInfo(li){
  var c = li.childNodes;
   document.getElementById("audio_name").innerHTML = li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML = li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src", c[0].getAttribute("src"));
  document.getElementById("audio_title_bar").setAttribute("data-url", li.getAttribute("data-url"));
}
function playPause(){
 // document.getElementById("err").innerHTML = howlPool[currentINX].playing(id[currentINX]);
  if(howlPool[currentINX].playing(id[currentINX])){
    pauseAudio(currentINX);
    
  }else{
    playAudio(currentINX);
  }
}

function next(){
  //er.innerHTML = er.innerHTML + currentINX +" "+ howlPool.length;
  /*if(currentINX == ( howlPool.length - 1)){
    playAudio(0);
  }else */if(nextINX == -1){
    //do nothing 
  }else{
    loadInfo(playlist[parseInt(nextINX)+1]);
    playAudio(nextINX,0);
  }
}

function previous(){
  if(previousINX == -1){
    //do nothing
  }
  loadInfo(playlist[parseInt(previousINX)+1]);
  playAudio(previousINX,1);
}

function shuffle(){
  
}

function repeat(){
  var repeat = document.getElementById('repeat');
  if(repeat.style.background == 'white'){
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
  if(rqf == true)
  requestAnimationFrame(seekPlayback);
}

function seekbarInput(inputValue){
  if(currentINX == -1){
    seekBar.value = 0;
  }else{
    howlPool[currentINX].seek(inputValue,id[currentINX]);
  }
}