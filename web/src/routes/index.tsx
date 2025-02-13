import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./authRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes(){
    return (   
    <BrowserRouter> 
        <EmployeeRoutes/>
    </BrowserRouter>
    )
}