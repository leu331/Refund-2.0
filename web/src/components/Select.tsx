type SelectProps = React.ComponentProps<"select"> & {
    legend?: string;
    children?: React.ReactNode;
  };
  
  export function Select({ legend, children, ...rest }: SelectProps) {
    return (
      <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
        {legend && (
          <legend className="uppercase text-xs mb-2 text-inherit">
            {legend}
          </legend>
        )}
  
        <select
          className="w-full h-12 rounded-r-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus-within:border-green-100"
          {...rest}
        >
          {children}
        </select>
      </fieldset>
    );
  }
  