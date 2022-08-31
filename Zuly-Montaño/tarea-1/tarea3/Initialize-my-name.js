function initializeNames(name) {
    let names = name.split(" ");
    if (names.length <= 2) return names.join(" ");
    result = names[0];
    for (middleName of names.splice(1, names.length - 2)) {
      result += ` ${middleName[0]}.`;
    }
    return result + ` ${names.pop()}`;
  }