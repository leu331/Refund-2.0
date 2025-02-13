import { Input } from "../components/input"
import { Button } from "../components/button"
import { FormEvent, useState } from "react"

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function handleSubmit (event: React.FormEvent) {
        event.preventDefault()
         
    }

    if (password !== passwordConfirm) {
        alert("As senhas precisam ser iguais")
    }
    
    console.log("sdwdwdw");   

    return(
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <Input 
            required 
            legend="Nome" 
            type="text" 
            placeholder="seu@email.com"
            onChange={(event) => setName(event.target.value)}/>

            <Input 
            required 
            legend="E-mail" 
            type="email" 
            placeholder="seu@email.com"
            onChange={(event) => setEmail(event.target.value)}/>

            <Input 
            required 
            legend="Senha" 
            type="password" 
            placeholder=""
            onChange={(event) => setPassword(event.target.value)}/>

            <Input 
            required 
            legend="Confirme a senha" 
            type="password" 
            placeholder=""
            onChange={(event) => setPasswordConfirm(event.target.value)}/>
           
            <Button className="" isLoading={isLoading} type="submit" title="Cadastrar"/>

            <a className="flex justify-center items-center mt-2 hover:text-green-200" href="/">Já tenho uma conta</a>
           
        </form>
    )
}