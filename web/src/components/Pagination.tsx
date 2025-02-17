import { Button } from "./button"
import leftArrowSvg from "../assets/left.svg"
import rightArrowSvg from "../assets/right.svg"

type PaginationProps = {
    current: number
    total: number
    onNext: () => void
    onPrevious: () => void
}

export function Pagination({ current, total, onNext, onPrevious }: PaginationProps) {
    console.log("Componente Pagination renderizado", current, total)

    return (
        <div className="flex gap-2 justify-center items-center mt-6">
            <Button 
                variant="iconSmall" 
                onClick={() => {onPrevious()}} 
                disabled={current === 1}
            >
                <img src={leftArrowSvg} alt="Página anterior" />
            </Button>

            <span className="text-sm text-gray-200">
                {current} de {total}
            </span>

            <Button 
                variant="iconSmall" 
                onClick={() => {onNext()}} 
                disabled={current === total}
            >
                <img src={rightArrowSvg} alt="Próxima página" />
            </Button>
        </div>
    )
}
