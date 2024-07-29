import Carrinho from "./Carrinho";
import Logo from "./Logo";

export default function Cabecalho(){
  return(
    <header className="w-full bg-zinc-900 h-20 flex items-center fixed z-50">
      <nav className="flex mx-auto items-center w-full max-w-screen-xl justify-between">
        <Logo />
        <Carrinho/>
      </nav>
    
    </header>
  )
}