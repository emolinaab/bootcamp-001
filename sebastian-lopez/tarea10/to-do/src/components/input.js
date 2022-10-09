import { add } from "../actions"
import { useDispatch } from "react-redux"

function Input(){
    const dispatch = useDispatch()

    let input
    return (<div>
        <input type="text" ref={node => input = node} onKeyUp={e=>{

             if(input.value.trim() && e.code == "Enter"){
                dispatch(add(input.value))
                input.value = ""
            }
        }}/>
        <button type="submit" onClick={e=>{
            e.preventDefault()
        
            if(input.value.trim()){
                dispatch(add(input.value))
                input.value = ""
            }
        }}>Add</button>
    </div>)
}

export default Input
