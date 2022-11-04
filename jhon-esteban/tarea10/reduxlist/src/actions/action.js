export const addAll = (data) => {
    return {
        type: "addAll",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteAll = (id) => {
    return {
        type: "deleteAll",
        id: id
    }
}
export const removeAll = () => {
    return {
        type: "removeAll"
    }
}

