import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';

const App = () => {
  return (
      <div className="App">
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/form' element={<Form />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter> 
          </CartContextProvider>
        </NotificationProvider>
      </div>
  );
}

export default App;
