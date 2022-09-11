import React, { useState, useEffect } from "react";
function SevenSeg(props) {
    return (
        <>
            <ul className="seg7">
                {props.value
                    .toString()
                    .padStart(4, "0")
                    .split("")
                    .map((digit, index) => (
                        <>
                            <li className={digit === "0" && index === 0 ? "greyed" : ""}>{digit}</li>
                        </>
                    ))}
            </ul>
        </>
    );
}

export default SevenSeg;
