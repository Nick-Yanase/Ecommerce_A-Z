'use client'
import { ProvedorCarrinho } from "@/data/context/ContextoCarrinho";

export default function Layout(props: any){
  return(
    <ProvedorCarrinho>
      {props.children}
    </ProvedorCarrinho>
  )
}