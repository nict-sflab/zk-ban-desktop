
import { Button, Text, Heading, HStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import { SignInput } from "../prover/backend/io";

const makeUrl = (pseudonym: number, url: string) : SignInput => {
  const res = {
    URL: () => url,
    Pseudonym: () => pseudonym,
  }

  return res;
}


export default function SignPage() {
    const [name, setName] = useState("");
    useEffect(() => {
        const n = window.proverkit.Name();
        setName(n);
    }, []);

    
    const test = makeUrl(1, "https://example.com")
    console.log(test.URL());

    return (
      <div id="App">
          <Heading as="h1">{name}</Heading>
          <Text>Choose the pseudonym:</Text>

          <br />
          <HStack justify='center' gap="6">
              <Button onClick={ () => {window.proverkit.Sign(makeUrl(1, "https://example.com"))} }>Taro</Button>
              <Button onClick={ () => {window.proverkit.Sign(makeUrl(2, "https://example.com"))} }>Jiro</Button>
              <Button onClick={ () => {window.proverkit.Sign(makeUrl(3, "https://example.com"))} }>Saburo</Button>
          </HStack>
      </div>
    )
}
