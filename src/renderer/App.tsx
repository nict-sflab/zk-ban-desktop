import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Setup from '../prover/frontend/Setup';
import Sign from './Sign';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/setup" element={<Setup />} />
        <Route path="/" element={<Sign />} />
      </Routes>
     </Router>
  );
}