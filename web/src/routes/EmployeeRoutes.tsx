import {Routes, Route} from "react-router-dom"

import { Refund } from "../pages/Refund"
import { NotFound } from "../pages/notFound"
import { EmployeeLayout } from "../components/EmployeeLayout"

export function EmployeeRoutes (){
    return (
        <Routes>
            <Route path="/" element={<EmployeeLayout/>}>
                <Route path="/" element={<Refund/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}