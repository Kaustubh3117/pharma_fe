import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserDashboard } from './user/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
