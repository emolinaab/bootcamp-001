const meme = (words) => {
  let text = "";
  let length = words.length;

  for (i = 0; i < length; i++) {
    i % 2 == 0
      ? (text = text + words.charAt(i).toUpperCase())
      : (text = text + words.charAt(i).toLowerCase());
  }
  return console.log(text);
};

meme("stop Making spongebob Memes!");
