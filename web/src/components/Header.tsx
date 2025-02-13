import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"

export function Header () {
    return (
       
        <header className="w-full flex items-center justify-between">
            <img src={logoSvg} alt="" />

            <div className="flex items-center gap-3">
                <span 
                    className="font-semibold text-sm text-gray-200">
                        Olá, João
                </span>

                <img 
                src={logoutSvg} 
                alt="" 
                className="my-8 cursor-pointer hover:opacity-75"/>
            </div>
        </header>

    )
}