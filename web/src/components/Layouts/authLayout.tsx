import { Outlet } from "react-router-dom";

import logoSvg from "../../assets/logo.svg"

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100">
            <main className="bg-gray-500 p-8 rounded-md flex justify-center items-center flex-col md:min-w-[462px]">
                <img className="" src={logoSvg} alt="logo" /> 
                 <Outlet/>
            </main>
              
        </div>
    )
}