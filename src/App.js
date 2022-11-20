import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from "./context/AuthContext";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Moviepage from"./pages/Moviepage";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Account' element={<ProtectedRoute><Account />
              </ProtectedRoute>} />
        <Route path='/Moviepage' element = {<Moviepage />} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
