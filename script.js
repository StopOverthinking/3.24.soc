const stages = [
  {
    id: "419",
    name: "4.19 혁명",
    title: "4.19 혁명 미로",
    goalText: "부정선거에 맞선 뜻과 결과를 떠올리며 출구를 찾으세요.",
    summary:
      "이 구역은 4.19 혁명의 핵심 뜻을 익히는 곳입니다. 날짜를 외우기보다 왜 사람들이 바른 사회를 바랐는지 이해하는 데 집중합니다.",
    facts: [
      "3.15 부정선거는 4.19 혁명의 중요한 배경이었다.",
      "4.19 혁명에는 초등학생도 참여한 일이 있었다.",
      "이승만 대통령은 시민들의 요구 속에서 스스로 물러났다.",
      "4.19 혁명은 민주주의를 지키려는 움직임이었다."
    ],
    progressLabel: "4.19 혁명 정리",
    layout: [
      "################",
      "#S..Q....#######",
      "###.####.#######",
      "#...##...#######",
      "######Q#########",
      "######....######",
      "#########.######",
      "######..Q...####",
      "######.#########",
      "###......#######",
      "########Q#######",
      "########...#####",
      "########...#####",
      "##########Q..G##",
      "################",
      "################"
    ],
    questions: {
      "1,4": {
        prompt: "4.19 혁명은 부정한 선거에 대한 분노와 항의가 커지면서 일어난 민주주의 운동이다.",
        options: ["O", "X"],
        answer: 0,
        explanation: ""
      },
      "4,6": {
        prompt: "4.19 혁명은 대학생만 참여한 일이어서 초등학생과는 관계가 없었다.",
        options: ["O", "X"],
        answer: 1,
        explanation: ""
      },
      "7,7": {
        prompt: "4.19 혁명 뒤 이승만 대통령에 대한 설명으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "시민들의 요구 속에서 스스로 물러났다.",
          "국회가 대통령 자리를 없애서 갑자기 대통령이 사라졌다.",
          "아무 일 없이 계속 대통령을 했다.",
          "선거를 다시 해서 바로 다시 대통령이 되었다."
        ],
        answer: 0,
        explanation: ""
      },
      "10,9": {
        prompt: "4.19 혁명이 오늘날까지 주는 뜻으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "민주주의를 지키려는 마음",
          "힘이 세면 언제나 옳다는 생각",
          "무조건 힘으로 이기는 일",
          "어려운 날짜만 정확히 외우는 일"
        ],
        answer: 0,
        explanation: ""
      },
      "13,11": {
        prompt: "박정희에 대한 설명으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "군사정변 뒤 권력을 잡았고, 나중에 부하에게 암살당해 숨졌다.",
          "4.19 혁명 직후 학생 대표로 뽑혀 대통령이 되었다.",
          "항상 국민이 직접 뽑는 선거만으로 권력을 잡았다.",
          "대통령이 된 적이 없고 군인으로만 남았다."
        ],
        answer: 0,
        explanation: ""
      }
    }
  },
  {
    id: "518",
    name: "5.18 민주화운동",
    title: "5.18 민주화운동 미로",
    goalText: "광주의 진실을 알린 사람들과 언론 탄압의 문제를 떠올려 보세요.",
    summary:
      "이 구역은 5.18 민주화운동의 의미와 전두환 정권의 언론 탄압을 간단히 익히는 곳입니다. 어려운 정치 용어는 줄이고, 진실을 알리는 일의 중요성을 중심에 둡니다.",
    facts: [
      "5.18 민주화운동은 광주에서 민주주의를 지키려는 움직임이었다.",
      "독일 기자 위르겐 힌츠페터는 광주의 상황을 촬영해 세계에 알렸다.",
      "전두환 정권은 언론을 통폐합하고 통제했다.",
      "진실을 기록하고 전하는 일은 민주주의를 지키는 데 중요하다."
    ],
    progressLabel: "5.18 민주화운동 정리",
    layout: [
      "################",
      "#S..Q....#######",
      "###.####.#######",
      "#...##...#######",
      "######Q#########",
      "######....######",
      "#########.######",
      "######..Q...####",
      "######.#########",
      "###......#######",
      "########Q#######",
      "########...#####",
      "########...#####",
      "##########Q..G##",
      "################",
      "################"
    ],
    questions: {
      "1,4": {
        prompt: "5.18 민주화운동은 광주에서 민주주의와 인권을 지키려는 움직임이었다.",
        options: ["O", "X"],
        answer: 0,
        explanation: ""
      },
      "4,6": {
        prompt: "위르겐 힌츠페터에 대한 설명으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "광주의 상황을 촬영해 세계에 알린 독일 기자",
          "광주에서 지방자치제를 처음 만든 정치인",
          "광주에 군대를 보내라고 명령한 대통령",
          "한국의 신문 이름을 모두 바꾼 방송 진행자"
        ],
        answer: 0,
        explanation: ""
      },
      "7,7": {
        prompt: "전두환 정권은 언론을 자유롭게 두어 여러 목소리가 널리 전해지게 했다.",
        options: ["O", "X"],
        answer: 1,
        explanation: ""
      },
      "10,9": {
        prompt: "전두환 정권의 언론 탄압을 가장 잘 보여 주는 설명은 무엇일까요?",
        options: [
          "언론을 통폐합하고 정부 입장만 많이 전하게 했다.",
          "신문과 방송이 서로 다른 의견을 더 쉽게 내게 했다.",
          "어린이 신문을 더 많이 만들었다.",
          "누구나 자유롭게 뉴스를 만들게 했다."
        ],
        answer: 0,
        explanation: ""
      },
      "13,11": {
        prompt: "5.18 민주화운동을 배우며 가장 중요하게 기억할 점은 무엇일까요?",
        options: [
          "진실을 기록하고 알리는 일은 민주주의를 지키는 힘이 된다.",
          "어려운 인물 이름을 모두 외우는 것이 가장 중요하다.",
          "한 지역의 일은 다른 곳과 상관이 없다.",
          "뉴스는 사실을 알리는 것보다 재미가 더 중요하다."
        ],
        answer: 0,
        explanation: ""
      }
    }
  },
  {
    id: "june",
    name: "6월 민주 항쟁",
    title: "6월 민주 항쟁 미로",
    goalText: "직선제와 지방자치의 뜻을 이해하며 마지막 출구를 열어 보세요.",
    summary:
      "이 구역은 6월 민주 항쟁의 결과를 중심으로 구성했습니다. 직선제와 간선제의 차이, 지방자치제 재시행처럼 지금 우리의 생활과 이어지는 변화를 쉽게 묻습니다.",
    facts: [
      "간선제는 국민이 직접 대통령을 뽑지 않는 방식이다.",
      "직선제는 국민이 직접 대통령을 뽑는 방식이다.",
      "6월 민주 항쟁의 결과로 대통령 직선제가 이루어졌다.",
      "6월 민주 항쟁 뒤 지방자치제가 다시 시행되었다."
    ],
    progressLabel: "6월 민주 항쟁 정리",
    layout: [
      "################",
      "#S..Q....#######",
      "###.####.#######",
      "#...##...#######",
      "######Q#########",
      "######....######",
      "#########.######",
      "######..Q...####",
      "######.#########",
      "###......#######",
      "########Q#######",
      "########...#####",
      "########...#####",
      "##########Q..G##",
      "################",
      "################"
    ],
    questions: {
      "1,4": {
        prompt: "간선제에 대한 설명으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "국민이 뽑은 몇 사람이 대통령을 뽑는 방식",
          "대통령이 다음 대통령을 직접 정하는 방식",
          "국민이 직접 대통령을 뽑는 방식",
          "대통령을 아예 뽑지 않는 방식"
        ],
        answer: 0,
        explanation: ""
      },
      "4,6": {
        prompt: "직선제에 대한 설명으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "대통령이 스스로 다음 대통령을 정하는 방식",
          "국민이 직접 대통령을 뽑는 방식",
          "국민이 뽑은 몇 사람만 대통령을 뽑는 방식",
          "신문사가 대통령을 뽑는 방식"
        ],
        answer: 1,
        explanation: ""
      },
      "7,7": {
        prompt: "6월 민주 항쟁의 결과로 대통령 직선제가 이루어졌고, 민주주의는 한 걸음 더 나아갔다.",
        options: ["O", "X"],
        answer: 0,
        explanation: ""
      },
      "10,9": {
        prompt: "6월 민주 항쟁의 결과로 다시 시행된 제도로 가장 알맞은 것은 무엇일까요?",
        options: [
          "지방자치제",
          "왕위 세습제",
          "시험 없이 공무원을 뽑는 제도",
          "왕정",
        ],
        answer: 0,
        explanation: ""
      },
      "13,11": {
        prompt: "4.19 혁명, 5.18 민주화운동, 6월 민주 항쟁을 함께 보며 알 수 있는 공통점으로 가장 알맞은 것은 무엇일까요?",
        options: [
          "민주주의는 사람들이 지키려 할 때 더 자란다.",
          "민주주의는 저절로 완성되므로 시민의 행동은 중요하지 않다.",
          "선거 제도와 언론의 자유는 민주주의와 큰 관련이 없다.",
          "민주주의보다 강한 힘을 가진 한 사람이 더 중요하다."
        ],
        answer: 0,
        explanation: ""
      }
    }
  }
];

const mazeEl = document.getElementById("maze");
const stageTitleEl = document.getElementById("stage-title");
const stageGoalEl = document.getElementById("stage-goal");
const quizModalEl = document.getElementById("quiz-modal");
const quizTagEl = document.getElementById("quiz-tag");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const nextButtonEl = document.getElementById("next-button");
const endingModalEl = document.getElementById("ending-modal");
const endingTextEl = document.getElementById("ending-text");
const answerFlashEl = document.getElementById("answer-flash");
const gamePanelEl = document.querySelector(".game-panel");
const boardHeaderEl = document.querySelector(".board-header");
const controlsEl = document.querySelector(".controls");
const tipEl = document.querySelector(".tip");

let currentStageIndex = 0;
let player = { row: 0, col: 0 };
let solvedQuestions = new Set();
let revealedCells = {};
let totalSolved = 0;
let activeQuestionKey = null;

const totalQuestions = stages.reduce(
  (sum, stage) => sum + Object.keys(stage.questions).length,
  0
);

function getCellKey(row, col) {
  return `${row},${col}`;
}

function getStage() {
  return stages[currentStageIndex];
}

function getStartPosition(stage) {
  const startRow = stage.layout.findIndex((line) => line.includes("S"));
  const startCol = stage.layout[startRow].indexOf("S");
  return { row: startRow, col: startCol };
}

function ensureRevealSet(stageId) {
  if (!revealedCells[stageId]) {
    revealedCells[stageId] = new Set();
  }
  return revealedCells[stageId];
}

function revealAroundPlayer(stage) {
  const revealed = ensureRevealSet(stage.id);

  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
      const nextRow = player.row + rowOffset;
      const nextCol = player.col + colOffset;
      const rowString = stage.layout[nextRow];

      if (!rowString || rowString[nextCol] === undefined) {
        continue;
      }

      revealed.add(getCellKey(nextRow, nextCol));
    }
  }
}

function setupStage(resetReveal = false) {
  const stage = getStage();
  stageTitleEl.textContent = stage.title;
  stageGoalEl.textContent = stage.goalText;

  if (resetReveal) {
    revealedCells[stage.id] = new Set();
  }

  player = getStartPosition(stage);
  revealAroundPlayer(stage);

  renderMaze();
}

function renderMaze() {
  const stage = getStage();
  const revealed = ensureRevealSet(stage.id);
  mazeEl.innerHTML = "";

  stage.layout.forEach((line, row) => {
    [...line].forEach((cell, col) => {
      const key = getCellKey(row, col);
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");

      if (!revealed.has(key)) {
        cellEl.classList.add("fog");
        mazeEl.appendChild(cellEl);
        return;
      }

      if (cell === "#") {
        cellEl.classList.add("wall");
      } else if (cell === "G") {
        cellEl.classList.add("goal");
      } else if (cell === "Q" && !solvedQuestions.has(`${stage.id}:${key}`)) {
        cellEl.classList.add("quiz");
        cellEl.textContent = "?";
      } else {
        cellEl.classList.add("path");
      }

      if (!(player.row === row && player.col === col)) {
        cellEl.classList.add("explored");
      }

      if (player.row === row && player.col === col) {
        cellEl.classList.add("player");
      }

      mazeEl.appendChild(cellEl);
    });
  });

  updateMazeSizing();
}

function updateMazeSizing() {
  const stage = getStage();
  const rows = stage.layout.length;
  const cols = stage.layout[0].length;
  const gap = 4;
  const padding = 20;
  const extraGap = 56;
  const availableWidth = gamePanelEl.clientWidth - 40;
  const availableHeight =
    gamePanelEl.clientHeight -
    boardHeaderEl.offsetHeight -
    controlsEl.offsetHeight -
    tipEl.offsetHeight -
    extraGap;

  const tileFromWidth = Math.floor((availableWidth - padding - gap * (cols - 1)) / cols);
  const tileFromHeight = Math.floor((availableHeight - padding - gap * (rows - 1)) / rows);
  const tileSize = Math.max(12, Math.min(tileFromWidth, tileFromHeight));

  mazeEl.style.setProperty("--maze-cols", String(cols));
  mazeEl.style.setProperty("--tile-size", `${tileSize}px`);
}

function tryMove(direction) {
  if (!quizModalEl.classList.contains("hidden") || !endingModalEl.classList.contains("hidden")) {
    return;
  }

  const moves = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  };

  const [deltaRow, deltaCol] = moves[direction];
  const stage = getStage();
  const nextRow = player.row + deltaRow;
  const nextCol = player.col + deltaCol;
  const rowString = stage.layout[nextRow];

  if (!rowString || !rowString[nextCol] || rowString[nextCol] === "#") {
    return;
  }

  player = { row: nextRow, col: nextCol };
  revealAroundPlayer(stage);
  renderMaze();
  handleCell(stage.layout[nextRow][nextCol], nextRow, nextCol);
}

function handleCell(cellType, row, col) {
  const stage = getStage();
  const key = getCellKey(row, col);
  const questionId = `${stage.id}:${key}`;

  if (cellType === "Q" && !solvedQuestions.has(questionId)) {
    openQuiz(stage.questions[key], questionId, stage.name);
  }

  if (cellType === "G") {
    if (currentStageIndex === stages.length - 1) {
      openEnding();
      return;
    }

    currentStageIndex += 1;
    setupStage();
  }
}

function openQuiz(question, questionId, stageName) {
  activeQuestionKey = questionId;
  quizTagEl.textContent = `${stageName} 퀴즈`;
  quizQuestionEl.textContent = question.prompt;
  quizFeedbackEl.textContent = "";
  nextButtonEl.classList.add("hidden");
  quizOptionsEl.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index, question, button));
    quizOptionsEl.appendChild(button);
  });

  quizModalEl.classList.remove("hidden");
}

function checkAnswer(selectedIndex, question) {
  const optionButtons = [...quizOptionsEl.querySelectorAll(".option-button")];
  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && index !== question.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === question.answer) {
    triggerAnswerFlash(true);
    solvedQuestions.add(activeQuestionKey);
    totalSolved += 1;
    quizFeedbackEl.textContent = "";
  } else {
    triggerAnswerFlash(false);
    resetCurrentStageProgress();
    quizFeedbackEl.textContent = "";
  }

  nextButtonEl.classList.remove("hidden");
  renderMaze();
}

function triggerAnswerFlash(isCorrect) {
  const flashClass = isCorrect ? "is-correct" : "is-wrong";
  answerFlashEl.className = "answer-flash";
  void answerFlashEl.offsetWidth;
  answerFlashEl.classList.add(flashClass);
}

function closeQuiz() {
  quizModalEl.classList.add("hidden");
  activeQuestionKey = null;
}

function openEnding() {
  endingTextEl.textContent =
    `전체 ${totalQuestions}문제 중 ${totalSolved}문제를 풀었습니다. ` +
    "세 사건은 모두 민주주의를 더 튼튼하게 만든 중요한 움직임이라는 점을 기억해 보세요.";
  endingModalEl.classList.remove("hidden");
}

function resetCurrentStageProgress() {
  const stage = getStage();
  const stagePrefix = `${stage.id}:`;
  let removedCount = 0;

  solvedQuestions.forEach((key) => {
    if (key.startsWith(stagePrefix)) {
      solvedQuestions.delete(key);
      removedCount += 1;
    }
  });

  totalSolved = Math.max(0, totalSolved - removedCount);
  revealedCells[stage.id] = new Set();
  player = getStartPosition(stage);
  revealAroundPlayer(stage);
}

function resetGame() {
  currentStageIndex = 0;
  solvedQuestions = new Set();
  revealedCells = {};
  totalSolved = 0;
  closeQuiz();
  endingModalEl.classList.add("hidden");
  setupStage(true);
}

document.querySelectorAll(".move-button").forEach((button) => {
  button.addEventListener("click", () => tryMove(button.dataset.direction));
});

document.addEventListener("keydown", (event) => {
  const keyMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    w: "up",
    a: "left",
    s: "down",
    d: "right",
    W: "up",
    A: "left",
    S: "down",
    D: "right"
  };

  if (keyMap[event.key]) {
    event.preventDefault();
    tryMove(keyMap[event.key]);
  }
});

nextButtonEl.addEventListener("click", closeQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);
document.getElementById("ending-reset").addEventListener("click", resetGame);
window.addEventListener("resize", updateMazeSizing);

setupStage(true);
