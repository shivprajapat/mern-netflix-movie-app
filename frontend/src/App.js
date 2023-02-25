import './App.scss';
import { Home, Login, Register, Watch } from './pages';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path='/' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/series' element={<Home type="series" />} />
        <Route path='/movies' element={<Home type="movies" />} />
      </Route>
    </Routes>
  );
}

export default App;
