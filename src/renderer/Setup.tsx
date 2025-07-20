import { useZxing } from 'react-zxing'
import { useState } from "react";
import { Heading, Text } from "@chakra-ui/react"


export default function Setup() {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      alert("QR Code Scanned!");
      const text = result.getText()
      console.log(text)
    },
  })
    
  return (
    <div id="App">
        <Heading as="h1">zk-BAN</Heading>
        <Text>Scan your credential:</Text>

        <br />
        <video ref={ref}/>
    </div>
  )
}
