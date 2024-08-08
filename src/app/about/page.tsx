import { Box, Text, VStack, Image, HStack, Divider } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box p={5}>
      <VStack spacing={6} align="start">
        <Text fontSize="5xl" fontWeight="700">
          About Us
        </Text>
        <Image m="auto" src="/main.jpg" alt="About Us" objectFit="contain" />
        <Text fontSize="md">
          Welcome to our movie search website! We are dedicated to providing the
          best service possible for movie enthusiasts.
        </Text>
        <Text fontSize="md">
          Our mission is to deliver a comprehensive and user-friendly platform
          that allows you to search for movies, view details, and find
          recommendations.
        </Text>
        <Text fontSize="md">
          Feel free to explore and discover new movies to watch. Our database is
          constantly updated to ensure you have access to the latest releases
          and timeless classics.
        </Text>
        <Divider />
        <HStack spacing={4} align="start">
          <Box>
            <Text fontSize="lg" fontWeight="600">
              Our Vision
            </Text>
            <Text fontSize="md">
              To be the leading platform for movie discovery, helping users find
              their next favorite film.
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="600">
              Our Values
            </Text>
            <Text fontSize="md">
              Passion for movies, commitment to quality, and dedication to user
              satisfaction.
            </Text>
          </Box>
        </HStack>
        <Divider />
      </VStack>
    </Box>
  );
}
