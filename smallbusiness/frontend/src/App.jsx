import Navibar from "D:/dom/smallbusiness/frontend/src/pages/components/Navibar.jsx";
import homePage from "./pages/HomePage.jsx";
import FullCatalog from "./pages/FullCatalog.jsx";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx"


function App() {

    return (
        <>
        
    <Router>
      <Navibar></Navibar>

      <Routes>

        <Route path="/" Component={homePage}></Route>
        <Route path="/catalog" Component={FullCatalog}></Route>
        <Route path="/profile" Component={LoginPage}></Route>
        <Route path="/signup" Component={SignupPage}></Route>
        <Route path="/login" Component={LoginPage}></Route>

      </Routes>
      </Router>

      </>
    );
  }
  
  export default App
  