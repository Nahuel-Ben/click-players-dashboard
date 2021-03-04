import logo from './logo-clickplayers.png';
import './App.css';
import Products from './components/Products';
//habría que conseguir que los props sean de la api


let products = document.getElementById('products')
    fetch('http://localhost:4000/api/products')

    .then (products => products.json())
    .then (json => products = json.data)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div className="App-basic">
          <Products />
         </div>
      </header>
      <div className="App-basic">
          
      </div>
    </div>
  );
}

export default App;
