import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/index";
import { Mention } from "./pages/Mention";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./pages/pagenotfound";
import SmoothScroll from './components/SmoothScroll';


function App() {
  return (
  <div className="App">
    <Router>
      <SmoothScroll>
      <NavBar />
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/mention" element={<Mention/>} />
       <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </SmoothScroll>
    </Router> 
    </div>
    
  );
}

export default App;
