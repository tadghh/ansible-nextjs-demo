import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/yup-schemas/userschema";
import AgentContainer from "@/components/AgentMenu/AgentContainer";
export default function Manage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    async function onSubmit(data) {
        try {
            let response = await fetch("/api/ansible/test", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });


            let responsedata = await response.json();
            if (response.status == 200) {
                console.log("Nothing blew up")
            } else {

                console.log("Bang!")
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="flex items-center justify-center h-screen overflow-hidden font-mono text-sm bg-white">
            <div className='flex-grow w-3/4 m-4 text-lg text-black border-2 border-black rounded-md bg-gray-50 h-3/4'>
                <AgentContainer />
                <form className="flex flex-col items-center " onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <div>
                        <label htmlFor="ipAddress">IP Address</label>
                        <input type="text" id="ipAddress" {...register('ipAddress')} />
                        {errors.ipAddress && (
                            <p className="error">{errors.ipAddress.message}</p>
                        )}
                    </div>

                    <button className="border-2 border-black" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

