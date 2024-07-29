"use client";
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/carrinho/TotalCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PaginaCarrinho() {
  const { itens, adicionar, remover } = useCarrinho();
  return (
    <Pagina className="flex flex-col gap-10">

      {/* se itens do carrinho for vazio joga o componente Carrinho vazio, senão mostra os produtos dentro dos componentes de AreaItemCarrinho */}
      {itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        <>
        <div className="flex flex-col gap-5">
        {itens.map((item) => (
          <AreaItemCarrinho
            key={item.produto.id}
            item={item}
            adicionar={(item) => adicionar(item.produto)}
            remover={(item) => remover(item.produto)}
          />
        ))}
      </div>
      <TotalCarrinho itens={itens} />
      </>
      )}
    </Pagina>
  );
}
