const initialState = {
    color: [{color_name: "red", color_value: "#ff0000"}, {color_name: "blue", color_value: "#0000ff"}, {color_name: "green", color_value: "#00ff00"}],
    userInputs: {}
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === "GET_USER_INPUTS"){
        Object.assign(newState.userInputs, action.inputs)
    }

    if(action.type === "ADD_COLOR_TO_LIST"){
        newState.color = [...newState.color, action.color]
    }
    return newState
}

export default reducer