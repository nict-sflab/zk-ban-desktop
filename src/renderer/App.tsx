import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Setup from './Setup';
import Sign from '../prover/frontend/Sign';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Setup />} /> */}
        <Route path="/" element={<Sign />} />
      </Routes>
     </Router>
  );
}