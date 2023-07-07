import React from "react";

export default function AgentTile({ agent_title, agentState }) {
    return (
        <div onClick={agentState} className='flex items-center justify-center p-4 m-4 text-lg text-center text-black border-2 border-black rounded-md grow bg-gray-50'>
            <h1>{agent_title}</h1>
        </div>
    );
}

