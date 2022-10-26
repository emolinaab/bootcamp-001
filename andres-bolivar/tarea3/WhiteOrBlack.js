function mineColor(file, rank){
    let output = "black";
    let condition = ( file === "b" || file === "d" || file === "f" || file === "h" );

    if( rank%2 === 0 || condition ){
        output = "white";
    }
    
    if( rank%2 === 0 && condition ){
        output = "black";
    }

    return output;
}
