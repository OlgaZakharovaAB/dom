import Navibar from "D:/dom/smallbusiness/frontend/src/pages/components/Navibar.jsx";
import homePage from "./pages/HomePage.jsx";
import FullCatalog from "./pages/FullCatalog.jsx";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import SignupPage from "./pages/SignupPage.jsx"
import flogin from "./pages/components/flogin.jsx"



function App() {

    return (
        <>
        
    <Router>
      <Navibar></Navibar>

      <Routes>

        <Route path="/" Component={homePage}></Route>
        <Route path="/catalog" Component={FullCatalog}></Route>
        <Route path="/profile" Component={SignupPage}></Route>
        <Route path="/signup" Component={SignupPage}></Route>
        <Route path="/cart" Component={flogin}></Route>

      </Routes>
      </Router>

      </>
    );
  }
  
  export default App
  