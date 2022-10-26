function solve(s){
    let upperCase = 0;
    let lowerCase = 0;
    let numbers = 0;
    let specialCharacters = 0;

    for( index=0 ; index<s.length ; index++ ){
        let position = s[index];

        if(position >= "a" && position <= "z") ++lowerCase;
        else if(position >= "A" && position <= "Z" ) ++upperCase;
        else if(position >= "0" && position <= "9") ++numbers;
        else ++specialCharacters;
        
    }

    return [upperCase, lowerCase, numbers, specialCharacters] ;
  }
  