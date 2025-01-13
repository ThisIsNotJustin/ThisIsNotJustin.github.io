"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BackGroundColorContextProps {
    bgColor: string;
    setBgColor: (color: string) => void;
};

const BackgroundColorContext = createContext<BackGroundColorContextProps | undefined>(undefined);

export const useBackGroundColor = () => {
    const context = useContext(BackgroundColorContext);
    if (!context) {
        throw new Error("useBackgroundColor must be used within a provider");
    }

    return context;
};

export const BackGroundColorProvider = ({ children}: { children: ReactNode }) => {
    const [bgColor, setBgColor] = useState("#0a0a0a");

    return (
        <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
            {children}
        </BackgroundColorContext.Provider>
    );
};