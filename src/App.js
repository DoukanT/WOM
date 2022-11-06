import Navbar from "./components/Navbar";
// import UserListPage from "./pages/UserListPage"
// import LaterPage from "./pages/LaterPage"
// import RecommendationPage from "./pages/RecommendationPage"
<<<<<<< Updated upstream
import Login from"./pages/loginForm"
import Register from"./pages/registerForm"
import Forget from"./pages/forgetForm"
import Search from"./search/Search"
import Moviepage from"./pages/Moviepage"
=======
import {Provider} from "react-redux";
import {store} from "./redux";
import  Router from "./config/Router";




>>>>>>> Stashed changes


function App() {
  return (
    
    <Provider store ={store}>
    <>
    <Router/>
    <Navbar />
<<<<<<< Updated upstream
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      {/* <Route path='/RecommendationPage' element={<RecommendationPage />} />
      <Route path='/UserListPage' element={<UserListPage />} />
      <Route path='/LaterPage' element={<LaterPage />} /> */}
      <Route path='/SearchPage' element={<SearchPage />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/forget' element = {<Forget />} />
      <Route path='/search' element = {<Search />} />
      <Route path='/Moviepage' element = {<Moviepage />} />


    </Routes>
=======
    
>>>>>>> Stashed changes
    </>
 </Provider> );
}

export default App;

