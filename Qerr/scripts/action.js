
function loadSong(li){
  try{
  var c = li.childNodes;
  var iNX = li.getAttribute("data-index");
  var e = document.getElementById('err');
  err.innerHTML = err.innerHTML +"<br />"+ iNX;
  
  document.getElementById("audio_name").innerHTML= li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML= li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src",c[0].getAttribute("src"));
  document.getElementById("audio_title_bar").setAttribute("data-url",li.getAttribute("data-url"));
  //err.innerHTML = err.innerHTML +"<br />"+ "ok2";
  //e.innerHTML = document.getElementById('audio_title_bar').getAttribute("data-url");
  playAudio(iNX);
  
  }catch(err){
    document.getElementById("err").innerHTML = err.stack;
  }
}
