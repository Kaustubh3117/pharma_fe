import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from './view/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
