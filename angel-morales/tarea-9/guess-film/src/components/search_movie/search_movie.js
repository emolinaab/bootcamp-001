const movies = [
  {
    name: "thor",
    emoji: "π¦ΈββοΈπ¨β‘",
  },
  {
    name: "cars",
    emoji: "ππβ‘",
  },
  {
    name: "it eso",
    emoji: "π€‘ππ",
  },
  {
    name: "rio",
    emoji: "π¦π΅πΆ",
  },
  {
    name: "toy story",
    emoji: "π€ π¦π¨βππ·",
  },
  {
    name: "rapidos y furiosos",
    emoji: "ππ¨π‘",
  },
  {
    name: "resident evil",
    emoji: "π©π»π«π§ββοΈπ§ββοΈ",
  },
];

export const searchMovie = (text, emoji) => {
  console.log(emoji);
  let validate = movies.find((el) => el.name === text.toLowerCase().trim());
  console.log();
  if (typeof validate !== "undefined" && validate.emoji === emoji) return true;
  else return false;
};

export const showEmoji = () => {
  let emoji, number;
  number = Math.round(Math.random() * (movies.length - 1));
  emoji = movies[number].emoji;
  return emoji;
};
