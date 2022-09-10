import React, { useState, useEffect } from "react";

function LED(props) {
    return (
        <>
            <div className={`led ${props.state ? `led-${props.color}` : "led-off"}`}></div>
        </>
    );
}

export default LED;
