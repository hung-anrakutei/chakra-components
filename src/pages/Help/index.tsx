import { Button, Heading, HStack, Text } from '@chakra-ui/react'
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import BoxLayout from '../BoxLayout'


const Help = () => {
  return (
    <BoxLayout>

        
    <Heading as="h3" fontSize="2xl" fontWeight="bold" pb={7}>
    Frequently asked questions
    </Heading>
    <Text color='gray.500' pb={2}>If you can not find answer to your question in our FAQ, you can always contact facebook or telegram us. We will answer you shortly!</Text>
      <HStack>
      <Button bg="#316FF6">
        <FaFacebook /> Facebook
      </Button>
      <Button bg="#229ED9">
        <FaTelegram /> Telegram
      </Button>
    </HStack>

    </BoxLayout>
  )
}

export default Help