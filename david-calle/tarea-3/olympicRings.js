function olympicRing(a) {
  const values = {
    a: 1,
    A: 1,
    b: 1,
    B: 2,
    d: 1,
    D: 1,
    e: 1,
    g: 1,
    o: 1,
    O: 1,
    p: 1,
    P: 1,
    q: 1,
    Q: 1,
    R: 1,
  };

  let result = 0;
  letters = a.split("");
  letters.forEach((letter) => {
    result += values[letter] ?? 0;
  });

  result = Math.floor(result / 2);

  if (result <= 1) return "Not even a medal!";

  switch (result) {
    case 2:
      return "Bronze!";
    case 3:
      return "Silver!";
    default:
      return "Gold!";
  }
}
