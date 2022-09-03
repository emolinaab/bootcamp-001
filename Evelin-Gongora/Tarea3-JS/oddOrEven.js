function oddOrEven(array) {
  let total=0
  
  for(let i=0; i<array; i++) {
    total+=i;
  }

  if(total%2==0){
    console.log("even");
  } else if(total%2!=0){
    console.log("odd");
  } else if (total==0){
    console.log("even");
  }
}
