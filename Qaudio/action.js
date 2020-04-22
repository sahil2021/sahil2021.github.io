function loadSong(li){
  var c = li.childNodes;
  document.getElementById("audio_name").innerHTML= li.getAttribute("data-title") || " ";
  document.getElementById("audio_artist_name").innerHTML= li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src",c[0].getAttribute("src"));
}
