import React from "react";

export default function AnsibleOutput({ outputData = "" }) {
    return (
        <div className='m-4 text-lg text-black border-2 border-black rounded-md grow-0 h-1/6 bg-gray-50'>
            <h1>Output:</h1>
            <br></br>
            {typeof outputData === "string" ? outputData : ""}
        </div>
    );
}

