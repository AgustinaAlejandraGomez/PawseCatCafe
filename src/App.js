import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// importo los comp creados
import Products from './components/products';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './layouts/navBar/navBar';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer.js';
import ItemCount from './components/ItemCount/ItemCount.js';
import Cart from './components/cart/cart';
function App() {

  // const onAdd = (quantity) => {
  //   console.log(`Has agregado ${quantity} unidades`);
  // }


  return (

    
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBar />}>
        <Route path='/' element={ <ItemListContainer />}/> 
        <Route path='/ItemDetail/:id' element={ <ItemDetailContainer />}/> 
        <Route path='/cart' element={ <Cart />}/> 
         <Route index element={ <Home /> } />
         <Route path='products' element={ <Products /> } />
         <Route path='contact' element={ <Contact /> } />
        
        <Route path='*' element={ <Navigate replace to='/'/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
      <navBar />
      <ItemCount/>
    </div>
  
  );
}

export default App;
