
import React from "react";

import ButtonJack from "./ButtonJack";
import HeaderBlack from "./HeaderBlack";

const MainJack = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={`light flex-colum bg-green-400 text-gray-900 w-full min-h-screen`}>
            <HeaderBlack />
            <main
                            
            >
                <ButtonJack />
                {children}
            </main>
        </div>
    );
}


export default MainJack;