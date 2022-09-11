import React, { useState, useEffect } from "react";
import LED from "./led";

function LedArray(props) {
    const [valueString, setValueString] = useState(props.count == 1 ? "0" : "00");
    useEffect(() => {
        if (props.value) {
            let padLength = props.count == 1 ? 1 : 2;
            setValueString(String(parseInt(props.value, 10).toString(16).toUpperCase()).padStart(padLength, "0"));
        } else {
            setValueString(props.count == 1 ? "0" : "00");
        }
    }, [props.value]);
    return (
        <>
            <div className="d-flex">
                <div className="input-group mb-3">
                    <span className="input-group-text led-array-title">{props.title}</span>

                    <span className="input-group-text">
                        {[...Array(props.count)].map((e, i) => {
                            let color = props.colors[0];
                            if (props.colors.length > 1) {
                                switch (props.colorMode) {
                                    case "lower-band":
                                        color = i < props.count / 2 ? props.colors[0] : props.colors[1];
                                        break;
                                    case "upper-band":
                                        color = i >= props.count / 2 ? props.colors[0] : props.colors[1];
                                        break;
                                    case "odd-mod":
                                        color = i % 2 === 0 ? props.colors[0] : props.colors[1];
                                        break;
                                    case "even-mod":
                                        color = i % 2 === 1 ? props.colors[0] : props.colors[1];
                                        break;
                                    default:
                                        break;
                                }
                            }
                            return <LED key={`${props.title}_led_${i}}`} state={(props.value & (Math.pow(2, props.count - 1) >> i)) > 0} color={color} />;
                        })}
                    </span>
                    <span className="input-group-text led-array-hex">{valueString}</span>
                    {props.count > 1 ? <span className="input-group-text led-array-dec">{String(props.value).padStart(3, "0") ?? "000"}</span> : <></>}
                </div>
            </div>
        </>
    );
}

export default LedArray;
