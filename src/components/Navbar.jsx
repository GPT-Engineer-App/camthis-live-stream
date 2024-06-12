import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Camthis
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/setup" color="white" mx={2}>
            Setup
          </Link>
          <Link as={RouterLink} to="/charge" color="white" mx={2}>
            Charge
          </Link>
          <Link as={RouterLink} to="/audio-quality" color="white" mx={2}>
            Audio Quality
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;