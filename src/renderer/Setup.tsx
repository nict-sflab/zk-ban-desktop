import { useZxing } from 'react-zxing'
import { useEffect, useState } from "react";
import { Heading, Text, Input, Button } from "@chakra-ui/react"


const setup = async (credential: string) => {
  const result = window.proverkit.setup(credential, {});
  console.log(result)
}

export default function Setup() {
  const [name, setName] = useState("");

  const { ref } = useZxing({
    onDecodeResult(qr) {
      (async () => {
        try {
          const text = qr.getText()
          console.log(text)

          await setup(text);
          alert("Credential is Scanned ! This app store the credential in the local storage, \nso you can use it later.");
        } catch (e : any) {
          alert(`Error decoding QR code:${e.message}`);
        }
      })() 
    },
  })

  useEffect(() => {
    (async function(){
      const n = await window.proverkit.name();
      setName(n);
    })()


     const listener = async (e: any) => {
      const credential = e.clipboardData.getData("text");
      console.log("Credential from clipboard:", credential);
      try {
        setup(credential);
        alert("Credential is Pasted !\nThis app store the credential in the local storage, \nso you can use it later.");
      } catch (error) {
        alert(`Error setting up credential: ${error}`);
      }
    }

    window.addEventListener("paste", listener);
    return () => window.removeEventListener("paste", listener);
  }, []);
    
  return (
    <div id="App">
        <Heading as="h1">{name}</Heading>
        <Text>Scan your credential:</Text>

        <br />
        <video ref={ref}/>

        <br />
        <Text>or paste your credential (with CTRL + V).</Text>
    </div>
  )
}
