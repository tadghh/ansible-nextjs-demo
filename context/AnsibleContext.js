import { createContext, useState } from "react";
export const Ansible_Settings = createContext(null);

export default function Context({ children }) {
    const [settings, setSettings] = useState();

    return (
        <Ansible_Settings.Provider value={{ settings, setSettings }}>
            {children}
        </Ansible_Settings.Provider>
    );
}