import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react'
import './App.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>);
