var howlPool = [];
var isP= false;
var id = [];
var howlIndex = -1;
var previousINX = -1;
var currentINX = -1;
var nextINX = -1;
var previousPlaying = -1;
var intvId;

function createAudioObj(url){
  
   howlPool[++howlIndex] = new Howl({
    src: [url],
    format: 'mp3',
    html5: true
  });
  
  
  var tHowl = howlPool[howlIndex];
  tHowl.on('end',function(){
    clearInterval(invtId);
    if(repeatState == false){
      er.innerHTML = er.innerHTML + 'ok';
       next();
    }else{
      id[currentINX] = howlPool[currentINX].play();
    }
  });
  
  
  tHowl.on('pause',function(){
    
    document.getElementById("play_pause").src = "icons/play.svg";
    
    clearInterval(invtId);
  });
  
  
  tHowl.on('play',function(){
    
    document.getElementById("play_pause").src = "icons/pause.svg";
    
    var duration = parseInt(howlPool[currentINX].duration(id[currentINX]));
    seekBar.max = duration;
    invtId = setInterval(seekPlayback,1000);
    
  })
}

function playAudio(iNX){
  
 try{
   changeStates(iNX);
   
   if(previousPlaying == -1){
     // Nothing to Stop
   }else{
     stopAudio(previousPlaying);
   }
   
   id[iNX] = howlPool[iNX].play();
   previousPlaying = iNX;
    
  }catch(error){
   er.innerHTML= er.innerHTML+'<br />'+ error.stack;
  }
}


function pauseAudio(iNX){
  howlPool[iNX].pause(id[iNX]);
}


function stopAudio(iNX){
  howlPool[iNX].stop(id[iNX]);
}



function changeStates(iNX){
  if (currentINX != -1 && iNX != 0 && iNX != howlPool.length - 1) {
    
    previousINX = iNX - 1;
    currentINX = iNX;
    nextINX = parseInt(currentINX) + 1;
    er.innerHTML = er.innerHTML +"<br />1 "+ previousINX+" "+currentINX+" "+nextINX;
  } else if(currentINX == -1) {
    
    currentINX = iNX;
    
    if(currentINX == 0) {
      previousINX = howlPool.length - 1;
    } else{
      previousINX = iNX - 1;
    }
    
    if(currentINX == howlPool.length - 1) {
      nextINX = 0;
    } else{
      nextINX = parseInt(currentINX) + 1;
    }
    er.innerHTML = er.innerHTML +"<br />2 "+ previousINX+" "+currentINX+" "+nextINX;
    
  } else if(iNX == 0) {
    
    previousINX = howlPool.length - 1;
    currentINX = iNX;
    nextINX = 1;
    
    er.innerHTML = er.innerHTML +"<br />3 "+ previousINX+" "+currentINX+" "+nextINX;
    
  } else{
    
    previousINX = iNX - 1;
    currentINX = iNX;
    nextINX = 0;
    
    er.innerHTML = er.innerHTML +"<br />4"+ previousINX+" "+currentINX+" "+nextINX;
  }
  
}
