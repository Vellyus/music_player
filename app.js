/* PROJECT INFO FOR API IF NEEDED

PROJECT NAME: moonlit-conduit-280617
APP NAME: moonlit-conduit
API KEY: AIzaSyDZlS3XRm3Uw5Wa8YFPgTT3cMQqkTPo5Zw
API CLIENT ID: 688278274189-rvosqpj4gfatp0c3sie6g333o4s75kv2.apps.googleusercontent.com
API CLIENT SECRET: vv1LuueEwRRU8jkBKUijJsPB
*/



/* DO THIS AT EVERY NEW YEAR !!!

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

let newList = shuffleArray(originalList)
newList = JSON.stringify(newList)
console.log(newList)

// Go to console! "Copy" button at the end of the log!
// Paste it to listInUse!
// "keys" -> keys (with replace all in VSCode)
// { -> shift+enter { shift+enter
// }, -> shift+enter }, shift+enter

*/


const now = new Date,
  thisYear = now.getFullYear(),
  startingTime = new Date(`January 1, ${thisYear} 00:00:00 GMT+200`)

/* Special Message Test */
// const month = 1
// const date = 26

const month = now.getMonth()
const date = now.getDate()

const startingTimeMs = startingTime.getTime(),
  nowMs = now.getTime(),
  numberOfSong = Math.floor((nowMs - startingTimeMs) / 1000 / 60 / 60 / 24),
  iframe = document.querySelector("#player"),
  titleElement = document.querySelector(".title"),
  artistElement = document.querySelector(".artist"),
  messageElement = document.querySelector(".message"),
  h2Element = document.querySelector("h2"),
  byElement = document.querySelector(".by")

let title,
  duration,
  video = {},
  serialNr = 0,
  todaysSong = listInUse[numberOfSong].link,
  playList = []

titleElement.innerText = listInUse[numberOfSong].title
artistElement.innerText = listInUse[numberOfSong].artist

for (let song of specialSongs)
{
  if (month === song.month && date === song.date)
  {
    todaysSong = song.link
    iframe.src = (urlToID(todaysSong))
    messageElement.innerText = song.message
    messageElement.style.display = "block"

    titleElement.innerText = song.title
    artistElement.innerText = song.artist
  }
}


// LIGHT MODE

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>
{

  const upButtons = document.querySelectorAll('.up'),
    downButtons = document.querySelectorAll('.down'),
    removeButtons = document.querySelectorAll('.remove')


  if (chk.checked === true)
  {
    document.body.classList.add("light")
  }
  else
  {
    document.body.classList.remove("light")
  }
  if (chk.checked === true)
  {
    upButtons.forEach(e => e.src = "assets/triangle-fill.svg")
    downButtons.forEach(e => e.src = "assets/triangle-fill.svg")
    removeButtons.forEach(e => e.src = "assets/x.svg")
  }
  else
  {
    upButtons.forEach(e => e.src = "assets/triangle-fill-light.svg")
    downButtons.forEach(e => e.src = "assets/triangle-fill-light.svg")
    removeButtons.forEach(e => e.src = "assets/x-light.svg")
  }
})
// END OF LIGHT MODE -


function updatePlayList()
{
  const listUl = document.querySelectorAll(".songInQue")
  let newPlayList = []

  for (let element of listUl)
  {
    for (let song of playList)
    {
      if (parseInt(element.id) === song.serialNr)
      {
        newPlayList.push(song)
      }
    }
  }
  playList = newPlayList
}


function urlToEmbed(input)
{
  const re = /watch\?v=/g
  return input.replace(re, "embed/")
}


function urlToID(input)
{
  const re = /https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\/|https:\/\/m.youtube.com\/watch\?v=/g
  const re2 = /&.+|\?list.+/g

  return input.replace(re, "").replace(re2, "")
}


function convertDuration(input)
{
  let duration = parseInt(input)
  let hours = 0
  let minutes = 0
  let seconds = 0

  for (let i = 1; i; i++)
  {
    if ((duration / (3600 * i)) < 1)
    {
      hours = i - 1
      duration = duration - (3600 * (i - 1))
      break
    }
  }

  for (let i = 1; i; i++)
  {
    if ((duration / (60 * i)) < 1)
    {
      minutes = i - 1
      seconds = duration - 60 * (i - 1)
      break
    }
  }

  if (hours < 10)
  {
    hours = "0" + hours.toString()
  }

  if (hours != "00" && minutes > 10)
  {
    if (minutes < 10)
    {
      minutes = "0" + minutes.toString()
    }
  }

  if (seconds < 10)
  {
    seconds = "0" + seconds.toString()
  }

  minutes = minutes.toString()
  seconds = seconds.toString()


  if (hours === "00")
  {
    return `${minutes}:${seconds}`
  }

  return `${hours}:${minutes}:${seconds}`
}


class Video
{
  constructor(url)
  {
    this.url = url
    this.id = urlToID(this.url)
    this.title = invisiblePlayer.getVideoData().title
    this.duration = invisiblePlayer.getDuration()
    this.serialNr = serialNr
  }
}


class SortedVideo
{
  constructor(e)
  {
    this.url = e.link
    this.id = urlToID(this.url)
    this.title = e.title
    this.artist = e.artist
    this.serialNr = serialNr
  }
}


function muteInvisiblePlayer()
{
  invisiblePlayer.mute()
  setTimeout(clearInterval, 10000, myTimer3)
}

function addToPlaylist()
{

  const input = document.querySelector('input'),
    errorMessage = document.querySelector(".errorMessage")

  invisiblePlayer.loadVideoById(urlToID(input.value))

  if (input.value === "" || urlToID(input.value).length != 11)
  {
    errorMessage.style.display = "block"
    return
  }

  errorMessage.style.display = "none"

  myTimer3 = setInterval(muteInvisiblePlayer, 200)

  let myTimer2 = setInterval(addSong, 1000)


  function addSong()
  {
    if (invisiblePlayer.getCurrentTime() > 0)
    {
      video = new Video(input.value)

      const newSongInQue = document.createElement('li')
      newSongInQue.setAttribute("id", serialNr)
      document.querySelector('.songsInQue').appendChild(newSongInQue)
      newSongInQue.className = "songInQue"

      const newSongData = document.createElement('div')
      newSongInQue.appendChild(newSongData)
      newSongData.className = "songData"

      const songTitle = document.createElement("p")
      songTitle.innerText = video.title
      newSongData.appendChild(songTitle)

      const songDuration = document.createElement("p")
      songDuration.setAttribute("class", "duration")
      songDuration.innerText = `${convertDuration(video.duration)}`
      newSongData.appendChild(songDuration)

      const navButtons = document.createElement("div")
      newSongInQue.appendChild(navButtons)
      navButtons.setAttribute("class", "navButtons")

      const newImgUp = document.createElement("img")

      if (chk.checked === true)
      {
        newImgUp.src = "assets/triangle-fill.svg"
      }
      else
      {
        newImgUp.src = "assets/triangle-fill-light.svg"
      }
      newImgUp.setAttribute("class", "up")
      navButtons.appendChild(newImgUp)

      const newImgDown = document.createElement("img")

      if (chk.checked === true)
      {
        newImgDown.src = "assets/triangle-fill.svg"
      }
      else
      {
        newImgDown.src = "assets/triangle-fill-light.svg"
      }
      newImgDown.setAttribute("class", "down")
      newImgDown.style.transform = "rotate(180deg)"
      navButtons.appendChild(newImgDown)

      const newImgX = document.createElement("img")

      if (chk.checked === true)
      {
        newImgX.src = "assets/x.svg"
      }
      else
      {
        newImgX.src = "assets/x-light.svg"
      }

      newImgX.setAttribute("class", "remove")
      navButtons.appendChild(newImgX)

      addEventListeners()
      updateButtons()

      playList.push(video)
      serialNr++
      input.value = ""
      clearInterval(myTimer2)
    }
  }
}


function updateButtons()
{
  const listUl = document.querySelector(".songsInQue"),
    firstListItem = listUl.firstElementChild,
    lastListItem = listUl.lastElementChild,
    liButtons = document.querySelectorAll('.navButtons img'),
    firstUpButton = firstListItem.getElementsByClassName('up'),
    lastDownButton = lastListItem.getElementsByClassName('down')

  for (let button of liButtons)
  {
    button.style.visibility = 'visible'
  }
  firstUpButton[0].style.visibility = 'hidden'
  lastDownButton[0].style.visibility = 'hidden'
}

function addEventListeners()
{
  const listUlLast = document.querySelector(".songsInQue").lastChild

  listUlLast.addEventListener('click', (event) =>
  {
    if (event.target.tagName == 'IMG')
    {
      if (event.target.className == 'remove')
      {
        const li = event.target.parentNode.parentNode,
          ul = li.parentNode

        ul.removeChild(li)
        updatePlayList()
        updateButtons()
      }
    }
    if (event.target.className == 'up')
    {
      const li = event.target.parentNode.parentNode,
        prevLi = li.previousElementSibling,
        ul = li.parentNode

      if (prevLi)
      {
        ul.insertBefore(li, prevLi)
        updatePlayList()
        updateButtons()
      }
    }

    if (event.target.className == 'down')
    {
      const li = event.target.parentNode.parentNode,
        nextLi = li.nextElementSibling,
        ul = li.parentNode

      if (nextLi)
      {
        ul.insertBefore(nextLi, li)
        updatePlayList()
        updateButtons()
      }
    }
  }
  )
}

const addButton = document.querySelector('.addButton')
addButton.addEventListener('click', addToPlaylist)


// PLAYER + INVISIBLE_PLAYER

var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player
var invisiblePlayer
function onYouTubeIframeAPIReady()
{
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: urlToID(todaysSong),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
  invisiblePlayer = new YT.Player('invisiblePlayer', {
    height: '390',
    width: '640',
    videoId: urlToID(todaysSong),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
  })

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event)
{
  event.target.playVideo()
  invisiblePlayer.mute()
  player.stopVideo()

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false
function onPlayerStateChange(event)
{
  // if (event.data == !YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000)
  //   done = true
  // }
}
function stopVideo()
{
  player.stopVideo()
}
// END OF PLAYER + INVISIBLE_PLAYER -


document.querySelector('#invisiblePlayer').style.display = "none"


function playNextSong()
{
  if (player.getCurrentTime() === player.getDuration())
  {
    if (playList.length === 0)
    {
      player.loadVideoById(urlToID(todaysSong))
      player.stopVideo()
      h2Element.innerText = "Today's song"
      titleElement.innerText = listInUse[numberOfSong].title
      artistElement.innerText = listInUse[numberOfSong].artist
      byElement.style.display = "block"
      artistElement.style.display = "block"
      messageElement.style.display = "block"

    } else
    {
      clearInterval(myTimer)
      try
      {
        h2Element.innerText = "Currently Playing"
        titleElement.innerText = playList[0].title
        byElement.style.display = "none"
        artistElement.style.display = "none"
        messageElement.style.display = "none"

        player.loadVideoById(playList[0].id)
        playList = playList.slice(1)
        document.querySelector('.songInQue').remove()
        myTimer = setInterval(playNextSong, 10000)
      } catch {
        myTimer = setInterval(playNextSong, 10000)
      }
    }
  }
  updateButtons()
}

let myTimer3 = setInterval(muteInvisiblePlayer, 200)
let myTimer = setInterval(playNextSong, 10000)
