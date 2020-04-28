function loadSong(li){
  var c = li.childNodes;
  document.getElementById("audio_name").innerHTML= '<a href='+li.getAttribute("data-url")+'" target="_blank">' +li.getAttribute("data-title")+'</a>';       
  document.getElementById("audio_artist_name").innerHTML= li.getAttribute("data-artist") || " ";
  document.getElementById("audio_thumbnail").setAttribute("src",c[0].getAttribute("src"));
}
