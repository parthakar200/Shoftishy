 
 let faCirclePause = document.querySelector('.fa-circle-play');
    let faCirclePlay = document.querySelector('.fa-circle-pause');
 let nextPlay = document.querySelector('.fa-forward-step');

 let result = false;
function music(id){

    let playIcon = document.getElementById(id);
    
    if (result == false) {
         playIcon.play();
          console.log("Started Playing");
          result = true;
          faCirclePause.style.display = "none";
          faCirclePlay.style.display = "block";
    }
    else{
        playIcon.pause();
        console.log("Pause Playing");
        result = false;
        faCirclePlay.style.display = "none";
        faCirclePause.style.display = "block";
    }    

}
function nextMusic(id){
   let playIcon = document.getElementById(id);
   ..lkktgy

}
function playMusic(id){
    let play = document.getElementById(id);
    play.play();
}
