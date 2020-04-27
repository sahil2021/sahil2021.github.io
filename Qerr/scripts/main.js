
var files;
var id = [];
var index = 0;
var u= "";
var index = 0;
var err = document.getElementById("err");
function handleFileSelect(evt) {
  
    files = evt.target.files;
    for (var i = 0; i<files.length; i++) {
        var file = files[i];
        var url = file.urn; 
        u = URL.createObjectURL(file);
        err.innerHTML = err.innerHTML +"<br />"+ u;
        ID3.loadTags(url, function(){
        showTags(url);
        }, {
        tags: ["title", "artist", "album", "picture"],
        dataReader: ID3.FileAPIReader(file)
        });
      
    }
  }
  
function showTags(url) {
  var tags = ID3.getAllTags(url);
  ID3.clearTags(url);
  var tId = sHash(tags.title);
  err.innerHTML = err.innerHTML +"<br />"+tags.title+"<br />"+ u;
  if(tags.title == undefined || isAlreadyPresent(tId) ){
    //do nothing
  }else{
   id[index] = tId;
   index++;
  //err.innerHTML = err.innerHTML+'<br \>'+tags.title;
  var image = tags.picture;
  if (image) {
    var base64String = "";
    for (var j = 0; j < image.data.length; j++) {
      base64String += String.fromCharCode(image.data[j]);
    }
    var base64 = "data:" + image.format + ";base64," +
    window.btoa(base64String);
    
  }else{
    var base64 = "icons/album.svg";
  }
  
  var li = document.createElement("li");
  li.setAttribute("class", "playlist-item");
  li.setAttribute("id", tId);
  li.setAttribute("data-url",u);
  li.setAttribute("data-artist",tags.artist || tags.album || " ");
  li.setAttribute("data-album",tags.album);
  li.setAttribute("data-title",tags.title);
  li.setAttribute("onClick","loadSong(this)");
  var img = document.createElement("img");
  img.setAttribute("class", "playlist-item-img");
  img.setAttribute("src",base64);
  var label = document.createElement("label");
  label.setAttribute("class", "playlist-item-name");
  label.innerHTML= tags.title;
  li.appendChild(img);
  li.appendChild(label);
  
  document.getElementById('playlist').appendChild(li);
  }
}

//copied function from wrexltd.com
function sHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {

    char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;

  }
  return hash;

}

function isAlreadyPresent(tId){
  
  var a = parseInt(tId);   
  var b = 123;
  
  for(var i = 0; i<id.length;i++){
   
    b = parseInt(id[i]);
    if(a == b)
    {
      return true;
    }else{
      continue;
    }
  }
  return false;
}

document.getElementById('file_input').addEventListener('change', handleFileSelect, false);