import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

/* custom components */
import { UserHome } from './user/view/UserHome';
import { ProductDetails } from './user/view/ProductDetails/ProductDetails';
import { Navbar } from './user/common/Navbar/Navbar';
import { CatalogView } from './user/view/Catalog/CatalogView/CatalogView';
import { About } from './user/view/About/About';
import { Contact } from './user/view/Contact/Contact';
import { Cart } from './user/view/Cart/Cart';
import { Checkout } from './user/view/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <Navbar>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/catalogView/:catalogType" element={<CatalogView />} />
            <Route path="/catalogView/:catalogType/:id" element={<CatalogView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Navbar>
      </PrimeReactProvider>
    </BrowserRouter>
  );
}

export default App;
