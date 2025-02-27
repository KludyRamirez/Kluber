import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing title={'Landing'} />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
