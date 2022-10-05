//  Music Player:
// Build a music player app which has some features like play,
// pause, V,lume-up, volume-down, Previous,next button.
let myMusic = {
  sufiMusic: [
    {
      songNumber: 1,
      image: "images/kun_faya_kun.jpeg",
      songName: "kun faya kun",
      singer: "A.R. Rahman, Javed Ali, Mohit Chauhan",
      src: "audios\\01. Kun Faya Kun.mp3",
    },
    {
      songNumber: 2,
      image: "images/Khwaja_mere_khwaja.jpeg",
      songName: "Khwaja Mere Khwaja",
      singer: "A.R. Rahman",
      src: "audios\\02.Khwaja Mere Khwaja Jodhaa Akbar 128 Kbps.mp3",
    },
    {
      songNumber: 3,
      image: "images/Arziyan.jpg",
      songName: "Arziyan",
      singer: "Javed Ali, Kailash Kher",
      src: "audios\\03.Arziyan Delhi 6 128 Kbps.mp3",
    },
    {
      songNumber: 4,
      image: "images/ali maula.jfif",
      songName: "Ali Maula",
      singer: "Salim Merchant, Salim-Sulaiman",
      src: "audios\\04.Ali Maula Kurbaan 128 Kbps.mp3",
    },
    {
      songNumber: 5,
      image: "images/bhar do jholi.jfif",
      songName: "Bhar Do Jholi Meri",
      singer: "Pritam, Adnan Sami",
      src: "audios\\05.Bhar Do Jholi Meri Bajrangi Bhaijaan 128 Kbps.mp3",
    },
  ],

  motivationalMusic: [
    {
      songNumber: 1,
      image: "images/Kar-Har-Maidaan-Fateh.jpg",
      songName: "Kar Har Maidaan Fateh",
      singer: "Shreya Ghoshal, Sukhwinder Singh",
      src: "audios\\06.Kar Har Maidaan Fateh Sanju 128 Kbps.mp3",
    },
    {
      songNumber: 2,
      image: "images/Believer.jfif",
      songName: "Believer",
      singer: "Jessy",
      src: "audios\\07.Believer(PagalWorld).mp3",
    },
    {
      songNumber: 3,
      image: "images/Zinda.jpg",
      songName: "Zinda",
      singer: "Shankar-Ehsaan-Loy, Siddharth Mahadevan",
      src: "audios\\08.Zinda - Bhaag Milkha Bhaag 128 Kbps.mp3",
    },
    {
      songNumber: 4,
      image: "images/Phir Se Ud Chala - Rockstar.jpg",
      songName: "Phir Se Ud Chala",
      singer: "Mohit Chauhan",
      src: "audios\\09.Phir Se Ud Chala - Rockstar 128 Kbps.mp3",
    },
    {
      songNumber: 5,
      image: "images/Besabriyaan.jfif",
      songName: "Besabriyaan",
      singer: "Armaan Malik",
      src: "audios\\10.Besabriyaan (M S Dhoni - The Untold Story) 128.mp3",
    },
  ],

  sadMusic: [
    {
      songNumber: 1,
      image: "images/see you again.jfif",
      songName: "See You Again (feat. Charlie Puth)",
      singer: "Wiz Khalifa",
      src: "audios\\11.See-You-Again(musicdownload.cc) (1).mp3",
    },
    {
      songNumber: 2,
      image: "images/dusk till dawn.jpg",
      songName: "Dusk Till Dawn",
      singer: "ZAYN",
      src: "audios\\12.Dusk Till Dawn(Mr-Jatt1.com).mp3",
    },
    {
      songNumber: 3,
      image: "images/Abhi mujh me kahi.jfif",
      songName: "Abhi Mujh Mein Kahin",
      singer: "Ajay-Atul, Sonu Nigam",
      src: "audios\\13.Abhi Mujh Mein Kahin Agneepath 128 Kbps.mp3",
    },
    {
      songNumber: 4,
      image: "images/Tujhe bhula diya.jfif",
      songName: "Tujhe Bhula Diya",
      singer: "Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak",
      src: "audios\\14.Tujhe Bhula Diya Phir Anjaana Anjaani 128 Kbps.mp3",
    },
    {
      songNumber: 5,
      image: "images/Agar-Tum-Saath-Ho.jpg",
      songName: "Agar Tum Saath Ho",
      singer: "Alka Yagnik, Arijit Singh",
      src: "audios\\15.Agar Tum Saath Ho Tamasha 320 Kbps.mp3",
    },
  ],

  desiHipHopMusic: [
    {
      songNumber: 1,
      image: "images/kehndi-hundi-si.jpg",
      songName: "Kehndi Hundi Si Chan Tak Raah Bana De",
      singer: "Ap Dhillon, Gurinder Gill",
      src: "audios\\16.Kehndi Hundi Si.mp3",
    },
    {
      songNumber: 2,
      image: "images/The-Last-Ride.jpg",
      songName: "THE LAST RIDE",
      singer: "Sidhu Moose Wala",
      src: "audios\\17.The Last Ride.mp3",
    },
    {
      songNumber: 3,
      image: "images/Jatt-Da-Muqabla.jpg",
      songName: "Jatt Da Muqabala",
      singer: "Sidhu Moosewala",
      src: "audios\\18.Jatt Da Muqabla.mp3",
    },
    {
      songNumber: 4,
      image: "images/Mere Gully Mein.jfif",
      songName: "Mere Gully Mein",
      singer: "Divine",
      src: "audios\\19.Mere Gully Mein (Mere Gully Mein) - (Raag.Fm).mp3",
    },
    {
      songNumber: 5,
      image: "images\\firse-machayenge.jpg",
      songName: "Firse Machayenge",
      singer: "Emiway Bantai, Tony James",
      src: "audios\\20.Firse Machayenge - Emiway Bantai.mp3",
    },
  ],

  romanticMusic: [
    {
      songNumber: 1,
      image: "images/Tarron ke shehar mein.jfif",
      songName: "Tarron ke shehar mein",
      singer: "Neha Kakkar, Jubin Nautiyal, Jaani",
      src: "audios\\21.Taaron Ke Shehar - Neha Kakkar.mp3",
    },
    {
      songNumber: 2,
      image: "images/Kesariya.jfif",
      songName: "Kesariya",
      singer: "Ap Dhillon, Gurinder Gill",
      src: "audios\\22.Kesariya - Brahmastra.mp3",
    },
    {
      songNumber: 3,
      image: "images/shayad.jpg",
      songName: "Shayad",
      singer: "Arijit Singh, Pritam",
      src: "audios\\23.Shayad - Love Aaj Kal.mp3",
    },
    {
      songNumber: 4,
      image: "images/pal.jpg",
      songName: "Pal",
      singer: "Arijit Singh & Shreya Ghoshal",
      src: "audios\\24.Pal - Jalebi - Arijit Singh.mp3",
    },
    {
      songNumber: 5,
      image: "images\\raataan-lambiyan.jpg",
      songName: "Raataan Lambiyan",
      singer: "Jubin Nautiyal, Asees Kaur, Tanishk Bagchi",
      src: "audios\\25.Raataan Lambiyan - Shershaah.mp3",
    },
  ],
};

let catagory;
let audio;
let duration;
let songNumber = 0;
let currTime;
let currMin;
let currSec;
let cs;

let image = document.querySelector(".image");
let songName = document.querySelector(".songName");
let singer = document.querySelector(".singer");
let progressBar = document.querySelector(".progress-bar");
let volume = document.querySelector(".volume");
let volIcon = volume.querySelector("i");
let playIcon = document.querySelector(".play i");
let volumeBar = document.querySelector(".volume-bar");

// Get Audio and elements
function getAudio() {
  catagory = document.querySelector("select").value;
  audio = new Audio(myMusic[catagory][songNumber].src);
  image.src = myMusic[catagory][songNumber].image;
  songName.textContent = myMusic[catagory][songNumber].songName;
  singer.textContent = myMusic[catagory][songNumber].singer;
  console.log("in play");
}

// Select Somg Catagory
function select() {
  songNumber = 0;
  play();
  audio.pause();
  getAudio();
  play();
  if (volIcon.classList.contains("fa-volume-xmark")) {
    volumeBar.value = audio.volume = 0;
  } else {
    volumeBar.value = audio.volume = 1;
  }
}

// Play Song
function play() {
  playIcon.classList.toggle("fa-play", !playIcon.classList.contains("fa-play"));

  playIcon.classList.toggle(
    "fa-pause",
    !playIcon.classList.contains("fa-pause")
  );

  if (playIcon.classList.contains("fa-pause")) {
    if (!audio) {
      getAudio();
    }
    audio.play();
    document.querySelector(".play").title = "Pause";

    setTimeout(() => {
      getProgress();
      getTime();
    }, 1000);

    progressBar.addEventListener("click", (e) => {
      audio.currentTime =
        (e.offsetX / progressBar.offsetWidth) * audio.duration;
      document.querySelector(".prog").value = audio.currentTime;
      console.log((e.offsetX / progressBar.offsetWidth) * audio.duration);
    });
  } else {
    audio.pause();
    document.querySelector(".play").title = "Play";
  }

  console.log("audio working");
}
volume.addEventListener("click", vol);

// Previous Song
function prev() {
  play();
  audio.pause();
  if (songNumber <= 0) {
    songNumber = myMusic[catagory].length;
  }
  songNumber--;

  getAudio();
  play();
  if (volIcon.classList.contains("fa-volume-xmark")) {
    volumeBar.value = audio.volume = 0;
  } else {
    volumeBar.value = audio.volume = 1;
  }
}

// Next Song
function next() {
  play();
  audio.pause();
  if (songNumber >= myMusic[catagory].length - 1) {
    songNumber = -1;
  }
  songNumber++;
  getAudio();
  play();
  if (volIcon.classList.contains("fa-volume-xmark")) {
    volumeBar.value = audio.volume = 0;
  } else {
    volumeBar.value = audio.volume = 1;
  }
}

function getProgress() {
  duration = audio.duration;
  let interval = setInterval(() => {
    document.querySelector(".prog").max = duration;
    document.querySelector(".prog").value = audio.currentTime;
    console.log(audio.duration);
    console.log(audio.currentTime);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, duration * 1000 - 1000);
}

function getTime() {
  duration = Math.floor(audio.duration);
  let min = duration / 60;
  let sec = duration - Math.floor(min) * 60;
  let s = sec < 10 ? "0" + sec : sec;
  console.log(`Time Duration ${Math.floor(min)}:${s}`);

  document.querySelector(".totalTime").textContent = `${Math.floor(min)}:${s}`;
  let interval = setInterval(() => {
    currTime = Math.floor(audio.currentTime);
    currMin = currTime / 60;
    currSec = currTime - Math.floor(currMin) * 60;
    cs = currSec < 10 ? "0" + currSec : currSec;
    document.querySelector(".currTime").textContent = `${Math.floor(
      currMin
    )}:${cs}`;
    console.log(`Current Time ${Math.floor(currMin)}:${cs}`);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, duration * 1000 - 1000);
}

// volume mute & unmute
function vol() {
  volIcon.classList.toggle(
    "fa-volume-xmark",
    !volIcon.classList.contains("fa-volume-xmark")
  );
  volume
    .querySelector("i")
    .classList.toggle(
      "fa-volume-high",
      !volIcon.classList.contains("fa-volume-high")
    );

  if (volIcon.classList.contains("fa-volume-xmark")) {
    audio.volume = 0;
    volumeBar.value = 0;
  } else {
    audio.volume = 1;
    volumeBar.value = 1;
  }

  console.log("volume working");
}

volumeBar.addEventListener("click", (e) => {
  audio.volume = volumeBar.value = e.offsetX / volumeBar.offsetWidth;
});
