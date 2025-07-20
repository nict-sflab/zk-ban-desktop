import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Setup from './Setup';
import Sign from './Sign';
import ProverRoute from './ProveKit';

const route = {
  Setup: Setup,
  Sign: Sign,
}

export default function App() {
  return (
    <Router>
      <ProverRoute proverUI={route}></ProverRoute>
     </Router>
  );
}