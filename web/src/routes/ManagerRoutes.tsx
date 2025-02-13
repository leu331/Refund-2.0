import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import {Routes, Route} from "react-router-dom"
import { EmployeeLayout } from "../components/Layouts/EmployeeLayout";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<EmployeeLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
              
            </Route>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}