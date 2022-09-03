function crap(x, bags, cap) {
  crapsLeft = cap * bags;
  for (row of x) {
    for (space of row) {
      if (space === "@") {
        crapsLeft -= 1;
      } else if (space === "D") {
        return "Dog!!";
      }
    }
  }
  return crapsLeft >= 0 ? "Clean" : "Cr@p";
}
