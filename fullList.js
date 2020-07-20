/* PLAN

PRIO 1 !!!
  DONE pass on the title and the artist from my list to the actual playlist and to the player
  - maybe add a toTop Button instead of the shuffle button ???
    ICON: "Shift fill" in icons dir
  - change the list play buttons to "Plus circle fill" in icons dir
  - move te shuffle button to the new playlist area

- add search feature: try real time search while typing, if that doesnt work do a simple one with a search button
DONE BUGFIX: somehow the app freezes when you change a few song positions, maybe the updateButtons function or something else is not efficent enough... out of memory error message
- maybe add a fixed footer with PREVIOUS PLAY/PAUSE NEXT buttons + currently playing title + artist
    - also make the playlist step forward when a song is over - this way you dont lose history
    - currentSong id fot the element, make it red and bold
    DONE maybe add the hide list and to top buttons here too
MAKE IT LIKE ON GROOVESHARK - PICTURE IN THIS DIR. !!!  OR SOUNDCLOUD
add a clear list button too!
(current playlist floats in from side)
- add play all in random order feature
- add the special songs at the bottom in a separate section

*/

let colorLight = "#e0e7e9";
let colorDark = "#222";
let colorRed = "red";
let colorBlue = "blue";

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  if (chk.checked === true) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  if (chk.checked === true) {
    let upButtons = document.querySelectorAll('.up');
    let downButtons = document.querySelectorAll('.down');
    let removeButtons = document.querySelectorAll('.remove');
    let addToPlayListButtons = document.querySelectorAll(".addToPlaylist");
    upButtons.forEach(e => e.src = "assets/triangle-fill.svg");
    downButtons.forEach(e => e.src = "assets/triangle-fill.svg");
    removeButtons.forEach(e => e.src = "assets/x.svg");
    addToPlayListButtons.forEach(e => e.src = "assets/triangle-fill.svg");

    document.querySelectorAll(".songInQue").forEach(e => e.firstElementChild.style.color = colorDark);
    document.querySelectorAll(".songInQue")[playlistPosition].firstElementChild.style.color = colorBlue;

  } else {
    let upButtons = document.querySelectorAll('.up');
    let downButtons = document.querySelectorAll('.down');
    let removeButtons = document.querySelectorAll('.remove');
    let addToPlayListButtons = document.querySelectorAll(".addToPlaylist");
    upButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");
    downButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");
    removeButtons.forEach(e => e.src = "assets/x-light.svg");
    addToPlayListButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");

    document.querySelectorAll(".songInQue").forEach(e => e.firstElementChild.style.color = colorLight);
    document.querySelectorAll(".songInQue")[playlistPosition].firstElementChild.style.color = colorRed;

  }
});



function updatePlayList() {
  let listUl = document.querySelectorAll(".songInQue");
  let newPlayList = [];

  for (let i = 0; i < listUl.length; i++) {
    for (let j = 0; j < playList.length; j++) {
      if (parseInt(listUl[i].id) === playList[j].serialNr) {
        newPlayList.push(playList[j]);
      }
    }
  }
  playList = newPlayList;

  for (let i = 0; i < listUl.length; i++) {
    if (listUl[i].firstElementChild.style.color === "red" || listUl[i].firstElementChild.style.color === "blue") {
      playlistPosition = i;
    }
  }
}





const now = new Date;
const thisYear = now.getFullYear();
const startingTime = new Date(`January 1, ${thisYear} 00:00:00 GMT+200`);

/* Special Message Test */
// const month = 1;
// const date = 26;

const month = now.getMonth();
const date = now.getDate();


const startingTimeMs = startingTime.getTime();
const nowMs = now.getTime();

const numberOfSong = Math.floor((nowMs - startingTimeMs) / 1000 / 60 / 60 / 24);
console.log(numberOfSong);


function urlToEmbed(input) {
  let re = /watch\?v=/g;
  return input.replace(re, "embed/");
}

const iframe = document.querySelector("#player");
const todaysSong = listInUse[numberOfSong];

document.querySelector(".title").innerText = listInUse[numberOfSong].title;
document.querySelector(".artist").innerText = listInUse[numberOfSong].artist;

document.querySelector('.footerInfo').innerText = `${listInUse[numberOfSong].title} - ${listInUse[numberOfSong].artist}`;

for (let i = 0; i < specialSongs.length; i++) {
  if (month === specialSongs[i].month && date === specialSongs[i].date) {
    iframe.src = urlToEmbed(specialSongs[i].link);
    let message = document.querySelector(".message");
    message.innerText = specialSongs[i].message;
    message.style.display = "block";


    document.querySelector(".title").innerText = specialSongs[i].title;
    document.querySelector(".artist").innerText = specialSongs[i].artist;
    document.querySelector('.footerInfo').innerText = `${specialSongs[i].title} - ${specialSongs[i].artist}`;

  }
}


// Get video info from url

let title;
let duration;
let video = {};
let serialNr = 0;
let playlistPosition = -1;

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
  let re = /https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\/|https:\/\/m.youtube.com\/watch\?v=/g;
  return input.replace(re, "");
}

function urlToID2(input) {
  let re = /&.+|\?list.+/g;
  return input.replace(re, "");
}


function convertDuration(input) {
  let duration = parseInt(input);
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for (let i = 1; i; i++) {
    if ((duration / (3600 * i)) < 1) {
      hours = i - 1;
      duration = duration - (3600 * (i - 1));
      break;
    }

  }

  for (let i = 1; i; i++) {
    if ((duration / (60 * i)) < 1) {
      minutes = i - 1;
      seconds = duration - 60 * (i - 1);
      break;
    }
  }

  if (hours < 10) {
    hours = "0" + hours.toString();
  }

  if (hours != "00" && minutes > 10) {
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }
  }

  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  minutes = minutes.toString();
  seconds = seconds.toString();



  if (hours === "00") {
    return `${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}


class Video {
  constructor(url) {
    this.url = url;
    this.id = urlToID2(urlToID(this.url));
    this.title = invisiblePlayer.getVideoData().title;
    this.duration = invisiblePlayer.getDuration();
    this.serialNr = serialNr;
  }

}

class defaultVideo {
  constructor(url) {
    this.url = url;
    this.id = urlToID2(urlToID(this.url));
  }

}


class Video2 {
  constructor(element) {
    this.id = element.innerText;
    this.title = element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText;;
    this.artist = element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.innerText;
    this.display = `${this.title} - ${this.artist}`;
    this.duration = invisiblePlayer.getDuration();
    this.serialNr = serialNr;
  }

}



class SortedVideo {
  constructor(e) {
    this.url = e.link;
    this.id = urlToID2(urlToID(this.url));
    this.title = e.title;
    this.artist = e.artist;
    this.serialNr = serialNr;
  }

}

let playingNow = new defaultVideo(todaysSong.link);




function muteInvisiblePlayer() {
  invisiblePlayer.mute();
  setTimeout(clearInterval, 10000, myTimer3);
}



function addToPlaylist() {

  const input = document.querySelector('input');

  invisiblePlayer.loadVideoById(urlToID2(urlToID(input.value)));

  if (input.value === "" || urlToID2(urlToID(input.value)).length != 11) {
    document.querySelector(".errorMessage").style.display = "block";
    return;
  }
  document.querySelector(".errorMessage").style.display = "none";


  myTimer3 = setInterval(muteInvisiblePlayer, 200);

  let myTimer2 = setInterval(addSong, 1000);


  function addSong() {
    if (invisiblePlayer.getCurrentTime() > 0) {
      video = new Video(input.value);

      const newSongInQue = document.createElement('li');
      newSongInQue.setAttribute("id", serialNr);
      document.querySelector('.songsInQue').appendChild(newSongInQue);
      newSongInQue.className = "songInQue";

      const newSongData = document.createElement('div');
      newSongInQue.appendChild(newSongData);
      newSongData.className = "songData";


      let songTitle = document.createElement("p");
      songTitle.innerText = video.title;
      newSongData.appendChild(songTitle);

      let songDuration = document.createElement("p");
      songDuration.setAttribute("class", "duration");
      songDuration.innerText = `${convertDuration(video.duration)}`;
      newSongData.appendChild(songDuration);





      let navButtons = document.createElement("div");
      newSongInQue.appendChild(navButtons);
      navButtons.setAttribute("class", "navButtons");


      let newImgUp = document.createElement("img");
      if (chk.checked === true) {
        newImgUp.src = "assets/triangle-fill.svg";
      } else {
        newImgUp.src = "assets/triangle-fill-light.svg";
      }
      newImgUp.setAttribute("class", "up");
      navButtons.appendChild(newImgUp);

      let newImgDown = document.createElement("img");
      if (chk.checked === true) {
        newImgDown.src = "assets/triangle-fill.svg";
      } else {
        newImgDown.src = "assets/triangle-fill-light.svg";
      }
      newImgDown.setAttribute("class", "down");
      newImgDown.style.transform = "rotate(180deg)";
      navButtons.appendChild(newImgDown);



      let newImgX = document.createElement("img");
      if (chk.checked === true) {
        newImgX.src = "assets/x.svg";
      } else {
        newImgX.src = "assets/x-light.svg";
      }
      newImgX.setAttribute("class", "remove");
      navButtons.appendChild(newImgX);




      addEventListeners();
      updateButtons();

      playList.push(video);
      serialNr++;
      input.value = "";
      clearInterval(myTimer2);
    }
  }
}


function updateButtons() {
  let listUl = document.querySelector(".songsInQue");

  let firstListItem = listUl.firstElementChild;
  let lastListItem = listUl.lastElementChild;
  let liButtons = document.querySelectorAll('.navButtons img');
  let firstUpButton = firstListItem.getElementsByClassName('up');
  let lastDownButton = lastListItem.getElementsByClassName('down');

  for (let i = 0; i < liButtons.length; i++) {
    liButtons[i].style.visibility = 'visible';
  }
  firstUpButton[0].style.visibility = 'hidden';
  lastDownButton[0].style.visibility = 'hidden';
  updatePlayList();
}

function addEventListeners() {
  let listUl = document.querySelector(".songsInQue").lastChild;

  listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'IMG') {
      if (event.target.className == 'remove') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;

        if (event.target.parentNode.parentNode.firstElementChild.style.color === "red" || event.target.parentNode.parentNode.firstElementChild.style.color === "blue") {
          playNextSongWithButton();
        }

        ul.removeChild(li);
        updatePlayList();
        updateButtons();
      }
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
        updatePlayList();
        updateButtons();
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
        updatePlayList();
        updateButtons();
      }
    }
  }
  )
};
// function hidePlayList() {
//   const playList = document.querySelector(".playList");
//   if (playList.style.display === "block" || playList.style.display === "") {
//     playList.style.display = "none";
//     document.querySelector('.hideList').innerText = "Show List";
//   } else {
//     playList.style.display = "block";
//     document.querySelector('.hideList').innerText = "Hide List";
//   }
// }

// const addButton = document.querySelector('.hideList');
// addButton.addEventListener('click', hidePlayList);




let playList = [];


// PLAYER + INVISIBLE_PLAYER

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
    videoId: urlToID2(urlToID(todaysSong.link)),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  invisiblePlayer = new YT.Player('invisiblePlayer', {
    height: '390',
    width: '640',
    videoId: urlToID2(urlToID(todaysSong.link)),
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
  player.stopVideo();
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
  if (player.getPlayerState() === 1) {
    document.querySelector("#playButton").setAttribute("src", "assets/pause-fill-light.svg");
  }
  if (player.getPlayerState() === 2) {
    document.querySelector("#playButton").setAttribute("src", "assets/play-fill-light.svg");
  }

}
function stopVideo() {
  player.stopVideo();
}


document.querySelector('#invisiblePlayer').style.display = "none";







function playNextSong() {
  const repeatButton = document.querySelector("#repeat");

  if (repeatButton.className === "repeatActive") {
    if (player.getCurrentTime() === player.getDuration()) {
      clearInterval(myTimer);
      try {
        player.loadVideoById(playingNow.id);
        myTimer = setInterval(playNextSong, 10000);
      } catch {
        myTimer = setInterval(playNextSong, 10000);
      }
    }
  } else {

    if (player.getCurrentTime() === player.getDuration()) {
      if (!playList[playlistPosition + 1]) {
        player.loadVideoById(urlToID2(urlToID(todaysSong.link)));
        playingNow = new defaultVideo(todaysSong.link);
        player.stopVideo();
        document.querySelector("h2").innerText = "Today's song";
        document.querySelector(".title").innerText = todaysSong.title;
        document.querySelector(".artist").innerText = todaysSong.artist;
        document.querySelector(".by").style.display = "block";
        document.querySelector(".artist").style.display = "block";

        if (document.querySelectorAll('.songInQue')[playlistPosition]
        ) {
          if (chk.checked === true) {
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorDark;
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";
          } else {
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorLight;
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";
          }


          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "");

        }

        playlistPosition = -1;
        clearInterval(myTimer);



        document.querySelector('.footerInfo').innerText = `${todaysSong.title} - ${todaysSong.artist}`;


      } else {
        clearInterval(myTimer);
        try {
          playlistPosition++;

          document.querySelector("h2").innerText = "Currently Playing";
          document.querySelector(".title").innerText = playList[playlistPosition].title;
          // document.querySelector(".by").style.display = "none";
          // document.querySelector(".artist").style.display = "none";
          document.querySelector(".artist").innerText = playList[playlistPosition].artist;

          document.querySelector('.footerInfo').innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`;

          if (document.querySelectorAll('.songInQue')[playlistPosition - 1]
          ) {
            if (chk.checked === true) {
              document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.color = colorDark;
              document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.fontWeight = "400";
            } else {
              document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.color = colorLight;
              document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.fontWeight = "400";

              // document.querySelectorAll('.songInQue')[playlistPosition-1].setAttribute("id", "");
            }
          }
          if (chk.checked === true) {
            player.loadVideoById(playList[playlistPosition].id);
            playingNow = playList[playlistPosition];
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorBlue;
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";
          } else {
            player.loadVideoById(playList[playlistPosition].id);
            playingNow = playList[playlistPosition];
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorRed;
            document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";
          }
          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "currentSong");


          // playList = playList.slice(1);
          // document.querySelector('.songInQue').remove();
          myTimer = setInterval(playNextSong, 10000);
        } catch {
          myTimer = setInterval(playNextSong, 10000);
        }
      }
    }
    updateButtons();
  }
}

function playNextSongWithButton() {

  const repeatButton = document.querySelector("#repeat");

  if (repeatButton.className === "repeatActive") {
    clearInterval(myTimer);
    try {
      player.loadVideoById(playingNow.id);
      myTimer = setInterval(playNextSong, 10000);
    } catch {
      myTimer = setInterval(playNextSong, 10000);
    }
  } else {

    if (!playList[playlistPosition + 1]) {
      player.loadVideoById(urlToID2(urlToID(todaysSong.link)));
      playingNow = new defaultVideo(todaysSong.link);
      player.stopVideo();
      document.querySelector("h2").innerText = "Today's song";
      document.querySelector(".title").innerText = todaysSong.title;
      document.querySelector(".artist").innerText = todaysSong.artist;
      document.querySelector(".by").style.display = "block";
      document.querySelector(".artist").style.display = "block";

      if (document.querySelectorAll('.songInQue')[playlistPosition]
      ) {
        if (chk.checked === true) {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorDark;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";
        } else {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorLight;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";

          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "");
        }
      }

      playlistPosition = -1;
      clearInterval(myTimer);


      document.querySelector('.footerInfo').innerText = `${todaysSong.title} - ${todaysSong.artist}`;


    } else {
      clearInterval(myTimer);
      try {
        playlistPosition++;

        document.querySelector("h2").innerText = "Currently Playing";
        document.querySelector(".title").innerText = playList[playlistPosition].title;
        // document.querySelector(".by").style.display = "none";
        // document.querySelector(".artist").style.display = "none";
        document.querySelector(".artist").innerText = playList[playlistPosition].artist;

        document.querySelector('.footerInfo').innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`;

        if (document.querySelectorAll('.songInQue')[playlistPosition - 1]
        ) {
          if (chk.checked === true) {
            document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.color = colorDark;
            document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.fontWeight = "400";
          } else {
            document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.color = colorLight;
            document.querySelectorAll('.songInQue')[playlistPosition - 1].firstElementChild.style.fontWeight = "400";

            // document.querySelectorAll('.songInQue')[playlistPosition-1].setAttribute("id", "");
          }
        }

        player.loadVideoById(playList[playlistPosition].id);
        playingNow = playList[playlistPosition];
        if (chk.checked === true) {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorBlue;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";
        } else {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorRed;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";

          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "currentSong");
        }
        // playList = playList.slice(1);
        // document.querySelector('.songInQue').remove();
        myTimer = setInterval(playNextSong, 10000);
      } catch {
        myTimer = setInterval(playNextSong, 10000);
      }
    }
    updateButtons();
  }
}

document.querySelector("#skipEnd").addEventListener("click", playNextSongWithButton);



function playPreviousSongWithButton() {

  const repeatButton = document.querySelector("#repeat");

  if (repeatButton.className === "repeatActive") {
    clearInterval(myTimer);
    try {
      player.loadVideoById(playingNow.id);
      myTimer = setInterval(playNextSong, 10000);
    } catch {
      myTimer = setInterval(playNextSong, 10000);
    }
  } else {

    if (!playList[playlistPosition - 1]) {
      player.loadVideoById(urlToID2(urlToID(todaysSong.link)));
      playingNow = new defaultVideo(todaysSong.link);
      player.stopVideo();
      document.querySelector("h2").innerText = "Today's song";
      document.querySelector(".title").innerText = todaysSong.title;
      document.querySelector(".artist").innerText = todaysSong.artist;
      document.querySelector(".by").style.display = "block";
      document.querySelector(".artist").style.display = "block";

      if (document.querySelectorAll('.songInQue')[playlistPosition]
      ) {
        if (chk.checked === true) {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorDark;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";
        } else {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorLight;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "400";

          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "");
        }

        // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "");

      }

      playlistPosition = -1;
      clearInterval(myTimer);


      document.querySelector('.footerInfo').innerText = `${todaysSong.title} - ${todaysSong.artist}`;


    } else {
      clearInterval(myTimer);
      try {
        playlistPosition--;

        document.querySelector("h2").innerText = "Currently Playing";
        document.querySelector(".title").innerText = playList[playlistPosition].title;
        // document.querySelector(".by").style.display = "none";
        // document.querySelector(".artist").style.display = "none";
        document.querySelector(".artist").innerText = playList[playlistPosition].artist;

        document.querySelector('.footerInfo').innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`;

        if (document.querySelectorAll('.songInQue')[playlistPosition + 1]
        ) {
          if (chk.checked === true) {
            document.querySelectorAll('.songInQue')[playlistPosition + 1].firstElementChild.style.color = colorDark;
            document.querySelectorAll('.songInQue')[playlistPosition + 1].firstElementChild.style.fontWeight = "400";
          } else {
            document.querySelectorAll('.songInQue')[playlistPosition + 1].firstElementChild.style.color = colorLight;
            document.querySelectorAll('.songInQue')[playlistPosition + 1].firstElementChild.style.fontWeight = "400";

            // document.querySelectorAll('.songInQue')[playlistPosition-1].setAttribute("id", "");
          }

          // document.querySelectorAll('.songInQue')[playlistPosition+1].setAttribute("id", "");

        }

        player.loadVideoById(playList[playlistPosition].id);
        playingNow = playList[playlistPosition];
        if (chk.checked === true) {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorBlue;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";
        } else {
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.color = colorRed;
          document.querySelectorAll('.songInQue')[playlistPosition].firstElementChild.style.fontWeight = "800";

          // document.querySelectorAll('.songInQue')[playlistPosition].setAttribute("id", "");
        }


        // playList = playList.slice(1);
        // document.querySelector('.songInQue').remove();
        myTimer = setInterval(playNextSong, 10000);
      } catch {
        myTimer = setInterval(playNextSong, 10000);
      }
    }
    updateButtons();
  }
}

document.querySelector("#skipStart").addEventListener("click", playPreviousSongWithButton);


function showHideList() {
  const musicNoteList = document.querySelector("#musicNoteList");

  if (musicNoteList.className != "listActive") {
    musicNoteList.setAttribute("class", "listActive");
    document.querySelector(".songsInQue").style.display = "block";
  } else {
    musicNoteList.setAttribute("class", "listInactive");
    document.querySelector(".songsInQue").style.display = "none";
  }
}

document.querySelector("#musicNoteList").addEventListener("click", showHideList);





// function shuffleList() {
//   const shuffleButton = document.querySelector("#shuffle");

//   if (shuffleButton.className != "shuffleActive") {
//     shuffleButton.setAttribute("class", "shuffleActive");
//   } else {
//     shuffleButton.setAttribute("class", "shuffleInactive");
//   }
// }

// document.querySelector("#shuffle").addEventListener("click", shuffleList);


function repeatSong() {
  const repeatButton = document.querySelector("#repeat");

  if (repeatButton.className != "repeatActive") {
    repeatButton.setAttribute("class", "repeatActive");
  } else {
    repeatButton.setAttribute("class", "repeatInactive");
  }
}

document.querySelector("#repeat").addEventListener("click", repeatSong);


function playPause() {
  if (player.getPlayerState() === 1) {
    player.pauseVideo();
  }
  if (player.getPlayerState() === 2 || player.getPlayerState() === 5) {
    player.playVideo();
  }
}

document.querySelector("#playButton").addEventListener("click", playPause);



function muteUnmute() {
  const muteButton = document.querySelector("#mute");
  if (player.isMuted() === false) {
    player.mute();
    muteButton.setAttribute("src", "assets/volume-mute-fill-light.svg");
  }
  if (player.isMuted() === true) {
    player.unMute();
    muteButton.setAttribute("src", "assets/volume-up-fill-light.svg");
  }

}

document.querySelector("#mute").addEventListener("click", muteUnmute);

let myTimer3 = setInterval(muteInvisiblePlayer, 200);

let myTimer = setInterval(playNextSong, 10000);

let myTimer4 = setInterval(searchList, 1000);


// EXPERIMENT


// function urlToID3(input) {
//   let re = /https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\/|https:\/\/m.youtube.com\/watch\?v=/g;
//   return input.replace(re, "");
// }

// function urlToID4(input) {
//   let re = /&.+|\?list.+/g;
//   return input.replace(re, "");
// }











function compareByArtist(a, b) {
  const bandA = a.artist;
  const bandB = b.artist;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

const sortedSongs = originalList.sort(compareByArtist);

function addSortedSongs() {


  for (let i = 0; i < sortedSongs.length; i++) {



    video = new SortedVideo(sortedSongs[i]);

    const newSongInList = document.createElement('li');
    newSongInList.setAttribute("id", serialNr);
    document.querySelector('.playList').appendChild(newSongInList);
    newSongInList.className = "songInList";

    const newSongData = document.createElement('div');
    newSongInList.appendChild(newSongData);
    newSongData.className = "songData";


    let songTitle = document.createElement("p");
    songTitle.innerText = video.title;
    newSongData.appendChild(songTitle);

    let songDuration = document.createElement("p");
    songDuration.setAttribute("class", "duration");
    songDuration.innerText = video.artist;
    newSongData.appendChild(songDuration);



    let playButtons = document.createElement("div");
    newSongInList.appendChild(playButtons);
    playButtons.setAttribute("class", "playButtons");


    let newImgDown = document.createElement("img");
    if (chk.checked === true) {
      newImgDown.src = "assets/triangle-fill.svg";
    } else {
      newImgDown.src = "assets/triangle-fill-light.svg";
    }
    newImgDown.setAttribute("class", "addToPlaylist");
    newImgDown.style.transform = "rotate(90deg)";
    playButtons.appendChild(newImgDown);

    let url = document.createElement("p");
    url.setAttribute("class", "url");
    newImgDown.appendChild(url);
    url.innerText = video.id;
    url.style.display = "none";






    // let newImgUp = document.createElement("img");
    // if (chk.checked === true) {
    //   newImgUp.src = "assets/triangle-fill.svg";
    // } else {
    //   newImgUp.src = "assets/triangle-fill-light.svg";
    // }
    // newImgUp.setAttribute("class", "up");
    // navButtons.appendChild(newImgUp);

    // let newImgDown = document.createElement("img");
    // if (chk.checked === true) {
    //   newImgDown.src = "assets/triangle-fill.svg";
    // } else {
    //   newImgDown.src = "assets/triangle-fill-light.svg";
    // }
    // newImgDown.setAttribute("class", "down");
    // newImgDown.style.transform = "rotate(180deg)";
    // navButtons.appendChild(newImgDown);



    // let newImgX = document.createElement("img");
    // if (chk.checked === true) {
    //   newImgX.src = "assets/x.svg";
    // } else {
    //   newImgX.src = "assets/x-light.svg";
    // }
    // newImgX.setAttribute("class", "remove");
    // navButtons.appendChild(newImgX);



    // addEventListeners();
    // updateButtons();

    // playList.push(video);
    // serialNr++;

  }
  document.querySelectorAll(".addToPlaylist").forEach(e => e.addEventListener("click", (event) => {
    invisiblePlayer.loadVideoById(event.target.firstElementChild.innerText);



    // const input = document.querySelector('input');


    // if (input.value === "" || urlToID2(urlToID(input.value)).length != 11) {
    //   document.querySelector(".errorMessage").style.display = "block";
    //   return;
    // }
    // document.querySelector(".errorMessage").style.display = "none";


    myTimer3 = setInterval(muteInvisiblePlayer, 200);

    let myTimer2 = setInterval(addSong2, 1000);


    function addSong2() {
      if (invisiblePlayer.getCurrentTime() > 0) {
        video = new Video2(event.target.firstElementChild);

        const newSongInQue = document.createElement('li');
        newSongInQue.setAttribute("id", serialNr);
        document.querySelector('.songsInQue').appendChild(newSongInQue);
        newSongInQue.className = "songInQue";

        const newSongData = document.createElement('div');
        newSongInQue.appendChild(newSongData);
        newSongData.className = "songData";


        let songTitle = document.createElement("p");

        songTitle.innerText = video.display;
        newSongData.appendChild(songTitle);

        let songDuration = document.createElement("p");
        songDuration.setAttribute("class", "duration");
        songDuration.innerText = `${convertDuration(video.duration)}`;
        newSongData.appendChild(songDuration);





        let navButtons = document.createElement("div");
        newSongInQue.appendChild(navButtons);
        navButtons.setAttribute("class", "navButtons");


        let newImgUp = document.createElement("img");
        if (chk.checked === true) {
          newImgUp.src = "assets/triangle-fill.svg";
        } else {
          newImgUp.src = "assets/triangle-fill-light.svg";
        }
        newImgUp.setAttribute("class", "up");
        navButtons.appendChild(newImgUp);

        let newImgDown = document.createElement("img");
        if (chk.checked === true) {
          newImgDown.src = "assets/triangle-fill.svg";
        } else {
          newImgDown.src = "assets/triangle-fill-light.svg";
        }
        newImgDown.setAttribute("class", "down");
        newImgDown.style.transform = "rotate(180deg)";
        navButtons.appendChild(newImgDown);



        let newImgX = document.createElement("img");
        if (chk.checked === true) {
          newImgX.src = "assets/x.svg";
        } else {
          newImgX.src = "assets/x-light.svg";
        }
        newImgX.setAttribute("class", "remove");
        navButtons.appendChild(newImgX);




        addEventListeners();
        updateButtons();

        playList.push(video);
        serialNr++;
        clearInterval(myTimer2);
      }
    }

  }));
}

addSortedSongs();
window.onload(player.stopVideo());






function searchList() {
  const searchField = document.querySelector(".input");
  const input = searchField.value.toUpperCase();


  if (input === "") {
    document.querySelectorAll(".songInList").forEach(e => {
      e.style.display = "flex";
    });
  }

  console.log(input);
  document.querySelectorAll(".songInList").forEach(e => {
    if (e.firstElementChild.firstElementChild.innerText.toUpperCase().search(input) === -1 && e.firstElementChild.firstElementChild.nextElementSibling.innerText.toUpperCase().search(input) === -1) {
      e.style.display = "none";
    } else {
      e.style.display = "flex";
    }
  });

}

