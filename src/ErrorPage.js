import React from 'react'

const style = {
    color: "white",
    backgroundColor: "black",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    height: "100vh"
}

const Error = (props) => {
    return (
        <div className="error" style={style}>
            <h1>{props.Error}</h1>
        </div>

    );
}

export default Error;