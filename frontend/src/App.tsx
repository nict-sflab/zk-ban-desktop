import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import { Button, Text, Heading, HStack } from "@chakra-ui/react"


function App() {
    function greet(i: Number) {
        Greet(`${i}`);
    }

    return (
        <div id="App">
            <Heading as="h1">zk-BAN</Heading>
            <Text>Choose the pseudonym:</Text>

            <br />
            <HStack justify='center' gap="6">
                <Button onClick={() => {greet(1)} }>Taro</Button>
                <Button onClick={() => {greet(2)}}>Jiro</Button>
                <Button onClick={() => {greet(3)}}>Saburo</Button>
            </HStack>
        </div>
    )
}

export default App
