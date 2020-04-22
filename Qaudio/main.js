
document.getElementById('file_input').addEventListener('change', handleFileSelect, false);

var err = document.getElementById("err");
function handleFileSelect(evt) {
  
    var files = evt.target.files;
    for (var i = 0; i<files.length; i++) {
        var file = files[i];
        var url = file.urn; 
        try{
        ID3.loadTags(url, function() {
        showTags(url);
        }, {
        tags: ["title", "artist", "album", "picture"],
        dataReader: ID3.FileAPIReader(file)
        });
      
    }catch (error) {
          err.innerHTML = innerHTML+ error;
    }
      
    }
  }
  
function showTags(url) {
  var tags = ID3.getAllTags(url);
  err.innerHTML = err.innerHTML+'<br \>'+tags.title;
  try{
  var image = tags.picture;
  
  var base64;
  if (image) {
    var base64String = "";
    for (var i = 0; i < image.data.length; i++) {
      base64String += String.fromCharCode(image.data[i]);
    }
    base64 = "data:" + image.format + ";base64," +
    window.btoa(base64String);
    //err.innerHTML = base64;
  } else {
    base64 = /*"https://img.icons8.com/office/16/000000/no-image.png"*/"";
  }
  
  var li = document.createElement("li");
  li.setAttribute("class", "playlist-item");
  li.setAttribute("id", "playlist_item"+index++);
  li.setAttribute("data-url",url);
  li.setAttribute("data-artist",tags.artist);
  li.setAttribute("data-album",tags.album);
  li.setAttribute("data-title",tags.title);
  li.setAttribute("onClick","loadSong(this)");
  var img = document.createElement("img");
  img.setAttribute("class", "playlist-item-img");
  img.setAttribute("id", "playlist_item_img");
  img.setAttribute("src",base64);
  var label = document.createElement("label");
  label.setAttribute("class", "playlist-item-name");
  label.setAttribute("id", "playlist_item_name"); 
  label.innerHTML= tags.title;
  li.appendChild(img);
  li.appendChild(label);
  err.innerHTML =li.innerHTML+ err.innerHTML+'<br \>'+ li.getAttribute("data-title");
  document.getElementById('playlist').appendChild(li);
  } catch (error) {
    err.innerHTML = innerHTML + error;
  }
}

