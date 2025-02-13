import uploadSvg from "../assets/upload.svg"

type UploadProps = React.ComponentProps<"input"> & {
    filename?: string | null
}

export function Upload({filename = null, ...rest}: UploadProps){
    return (
        <div className="  focus-within:text-green-100">
            <legend className="uppercase text-xs mb-2 text-gray-200"> Comprovante</legend>
            
            <div className="w-full h-10 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 outline-none">
                <input className="hidden" type="file" id="upload" {...rest}/>

                <span className="text-sm text-gray-100 flex-1 px-4">
                    {filename ?? "Selecione o arquivo"}
                </span>

                <label 
                htmlFor="upload"
                className="flex h-10 w-12 justify-center items-center cursor-pointer disabled:opacity-50 bg-green-100 rounded-lg hover:bg-green-200 transition ease-linear">
                    <img className="w-6 h-6" src={uploadSvg} alt="" />
                </label>
            </div>
            
        </div>
    )
}