'use client'
import CardProduto from "@/components/produto/cardProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Home() {
  return (
    <Pagina>
      <div className="flex justify-center flex-wrap gap-5">
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  );
}
