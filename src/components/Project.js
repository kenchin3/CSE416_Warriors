import React, { Component } from 'react';
import Map from './Map.js'

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Map></Map>
            </div>
        )
    }
}

export default Project;