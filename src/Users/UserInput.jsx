import React from 'react'

const style = {
    fontWeight : '600'
}
const input = {
    padding: '8px 5px'
}

const UserInput = (props) => {
    return (
        <div>
            <label style={style}>Name : </label>
            <input type="text" onChange={props.change} value={props.name} style={input} />
        </div>
    )
}

export default UserInput