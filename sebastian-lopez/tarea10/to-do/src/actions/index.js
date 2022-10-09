let counter = 1

export function add(value){
    return {
        type:"ADD",
        payload:counter++,
        value,
        completed:false
    }
}

export function delet(id){
    return {
        type:"DELETE",
        payload:id
    }
}

export function update(id,bool){
    return {
        type:"UPDATE",
        payload:id,
        completed:bool
    }
}
