import React from 'react'
import {useParams} from "react-router-dom"

export default function ColorPage() {
    const {color} = useParams()
    return (
        <div className="colorDiv" style={{backgroundColor: color}}>
            
                
        </div>
    )
}
