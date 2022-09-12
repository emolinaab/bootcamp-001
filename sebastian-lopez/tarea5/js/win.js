export function isWinnerCheck(){

    let winCondition= [':4-4', '1:1-1', '2:2-1', '3:3-1', '4:4-1', '5:1-2', '6:2-2', '7:3-2', '8:4-2', '9:1-3', '10:2-3', '11:3-3', '12:4-3', '13:1-4', '14:2-4', '15:3-4']
    let result = Array.from(document.querySelectorAll("div")).map(d =>`${d.style.backgroundImage.slice(14,-6)}:${d.id}`)

    if(result.sort((a,b)=>a.split(":")[0]-b.split(":")[0]).every((v,i) =>v == winCondition[i])){
        return true
    }else{
        return false
    }
}

export async function execWinAnimation(){
    let id = null;
    let puzzle = document.querySelector("#puzzle")
    let gap = 0.5;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (gap < 0.005) {
        clearInterval(id);
        setTimeout(()=>{
            window.location.reload()
        },2000)
        
      } else {
        gap = gap - 0.005;
        puzzle.style.gap = `${gap}em`;
      }
    }
}