import { classMerge } from "../utils/classMerge"

type ButtonProps = React.ComponentProps<"button"> & {
    title?: string
    isLoading?: boolean
    variant?: "base" | "icon" | "iconSmall"
}

const variants = {
    button: {
        base: "h-12",
        icon: "h-12 w-12",
        iconSmall: "h-8 w-8"
    }
}

export function Button({ title, isLoading, variant = "base", className = "", onClick, disabled, ...rest }: ButtonProps) {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled || isLoading} 
            className={classMerge(
                "bg-green-100 text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed", 
                variants.button[variant],
                className
            )}>
            {isLoading ? "Carregando..." : title || rest.children}
        </button>
    );
}


