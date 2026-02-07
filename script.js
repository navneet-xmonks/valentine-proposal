const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const note = document.getElementById("note");
const actions = document.querySelector(".actions");

const sweetMessages = [
  "🎉 Yay! I can't wait for our date 💖✨",
  "🌟 Best. Valentine. Ever! 💘🎊",
  "😍 You just made my whole day! 🥰💕",
  "💫 Forever my favorite person 💕🌹",
];

const playfulNoMessages = [
  "😜 Nope! Catch me if you can 🏃‍♂️💨",
  "🎯 No button escaped! Try again 😉",
  "💖 Try again, cutie! 🌟",
  "🎪 Too slow, love! 😘✨",
];

const noImg = [ "noimg0", "noimg1", "noimg2", "noimg3" ];

const yesImg = "yesimg";
const defaultImg = "defaultimg";

let currentImg = null;

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function moveNoButton() {
  const area = actions.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  
  // Calculate available space for movement
  const maxX = area.width - button.width - 20; // 20px margin from edges
  const maxY = area.height - button.height - 20; // 20px margin from edges
  
  if (maxX <= 0 || maxY <= 0) {
    return;
  }

  // Generate random position ensuring it stays within bounds
  const nextX = 10 + Math.random() * maxX; // 10px minimum margin
  const nextY = 10 + Math.random() * maxY; // 10px minimum margin

  while(true){
    let nextImg = randomFrom(noImg);
    if(nextImg !== currentImg){
      showImage(nextImg);
      break;
    }
  }

  // Apply the position (not using transform, direct positioning)
  noButton.style.left = `${nextX}px`;
  noButton.style.top = `${nextY}px`;
  noButton.style.transform = "none";
  note.textContent = randomFrom(playfulNoMessages);
}

function resetNoButton() {
  noButton.style.left = "50%";
  noButton.style.top = "50%";
  noButton.style.transform = "translate(50%, -50%)";
}

yesButton.addEventListener("click", () => {
  note.textContent = randomFrom(sweetMessages);
  yesButton.textContent = "💝 Yes!!! 💞✨";
  resetNoButton();
  showImage(yesImg);
});

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

function resetImages() {
  showImage(defaultImg);
}

function showImage(id) {
  const allImages = [defaultImg, yesImg, ...noImg];
  allImages.forEach(imgId => {
    document.getElementById(imgId).hidden = true;
  });
  document.getElementById(id).hidden = false;
  currentImg = id;
}
