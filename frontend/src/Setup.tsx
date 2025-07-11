import './App.css';
import { Sign } from "../wailsjs/go/main/App";
import { Button, Text, Heading, HStack } from "@chakra-ui/react"
import { useZxing } from 'react-zxing'
import { useState } from "react";

function App() {
    const [result, setResult] = useState("");

    const { ref } = useZxing({
        onDecodeResult(result) {
            console.log(result)
            const text = result.getText()
            console.log(text)
        },
    })

    console.log(ref)

    return (
        <div id="App">
            <Button>Hello</Button>
            <video ref={ref} />
        </div>
    )
}

export default App
