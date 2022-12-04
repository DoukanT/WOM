import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from "./context/AuthContext";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Moviepage from"./pages/Moviepage";
import SearchResults from "./pages/SearchResults";
import Watchlater from"./pages/Watchlater";
import Search from "./pages/Search";
import Account2 from "./pages/Account2";
import AdvancedSearchResults from "./pages/AdvancedSearchResults";


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
        <Route path='/SearchResults' element = {<SearchResults />} />
        <Route path='/Watchlater' element = {<Watchlater />} />
        <Route path='/Search' element = {<Search />} />
        <Route path='/Account2' element = {<Account2 />} />
        <Route path='/AdvancedSearchResults' element = {<AdvancedSearchResults />} />



    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
