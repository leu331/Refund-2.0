import { Navigate, useLocation } from "react-router-dom"
import okSvg from "../assets/ok.svg"

export function Confirm () {

    const location = useLocation()

    if (!location.state?.fromSubmit) {
        return <Navigate to="/"/>
    }

    return (
        <div className="bg-gray-500 lg:w[512px] rounded-lg p-10 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold text-green-100">Solicitação enviada!</h1>

            <img src={okSvg} alt="ícone de OK" className="w-28"/>

            <p className="text-sm text-gray-200 text-center ">Agradecemos a sua solicitação, ela será analisada e, em breve, o setor financeiro irá entrar em contato com você.</p>

            <a className="bg-green-100 text-gray-500 rounded-md hover:bg-green-200 font-bold p-3 w-full text-center transition ease-linear" href="/">Nova solicitação</a>
        </div>
    )
}