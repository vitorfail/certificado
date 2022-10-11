import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Conteudo></Conteudo>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
