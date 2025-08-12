import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Setup from './Setup';
import Sign from '../prover/frontend/Sign';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/setup"     element={ <Setup /> } />
        <Route path="/sign"  element={ <Sign /> } />
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/setup" element={<Setup />} />
    //     <Route path="/sign" element={<Sign />} />
    //   </Routes>
    //  </Router>
  );
}