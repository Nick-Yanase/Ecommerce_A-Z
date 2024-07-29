import Cabecalho from "./Cabecalho"

export interface PaginaProps {
  children: React.ReactNode
  className?: string
}

export default function Pagina(props: PaginaProps){
  return(
    <div className="flex flex-col min-h-screen">
      <Cabecalho/>
      <main className={`max-w-screen-lg w-full mx-auto flex-1 py-10 mt-20 ${props.className ?? ''}`}>
        {props.children}
      </main>

    </div>
  )
}