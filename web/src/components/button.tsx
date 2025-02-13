type ButtonProps = React.ComponentProps<"button"> & {
    title: string
    isLoading?: boolean
}

export function Button ({title, isLoading, ...rest}:ButtonProps) {
    return (
            <button disabled={isLoading} className="bg-green-100 text-white h-12 flex justify-center items-center rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress"> 
                {title} 
            </button>  
    )
}