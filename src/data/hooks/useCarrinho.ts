import { useContext } from "react";
import ContextoCarrinho from "../context/ContextoCarrinho";

const useCarrinho = () => useContext(ContextoCarrinho);

export default useCarrinho;