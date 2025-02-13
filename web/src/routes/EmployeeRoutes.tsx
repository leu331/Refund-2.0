import {Routes, Route} from "react-router-dom"

import { Refund } from "../pages/Refund"
import { NotFound } from "../pages/NotFound"
import { EmployeeLayout } from "../components/Layouts/EmployeeLayout"
import { Confirm } from "../pages/Confirm"

export function EmployeeRoutes (){
    return (
        <Routes>
            <Route path="/" element={<EmployeeLayout/>}>
                <Route path="/" element={<Refund/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Route>
        </Routes>
    )
}