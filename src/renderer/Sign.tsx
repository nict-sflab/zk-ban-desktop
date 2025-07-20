
import { Button, Text, Heading, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function SignPage() {
    const [name, setName] = useState("");
    useEffect(() => {
        const n = window.proverkit.Name();
        setName(n);
    }, []);

    
    return (
      <div id="App">
          <Heading as="h1">{name}</Heading>
          <Text>Choose the pseudonym:</Text>

          <br />
          <HStack justify='center' gap="6">
              <Button onClick={() => {window.proverkit.Sign(1)} }>Taro</Button>
              <Button onClick={() => {window.proverkit.Sign(2)}}>Jiro</Button>
              <Button onClick={() => {window.proverkit.Sign(3)}}>Saburo</Button>
          </HStack>
      </div>
    )
}
