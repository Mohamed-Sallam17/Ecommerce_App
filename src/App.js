import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNav';
import CarouselSection from './components/CarouselSection';
import Brands from './components/Brands';
import Products from './components/Products';
import Categories from './components/Categories';
import Layout from './components/Layout';
import { use, useEffect, useRef } from 'react';
import SingleProduct from './components/SingleProduct';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
              <>
                <CarouselSection />
                <Brands />
                <Products />
              </>
            }
          />
          <Route path="/categories" element={<Categories />}></Route>
          <Route path='/products/:productID' element={<SingleProduct/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;





