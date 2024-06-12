import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Setup = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Quick to Set Up
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Get started in minutes with our easy setup process.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/setup.jpg" alt="Quick setup" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Setup;