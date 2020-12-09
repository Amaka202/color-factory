import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListDiv from './ListDiv'

export default class Home extends Component {
    
    render() {
    
        return (
            <div>
                <header>
                    <h2>Welcome to the color Factory</h2>
                    <p><Link to="/colorform">Add a Color</Link></p>
                </header>
                <ListDiv />
            </div>
        )
    }
}
