import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// mis componentes
import Cart from './components/Cart/Cart';
import CartContextProvider from './contexts/CartContext';
import Contact from './components/NavBar/Contact/ContactForm';
import Home from './components/NavBar/Home/Home';
import ItemCount from './components/ItemCount/ItemCount.js';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Products from './components/NavBar/Products/Products';




function App() {

  return (
    
    <div className="App">

    <CartContextProvider>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={ <NavBar />}>
        <Route path='/categorias/:categoriesId' element={ <ItemListContainer />}/> 
        <Route path='/ItemDetail/:id' element={ <ItemDetailContainer />}/> 
        <Route path='/Cart' element={ <Cart />}/> 
         <Route index element={ <Home /> } />
         <Route path='products' element={ <Products /> } />
         <Route path='contact' element={ <Contact /> } />

        <Route path='*' element={ <Navigate replace to='/'/> }/></Route>
        
      </Routes>
      </BrowserRouter>
      <ItemCount/>
    </CartContextProvider>
    </div>
  );
}

export default App;
