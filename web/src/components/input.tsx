type InputProps = React.ComponentProps<"input"> & {
    legend?: string
}

export function Input({legend, ...rest}: InputProps) {
    return(
      <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
        {legend && (
            <legend className="uppercase text-xs mb-2 text-inherit"> 
                {legend} 
            </legend>
        )}

        <input className="w-full h-12 rounded-r-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus-within:border-green-100 " type="text" {...rest}/>
    </fieldset>  
    )
}