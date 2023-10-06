import Produto from "./Produto";
import NavBar from "./NavBAr";
export function Produtos_Mais_Vendidos(){
    return(
        <div>
            <h1>Os mais vendidos</h1>
            <Produto img="/carro.png" nome="blck" descricao="O mais bonito"></Produto>
            <Produto img="/carro2.png" nome="Carro 2" descricao="O mais vendido de 2011"></Produto>
            <Produto img="/carro3.png" nome="Carro 3" descricao="Esportivo moderno"></Produto>
        </div>
    )
}

export default Produtos_Mais_Vendidos
