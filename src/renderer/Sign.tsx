
import './App.css';

import { Button, Text, Heading, HStack } from "@chakra-ui/react"

function Sign(a: any) {}

export default function SignPage() {
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
