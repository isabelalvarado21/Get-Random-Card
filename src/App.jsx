import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react"
import { Title } from "./components/Title"
import { Container } from "./components/Container"
import { Button } from '@chakra-ui/react'

function App() {

  const [result, setResult] = useState(1)

  const handleRollDice = () => {
    let number = parseInt(Math.random() * (7 - 1) + 1);
    setResult(number);
  };

  return (
    <ChakraProvider>
    <div className="container">
      <Title />
      <Button onClick={handleRollDice} variant='solid' bg='#030015' w='10%' color='white' _hover={{ background: "#52002c"}}>
        Roll!
      </Button>

      <div>
        <Container card={result} />
      </div>
    
    </div>
    </ChakraProvider>
  )
}

export default App
