
import { Button, Text, Heading, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";


const sign = (pseudonym: number, window: Window) => {
    try {
        window.proverkit.sign(pseudonym);
        alert("done");
    } catch (e: any) {
        alert(`Error signing: ${e.message}`);
    }
}

export default function SignPage() {
    const [name, setName] = useState("");
    useEffect(() => {
        (async function() {
            const n = await window.proverkit.name();
            setName(n);
        })()
    }, []);

    return (
      <div id="App">
          <Heading as="h1">{name}</Heading>
          <Text>Choose the pseudonym:</Text>

          <br />
          <HStack justify='center' gap="6">
              <Button onClick={ async () => { sign(0, window); }}>Taro</Button>
              <Button onClick={ async () => { sign(1, window); }}>Jiro</Button>
              <Button onClick={ async () => { sign(2, window); }}>Saburo</Button>
              <Button onClick={ async () => { sign(3, window); }}>Siro</Button>
              <Button onClick={ async () => { sign(4, window); }}>Goro</Button>
          </HStack>
      </div>
    )
}
