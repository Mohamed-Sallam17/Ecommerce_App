import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNav';
import CarouselSection from './components/CarouselSection';
import Brands from './components/Brands';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <HeaderNavbar/>
      <CarouselSection/>
      <Brands/>
      <Products/>
      <Routes>
        <Route path='/' element={""}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;





