function initializeNames(name) {
    name = name.split(" ");
    for (let i = 1; i < name.length-1; i++ ){
      name[i]=name[i].charAt(0) + ".";
    }
    return name.join(" ");
  }