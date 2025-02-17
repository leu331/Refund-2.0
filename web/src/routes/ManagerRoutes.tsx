import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import {Routes, Route} from "react-router-dom"
import { EmployeeLayout } from "../components/Layouts/EmployeeLayout";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<EmployeeLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/refund/:id" element={<Refund/>}/>
              
            </Route>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}