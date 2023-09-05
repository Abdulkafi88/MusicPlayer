const songs = [
  {
    name: "13",
    artists: "lucki",
    img: "./13.jpg",
    link: "./LUCKI - 13 (Official Video).mp4",
  },
  {
    name: "Wonderful Wayne & Jackie Boy",
    artists: "babyface",
    img: "./babyface.jpeg",
    link: "./Babyface Ray - Wonderful Wayne & Jackie Boy (Official Visualizer) (feat. Lil Durk).mp3",
  },
]
let currentSongIndex = 1

const audio = document.getElementById("song")
const start = document.querySelector("#play i")
const end = document.getElementById("end")
const img = document.getElementById("thumb")
const range = document.getElementById("progress")
const next = document.querySelector(".next i")
const previuse = document.querySelector(".back i ")
const title = document.getElementById('title')
const musician = document.getElementById('musician')

// window.addEventListener('DOMContentLoaded', frisUser)
start.addEventListener("click",()=>{
    frisUser()
} )

    next.addEventListener("click", (e) => {
     currentSongIndex = (currentSongIndex + 1) % songs.length 
     img.src = songs[currentSongIndex].img
      title.textContent = songs[currentSongIndex].name
        musician.textContent = songs[currentSongIndex].artists
     audio.src = songs[currentSongIndex].link

      if (start.classList.contains("bx-pause")) {
        audio.play()
      }
    }) 

    previuse.addEventListener('click', ()=>{
      currentSongIndex = (currentSongIndex - 1) % songs.length
      img.src = songs[currentSongIndex].img
      title.textContent = songs[currentSongIndex].name
      musician.textContent = songs[currentSongIndex].artists
      audio.src = songs[currentSongIndex].link

      if (start.classList.contains("bx-pause")) {
        audio.play()
      }
      
    })
function frisUser(){
    if (start.classList.contains("bx-pause")) {
      audio.pause()
      start.classList.remove("bx-pause")
      start.classList.add("bx-play")
      img.src = songs[currentSongIndex].img
      title.textContent = songs[currentSongIndex].name
        musician.textContent = songs[currentSongIndex].artists
      img.classList.remove("play")
    } else {
      start.classList.remove("bx-play")
      start.classList.add("bx-pause")
       title.textContent = songs[currentSongIndex]. name
       musician.textContent = songs[currentSongIndex].artists
      img.src = songs[currentSongIndex].img
      img.classList.add("play")
      audio.play()
    }

}
