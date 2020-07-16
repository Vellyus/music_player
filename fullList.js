/* PLAN

- add the special songs at the bottom in a separate section
- pass on the title and the artist from my list to the actual playlist and to the player
- add search feature: try real time search while typing, if that doesnt work do a simple one with a search button
- BUGFIX: somehow the app freezes when you change a few song positions, maybe the updateButtons function or something else is not efficent enough... out of memory error message


*/

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
  } else {
    let upButtons = document.querySelectorAll('.up');
    let downButtons = document.querySelectorAll('.down');
    let removeButtons = document.querySelectorAll('.remove');
    let addToPlayListButtons = document.querySelectorAll(".addToPlaylist");
    upButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");
    downButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");
    removeButtons.forEach(e => e.src = "assets/x-light.svg");
    addToPlayListButtons.forEach(e => e.src = "assets/triangle-fill-light.svg");
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
const todaysSong = listInUse[numberOfSong].link;

document.querySelector(".title").innerText = listInUse[numberOfSong].title;
document.querySelector(".artist").innerText = listInUse[numberOfSong].artist;

for (let i = 0; i < specialSongs.length; i++) {
  if (month === specialSongs[i].month && date === specialSongs[i].date) {
    iframe.src = urlToEmbed(specialSongs[i].link);
    let message = document.querySelector(".message");
    message.innerText = specialSongs[i].message;
    message.style.display = "block";


    document.querySelector(".title").innerText = specialSongs[i].title;
    document.querySelector(".artist").innerText = specialSongs[i].artist;
  }
}


// Get video info from url

let title;
let duration;
let video = {};
let serialNr = 0;

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

class Video2 {
  constructor(id) {
    this.id = id;
    this.title = invisiblePlayer.getVideoData().title;
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
}

function addEventListeners() {
  let listUl = document.querySelector(".songsInQue").lastChild;

  listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'IMG') {
      if (event.target.className == 'remove') {
        let li = event.target.parentNode.parentNode;
        let ul = li.parentNode;
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

function hidePlayList() {
  const playList = document.querySelector(".playList");
  if (playList.style.display === "block" ||playList.style.display === "") {
    playList.style.display = "none";
  } else {
    playList.style.display = "block";
  }
}

const addButton = document.querySelector('.hideList');
addButton.addEventListener('click', hidePlayList);




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
    if (playList.length === 0) {
      player.loadVideoById(urlToID2(urlToID(todaysSong)));
      player.stopVideo();
      document.querySelector("h2").innerText = "Today's song";
      document.querySelector(".title").innerText = listInUse[numberOfSong].title;
      document.querySelector(".artist").innerText = listInUse[numberOfSong].artist;
      document.querySelector(".by").style.display = "block";
      document.querySelector(".artist").style.display = "block";

    } else {
      clearInterval(myTimer);
      try {
        document.querySelector("h2").innerText = "Currently Playing";
        document.querySelector(".title").innerText = playList[0].title;
        document.querySelector(".by").style.display = "none";
        document.querySelector(".artist").style.display = "none";

        player.loadVideoById(playList[0].id);
        playList = playList.slice(1);
        document.querySelector('.songInQue').remove();
        myTimer = setInterval(playNextSong, 10000);
      } catch {
        myTimer = setInterval(playNextSong, 10000);
      }
    }
  }
  updateButtons();
}

let myTimer3 = setInterval(muteInvisiblePlayer, 200);

let myTimer = setInterval(playNextSong, 10000);

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



const sortedSongs = listInUse.sort(compareByArtist);

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
    newSongInQue.appendChild(playButtons);
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
        video = new Video2(event.target.firstElementChild.innerText);
  
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
        clearInterval(myTimer2);
      }
    }
  
  }));
}

addSortedSongs();




