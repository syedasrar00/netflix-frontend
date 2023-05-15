import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import SignHomepage from './pages/SignHomepage';
import SignInPage from './pages/Sign';
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<SignHomepage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/browse" element={<Homepage />} />
      </Routes> */}
      <Homepage />
    </div>
  );
}

export default App;
