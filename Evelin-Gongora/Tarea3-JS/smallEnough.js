function smallEnough(array, limit) {
  let isSmallEnough = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > limit) {
      isSmallEnough = false;
    }
  }
  console.log(isSmallEnough);
  return isSmallEnough;
}

smallEnough([1, 2, 5, 67, 89], 93);
