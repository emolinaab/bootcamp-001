function initializeNames(names) {
  names = names.split(" ");
  for (let i = 1; i < names.length - 1; i++) {
    names[i] = names[i].charAt(0) + ".";
  }
  names = names.join(" ");
  return names;
}

console.log(initializeNames("Alice Betty Catherine Davis"));
