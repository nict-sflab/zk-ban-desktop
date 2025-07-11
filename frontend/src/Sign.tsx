import './App.css';
import { Sign } from "../wailsjs/go/main/App";
import { Button, Text, Heading, HStack } from "@chakra-ui/react"

function App() {
    return (
        <div id="App">
            <Heading as="h1">zk-BAN</Heading>
            <Text>Choose the pseudonym:</Text>

            <br />
            <HStack justify='center' gap="6">
                <Button onClick={() => {Sign(1)} }>Taro</Button>
                <Button onClick={() => {Sign(2)}}>Jiro</Button>
                <Button onClick={() => {Sign(3)}}>Saburo</Button>
            </HStack>
        </div>
    )
}

export default App
