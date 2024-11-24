import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'

// Products Component
import ProductList from './components/ProductList/ProductList'


// Services
import * as authService from '../src/services/authService';
import * as productService from '../src/services/productService';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [products, setProducts] = useState([]);

  // const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productService.index();
      setProducts(products);
    }
    fetchProducts();
  }, []);


  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          { user ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/products" element={<ProductList products={products} />} />
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path='/signin' element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;