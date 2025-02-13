import { useState } from "react"
import { Input } from "../components/input"
import { Select } from "../components/Select"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Upload } from "../components/Upload"
import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"

export function Refund () {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [expense, setExpense] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [filename, setFilename] = useState<File | null>(null)
    
    const navigate = useNavigate() 

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()

        console.log(name, expense, category, isLoading, filename)
        navigate("/confirm", {state: {fromSubmit: true}})
    }
   
    return (
       <form onSubmit={handleSubmit} className="bg-gray-500 w-full  mx-auto rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512]" action="">
            <header>
                <h1 className="text-xl font-bold text-gray-100">Solicitação de Reembolso</h1>
                <p className="text-sm text-gray mt-2 mb-2">Dados da despesa para solicitar reembolso.</p>
            </header>

            <Input
            required
            legend="Nome da solicitação"
            onChange={(event) => setName(event.target.value)}
            value={name}
            />

            <div className="flex gap-4">
                <Select
                required
                legend="Categoria"
                value={category}
                onChange={(event) => setCategory(event.target.value)}> 

                <option value="" disabled hidden>Selecione</option>
                {
                    CATEGORIES_KEYS.map((categorieKey) => {
                        return ( 
                        <option key={categorieKey} value={categorieKey}>
                            {CATEGORIES[categorieKey].name}
                        </option>)
                    })      
                }
                </Select>

                <Input 
                type="number" 
                step={5} 
                legend="Valor" 
                required
                onChange={(event) => setExpense(Number(event.target.value))}
                value={expense}/>
            </div>

            <Upload
            filename={filename && filename.name}
            onChange={(event) => event?.target.files && setFilename(event.target.files[0])}
            />

            <Button isLoading={isLoading} type="submit" title="Enviar"/>
       </form>
    )
}