const array = [5, 4, 3, 2, 1];

const smallEnough = (a, limit) => {
  let arrayLength = a.length;
  return arrayLength <= limit ? true : false;
};

console.log(smallEnough(array, 4));
