//1. Odd or Even?
var oddOrEven = array=> {
    let add=0
    for (let i = 0; i < array.length; i++) {
      add+=array[i]
    }
    if (add%2==0){
      return "even"
    }else{
      return "odd"
    }
  }

//2. Last Survivor
var lastSurvivor=(letters, coords)=>{
    let word=letters, part1, part2;
    for(let i=0;i<coords.length;i++ ){
      part1=word.slice(0,coords[i]);
      part2=word.slice(coords[i]+1,letters.length);
      word = part1+part2
    }
    return word
  }

//3. Small enough? - Beginner
var smallEnough = (numbers, limit)=>{
let count=0 
numbers.forEach(number => {
    if(number<=limit){
    count+=1
    }
});
if(count==numbers.length){
    return true
}else{
    return false
}
}

//4. Largest pair sum in array

var largestPairSum =numbers=>{
let aux=0
for(let i=0; i<numbers.length; i++){
    for(let j=0; j<numbers.length;j++){
        if(numbers[j]<numbers[j+1]){
        aux=numbers[j];
        numbers[j]=numbers[j+1];
        numbers[j+1]=aux;     
    }
    }
}
return numbers[0]+numbers[1]
}

//5. GetBinary
var addBinary=(a,b) => (a+b).toString(2)