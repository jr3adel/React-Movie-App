export const favMovie = (payload) => {
    return {
        type: 'ADD',
        payload,
    }
}

export const removeMovie = (payload) => {
    return {
        type: 'REMOVE',
        payload,
    }
}