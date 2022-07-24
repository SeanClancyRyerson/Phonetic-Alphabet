async function sayWord() {
  let word = document.getElementById("inputText").value;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter.match(/[a-z]/i)) {
      sayLetter(letter);
      await delay(800);
    }
  }
}

function sayLetter(letter) {
  var audio = new Audio(`./sounds/${letter}.mp3`);
  audio.play();
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
