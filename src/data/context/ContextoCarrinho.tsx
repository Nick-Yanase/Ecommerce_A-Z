
import { createContext, useEffect, useState } from "react"
import ItemCarrinho from "../model/ItemCarrinho"
import Produto from "../model/produto"
import useLocalStorage from "../hooks/useLocalStorage"

interface ContextoCarrinhoProps{
  itens: ItemCarrinho[]
  qtdDeItens: number
  adicionar: (item: Produto) => void
  remover: (item: Produto) => void
}
const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)
// Serve opara podemos compartilhar um estado com multiplas paginas diferentes
export function ProvedorCarrinho(props: any){
  const [itens, setItens] = useState<ItemCarrinho[]>([])
  const {set, get} = useLocalStorage();

  useEffect(()=>{
     // Quando o componente é montado, verifica se há itens armazenados no localStorage
    const carrinho = get("carrinho") 
    if(carrinho){
      setItens(carrinho)  // Se houver itens no localStorage, inicializa o estado do carrinho com esses itens
    }
  }, [get])
  function adicionar(produto: Produto){
    const indice = itens.findIndex((i)=> i.produto.id === produto.id)
    if(indice === -1){
      alterarItens([...itens, {produto, quantidade: 1}])
    }
    else{
      const novosItens = [...itens]
      novosItens[indice].quantidade++
      alterarItens(novosItens)
    }
   }

   function remover(produto: Produto){
    const novosItens = itens.map((item)=>{
      if (item.produto.id === produto.id){
        item.quantidade--
      }
      return item;
    }).filter((i) => i.quantidade > 0) //isso aqui garante que quando os itens forem 0 retirar o item da lista
    alterarItens(novosItens)
   }
   function alterarItens(novosItens: ItemCarrinho[]){
    setItens(novosItens)
    set("carrinho", novosItens) // Armazena o novo estado do carrinho no localStorage
   }
  return <ContextoCarrinho.Provider 
  value={{
    itens,
    adicionar,
    remover,
    get qtdDeItens(){
      return itens.reduce((total, item) => total + item.quantidade,0)
    }
  }}>{props.children}</ContextoCarrinho.Provider>
}

export default ContextoCarrinho