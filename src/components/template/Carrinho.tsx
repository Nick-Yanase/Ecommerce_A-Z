import useCarrinho from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho(){
  const {qtdDeItens} = useCarrinho();
  return(
    <Link href="/carrinho">
      <div className="relative">
        <div className="absolute size-6 rounded-full bg-red-500 -top-2.5 -right-2.5 flex items-center justify-center text-sm">{qtdDeItens}</div>
        <IconShoppingCart className="size-9 stroke-1"/>
      </div>
    </Link>
  )
}