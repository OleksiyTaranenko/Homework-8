import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import About from './views/About';
import Main from './views/Main';
import Error from './views/Error';
import Products from './views/Products';
import ProductsDetails from './views/ProductsDetails';
import Basket from './views/Basket';
import Footer from './components/Footer';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Menu />
          <Routes>
            <Route path='/' exact="true" element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' exact="true" element={<Products />} />
            <Route path='/products/:productId' element={<ProductsDetails />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </Provider> 
  );
}

export default App;