import React from 'react'
import { connect } from 'react-redux'
import {updateUserInputs, addColorToList} from "./Component/action/action"
import {withRouter} from "react-router-dom"

function ColorForm(props) {
    const handleInput = (e) => {
        const inputs = {[e.target.name] : e.target.value}
        console.log(inputs)
        props.updateUserInputs(inputs)
    }

    const addColor = (e) => {
        e.preventDefault()
        props.addColorToList(props.userInputs)
        props.history.push("/")
    }
    return (
        <div className="color-form">
            {console.log( props)}
            <form>
                <div>
                    <label htmlFor="">Enter a Color Name</label>
                    <input type="text" name="color-name" onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="">Select a Color</label>
                    <input type="color" name="color-value" onChange={handleInput}/>
                </div>
                <button onClick={addColor}>Add color</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(">>>", state.color);
    return {
        userInputs: state.userInputs,
        colorArray: state.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInputs:(inputs) => dispatch(updateUserInputs(inputs)),
        addColorToList:(color) => dispatch(addColorToList(color))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColorForm))