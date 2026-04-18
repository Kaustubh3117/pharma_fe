import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserHome } from './user/view/UserHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
