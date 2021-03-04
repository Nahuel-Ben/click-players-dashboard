import logo from './logo-clickplayers.png';
import './App.css';
import Counters from './components/Counters'
import Product from './components/Product';
import User from './components/User';
//habría que conseguir que los props sean de la api

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div className="App-basic">
          <Counters titulo="Cantidad de Productos" cantidad="13"/>
           <Counters titulo="Cantidad de Usuarios" cantidad="3"/>
           <Counters titulo="Cantidad de Categorias" cantidad="15"/>
         </div>
      </header>
      <div className="App-basic">
        <div className="App-lists">
        <h2>Lista de productos</h2>
          <Product name="zapato" price="$ 40" discount="0"/>
          <Product name="media" price="$ 65" discount="10"/>
          <Product name="anteojos" price="$ 50" discount="5"/> 
        </div>
        <div className="App-lists">
        <h2>Lista de Usuarios</h2>
          <User name="pipo" email="pipo@gmail.com" />
          <User name="chipo" email="chipo@gmail.com" />
          <User name="otro" email="otro@gmail.com" /> 
        </div>
      
      </div>
    </div>
  );
}

export default App;
