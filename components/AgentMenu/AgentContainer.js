import React, { useEffect, useState } from "react";
import { AgentTypes } from "@/AgentsInfo/AgentEnums";
import AgentTile from "./AgentTile";
const AgentText = [
    { title: "Machine", type: AgentTypes.MACHINE },
    { title: "Dot Net", type: AgentTypes.DOT_NET },
    { title: "Java", type: AgentTypes.JAVA },
]
export default function AgentContainer({ selectedAgent, setValue }) {


    return (
        <div className="flex items-center justify-center overflow-hidden font-mono text-sm bg-white h-1/3">
            <div className='flex justify-around w-3/4 p-2 m-4 text-black border-2 border-black rounded-md bg-gray-50 h-3/4'>
                {AgentText.map((item, index) => {
                    return <AgentTile key={index} agent={item} agentState={() => {
                        selectedAgent(item.type);
                        setValue("selectedValue", item.type)
                    }} />
                })}
            </div>
        </div>
    );
}

