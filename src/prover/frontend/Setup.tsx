import { useZxing } from 'react-zxing'
import { useEffect, useState } from "react";
import ProverKit from '../backend/proverkit';
import ProverKitInstance from '../backend/instance';
import { Heading, Text } from "@chakra-ui/react"


export default function Setup() {
  const [name, setName] = useState("");

  const { ref } = useZxing({
    onDecodeResult(qr) {
      try {
        const text = qr.getText()
        console.log(text)

        const result = window.proverkit.Setup({Input: () => text});
        console.log(result)

        alert("QR Code Scanned!");
      } catch (e : any) {
        alert(`Error decoding QR code:${e.message}`);
      }
    },
  })

  useEffect(() => {
    const n = window.proverkit.Name();
    setName(n);
  })
    
  return (
    <div id="App">
        <Heading as="h1">{name}</Heading>
        <Text>Scan your credential:</Text>

        <br />
        <video ref={ref}/>
    </div>
  )
}
