
document.getElementById('file_input').addEventListener('change', handleFileSelect, false);
var index = 0;
var err = document.getElementById("err");
function handleFileSelect(evt) {
  
    var files = evt.target.files;
    for (var i = 0; i<files.length; i++) {
        var file = files[i];
        var url = file.urn; 
        
        ID3.loadTags(url, function() {
        showTags(url, URL.createObjectURL(file));
        }, {
        tags: ["title", "artist", "album", "picture"],
        dataReader: ID3.FileAPIReader(file)
        });
      
    }
  }
  
function showTags(url,fileUrl) {
  var tags = ID3.getAllTags(url);
  //err.innerHTML = err.innerHTML+'<br \>'+tags.title;
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
    base64 = "https://img.icons8.com/office/16/000000/no-image.png";
document.getElementById('file_input').addEventListener('change', handleFileSelect, false);
var index = 0;
var err = document.getElementById("err");
function handleFileSelect(evt) {
  
    var files = evt.target.files;
    for (var i = 0; i<files.length; i++) {
        var file = files[i];
        var url = file.urn; 
        
        ID3.loadTags(url, function() {
        showTags(url, URL.createObjectURL(file));
        }, {
        tags: ["title", "artist", "album", "picture"],
        dataReader: ID3.FileAPIReader(file)
        });
      
    }
  }
  
function showTags(url,fileUrl) {
  var tags = ID3.getAllTags(url);
  //err.innerHTML = err.innerHTML+'<br \>'+tags.title;
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
    base64 = "https://img.icons8.com/office/16/000000/no-image.png";
  }
  
  var li = document.createElement("li");
  li.setAttribute("class", "playlist-item");
  li.setAttribute("id", tags.title);
  li.setAttribute("data-url",fileUrl);
  li.setAttribute("data-artist",tags.artist);
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
  
  var li = document.createElement("li");
  li.setAttribute("class", "playlist-item");
  li.setAttribute("id", tags.title);
  li.setAttribute("data-url",fileUrl);
  li.setAttribute("data-artist",tags.artist);
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

