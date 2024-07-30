import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from 'next/image';

// aqui nós queremos mostrar a imagem do produto que fica em produto!
/*
  1- temos que criar uma interface que aqui para colocar um atributo que tenha um tipo de ItemCarrinho

  2- o ItemCarrinho possui dois atributos em sua interface, produto de tipo produto e quantidade do tipo number

  3- queremos pegar o atributo produto que aponta para interface de Produto onde possui atributos id, nome, imagem etc. que é o que queremos pegar

  4- e assim é so chamar a imagem colocando a interface AreaItemCarrinhoProps como argumento no componente AreaItemCarrinho.
*/
export interface AreaItemCarrinhoProps{
  item: ItemCarrinho
  //recebe uma variavel do tipo ItemCarrinho como parametro
  adicionar?: (item: ItemCarrinho) => void
  remover?: (item: ItemCarrinho) => void
}
export default function AreaItemCarrinho(props: AreaItemCarrinhoProps){
  const { produto } = props.item;

  console.log('Produto:', produto);
 return(
  <div className="flex w-full items-center p-4 md:gap-5 bg-zinc-900 rounded-md overflow-hidden">
    <div className="overflow-hidden relative md:size-28">
      <Image 
      src={props.item.produto.imagem} 
      alt={props.item.produto.nome}
      fill  
      className="object-cover"/>
    </div>
    <div className="flex flex-col flex-1 gap-2 px-5">
      <span className="text-xl font-bold">{props.item.produto.nome}</span>
      <span className="text-sm text-zinc-400">{props.item.produto.descricao}</span>
      <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
        <span>R$ {props.item.produto.preco.toFixed(2)}</span>
        <IconX />
        <span>{props.item.quantidade}</span>
        <span> = </span>
        <span className="text-yellow-500">R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}</span>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-2 items-center px-5">
        <button onClick={()=> props.remover?.(props.item)}>
          <IconMinus />
        </button>
        <span className="flex px-4 py-2 rounded-md bg-zinc-900">
          {props.item.quantidade}
        </span>
        <button onClick={()=> props.adicionar?.(props.item)}>
          <IconPlus />
        </button>
      </div>
  </div>
 ) 
}