import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}>Hello I'm <span style={{fontWeight:'600'}}>{props.name}</span>, I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default UserOutput