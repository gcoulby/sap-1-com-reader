import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LedArray from "./led-array";
import env from "react-dotenv";

const ENDPOINT = `http://localhost:${env.TCP_PORT}`;

function ComReader(props) {
    const [data, setData] = useState("");

    useEffect(() => {
        const socket = io(ENDPOINT);
        socket.on("serialdata", (data) => {
            // console.log(JSON.parse(data.data));
            setData(JSON.parse(data.data));
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Counter</span>
                            <span className="input-group-text" style={{ width: "200px" }}>
                                {data.CNT ?? 0}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="BUS" value={data.BUS} colors={["red"]} count={8} />
                    </div>
                    <div className="col-sm-12 col-xl-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="CLK" count={1} value={data.CLK} colors={["green"]} />
                    </div>
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="ADDR" value={data.ADDR} colors={["yellow"]} count={4} />
                    </div>
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="A Reg" value={data.AR} colors={["red"]} count={8} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="RAM" value={data.RAM} colors={["red"]} count={8} />
                    </div>
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="ALU" value={data.ALU} colors={["red"]} count={8} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="B Reg" value={data.BR} colors={["red"]} count={8} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <LedArray title="IR" value={data.IR} colors={["blue", "yellow"]} count={8} colorMode="lower-band" />
                    </div>
                    <div className="col-sm-12 col-xl-4"></div>
                    <div className="col-sm-12 col-xl-4"></div>
                </div>
            </div>
        </>
    );
}

export default ComReader;
