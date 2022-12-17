const timeEl = document.querySelector("time");
const speakBtn = document.querySelector("button");
const audioEl = document.querySelector("audio");

let date, min, hr, ampm;

const updateTime = () => {
  date = new Date();
  min = date.getMinutes();
  hr = date.getHours();
  const timeStr = `${hr}:${min < 10 ? 0 : ""}${min}`;
  timeEl.innerText = timeStr;
};

updateTime();

let isFinishedSpeaking = false,
  isOSaid = false,
  isMin10Said = false,
  isMin1Said = false,
  isHrSaid = false,
  isMinBelow20Said = false,
  isEvenAdded = false,
  isChasa = false,
  isChasov = false,
  isChas = false,
  isMinut = false,
  isMinuta = false,
  isMinuti = false,
  isOdna = false,
  isDve = false


const speakTime = () => {
  const addSrc = (num) => {
    audioEl.src = `./numbers/${num}.mp3`;
    const isPlayed = audioEl.play();
    audioEl.playbackRate = 1.2;
  };

  const audioEnd = () => {
    console.log("end", isHrSaid);

    if (isFinishedSpeaking) {
      return;
    }
    // часы 
    if (!isHrSaid) {
      addSrc(hr);
      isHrSaid = true;
      return;
    }

    if (!isChasa && (hr == 2 || hr == 3 || hr == 4 || hr == 22 || hr == 23)) {
      addSrc("chasa");
      isChasa = true;
      return;
    }
    if (!isChas && (hr == 1 || hr == 21)) {
      addSrc("chas");
      isChas = true;
      return;
    }
    if (!isChasov && (hr >= 5 && hr <= 20 || hr == 0)) {
      addSrc("chasov");
      isChasov = true;
      return;
    }

    //минуты
    if (min >= 3 && min <= 20 || min == 0 && !isMinBelow20Said) {
      addSrc(min);
      isMinBelow20Said = true;
      return;
    }

    if (min > 20 && !isMin10Said) {
      const min10 = min.toString().split("")[0];
      addSrc(`${min10}0`);
      isMin10Said = true;
      return;
    }

    if (!isOdna && (min != 11 && min.toString().split("")[1] == "1" || min == 1)) {
      addSrc("odna");
      isOdna = true;
      isMin1Said = true;
      return;
    }
    if (!isDve && (min > 20 && min.toString().split("")[1] == "2" || min == 2)) {
      addSrc("dve");
      isDve = true;
      isMin1Said = true;
      return;
    }

    if (!isMin1Said && min > 20 && min.toString().split("")[1] !== "0") {
      const min1 = min.toString().split("")[1];
      addSrc(min1);
      isMin1Said = true;
      return;
    }

    if (!isMinut && ((min >= 5 && min <= 20 || min == 0) ||
      (min >= 25 && min <= 30) ||
      (min >= 35 && min <= 40) ||
      (min >= 45 && min <= 50) ||
      (min >= 55 && min <= 59))) {
      addSrc("minut");
      isMinut = true;
      return;
    }

    if (!isMinuti && ((min >= 2 && min <= 4) ||
      (min >= 22 && min <= 24) ||
      (min >= 32 && min <= 34) ||
      (min >= 42 && min <= 44) ||
      (min >= 52 && min <= 54))) {
      addSrc("minuti");
      isMinuti = true;
      return;
    }

    let m = min.toString().split("")[1];
    if (!isMinuta && min != 11 && (m == 1 || min == 1)) {
      addSrc("minuta");
      isMinuta = true;
      return;
    }
    //end
    isFinishedSpeaking = true;
  };

  if (!isEvenAdded) {
    audioEl.addEventListener("ended", audioEnd);
    isEvenAdded = true;
  }
  addSrc("its");
};

speakBtn.addEventListener("click", () => {
  isFinishedSpeaking = false;
  isOSaid = false;
  isMin10Said = false;
  isHrSaid = false;
  isMinBelow20Said = false;
  isMin1Said = false;
  isChasa = false;
  isChasov = false;
  isChas = false;
  isMinut = false;
  isMinuta = false;
  isMinuti = false;
  isOdna = false;
  isDve = false;

  speakTime();
});

const audioList = [
  "1.mp3",
  "10.mp3",
  "11.mp3",
  "12.mp3",
  "13.mp3",
  "14.mp3",
  "15.mp3",
  "16.mp3",
  "17.mp3",
  "18.mp3",
  "19.mp3",
  "2.mp3",
  "20.mp3",
  "3.mp3",
  "30.mp3",
  "4.mp3",
  "40.mp3",
  "5.mp3",
  "50.mp3",
  "6.mp3",
  "7.mp3",
  "8.mp3",
  "9.mp3",
  "am.mp3",
  "its.mp3",
  "o.mp3",
  "pm.mp3",
  "wd.mp3",
  "chasov.mp3",
  "minut.mp3",
  "21.mp3",
  "22.mp3",
  "23.mp3",
  "chas.mp3",
  "chasa.mp3",
  "odna.mp3",
  "dve.mp3"
];