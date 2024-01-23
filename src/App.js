import Welcome from './Welcome.js'
import Space from './space.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className='app'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className='contentDiv'>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="space" element={<Space />}/>
              </Routes>
            </div>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
