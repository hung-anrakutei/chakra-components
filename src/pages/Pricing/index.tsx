import { List, Stack, Box, Text, Heading, Button, Grid } from "@chakra-ui/react";
import { LuCheckCircle } from "react-icons/lu";

const Pricing = () => {
  return (
    <Box as="section" mx="6">
      <Grid templateColumns="repeat(3, 1fr)" gap="6" alignItems='stretch'>
      {Array.from({ length: 3 }).map(() => (
      <Box
        maxW={360}
        margin="auto"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Stack gap={0}>
          <Box bg="#F0EAFB" py={8} textAlign="center">
            <Text fontWeight="extrabold" fontSize="xl" pb={2}>
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={"6xl"} mt="4" pb={2}>
              $329
            </Heading>
            <Text color="gray.900" fontSize="md" fontWeight="medium" pb={5}>
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg">
              Get Started
            </Button>
          </Box>
          {/* Right Side */}
          <Box p={8} bg="bg">
            <List.Root gap={4} variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                International calling and messaging API
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Additional phone numbers
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                Automated messages via Zapier
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <LuCheckCircle />
                </List.Indicator>
                24/7 support and consulting
              </List.Item>
            </List.Root>
          </Box>
        </Stack>
      </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
