import {Routes, Route} from "react-router-dom"

import { AuthLayout } from "../components/authLayout"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { NotFound } from "../pages/notFound"

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AuthLayout/>}> 
                <Route path="/" element={<SignIn/>}/> 
                <Route path="/signup" element={<SignUp/>}/> 
                <Route path="*" element={<NotFound/>}/>
            </Route>
           
        </Routes>
    )
}