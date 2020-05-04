var howlPool = [];
var isP= false;
var er = document.getElementById("err");
var id = [];
var howlIndex = -1;
var previousINX = -1;
var currentINX = -1;
var nextINX = -1;
var previousPlaying = -1;
var rqf = false;

function createAudioObj(url){
  
   howlPool[++howlIndex] = new Howl({
    src: [url],
    format: 'mp3',
    html5: true
  });
  var tHowl = howlPool[howlIndex];
  tHowl.on('end',function(){
    //er.innerHTML = "Finished";
    if(repeatState == false){
      next();
    }else{
      id[currentINX] = howlPool[currentINX].play();
    }
  });
  tHowl.on('pause',function(){
    document.getElementById("play_pause").src = "icons/play.svg";
  });
  tHowl.on('play',function(){
    document.getElementById("play_pause").src = "icons/pause.svg";
    
  });
}

function playAudio(iNX,dir){
  
 try{
   if(currentINX != -1 && iNX != 0 && iNX != howlPool.length-1){
     previousINX = iNX - 1;
     currentINX = iNX;
     nextINX = parseInt(currentINX)+1;
     //er.innerHTML = er.innerHTML + " "+nextINX+" 12 "+currentINX+" ";
     if(dir == 0){
       stopAudio(previousINX);
     }else if(dir == 1){
       stopAudio(nextINX);
     }else{
       stopAudio(previousPlaying);
     }
   }else if(currentINX == -1){
     currentINX = iNX;
     if(currentINX == 0){
      //er.innerHTML+= "ok";
         previousINX = howlPool.length - 1;
     }else{
       previousINX = iNX-1;
     }
     if(currentINX == howlPool.length-1){
       nextINX = 0;
     }else{
       nextINX = parseInt(currentINX)+1;
     }
     //er.innerHTML = er.innerHTML + previousINX+" 2 "+currentINX +" 1 "+nextINX;
   }else if(iNX == 0){
     //er.innerHTML = er.innerHTML + previousINX+" 3 "+currentINX;
     previousINX = howlPool.length - 1;
     nextINX = 1;
     if (dir == 0) {
       stopAudio(previousINX);
     } else if(dir == 1){
       stopAudio(nextINX);
     } else{
       stopAudio(previousPlaying);
     }
   }else{
     previousINX = iNX - 1;
     currentINX = iNX;
     nextINX = 0;
     //er.innerHTML = er.innerHTML + " " + nextINX + " 12 " + currentINX + " ";
     if (dir == 0) {
       stopAudio(previousINX);
     } else if(dir == 1){
       stopAudio(nextINX);
     } else {
        stopAudio(previousPlaying);
     }
   }
   //er.innerHTML = er.innerHTML + previousINX+" 4 "+currentINX+" 5 "+nextINX;
    id[iNX] = howlPool[iNX].play();
    previousPlaying = iNX;
    var duration = parseInt(howlPool[currentINX].duration(id[currentINX]));
    seekBar.max = duration;
    rqf = true;
    window.requestAnimationFrame(seekPlayback);
    
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