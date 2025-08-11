
import { Button, Text, Heading, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";

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
              <Button onClick={ () => {window.proverkit.sign(1)} }>Taro</Button>
              <Button onClick={ () => {window.proverkit.sign(2)} }>Jiro</Button>
              <Button onClick={ () => {window.proverkit.sign(3)} }>Saburo</Button>
          </HStack>
      </div>
    )
}
