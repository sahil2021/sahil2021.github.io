
function loadSong(li){
  try{
  var c = li.childNodes;
  document.getElementById("audio_name").innerHTML= li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML= li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src",c[0].getAttribute("src"));
  document.getElementById("audio_title_bar").setAttribute("data-url",li.getAttribute("data-url"));
  createAudioObj();
  playPause();
  var e  = document.getElementById('err');
  e.innerHTML = e.innerHTML + li.getAttribute("data-url");
  }catch(err){
    document.getElementById("err").innerHTML = err.stack;
  }
}
