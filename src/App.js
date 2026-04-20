import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserHome } from './user/view/UserHome';
import { ProductDetails } from './user/view/ProductDetails/ProductDetails';
import { PrimeReactProvider } from 'primereact/api';
import NavBar from './shared/common/Navbar/Navbar';

function App() {
  return (
    <PrimeReactProvider>
      <NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="productDetails/:id" element={<ProductDetails />} />

          </Routes>
        </BrowserRouter>
      </NavBar>
    </PrimeReactProvider>
  );
}

export default App;
