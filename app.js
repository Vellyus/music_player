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
- The PlayList:
       - when addToPlaylist button is pressed create a list element with the song info
       - when the song in the iframe ends play the first element in the list
- create patreon for full list
- make the UI pretty
- upload everything to the GitHub repo

link to GitHub Pages: https://vellyus.github.io/music_player/

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
const startingTime = new Date(`January 1, ${thisYear} 00:00:00`);

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

const iframe = document.querySelector("iframe");

iframe.src = urlToEmbed(listInUse[numberOfSong].link);

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
  let re = /https:\/\/www.youtube.com\/watch\?v=/g;
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

async function getTitle(url) {
  let id = urlToID(url);
  let api_key = "AIzaSyDKzm-HyJV8s1Z8XloM67M5EkzmTtUBl_E";
  let api_url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=" + id + "&key=" + api_key;

  const data = await fetchData(api_url);
  video.title = data.items[0].snippet.title;
}

async function getDuration(url) {
  let id = urlToID(url);
  let api_key = "AIzaSyDKzm-HyJV8s1Z8XloM67M5EkzmTtUBl_E";
  let api_url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=" + id + "&key=" + api_key;

  const data = await fetchData(api_url);
  video.duration = convertDuration(data.items[0].contentDetails.duration);
}

class Video {
  constructor(url) {
    this.url = url;
    this.id = urlToID(this.url)
    this.title = getTitle(this.url);
    this.duration = getDuration(this.url);
  }
}

let video = new Video("https://www.youtube.com/watch?v=jesc3yvZSws");
console.log(video);

// Do this to detect when the player finishes

// https://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}