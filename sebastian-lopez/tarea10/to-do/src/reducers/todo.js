function add(state = [],action){
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                {
                    id:action.payload,
                    text:action.value,
                    completed:false
                }
            ]
        case 'DELETE': 
            state.splice(state.findIndex(obj=>obj.id == action.payload),1)
            return [
                ...state
            ]
        default:
            return state
    }
}

export default add