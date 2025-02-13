import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function EmployeeLayout (){
    
    return(        
        <div className="w-screen h-screen flex flex-col items-center bg-gray-400">
            <main className="p-3 w-full md:w-auto">
                <Header/>
                <Outlet/>
            </main>
        </div>
    )
}