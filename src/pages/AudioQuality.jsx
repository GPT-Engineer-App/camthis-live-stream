import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const AudioQuality = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Great Audio Quality
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Experience superior audio quality for your live streams.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/audio-quality.jpg" alt="Great audio quality" />
        </Box>
      </VStack>
    </Container>
  );
};

export default AudioQuality;