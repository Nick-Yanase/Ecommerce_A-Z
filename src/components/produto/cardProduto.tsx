import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/produto";
import Image from "next/image";
export interface CartaoProdutoProps {
  produto: Produto;
}

export default function CardProduto(props: CartaoProdutoProps) {
  const { nome, descricao, preco, imagem } = props.produto;
  const { adicionar } = useCarrinho();
  return (
    <div className="flex flex-col w-72 bg-zinc-900 rounded-lg ">
      <div className="relative w-72 h-52">
        <Image className="object-cover" src={imagem} alt={nome} fill />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5 ">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
        <div className="flex justify-between">
          <span className="text-lg font-semibold mt-2">
            R$ {preco.toFixed()}
          </span>
          <button
            onClick={() => adicionar(props.produto)}
            className="border px-4 py-1 rounded-full text-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
