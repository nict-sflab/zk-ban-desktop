import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import CredentialLoadPage from './Credential';
import Sign from './Sign';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CredentialLoadPage />} /> */}
        <Route path="/" element={<Sign />} />
      </Routes>
    </Router>
  );
}
