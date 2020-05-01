
function loadSong(li){
  try{
  var c = li.childNodes;
  var iNX = li.getAttribute("data-index");
  document.getElementById("audio_name").innerHTML= li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML= li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src",c[0].getAttribute("src"));
  document.getElementById("audio_title_bar").setAttribute("data-url",li.getAttribute("data-url"));
  
  playAudio(iNX);
  
  }catch(err){
    document.getElementById("err").innerHTML = err.stack;
  }
}

function playPause(){
  document.getElementById("err").innerHTML = howlPool[currentINX].playing(id[currentINX]);
  if(howlPool[currentINX].playing(id[currentINX])){
    pauseAudio(currentINX);
  }else{
    playAudio(currentINX);
  }
}

function next(){
  er.innerHTML = er.innerHTML + currentINX +" "+ howlPool.length;
  if (currentINX == ( howlPool.length - 1)) {
    playAudio(0);
  } else {
    playAudio(++currentINX);
  }
}

function previous(){
  
}

function shuffle(){
  
}

function repeat(){
  
}
