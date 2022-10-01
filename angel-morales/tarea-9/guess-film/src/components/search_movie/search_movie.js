const movies = [
  {
    name: "thor",
    emoji: "🦸‍♂️🔨⚡",
  },
  {
    name: "cars",
    emoji: "👀🚗⚡",
  },
  {
    name: "it eso",
    emoji: "🤡🎈🎈",
  },
  {
    name: "rio",
    emoji: "🦜🔵🎶",
  },
  {
    name: "toy story",
    emoji: "🤠🦖👨‍🚀🐷",
  },
  {
    name: "rapidos y furiosos",
    emoji: "🚗💨😡",
  },
  {
    name: "resident evil",
    emoji: "👩🏻🔫🧟‍♂️🧟‍♂️",
  },
];

export const searchMovie = (text) => {
  if (
    typeof movies.find((el) => el.name === text.toLowerCase().trim()) ===
    "object"
  )
    return true;
  else return false;
};

export const showEmoji = () => {
  let emoji, number;
  number = Math.round(Math.random() * (movies.length - 1));
  emoji = movies[number].emoji;
  return emoji;
};
