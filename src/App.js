import { Routes, Route } from 'react-router-dom';

import LoginFormWrapper from './components/LoginFormWrapper';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginFormWrapper />} />
    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
    <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
    <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
