import Os_Mais_Vendidos from "./Os_Mais_Vendidos";
import Produto from "./Produto";
import "./MeuPrimeiroComponente.css"
export function NavBar(){
    return(
        <header className="Headerr">
            <nav >
                <span className="TituloNav">Carros Legal</span>
                <div>
                    <a href={'a'}>Início</a>
                    <a href={'a'}>Produtos</a>
                    <a href={'a'}>Contato</a>
                </div>
            </nav>
        </header>

    )
}

export default NavBar





