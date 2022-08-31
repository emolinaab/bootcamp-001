function spongebob(phrase) {
    let length = phrase.length;
    let meme = "";
    for (let i = 0; i < length; i++) {
      let random = Math.random();
      if (random < 0.5) {
        meme += phrase[i].toUpperCase();
      } else {
        meme += phrase[i].toLowerCase();
      }
    }
    return meme;
}

let phrase = prompt("Please enter a phrase: ");
let meme = spongebob(phrase);
console.log(meme);