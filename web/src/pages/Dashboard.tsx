import { useEffect, useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { RefundItem, RefundItemProps } from "../components/refundItem";

import { formatCurrency } from "../utils/formatCurrency";
import { CATEGORIES } from "../utils/categories";

import searchSvg from "../assets/search.svg";
import { Pagination } from "../components/Pagination";

const REFUND_EXAMPLE = {
    id: "123",
    username: "Alice",
    category: "Transporte",
    expense: formatCurrency(43.3),
    categoryImg: CATEGORIES["transportSvg"].icon,
};

export function Dashboard() {
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10); // Esse valor precisa ser dinâmico futuramente
    const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]); // Estado para armazenar os reembolsos

    function fetchRefunds(event?: React.FormEvent) {
        if (event) event.preventDefault();
        
        console.log(`Buscando reembolsos para "${name}" na página ${page}...`);

        // Simulação de chamada à API (substituir por uma requisição real futuramente)
        setTimeout(() => {
            console.log(`Reembolsos carregados para a página ${page}`);
            setRefunds([REFUND_EXAMPLE]); // Atualizar com os dados reais
        }, 500);
    }

    function handlePagination(action: "next" | "previous") {
        setPage((prevPage) => {
            let newPage = prevPage;
            if (action === "next" && prevPage < totalPage) {
                newPage = prevPage + 1;
            }
            if (action === "previous" && prevPage > 1) {
                newPage = prevPage - 1;
            }
    
            console.log(`🔄 Página alterada para: ${newPage}`);
            return newPage;
        });
    }
    

    // Sempre buscar os reembolsos quando a página mudar
    useEffect(() => {
        fetchRefunds();
    }, [page]);

    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

            <form
                onSubmit={fetchRefunds}
                className="flex items-center justify-between pb-6 border-b-[1px] border-gray-400 md:flex-row gap-2 mt-6"
            >
                <Input
                    placeholder="Pesquisar pelo nome"
                    onChange={(event) => setName(event.target.value)}
                />

                <Button variant="iconSmall" onClick={fetchRefunds}>
                    <img src={searchSvg} alt="Pesquisar" />
                </Button>
            </form>

            <div className="flex flex-col mt-6 gap-4 overflow-y-scroll max-h-[342px]">
                {refunds.length > 0 ? (
                    refunds.map((refund: RefundItemProps) => <RefundItem href={`/refund/${refund.id}`} key={refund.id} data={refund} />)
                ) : (
                    <p className="text-gray-300 text-center">Nenhum reembolso encontrado.</p>
                )}
            </div>

            <Pagination
                current={page}
                total={totalPage}
                onNext={() => handlePagination("next")}
                onPrevious={() => handlePagination("previous")}
            />
        </div>
    );
}
