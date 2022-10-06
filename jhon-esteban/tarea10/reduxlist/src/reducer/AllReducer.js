const initialData = {
    list : []
}

//const [list, setList] = useState([])

const allReducers = (state = initialData, action) => {
    switch(action.type){
        case "addAll" :
            const {id, data} = action.payload

            return {
                ...state,
                data:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "deleteAll" :
            const newList = state.list.filter((elem) => elem.id =! action.id)

            return {
                ...state,
                list:
                [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "removeAll" : return{
            ...state,
            list:[]
        }
           
        default: return state;
    }
}

export default allReducers