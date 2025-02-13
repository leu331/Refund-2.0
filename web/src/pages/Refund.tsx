import { Input } from "../components/input"

export function Refund () {
    return (
       <form className="bg-gray-500 w-full max-w-screen-lg mx-auto rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512]" action="">
            <header>
                <h1>Solicitação de Reembolso</h1>
                <p>Dados da despesa para solicitar reembolso.</p>
            </header>

            <Input
            required
            legend="Nome da solicitação"
            />
       </form>
    )
}