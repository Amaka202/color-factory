export const updateUserInputs = (inputs) => {
    return {
        type: "GET_USER_INPUTS",
        inputs
    }
}

export const addColorToList = (color) => {
    return {
        type: "ADD_COLOR_TO_LIST",
        color
    }
}