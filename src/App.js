import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

/* custom components */
import { UserHome } from './user/view/UserHome';
import { ProductDetails } from './user/view/ProductDetails/ProductDetails';
import { Navbar } from './user/common/Navbar/Navbar';
import { CatalogView } from './user/view/Catalog/CatalogView/CatalogView';

function App() {
  return (
    <PrimeReactProvider>
      <Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/catalogView/:catalogType" element={<CatalogView />} />
            <Route path="/catalogView/:catalogType/:id" element={<CatalogView />} />
          </Routes>
        </BrowserRouter>
      </Navbar>
    </PrimeReactProvider>
  );
}

export default App;
