import './App.css';

// Routing
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Pages
import HomePage from './pages/home/home.page';
import CandidatesPage from './pages/candidates/candidates.page';
import CandidateDetail from "./pages/candidates/candidate-detail/candidate.detail.page";
import AboutUsPage from './pages/about/about.page';

// Components
import NavbarComponent from './components/navbar/navbar.component';
import FooterComponent from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path="/candidates" element={<CandidatesPage/>}/>
          <Route path="/candidates/:id" element={<CandidateDetail/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
