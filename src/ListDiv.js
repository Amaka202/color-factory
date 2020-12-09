import React from 'react'
import {connect} from "react-redux"
import {Link}from "react-router-dom"


function ListDiv(props) {
    return (
        <div>
            <div className="listDiv">
                    <p>Please select a color</p>
                    <ul>
                        {props.colorArray.map((color, index) => 
                            (<Link to={`./colorPage/${color.color_value}`}><li key={index}>{color.color_name}</li></Link>)
                        )}
                    </ul>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(">>>", state.color);
    return {
        colorArray: state.color
    }
}

export default connect(mapStateToProps)(ListDiv)
