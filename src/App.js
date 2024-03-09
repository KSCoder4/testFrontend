import Welcome from './Welcome.js'
import UserList from './UserList.js';
import './App.css'
import Space from './space.js'
import Log from './Log.js'
import Sign from './Sign.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { api } from './api.js';
import NotFound from './NotFound.js'

function App() {
  return (
    <Router>
      <div className='App'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <NavBar />
        <div className='contentDiv'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign" element={ <Sign/>} />
            <Route path="/log" element={ <Log/>} />
            <Route path="/space" element={ <ProtectedElement element ={<Space/>} />}/>
            <Route path="/userlist" element={<ProtectedElement element={<UserList/> } />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
function ProtectedElement(props) {
  if (api.checkLoggedInStatus()) {
    return props.element;
  } else {
    alert("Access denied. Please sign up and log in. "); 
    return <Navigate to="/log" />;
  }
}
export default App;
