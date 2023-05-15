import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignHomepage from './pages/SignHomepage';
import SignIn from './pages/Sign';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignHomepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/browse" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
