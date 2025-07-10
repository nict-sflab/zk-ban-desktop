import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'

 import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <ChakraProvider value={defaultSystem}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
)
