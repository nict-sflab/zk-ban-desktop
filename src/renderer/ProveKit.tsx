import { contextBridge } from 'electron';
import { Route, Routes } from 'react-router-dom';

interface ProverUI {
  Setup: React.ComponentType;
  Sign: React.ComponentType;
};

const ProverRoute: React.FC<{ proverUI: ProverUI }> = ({ proverUI }) => {
  return (
    <Routes>
      <Route path="/setup" element={<proverUI.Setup />} />
      <Route path="/" element={<proverUI.Sign />} />
    </Routes>
  );
};

export default ProverRoute;