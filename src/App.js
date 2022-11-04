import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
// import UserListPage from "./pages/UserListPage"
import SearchPage from "./pages/SearchPage"
// import LaterPage from "./pages/LaterPage"
// import RecommendationPage from "./pages/RecommendationPage"
import Login from"./pages/loginForm"
import Register from"./pages/registerForm"
import Forget from"./pages/forgetForm"




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      {/* <Route path='/RecommendationPage' element={<RecommendationPage />} />
      <Route path='/UserListPage' element={<UserListPage />} />
      <Route path='/LaterPage' element={<LaterPage />} /> */}
      <Route path='/SearchPage' element={<SearchPage />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/forget' element = {<Forget />} />

    </Routes>
    </>
  );
}

export default App;
