import { Box, Container, Flex, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Article = ({ title, summary }) => (
  <Box as="article" p={4} borderBottom="1px" borderColor="gray.200">
    <Heading as="h2" size="md" mb={2}>{title}</Heading>
    <Text>{summary}</Text>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.xl" py={8}>
    <VStack spacing={8}>
      <Article title="Article 1" summary="Summary of article 1..." />
      <Article title="Article 2" summary="Summary of article 2..." />
      <Article title="Article 3" summary="Summary of article 3..." />
    </VStack>
  </Container>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Text>&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Index;