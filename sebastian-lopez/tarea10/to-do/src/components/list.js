import { useSelector, useDispatch} from "react-redux"
import { delet,update } from "../actions"

function List(){

    const list = useSelector(state => state.add)
    const dispatch = useDispatch()

    return (    
        list.map(item =>{
            return(  
                <div id={item.id} key={item.id} className="item">
                    <div>
                        <input type="checkbox" value="done" onChange={e=>{
                            if(e.target.checked){
                                dispatch(update(e.target.parentNode.parentNode.id,true))
                                e.target.disabled = true
                            }else{
                                return
                            }
                        }}/>
                        <h4>{item.text}</h4>
                    </div>
                    <button id="delete" onClick={e=>{
                        e.preventDefault()
                        dispatch(delet(e.target.parentNode.id))
                    }}>x</button>
                   
                </div> 
            )
        })
       
    )
}

export default List