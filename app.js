/* PLAN

DONE set starting time (start of the year)
DONE get now
DONE Math.floor (now - startingTime (in days) /1000 /60 /60 /24) = number of the song
DONE create playlist
DONE play the song of the day (Randomization - notes on my phone!)
DONE create a new randomized list each year (like the start-now -> same solution)
DONE add messages for special dates
DONE get the special date messages on screen
DONE make the UI responsive
 Playlist:
    DONE if you enter a link and lick the button add it to the playlist
    DONE if a song is over play the first element from the list
    DONE if there are no more songs to play go back to today's song
    DONE  delete the list elements that are finished playing
    DONE Clear the interval when the playlist is empty (animal sounds)
    DONE wait of both promises with promise.All when adding a song to the playlist, throw an error message if it fails
    DONE cut down everything after the id (lists)
    https://www.youtube.com/watch?v=6A-IoOEPbUs&list=RD6A-IoOEPbUs&start_radio=1
    - make the links to work on mobile too
    - add buttons for navigation or try drag & drop
- create patreon for full list
- make the UI pretty
- upload everything to the GitHub repo


DONE FOR GETTING AROUND THE 403 ERROR

  DONE Make a second video player and hide it + stop the playing
  DONE Get the data from that second player:
      DONE Title: player.getVideoData().title
      DONE Duration player.getDuration()




link to GitHub Pages: https://vellyus.github.io/music_player/

Wallpaper? :
https://www.pexels.com/hu-hu/foto/4k-hatterkep-elektromos-gitar-fa-fokusz-1266821/

PROJECT NAME: moonlit-conduit-280617
APP NAME: moonlit-conduit
API KEY: AIzaSyDZlS3XRm3Uw5Wa8YFPgTT3cMQqkTPo5Zw
API CLIENT ID: 688278274189-rvosqpj4gfatp0c3sie6g333o4s75kv2.apps.googleusercontent.com
API CLIENT SECRET: vv1LuueEwRRU8jkBKUijJsPB
*/

/* DO THIS AT EVERY NEW YEAR !!!

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let newList = shuffleArray(originalList);
newList = JSON.stringify(newList);
console.log(newList);

// Go to console! "Copy" button at the end of the log!
// Paste it to listInUse!
// "keys" -> keys (with replace all in VSCode)
// { -> shift+enter { shift+enter
// }, -> shift+enter }, shift+enter

*/






const now = new Date;
const thisYear = now.getFullYear();
const startingTime = new Date(`January 1, ${thisYear} 01:00:00`);

// const month = 11;
// const date = 1;

const month = now.getMonth();
const date = now.getDate();


const stratingTimeMS = startingTime.getTime();
const nowMs = now.getTime();

const numberOfSong = Math.floor((nowMs - stratingTimeMS) / 1000 / 60 / 60 / 24);
console.log(numberOfSong);


function urlToEmbed(input) {
  let re = /watch\?v=/g;
  return input.replace(re, "embed/");
}

const iframe = document.querySelector("#player");
const todaysSong = listInUse[numberOfSong].link;

document.querySelector(".title").innerText = listInUse[numberOfSong].title;
document.querySelector(".artist").innerText = listInUse[numberOfSong].artist;

for (let i = 0; i < specialSongs.length; i++) {
  if (month === specialSongs[i].month && date === specialSongs[i].date) {
    iframe.src = urlToEmbed(specialSongs[i].link);
    let message = document.querySelector(".message");
    message.innerText = specialSongs[i].message;
    message.style.visibility = "visible";

    document.querySelector(".title").innerText = specialSongs[i].title;
    document.querySelector(".artist").innerText = specialSongs[i].artist;
  }
}


// Get video info from url

let title;
let duration;
let video = {};

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function fetchData(url) {
  return fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .catch(error => console.log('Looks like there was a problem!', error))
}


function urlToID(input) {
  let re = /https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\//g;
  return input.replace(re, "");
}

function urlToID2(input) {
  let re = /&.+|\?.+/g;
  return input.replace(re, "");
}

function convertDuration(input) {

  function minusPT(input) {
    let re = /PT/g;
    return input.replace(re, "");
  }

  let duration = minusPT(input);
  const reMin = /M\d+S/g;
  const reSec = /\d+M|S/g;
  const minutes = parseInt(duration.replace(reMin, ""));
  const seconds = parseInt(duration.replace(reSec, ""));
  duration = minutes * 60 + seconds;

  return duration;
}

async function getInfo(url) {
  let id = urlToID2(urlToID(url));
  let api_key = "AIzaSyDZlS3XRm3Uw5Wa8YFPgTT3cMQqkTPo5Zw";
  let api_url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=" + id + "&key=" + api_key;

  const data = await fetchData(api_url);
  console.log(data);
  // video.title = data.items[0].snippet.title;
  title = data.items[0].snippet.title;
  duration = convertDuration(data.items[0].contentDetails.duration);

}
/*
async function getDuration(url) {
  let id = urlToID(url);
  let api_key = "AIzaSyDZlS3XRm3Uw5Wa8YFPgTT3cMQqkTPo5Zw";
  let api_url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=" + id + "&key=" + api_key;

  const data = await fetchData(api_url);
  // video.duration = convertDuration(data.items[0].contentDetails.duration);
  duration = convertDuration(data.items[0].contentDetails.duration);
}
*/
class Video {
  constructor(url) {
    this.url = url;
    this.id = urlToID2(urlToID(this.url));
    this.title = invisiblePlayer.getVideoData().title;
    this.duration = invisiblePlayer.getDuration();
  }

}

// async function addToPlaylist() {


//   try {
//     const input = document.querySelector('input');
//     video = new Video(input.value);

//     // await getDuration(video.url);
//     await getInfo(video.url);
    
//     const newSongInQue = document.createElement('div');
//     document.querySelector('main').appendChild(newSongInQue);
//     newSongInQue.className = "songInQue";

//     const newSongData = document.createElement('div');
//     newSongInQue.appendChild(newSongData);
//     newSongData.className = "songData";
    

//     let songTitle = document.createElement("p");
//     songTitle.innerText = title;
//     newSongData.appendChild(songTitle);

//     let songDuration = document.createElement("p");
//     songDuration.innerText = `Duration: ${duration}s`;
//     newSongData.appendChild(songDuration);

//     playList.push(urlToID2(urlToID(input.value)));
//     input.value = "";
//   } catch (e) {
//     alert("Coulnd't get the data from the server. Please try again later... :/");

//   }

// }

function addToPlaylist() {


    // const input = document.querySelector('input');

    // invisiblePlayer.loadVideoById(urlToID2(urlToID(input.value)));
    // invisiblePlayer.mute();

    // setTimeout(meh, 5000);


    // function meh() {
    // video = new Video(input.value);

    // const newSongInQue = document.createElement('div');
    // document.querySelector('main').appendChild(newSongInQue);
    // newSongInQue.className = "songInQue";

    // const newSongData = document.createElement('div');
    // newSongInQue.appendChild(newSongData);
    // newSongData.className = "songData";
    

    // let songTitle = document.createElement("p");
    // songTitle.innerText = video.title;
    // newSongData.appendChild(songTitle);

    // let songDuration = document.createElement("p");
    // songDuration.innerText = `Duration: ${video.duration}s`;
    // newSongData.appendChild(songDuration);

    // playList.push(urlToID2(urlToID(input.value)));
    // input.value = "";
    // }

    const input = document.querySelector('input');

    invisiblePlayer.loadVideoById(urlToID2(urlToID(input.value)));
    invisiblePlayer.mute();

    video = new Video(input.value);

    myTimer2 = setInterval(meh, 1000);


    function meh() {

    if (invisiblePlayer.getCurrentTime() < 0) {
      const newSongInQue = document.createElement('div');
      document.querySelector('main').appendChild(newSongInQue);
      newSongInQue.className = "songInQue";
  
      const newSongData = document.createElement('div');
      newSongInQue.appendChild(newSongData);
      newSongData.className = "songData";
      
  
      let songTitle = document.createElement("p");
      songTitle.innerText = video.title;
      newSongData.appendChild(songTitle);
  
      let songDuration = document.createElement("p");
      songDuration.innerText = `Duration: ${video.duration}s`;
      newSongData.appendChild(songDuration);
  
      playList.push(urlToID2(urlToID(input.value)));
      input.value = "";
      }
  
    }
    clearInterval(myTimer2);    

}



const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', addToPlaylist);




let playList = [];


// INVISIBLE PLAYER

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var invisiblePlayer;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: urlToID2(urlToID(todaysSong)),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  invisiblePlayer = new YT.Player('invisiblePlayer', {
    height: '390',
    width: '640',
    videoId: urlToID2(urlToID(todaysSong)),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
  });

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  invisiblePlayer.mute();

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  // if (event.data == !YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}
function stopVideo() {
  player.stopVideo();
}


document.querySelector('#invisiblePlayer').style.display = "none";







function playNextSong() {
  if (player.getCurrentTime() === player.getDuration()) {
    if (player.getCurrentTime() === player.getDuration() && playList.length === 0) {
      player.loadVideoById(urlToID2(urlToID(todaysSong)));
      player.stopVideo();
      clearInterval(myTimer);
    }
    player.loadVideoById(playList[0]);
    playList = playList.slice(1);
    document.querySelector('.songInQue').remove();
  } 
}


myTimer = setInterval(playNextSong, 1000);


// Player Operations:
// https://developers.google.com/youtube/iframe_api_reference#Operations



// https://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing
