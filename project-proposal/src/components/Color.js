import React from 'react'

export default function Color(props) {
    const style = {
        width: "75px",
        height: "75px",
        backgroundColor: props.color,
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        marginRight: "0.5rem"
    }
    const font = {
        color: "white",
        textAlign: "center"
    }
    return (
        <div style={style} className="color">
            <p style={font}>{props.color}</p>
        </div>
    )
}
