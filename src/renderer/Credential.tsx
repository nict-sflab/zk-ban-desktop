import { useZxing } from 'react-zxing'
import { useState } from "react";
import { Button } from "@chakra-ui/react"
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

export default function CredentialLoadPage() {
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
      <Button>Hello</Button>
      <video ref={ref} />
    </div>
  )
}
