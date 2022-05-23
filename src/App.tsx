import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Career from './routes/Career';
import Study from './routes/Study';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/career' element={<Career/>}>
          </Route>
        <Route path='/study' element={<Study/>}>
          </Route>
        <Route path='/' element={<Home/>}>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
