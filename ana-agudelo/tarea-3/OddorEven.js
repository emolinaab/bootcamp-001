function oddOrEven(array) {
  const arraySum = array.reduce((a, b) => a + b, 0);
  if(arraySum%2 == 0){
    return "even";
  }else{
    return "odd";
  }
}