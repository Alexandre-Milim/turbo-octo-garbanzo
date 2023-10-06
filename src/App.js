import './App.css';
import Produto from "./components/Produto";
import Os_Mais_Vendidos from "./components/Os_Mais_Vendidos";
import NavBar from "./components/NavBAr";
import {Footerzin} from "./components/Footerzin";
function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <img src="/carrin6.jpg" />
            <Os_Mais_Vendidos></Os_Mais_Vendidos>
            <div>
                <Produto></Produto>
            </div>
            <Footerzin></Footerzin>
        </div>
    );
}
export default App;