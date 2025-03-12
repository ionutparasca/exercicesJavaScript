// Exercițiul 1: Cel mai bun jucător
// Scrie o funcție calcAverageScore care calculează media punctajelor unui jucător pe baza unui array de scoruri.

// Apoi, scrie o funcție bestPlayer care primește două scoruri medii și determină care jucător este mai bun.

// Dacă unul dintre jucători are un scor de cel puțin 1.5 ori mai mare decât celălalt, el este declarat câștigător.
// Dacă niciun jucător nu are un avantaj suficient, afișează "No player wins...".

let scoreFirstPlayer = [10, 15, 23];
let scoreSecondPlayer = [11, 17, 21];

const calcAverageScore = (a, b, c) => (a + b + c) / 3;

const avScoreFirstPlayer = calcAverageScore(
  scoreFirstPlayer[0],
  scoreFirstPlayer[1],
  scoreFirstPlayer[2]
);
const avScoreSecondPlayer = calcAverageScore(
  scoreSecondPlayer[0],
  scoreSecondPlayer[1],
  scoreSecondPlayer[2]
);
console.log(avScoreFirstPlayer, avScoreSecondPlayer);

const whoWin = function () {
  if (avScoreFirstPlayer >= 1.5 * avScoreSecondPlayer) {
    console.log(`First Player win`);
  } else if (avScoreSecondPlayer >= 1.5 * avScoreFirstPlayer) {
    console.log(`Second player win`);
  } else {
    console.log(`no player win`);
  }
};
whoWin(avScoreFirstPlayer, avScoreSecondPlayer);

// Exercițiul 2: Competiția de alergat
// Două echipe concurează într-o competiție de alergare. Fiecare echipă are 4 alergători, iar fiecare alergător are un timp total în secunde.

// Creează o funcție calcTotalTime care primește un array cu timpii a 4 alergători și returnează timpul total al echipei.
// Creează o funcție checkFastestTeam care compară cele două echipe și afișează echipa câștigătoare.
// Echipa cu timpul total cel mai mic câștigă.
// Dacă diferența este mai mică de 10 secunde, afișează "Race was very close!".

const team1 = [60, 55, 70, 65];
const team2 = [62, 58, 68, 66];

const calcTotalTimeteam1 = function average1() {
  return `Average time for team 1 is ${
    (team1[0] + team1[1] + team1[2] + team1[3]) / 4
  } minutes.`;
};
console.log(calcTotalTimeteam1());

const calcTotalTimeTeam2 = function average2() {
  return `Average time for team 2 is ${
    (team2[0] + team2[1] + team2[2] + team2[3]) / 4
  } minutes`;
};
console.log(calcTotalTimeTeam2());

const checkFastestTeam = function () {
  if (calcTotalTimeteam1 > calcTotalTimeTeam2) {
    return `Second team win 🏆🏆🏆`;
  } else if (calcTotalTimeTeam2 > calcTotalTimeteam1) {
    return `First team win 🏆🏆🏆`;
  } else {
    return `Its a tie🟰🟰`;
  }
};
console.log(checkFastestTeam());

const timeDifference = Math.abs(team1 - team2);

if (timeDifference < 10) {
  console.log("Race was very close!");
} else {
  console.log("Race was not so close.");
}

// Exercițiul 3: Cel mai mare profit
// Trei magazine își înregistrează veniturile din ultimele 5 zile.

// Creează o funcție calcTotalRevenue care primește un array cu veniturile zilnice și returnează totalul.
// Creează o funcție findBestStore care compară veniturile a trei magazine și determină care a avut cel mai mare profit.

const store1 = [200, 300, 250, 400, 350];
const store2 = [180, 320, 280, 410, 370];
const store3 = [210, 290, 270, 420, 360];

let totalRevenue1 = 0;
const calcTotalRevenue1 = function () {
  return `Suma totala este ${
    store1[0] + store1[1] + store1[2] + store1[3] + store1[4]
  }`;
};
console.log(calcTotalRevenue1());

let totalRevenue2 = 0;
const calcTotalRevenue2 = function () {
  return `Suma totala este ${
    store2[0] + store2[1] + store2[2] + store2[3] + store2[4]
  }`;
};
console.log(calcTotalRevenue2());
let totalRevenue3 = 0;
const calcTotalRevenue3 = function () {
  return `Suma totala este ${
    store3[0] + store3[1] + store3[2] + store3[3] + store3[4]
  }`;
};
console.log(calcTotalRevenue3());

const calcTotalRevenue = function () {
  return `The total is ${
    calcTotalRevenue1() + calcTotalRevenue2() + calcTotalRevenue3()
  }`;
};
console.log(calcTotalRevenue());
