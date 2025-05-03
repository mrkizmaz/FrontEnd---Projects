/* elementlere ulasip obje olarak kullanma, yakalama*/
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const repeatButton = document.getElementById('repeat')
const shuffleButton = document.getElementById('shuffle')
const audio = document.getElementById('audio')
const songImage = document.getElementById('song-image')
const songName = document.getElementById('song-name')
const songArtist = document.getElementById('song-artist')
const pauseButton = document.getElementById('pause')
const playButton = document.getElementById('play')
const playListButton = document.getElementById('playlist')


const maxDuration = document.getElementById('max-duration')
const currentTimeRef = document.getElementById('current-time')

const progressBar = document.getElementById('progress-bar')
const playListContainer = document.getElementById('playlist-container')
const closeButton = document.getElementById('close-button')
const playListSongs = document.getElementById('playlist-songs')

const currentProgress = document.getElementById('current-progress')

// sira
let index

// döngü
let loop = true

// liste
const songList = [
    {
        name: "Gelo Ew Ki Bu",
        link: "assets/gelo-ew-ki-bu.mp3",
        artist: "Aram Tigran",
        image: "assets/aram-tigran.jpeg"
    },
    {
        name: "Gitme Kal",
        link: "assets/yara-bere-icindeyim.mp3",
        artist: "Hira-i Zerdust",
        image: "assets/hirai.jpeg"
    },
    {
        name: "Aramam",
        link: "assets/aramam.mp3",
        artist: "Ibrahim Tatlises",
        image: "assets/ibrahim-tatlises.jpeg"
    },
    {
        name: "Ax Eman",
        link: "assets/ax-eman.mp3",
        artist: "Rewsan Celiker",
        image: "assets/rewsan-celiker.jpeg"
    },
    {
        name: "Dinle",
        link: "assets/dinle.mp3",
        artist: "Mahsun Kirmizigul",
        image: "assets/mahsun.jpeg"
    }
]

// sarki atama
const setSong = (arrayIndex) => {
    console.log(arrayIndex)
    let { name, link, artist, image } = songList[arrayIndex]
    audio.src = link
    songName.innerHTML = name
    songArtist.innerHTML = artist
    songImage.src = image

    // süreyi ayarla
}

// sarkiyi oynat
const playAudio = () => {
    audio.play()
    pauseButton.classList.remove("hide")
    playButton.classList.add("hide")
}

// sarkiyi durdur
const pauseAudio = () => {
    audio.pause()
    pauseButton.classList.add("hide")
    playButton.classList.remove("hide")
}

// sonraki sarkiya git
const nextSong = () => {
    if (loop) {
        if (index == (songList.length - 1)) {
            index = 0
        }
        else {
            index += 1
        }
    }
    else {
        // rasgele sira olustur
        let randIndex = Math.floor(Math.random() * songList.length)
        index = randIndex
    }

    setSong(index)
    playAudio()
}

// önceki sarkiya gecme
const previousSong = () => {
    pauseAudio()
    if (index > 0) {
        index -= 1
    }
    else {
        index = songList.length - 1
    }

    setSong(index)
    playAudio()
}



playButton.addEventListener("click", playAudio)
pauseButton.addEventListener("click", pauseAudio)
nextButton.addEventListener("click", nextSong)
prevButton.addEventListener("click", previousSong)

window.onload = () => {
    index = 0
    setSong(index)
    pauseAudio()
}
