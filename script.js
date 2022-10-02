//  Music Player:
// Build a music player app which has some features like play,
// pause, Volume-up, volume-down, Previous,next button.

let sufiMusic = [
  {
    songNumber: 1,
    image: "kun_faya_kun.jpeg",
    songName: "kun faya kun",
    singer: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    src: "audios\01. Kun Faya Kun.mp3",
  },
  {
    songNumber: 2,
    image: "images/Khwaja_mere_khwaja.jpeg",
    songName: "Khwaja Mere Khwaja",
    singer: "A.R. Rahman",
    src: "audios\02.Khwaja Mere Khwaja Jodhaa Akbar 128 Kbps.mp3",
  },
  {
    songNumber: 3,
    image: "images/Arziyan.jpg",
    songName: "Arziyan",
    singer: "Javed Ali, Kailash Kher",
    src: "audios\03.Arziyan Delhi 6 128 Kbps.mp3",
  },
  {
    songNumber: 4,
    image: "images/ali maula.jfif",
    songName: "Ali Maula",
    singer: "Salim Merchant, Salim-Sulaiman",
    src: "audios\04.Ali Maula Kurbaan 128 Kbps.mp3",
  },
  {
    songNumber: 5,
    image: "images/bhar do jholi.jfif",
    songName: "Bhar Do Jholi Meri",
    singer: "Pritam, Adnan Sami",
    src: "audios\05.Bhar Do Jholi Meri Bajrangi Bhaijaan 128 Kbps.mp3",
  },
];

let motivationalMusic = [
  {
    songNumber: 1,
    image: "images/Kar-Har-Maidaan-Fateh.jpg",
    songName: "Kar Har Maidaan Fateh",
    singer: "Shreya Ghoshal, Sukhwinder Singh",
    src: "audios\06.Kar Har Maidaan Fateh Sanju 128 Kbps.mp3",
  },
  {
    songNumber: 2,
    image: "images/Believer.jfif",
    songName: "Believer",
    singer: "Jessy",
    src: "audios\07.Khwaja Mere Khwaja Jodhaa Akbar 128 Kbps.mp3",
  },
  {
    songNumber: 3,
    image: "images/Zinda.jpg",
    songName: "Zinda",
    singer: "Shankar-Ehsaan-Loy, Siddharth Mahadevan",
    src: "audios\08.Zinda - Bhaag Milkha Bhaag 128 Kbps.mp3",
  },
  {
    songNumber: 4,
    image: "images/Phir Se Ud Chala - Rockstar.jpg",
    songName: "Phir Se Ud Chala",
    singer: "Mohit Chauhan",
    src: "audios\09.Phir Se Ud Chala - Rockstar 128 Kbps.mp3",
  },
  {
    songNumber: 5,
    image: "images/Besabriyaan.jfif",
    songName: "Besabriyaan",
    singer: "Armaan Malik",
    src: "audios\10.Besabriyaan (M S Dhoni - The Untold Story) 128.mp3",
  },
];

let sadMusic = [
  {
    songNumber: 1,
    image: "images/see you again.jfif",
    songName: "See You Again (feat. Charlie Puth)",
    singer: "Wiz Khalifa",
    src: "audios\12.See-You-Again(musicdownload.cc) (1).mp3",
  },
  {
    songNumber: 2,
    image: "images/dusk till dawn.jpg",
    songName: "Dusk Till Dawn",
    singer: "ZAYN",
    src: "audios\13.Dusk Till Dawn(Mr-Jatt1.com).mp3",
  },
  {
    songNumber: 3,
    image: "imagesAbhi mujh me kahi.jfif",
    songName: "Abhi Mujh Mein Kahin",
    singer: "Ajay-Atul, Sonu Nigam",
    src: "audios\14.Abhi Mujh Mein Kahin Agneepath 128 Kbps.mp3",
  },
  {
    songNumber: 4,
    image: "imagesTujhe bhula diya.jfif",
    songName: "Tujhe Bhula Diya",
    singer: "Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak",
    src: "audios\15.Tujhe Bhula Diya Phir Anjaana Anjaani 128 Kbps.mp3",
  },
  {
    songNumber: 5,
    image: "imagesAgar-Tum-Saath-Ho.jpg",
    songName: "Agar Tum Saath Ho",
    singer: "Alka Yagnik, Arijit Singh",
    src: "audios\15.Agar Tum Saath Ho Tamasha 320 Kbps.mp3",
  },
];

let audio = new Audio();

function play() {}
