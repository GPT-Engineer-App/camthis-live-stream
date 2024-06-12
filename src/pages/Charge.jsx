import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Charge = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Easy to Charge
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Seamlessly charge your audience when you want.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/charge.jpg" alt="Easy to charge" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Charge;