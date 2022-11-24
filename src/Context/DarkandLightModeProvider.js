import { createContext, useState } from "react";

export const DarkLightContext = createContext();



const DarkandLightModeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const themeInfo = {
        theme, setTheme
    }
    return (
        <DarkLightContext.Provider value={themeInfo}>
            {children}
        </DarkLightContext.Provider>
    );
};

export default DarkandLightModeProvider;