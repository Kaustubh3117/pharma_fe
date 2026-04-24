import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

/* custom components */
import { UserHome } from './user/view/UserHome';
import { ProductDetails } from './user/view/ProductDetails/ProductDetails';
import { Navbar } from './user/common/Navbar/Navbar';

function App() {
  return (
    <PrimeReactProvider>
      <Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="productDetails/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </Navbar>
    </PrimeReactProvider>
  );
}

export default App;
