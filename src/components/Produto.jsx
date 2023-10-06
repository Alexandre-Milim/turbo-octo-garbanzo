import Site from "./NavBAr";
import Os_Mais_Vendidos from "./Os_Mais_Vendidos";
export function Produto(prop) {
    return(
        <div>
            <img src={prop.img}/>
            <h3>{prop.nome}</h3>
            <span>{prop.descricao}</span>
        </div>
    )
}

export default Produto