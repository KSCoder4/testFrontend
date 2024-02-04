import Welcome from './Welcome.js'
import './App.css'
import Space from './space.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
      <div className='App'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <NavBar />
        <div className='contentDiv'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/space" element={ <Space/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
