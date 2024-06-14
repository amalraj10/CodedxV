import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Services from './Pages/Services';

function App() {
  return (
    <div>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/cart' Component={Cart}/>
    <Route path='/product' Component={Product}/>
    <Route path='/service' Component={Services}/>
   </Routes>
    </div>
  );
}

export default App;
