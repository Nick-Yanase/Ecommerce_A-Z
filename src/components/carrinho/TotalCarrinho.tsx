import ItemCarrinho from "@/data/model/ItemCarrinho";

export interface TotalCarrinhoProps {
  itens: ItemCarrinho[];
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
  const total = props.itens.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between bg-zinc-900 rounded-md px-10 py-3">
      <div className="flex w-full md:flex-col justify-between sm:items-center md:items-start">
        <span className="text-zinc-500">Total:</span>
        <span className="text-3xl font-bold text-yellow-500">
          R$ {total.toFixed(2)}
        </span>
      </div>
      <button className="max-w-s bg-green-600 px-6 py-2 rounded-md w-full md:w-fit">
        Finalizar
      </button>
    </div>
  );
}
