import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/yup-schemas/userschema";
import AgentContainer from "@/components/AgentMenu/AgentContainer";
import { AgentTypes } from "@/AgentsInfo/AgentEnums";
import { useState } from "react";
import AnsibleOutput from "@/components/Output/AnsibleOutput";

export default function Manage() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const [agentType, setAgentType] = useState(AgentTypes)
    const [outputData, setOutputData] = useState(null);
    async function onSubmit(data) {
        try {
            let response = await fetch("/api/ansible/executeAnsiblePlaybook", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            //  let responsedata = await response.json();
            if (response.status == 200) {
                const output = await response.json();
                setOutputData(output)
                console.log("no bang")
            } else {

                console.log("Bang!")
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        console.log(agentType)
    }, [agentType])

    return (
        <div className="flex items-center justify-center h-screen overflow-hidden font-mono text-sm bg-white">
            <div className='flex flex-col flex-grow w-3/4 m-4 text-lg text-black border-2 border-black rounded-md bg-gray-50 h-3/4'>
                <AgentContainer selectedAgent={setAgentType} setValue={setValue} register={register} />

                <form className="flex flex-col items-center " onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <div>
                        <label htmlFor="ipAddress">IP Address</label>
                        <input type="text" id="ipAddress" {...register('ipAddress')} />
                        {errors.ipAddress && (
                            <p className="error">{errors.ipAddress.message}</p>
                        )}
                        {errors.selectedValue && (
                            <p className="error">{errors.selectedValue.message}</p>
                        )}
                    </div>

                    <button className="border-2 border-black" type="submit">Submit</button>
                </form>
                <div className="grow" />
                {outputData ? <AnsibleOutput outputData={outputData} /> : <></>}

            </div>
        </div>
    );
}

