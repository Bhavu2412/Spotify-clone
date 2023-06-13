console.log('Welcome to spotify');
let songIndex = 0;
let Login=document.getElementById('Login');
let home=document.getElementById('home');
let signup=document.getElementById('signup');
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let forward = document.getElementById('forward');
let back = document.getElementById('back');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let insta=document.getElementById('insta');
let face=document.getElementById('face');
let twit=document.getElementById('twit');
let songs = [
    { songName: "sala-me-Ishq", filePath: "songs/1.mp3", coverPath: "covers/car.jpg" },
    { songName: "sala-me-Ishq1", filePath: "songs/2.mp3", coverPath: "covers/img2.jpeg" },
    { songName: "sala-me-Ishq2", filePath: "songs/3.mp3", coverPath: "covers/img3.webp" },
    { songName: "sala-me-Ishq3", filePath: "songs/4.mp3", coverPath: "covers/img4.jpeg" },
    { songName: "sala-me-Ishq4", filePath: "songs/5.mp3", coverPath: "covers/img5.jpeg" },
    { songName: "sala-me-Ishq5", filePath: "songs/6.mp3", coverPath: "covers/img6.jpeg" },
    { songName: "sala-me-Ishq6", filePath: "songs/7.mp3", coverPath: "covers/img7.jpeg" },
    { songName: "sala-me-Ishq7", filePath: "songs/8.mp3", coverPath: "covers/img8.png" },
    { songName: "sala-me-Ishq8", filePath: "songs/9.mp3", coverPath: "covers/cars3.jpg"}

]
home.addEventListener('click',()=>{
    window.location.href='index.html';
})
Login.addEventListener('click',()=>{
    window.location.href='login.html';
})
signup.addEventListener('click',()=>{
    window.location.href='https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F';
})

//AudioElement.play();
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});

forward.addEventListener('click',()=>{
    if(songIndex!=0){
        audioElement.pause();
    } 
})

audioElement.addEventListener('timeupdate', () => {
    progress = ((audioElement.currentTime / audioElement.duration) * 100);
    //Update seekbar
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value / 100) * audioElement.duration);
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
       audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
       
    })
});
    
document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    makeAllPlays();
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
});

document.getElementById('back').addEventListener('click',(element)=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    makeAllPlays();
    
    console.log(element);
    audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
       
});
insta.addEventListener('click',()=>{
    window.location.href='https://www.instagram.com/spotify/';
})
face.addEventListener('click',()=>{
    window.location.href='https://www.facebook.com/Spotify/';
})
twit.addEventListener('click',()=>{
    window.location.href='https://www.twitter.com/spotify/';
})