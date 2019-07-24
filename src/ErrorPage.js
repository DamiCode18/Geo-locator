import React from 'react'

const Error = (props) => {
    return (
        <div className="error" style={{ color: "white", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1>{props.Error}</h1>
        </div>

    );
}

export default Error;