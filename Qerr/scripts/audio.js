var howlPool = [];
var isP= false;
var er = document.getElementById("err");
var id = [];
var howlIndex = -1;
var previousINX = null;
var currentINX = null;

function createAudioObj(url){
  
   howlPool[++howlIndex] = new Howl({
    src: [url],
    format: 'mp3',
    html5: true
  });
  var tHowl = howlPool[howlIndex];
  tHowl.on('end',function(){
    er.innerHTML = "Finished";
    next();
  });
}

function playAudio(iNX){
  
 try{
   if(previousINX !== null){
     stopAudio(previousINX);
   }else if(previousINX === null){
     previousINX = iNX;
     currentINX = iNX;
   }
    id[iNX] = howlPool[iNX].play();
    er.innerHTML = er.innerHTML + howlPool[iNX].playing(id[iNX]);
  }catch(error){
   er.innerHTML= er.innerHTML+'<br />'+ error.stack;
  }
}

function pauseAudio(iNX){
  howlPool[iNX].pause(id[iNX]);
  //er.innerHTML = howlPool[iNX].playing(id[iNX]);
}

function stopAudio(iNX){
  howlPool[iNX].stop(id[iNX]);
  
}
