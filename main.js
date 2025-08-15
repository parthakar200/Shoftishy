let innerDiv = document.getElementById('inner');
let play = document.querySelector('.fa-circle-play');
let pause = document.querySelector('.fa-circle-pause');
let next = document.querySelector('.fa-forward-step');
let previous = document.querySelector('.fa-backward-step');
let image = document.getElementsByTagName('img');
let song1 = document.getElementById('song1');
let song2 = document.getElementById('song2'); 
let songs = document.getElementsByTagName('audio');

let isActive = false;
let posi = 1;


console.log(songs[posi-1]);
console.log(songs[posi]);
console.log(songs[posi+1]);



play.addEventListener('click', () =>{
       if(!isActive){
              songs[posi].play();
              isActive = true;
              play.style.display = "none";
              pause.style.display = "block";
              pause.style.color = "blue";
              innerDiv.style.backgroundColor = "blue";
              image[0].src = "dance.gif";
              console.log(`${posi}st song Playing`);
       }
});
pause.addEventListener('click', () => {
       if(isActive){
              songs[posi].pause();
              isActive = false;
              play.style.display = "block";
              pause.style.display = "none";
              innerDiv.style.backgroundColor = "aqua";
              image[0].src = "dance.jpeg";
              console.log(`${posi}st song Paused`); 
       }

});
next.addEventListener('click', ()=>{
       if(isActive){
              if (posi < songs.length-1) {
                     songs[posi].pause();
                     songs[posi].currentTime = 0;
                     posi++ ;
                     image[0].src = "dance.jpeg";
                     pause.style.display = "none";
                     play.style.display = "block";
                     innerDiv.style.backgroundColor = "aqua";
              setTimeout(() => {
                     play.style.display = "none";
                     pause.style.display = "block";
                     innerDiv.style.backgroundColor = "blue";
                     image[0].src = "dance.gif";
                     songs[posi].play();
              }, 300);
              console.log(`${posi}st song Playing`);
              }
             
       }
       else{
              if (posi < songs.length-1) {
              songs[posi].currentTime = 0;
                      posi++;
              songs[posi].pause();
              console.log(`${posi}st song Paused`);
              }
             
       }
});
previous.addEventListener('click', () => {
       if(isActive){
              if (posi > 0) {
                     songs[posi].pause();
                     songs[posi].currentTime = 0;
                      posi--;
                     image[0].src = "dance.jpeg";
                     pause.style.display = "none";
                     play.style.display = "block";
                     innerDiv.style.backgroundColor = "aqua";
              setTimeout(() => {
                     play.style.display = "none";
                     pause.style.display = "block";
                     innerDiv.style.backgroundColor = "blue";
                     image[0].src = "dance.gif";
                     songs[posi].play();
              }, 300);
              console.log(`${posi}st song Playing`);
              }
             
       }
       else{
              if (posi > 0) {
                     songs[posi].currentTime = 0;
                     posi--;
                     songs[posi].pause();
              console.log(`${posi}st song Paused`);
              }
              
       }
});








// console.log(image[0]);
// play.addEventListener('click', () => {
//        //      currentSong.play();
//               songs[posi].play();
//             isActive = true;
//             play.style.display = "none";
//             pause.style.display = "block";
//             console.log("Playing");
// });
// pause.addEventListener('click', () => {
//        //      currentSong.pause();
//                 songs[posi].pause();
//             isActive = false;
//             play.style.display = "block";
//             pause.style.display = "none";
//             console.log("Paused");
// });
// next.addEventListener('click', () => {
//        if(isActive){
//        //  currentSong.pause();
//        songs[posi].pause();
//        songs[posi].currentTime = 0;
//        songs[posi-1] = songs[posi];
//        songs[posi] = songs[posi+1];
//        songs[posi+1] = songs[posi++];
//        //  preViousSong = currentSong
//        //  currentSong = newSong;
//        //  newSong = songs[posi++];
//         posi++;
//         play.style.display = "block";
//         pause.style.display = "none";
//         image[0].src = "guaGhia.jpg";
        
//         setTimeout((  ) => {
//               play.style.display = "none";
//               pause.style.display = "block";
//               songs[posi].play();
//         }, 500);
//        }
//        else{
//        //  preViousSong = currentSong;
//        //  currentSong = newSong;
//         songs[posi].currentTime = 0;
//        songs[posi-1] = songs[posi];
//        songs[posi] = songs[posi+1];
//        songs[posi+1] = songs[posi++];
//         image[0].src = "guaGhia.jpg";
//        //  newSong = songs[posi++];
//         posi++;
//         songs[posi].pause();
//        }
// });
// previous.addEventListener('click',() =>{
//        if(isActive){
//               // currentSong.pause();
//               // newSong = currentSong;
//               // currentSong = preViousSong;
//               songs[posi].pause();
//               songs[posi].currentTime = 0;
//               songs[posi+1] = songs[posi];
//               songs[posi] = songs[posi-1];
//               songs[posi-1] = songs[posi--];
//               image[0].src = "hq720.jpg";
//               pause.style.display = "none";
//               play.style.display = "block";
//               // preViousSong = songs[posi--];
//               posi--;
//               setTimeout(() => {
//                      play.style.display = "none";
//                      pause.style.display = "block";
//                      songs[posi].play();
//               },500);
//        }
//        else{
//               // currentSong = preViousSong;
//                songs[posi].currentTime = 0;
//               songs[posi+1] = songs[posi];
//               songs[posi] = songs[posi-1];
//               songs[posi-1] = songs[posi--];
//               image[0].src = "hq720.jpg";
//               // preViousSong = songs[posi--];
//               posi--;
//               songs[posi].pause();
//        }
// });