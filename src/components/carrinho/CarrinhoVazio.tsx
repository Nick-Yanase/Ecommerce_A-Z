import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function CarrinhoVazio(){
  return(
    <div className="flex flex-col items-center gap-4 text-zinc-500">
      <IconShoppingCartOff size={150} stroke={0.5}/>
      <div>
        <h2 className="text-3xl">Seu carrinho está vazio</h2>
        <p>Adicione produtos clicando no botão abaixo</p>
      </div>

      <Link href="/" className="bg-green-500 text-white px-6 py-2 rounded-lg">Ver produtos</Link>
    </div>
  )
}