const colorLight = "#e0e7e9",
  colorDark = "#222",
  colorRed = "rgb(255, 115, 21)", // "#ff7315",
  colorBlue = "rgb(0, 106, 113)" // "#006a71"

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
  iframe = document.querySelector("#player")

let playList = [],
  title,
  duration,
  video = {},
  serialNr = 0,
  playlistPosition = -1

const h2Element = document.querySelector("h2"),
  titleElement = document.querySelector(".title"),
  artistElement = document.querySelector(".artist"),
  byElement = document.querySelector(".by"),
  footerInfoElement = document.querySelector('.footerInfo')


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


class VideoFromList
{
  constructor(element)
  {
    this.id = element.innerText
    this.title = element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText
    this.artist = element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.innerText
    this.display = `${this.title} - ${this.artist}`
    this.duration = invisiblePlayer.getDuration()
    this.serialNr = serialNr
  }
}


class DefaultVideo
{
  constructor(url)
  {
    this.url = url
    this.id = urlToID(this.url)
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


// SET TODAY'S SONG
let todaysSong = listInUse[numberOfSong]
let playingNow = new DefaultVideo(todaysSong.link)


titleElement.innerText = listInUse[numberOfSong].title
artistElement.innerText = listInUse[numberOfSong].artist

footerInfoElement.innerText = `${listInUse[numberOfSong].title} - ${listInUse[numberOfSong].artist}`

const checkForSpecialDate = function ()
{
  for (let song of specialSongs)
  {
    if (month === song.month && date === song.date)
    {
      iframe.src = urlToEmbed(song.link)
      let message = document.querySelector(".message")
      message.innerText = song.message
      message.style.display = "block"
      todaysSong = song


      titleElement.innerText = song.title
      artistElement.innerText = song.artist
      footerInfoElement.innerText = `${song.title} - ${song.artist}`
    }
  }
}()


// LIGHT MODE
const chk = document.getElementById('chk')

chk.addEventListener('change', () =>
{

  const upButtons = document.querySelectorAll('.up')
  const downButtons = document.querySelectorAll('.down')
  const removeButtons = document.querySelectorAll('.remove')
  const addToPlayListButtons = document.querySelectorAll(".addToPlaylistButton")

  if (chk.checked === true)
  {
    document.body.classList.add("light")

    upButtons.forEach(e => e.src = "assets/triangle-fill.svg")
    downButtons.forEach(e => e.src = "assets/triangle-fill.svg")
    removeButtons.forEach(e => e.src = "assets/x.svg")
    addToPlayListButtons.forEach(e => e.src = "assets/plus-circle-fill.svg")

    document.querySelectorAll(".songInQue").forEach(e => e.firstElementChild.style.color = colorDark)
    document.querySelectorAll(".songInQue")[playlistPosition].firstElementChild.style.color = colorBlue

  }
  else
  {
    document.body.classList.remove("light")

    upButtons.forEach(e => e.src = "assets/triangle-fill-light.svg")
    downButtons.forEach(e => e.src = "assets/triangle-fill-light.svg")
    removeButtons.forEach(e => e.src = "assets/x-light.svg")
    addToPlayListButtons.forEach(e => e.src = "assets/plus-circle-fill-light.svg")

    document.querySelectorAll(".songInQue").forEach(e => e.firstElementChild.style.color = colorLight)
    document.querySelectorAll(".songInQue")[playlistPosition].firstElementChild.style.color = colorRed
  }
})
// END OF LIGHT MODE -

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
  let duration = parseInt(input),
    hours = 0,
    minutes = 0,
    seconds = 0

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


function muteInvisiblePlayer()
{
  invisiblePlayer.mute()
  setTimeout(clearInterval, 10000, myTimer3)
}


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

  for (let i = 0; i < listUl.length; i++)
  {
    if (listUl[i].firstElementChild.style.color === colorRed || listUl[i].firstElementChild.style.color === colorBlue)
    {
      playlistPosition = i
    }
  }

  if (playlistPosition != -1)
  {
    document.querySelector(".message").style.display = "none"
  }
  else
  {
    document.querySelector(".message").style.display = "block"
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

  for (let i = 0; i < liButtons.length; i++)
  {
    liButtons[i].style.visibility = 'visible'
  }
  firstUpButton[0].style.visibility = 'hidden'
  lastDownButton[0].style.visibility = 'hidden'
  updatePlayList()
}


function addEventListeners()
{
  const listUl = document.querySelector(".songsInQue").lastChild
  document.querySelectorAll(".songInQue .songData").forEach(e => e.firstElementChild.className = "songInQueTitle")

  listUl.addEventListener('click', (event) =>
  {
    if (event.target.tagName == 'IMG')
    {
      if (event.target.className == 'remove')
      {
        const li = event.target.parentNode.parentNode
        const ul = li.parentNode

        if (event.target.parentNode.parentNode.firstElementChild.style.color === colorRed || event.target.parentNode.parentNode.firstElementChild.style.color === colorBlue)
        {
          playNextSongWithButton()
        }

        ul.removeChild(li)
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
        updateButtons()
      }
    }
    if (event.target.className == "songInQueTitle")
    {
      const repeatButton = document.querySelector("#repeat")

      if (repeatButton.className == "repeatActive")
      {
        repeatButton.setAttribute("class", "repeatInactive")

        for (let i = 0; i < playList.length; i++)
        {
          if (playList[i].serialNr == event.target.parentNode.parentNode.id)
          {
            playlistPosition = i - 1
          }
        }

        playNextSongWithButton()

        if (chk.checked === true)
        {
          document.querySelectorAll(".songInQue .songData").forEach(e =>
          {
            e.style.color = colorDark
            e.style.fontWeight = 400
            event.target.parentNode.style.color = colorBlue
            event.target.parentNode.style.fontWeight = 800
          })

        }
        else
        {
          document.querySelectorAll(".songInQue .songData").forEach(e =>
          {
            e.style.color = colorLight
            e.style.fontWeight = 400
            event.target.parentNode.style.color = colorRed
            event.target.parentNode.style.fontWeight = 800
          })
        }

        repeatButton.setAttribute("class", "repeatActive")

      }
      else
      {
        for (let i = 0; i < playList.length; i++)
        {
          if (playList[i].serialNr == event.target.parentNode.parentNode.id)
          {
            playlistPosition = i - 1
          }

        }
        playNextSongWithButton()

        if (chk.checked === true)
        {
          document.querySelectorAll(".songInQue .songData").forEach(e =>
          {
            e.style.color = colorDark
            e.style.fontWeight = 400
            event.target.parentNode.style.color = colorBlue
            event.target.parentNode.style.fontWeight = 800
          })
        }
        else
        {
          document.querySelectorAll(".songInQue .songData").forEach(e =>
          {
            e.style.color = colorLight
            e.style.fontWeight = 400
            event.target.parentNode.style.color = colorRed
            event.target.parentNode.style.fontWeight = 800
          })
        }
      }

      updateButtons()

    }
  })
}


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
    videoId: urlToID(todaysSong.link),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
  invisiblePlayer = new YT.Player('invisiblePlayer', {
    height: '390',
    width: '640',
    videoId: urlToID(todaysSong.link),
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
  if (player.getPlayerState() === 1)
  {
    document.querySelector("#playButton").setAttribute("src", "assets/pause-fill-light.svg")
  }
  if (player.getPlayerState() === 2)
  {
    document.querySelector("#playButton").setAttribute("src", "assets/play-fill-light.svg")
  }

}
function stopVideo()
{
  player.stopVideo()
}


document.querySelector('#invisiblePlayer').style.display = "none"
// END OF PLAYER + INVISIBLE_PLAYER -


function playNextSong()
{

  let songInQueElements = document.querySelectorAll('.songInQue')
  const repeatButton = document.querySelector("#repeat")

  if (repeatButton.className === "repeatActive")
  {
    if (player.getCurrentTime() === player.getDuration())
    {
      clearInterval(myTimer)
      player.loadVideoById(playingNow.id)
      myTimer = setInterval(playNextSong, 10000)
    }
  }
  else
  {

    if (player.getCurrentTime() > 0 && player.getCurrentTime() === player.getDuration())
    {
      if (!playList[playlistPosition + 1])
      {
        player.loadVideoById(urlToID(todaysSong.link))
        playingNow = new DefaultVideo(todaysSong.link)
        player.stopVideo()
        h2Element.innerText = "Today's song"
        titleElement.innerText = todaysSong.title
        artistElement.innerText = todaysSong.artist
        byElement.style.display = "block"
        artistElement.style.display = "block"

        if (songInQueElements[playlistPosition]
        )
        {
          if (chk.checked === true)
          {
            songInQueElements[playlistPosition].firstElementChild.style.color = colorDark
            songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
          }
          else
          {
            songInQueElements[playlistPosition].firstElementChild.style.color = colorLight
            songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
          }
        }

        playlistPosition = -1
        clearInterval(myTimer)

        footerInfoElement.innerText = `${todaysSong.title} - ${todaysSong.artist}`

      }
      else
      {

        clearInterval(myTimer)

        playlistPosition++

        h2Element.innerText = "Currently Playing"
        titleElement.innerText = playList[playlistPosition].title

        if (playList[playlistPosition].artist === undefined)
        {
          byElement.style.display = "none"
          artistElement.style.display = "none"
          footerInfoElement.innerText = `${playList[playlistPosition].title}`
        }
        else
        {
          byElement.style.display = "block"
          artistElement.style.display = "block"
          artistElement.innerText = playList[playlistPosition].artist

          footerInfoElement.innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`
        }

        if (songInQueElements[playlistPosition - 1]
        )
        {
          if (chk.checked === true)
          {
            songInQueElements[playlistPosition - 1].firstElementChild.style.color = colorDark
            songInQueElements[playlistPosition - 1].firstElementChild.style.fontWeight = "400"
          }
          else
          {
            songInQueElements[playlistPosition - 1].firstElementChild.style.color = colorLight
            songInQueElements[playlistPosition - 1].firstElementChild.style.fontWeight = "400"

          }
        }

        player.loadVideoById(playList[playlistPosition].id)
        playingNow = playList[playlistPosition]


        if (chk.checked === true)
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorBlue
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"
        }
        else
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorRed
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"
        }

        myTimer = setInterval(playNextSong, 10000)
      }
    }
    updateButtons()
  }
}

function playNextSongWithButton()
{

  let songInQueElements = document.querySelectorAll('.songInQue')
  const repeatButton = document.querySelector("#repeat")

  if (repeatButton.className === "repeatActive")
  {
    clearInterval(myTimer)
    player.loadVideoById(playingNow.id)
    myTimer = setInterval(playNextSong, 10000)
  }
  else
  {
    if (!playList[playlistPosition + 1])
    {
      player.loadVideoById(urlToID(todaysSong.link))
      playingNow = new DefaultVideo(todaysSong.link)
      player.stopVideo()
      h2Element.innerText = "Today's song"
      titleElement.innerText = todaysSong.title
      artistElement.innerText = todaysSong.artist
      byElement.style.display = "block"
      artistElement.style.display = "block"

      if (songInQueElements[playlistPosition]
      )
      {
        if (chk.checked === true)
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorDark
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
        }
        else
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorLight
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
        }
      }

      playlistPosition = -1
      clearInterval(myTimer)

      footerInfoElement.innerText = `${todaysSong.title} - ${todaysSong.artist}`

    }
    else
    {
      clearInterval(myTimer)
      playlistPosition++

      h2Element.innerText = "Currently Playing"
      titleElement.innerText = playList[playlistPosition].title

      if (playList[playlistPosition].artist === undefined)
      {
        byElement.style.display = "none"
        artistElement.style.display = "none"
        footerInfoElement.innerText = `${playList[playlistPosition].title}`
      }
      else
      {
        byElement.style.display = "block"
        artistElement.style.display = "block"
        artistElement.innerText = playList[playlistPosition].artist

        footerInfoElement.innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`
      }

      if (songInQueElements[playlistPosition - 1]
      )
      {
        if (chk.checked === true)
        {
          songInQueElements[playlistPosition - 1].firstElementChild.style.color = colorDark
          songInQueElements[playlistPosition - 1].firstElementChild.style.fontWeight = "400"
        }
        else
        {
          songInQueElements[playlistPosition - 1].firstElementChild.style.color = colorLight
          songInQueElements[playlistPosition - 1].firstElementChild.style.fontWeight = "400"
        }
      }

      player.loadVideoById(playList[playlistPosition].id)
      playingNow = playList[playlistPosition]

      if (chk.checked === true)
      {
        songInQueElements[playlistPosition].firstElementChild.style.color = colorBlue
        songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"
      }
      else
      {
        songInQueElements[playlistPosition].firstElementChild.style.color = colorRed
        songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"

      }
      myTimer = setInterval(playNextSong, 10000)
    }
    updateButtons()
  }
}


function playPreviousSongWithButton()
{

  let songInQueElements = document.querySelectorAll('.songInQue')
  const repeatButton = document.querySelector("#repeat")

  if (repeatButton.className === "repeatActive")
  {
    clearInterval(myTimer)
    player.loadVideoById(playingNow.id)
    myTimer = setInterval(playNextSong, 10000)
  }
  else
  {

    if (!playList[playlistPosition - 1])
    {
      player.loadVideoById(urlToID(todaysSong.link))
      playingNow = new DefaultVideo(todaysSong.link)
      player.stopVideo()
      h2Element.innerText = "Today's song"
      titleElement.innerText = todaysSong.title
      artistElement.innerText = todaysSong.artist
      byElement.style.display = "block"
      artistElement.style.display = "block"

      if (songInQueElements[playlistPosition]
      )
      {
        if (chk.checked === true)
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorDark
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
        }
        else
        {
          songInQueElements[playlistPosition].firstElementChild.style.color = colorLight
          songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "400"
        }
      }

      playlistPosition = -1
      clearInterval(myTimer)

      footerInfoElement.innerText = `${todaysSong.title} - ${todaysSong.artist}`
    }
    else
    {
      clearInterval(myTimer)
      playlistPosition--

      h2Element.innerText = "Currently Playing"
      titleElement.innerText = playList[playlistPosition].title

      if (playList[playlistPosition].artist === undefined)
      {
        byElement.style.display = "none"
        artistElement.style.display = "none"
        footerInfoElement.innerText = `${playList[playlistPosition].title}`
      }
      else
      {
        byElement.style.display = "block"
        artistElement.style.display = "block"
        artistElement.innerText = playList[playlistPosition].artist

        footerInfoElement.innerText = `${playList[playlistPosition].title} - ${playList[playlistPosition].artist}`
      }

      if (songInQueElements[playlistPosition + 1]
      )
      {
        if (chk.checked === true)
        {
          songInQueElements[playlistPosition + 1].firstElementChild.style.color = colorDark
          songInQueElements[playlistPosition + 1].firstElementChild.style.fontWeight = "400"
        }
        else
        {
          songInQueElements[playlistPosition + 1].firstElementChild.style.color = colorLight
          songInQueElements[playlistPosition + 1].firstElementChild.style.fontWeight = "400"
        }
      }

      player.loadVideoById(playList[playlistPosition].id)
      playingNow = playList[playlistPosition]
      if (chk.checked === true)
      {
        songInQueElements[playlistPosition].firstElementChild.style.color = colorBlue
        songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"
      }
      else
      {
        songInQueElements[playlistPosition].firstElementChild.style.color = colorRed
        songInQueElements[playlistPosition].firstElementChild.style.fontWeight = "800"
      }

      myTimer = setInterval(playNextSong, 10000)
    }
    updateButtons()
  }
}


// FOOTER BUTTONS + CLEAR_PLAY_LIST_BUTTON

const repeatButton = document.querySelector("#repeat"),
  muteButton = document.querySelector("#mute"),
  skipEndButton = document.querySelector("#skipEnd"),
  playButton = document.querySelector("#playButton"),
  skipStartButton = document.querySelector("#skipStart"),
  musicNoteListButton = document.querySelector("#musicNoteList"),
  clearListButton = document.querySelector(".clearListButton")


let listOpen = false
musicNoteListButton.addEventListener("click", () =>
{
  if (!listOpen)
  {
    document.querySelector("body").classList.add("listActive")
    listOpen = true
  }
  else
  {
    document.querySelector("body").classList.remove("listActive")
    listOpen = false
  }
})


function repeatSong()
{
  if (repeatButton.className != "repeatActive")
  {
    repeatButton.setAttribute("class", "repeatActive")
  }
  else
  {
    repeatButton.setAttribute("class", "repeatInactive")
  }
}


function playPause()
{
  if (player.getPlayerState() === 1)
  {
    player.pauseVideo()
  }
  if (player.getPlayerState() === 2 || player.getPlayerState() === 5)
  {
    player.playVideo()
  }
}


function muteUnmute()
{
  if (player.isMuted() === false)
  {
    player.mute()
    muteButton.setAttribute("src", "assets/volume-mute-fill-light.svg")
  }
  if (player.isMuted() === true)
  {
    player.unMute()
    muteButton.setAttribute("src", "assets/volume-up-fill-light.svg")
  }
}


function clearPlaylist()
{
  let songInQueElements = document.querySelectorAll('.songInQue')
  songInQueElements.forEach(e => e.remove())
  updatePlayList()
}


repeatButton.addEventListener("click", repeatSong)
muteButton.addEventListener("click", muteUnmute)
skipEndButton.addEventListener("click", playNextSongWithButton)
playButton.addEventListener("click", playPause)
skipStartButton.addEventListener("click", playPreviousSongWithButton)
clearListButton.addEventListener("click", clearPlaylist)
// END OF FOOTER BUTTONS + CLEAR_PLAY_LIST_BUTTON -


function compare(a, b)
{
  const bandA = a.artist
  const bandB = b.artist

  if (bandA != bandB)
  {
    let comparison = 0

    if (bandA > bandB)
    {
      comparison = 1
    }
    else if (bandA < bandB)
    {
      comparison = -1
    }
    return comparison
  }
  else
  {
    const titleA = a.title
    const titleB = b.title

    let comparison = 0

    if (titleA > titleB)
    {
      comparison = 1
    }
    else if (titleA < titleB)
    {
      comparison = -1
    }
    return comparison
  }
}

const sortedSongs = originalList.sort(compare)

function addSortedSongs()
{

  for (let song of sortedSongs)
  {

    video = new SortedVideo(song)

    const newSongInList = document.createElement('li')
    newSongInList.setAttribute("id", serialNr)
    document.querySelector('.playList').appendChild(newSongInList)
    newSongInList.className = "songInList"

    const newSongData = document.createElement('div')
    newSongInList.appendChild(newSongData)
    newSongData.className = "songData"

    const songTitle = document.createElement("p")
    songTitle.innerText = video.title
    newSongData.appendChild(songTitle)

    const songDuration = document.createElement("p")
    songDuration.setAttribute("class", "duration")
    songDuration.innerText = video.artist
    newSongData.appendChild(songDuration)

    const playButtons = document.createElement("div")
    newSongInList.appendChild(playButtons)
    playButtons.setAttribute("class", "playButtons")

    const newImgPlus = document.createElement("img")
    if (chk.checked === true)
    {
      newImgPlus.src = "assets/plus-circle-fill.svg"
    }
    else
    {
      newImgPlus.src = "assets/plus-circle-fill-light.svg"
    }
    newImgPlus.setAttribute("class", "addToPlaylistButton")
    playButtons.appendChild(newImgPlus)

    const url = document.createElement("p")
    url.setAttribute("class", "url")
    newImgPlus.appendChild(url)
    url.innerText = video.id
    url.style.display = "none"

  }

  const specialSongsTitle = document.createElement("h2")
  document.querySelector(".playList").appendChild(specialSongsTitle)
  specialSongsTitle.innerHTML = "Special Songs"
  specialSongsTitle.style.marginTop = "2em"

  specialSongs.sort(compare)

  for (let song of specialSongs)
  {

    video = new SortedVideo(song)

    const newSongInList = document.createElement('li')
    newSongInList.setAttribute("id", serialNr)
    document.querySelector('.playList').appendChild(newSongInList)
    newSongInList.className = "songInList"

    const newSongData = document.createElement('div')
    newSongInList.appendChild(newSongData)
    newSongData.className = "songData"

    const songTitle = document.createElement("p")
    songTitle.innerText = video.title
    newSongData.appendChild(songTitle)

    const songDuration = document.createElement("p")
    songDuration.setAttribute("class", "duration")
    songDuration.innerText = video.artist
    newSongData.appendChild(songDuration)

    const playButtons = document.createElement("div")
    newSongInList.appendChild(playButtons)
    playButtons.setAttribute("class", "playButtons")


    const newImgDown = document.createElement("img")

    if (chk.checked === true)
    {
      newImgDown.src = "assets/plus-circle-fill.svg"
    }
    else
    {
      newImgDown.src = "assets/plus-circle-fill-light.svg"
    }
    newImgDown.setAttribute("class", "addToPlaylistButton")
    playButtons.appendChild(newImgDown)

    const url = document.createElement("p")
    url.setAttribute("class", "url")
    newImgDown.appendChild(url)
    url.innerText = video.id
    url.style.display = "none"
  }


  document.querySelectorAll(".addToPlaylistButton").forEach(e => e.addEventListener("click", (event) =>
  {
    invisiblePlayer.loadVideoById(event.target.firstElementChild.innerText)

    myTimer = setInterval(playNextSong, 10000)
    myTimer3 = setInterval(muteInvisiblePlayer, 200)

    let myTimer2 = setInterval(addSongFromList, 1000)



    function addSongFromList()
    {
      if (invisiblePlayer.getCurrentTime() > 0)
      {
        video = new VideoFromList(event.target.firstElementChild)

        const newSongInQue = document.createElement('li')
        newSongInQue.setAttribute("id", serialNr)
        document.querySelector('.songsInQue').appendChild(newSongInQue)
        newSongInQue.className = "songInQue"

        const newSongData = document.createElement('div')
        newSongInQue.appendChild(newSongData)
        newSongData.className = "songData"

        const songTitle = document.createElement("p")

        songTitle.innerText = video.display
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

        let newImgDown = document.createElement("img")

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
        clearInterval(myTimer2)
      }
    }

  }))
}

addSortedSongs()


function searchList()
{
  const searchField = document.querySelector(".input")
  const input = searchField.value.toUpperCase()
  const songsInList = document.querySelectorAll(".songInList")

  if (input === "")
  {
    songsInList.forEach(e =>
    {
      e.style.display = "flex"
    })
  }

  songsInList.forEach(e =>
  {
    if ((e.firstElementChild.firstElementChild.innerText.toUpperCase() + " " + e.firstElementChild.firstElementChild.nextElementSibling.innerText.toUpperCase()).search(input) > -1 || (e.firstElementChild.firstElementChild.nextElementSibling.innerText.toUpperCase() + " " + e.firstElementChild.firstElementChild.innerText.toUpperCase()).search(input) > -1)
    {
      e.style.display = "flex"
    }
    else
    {
      e.style.display = "none"
    }
  })

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
      myTimer = setInterval(playNextSong, 10000)
    }
  }
}

const addButton = document.querySelector('.addButton')
addButton.addEventListener('click', addToPlaylist)


let myTimer3 = setInterval(muteInvisiblePlayer, 200)

let myTimer = setInterval(playNextSong, 10000)

// 
let timeout
document.querySelector(".input").addEventListener("input", () =>
{
  clearTimeout(timeout)
  timeout = setTimeout(searchList, 1000)
})