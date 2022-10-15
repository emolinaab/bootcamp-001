export const searchColor = (type) => {
  switch (type) {
    case "fire":
      return "#fc6c6d";
      break;
    case "grass":
      return "#13b57f";
      break;
    case "water":
      return "#098a9b";
      break;
    case "bug":
      return "#0a8f85";
      break;
    case "normal":
      return "#125176";
      break;
    case "fighting":
      return "#e55123";
      break;
    case "ground":
      return "#3f2e74";
      break;
    case "fairy":
      return "#ef5086";
      break;
    case "poison":
      return "#d7922d";
      break;
    case "electric":
      return "#fe9202";
      break;
    case "rock":
      return "#68473c";
      break;
    case "psychic":
      return "#607d8b";
      break;
    case "ghost":
      return "#31434c";
      break;
    case "ice":
      return "#01acfe";
      break;
    case "dragon":
      return "#973d20";
      break;
    case "steel":
      return "#353d40";
      break;
    case "dark":
      return "#343738";
      break;
    default:
      return "#501cad";
      break;
  }
};
