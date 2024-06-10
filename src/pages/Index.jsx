import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Heading as="h1" size="xl">
        Financial Times
      </Heading>
    </Container>
  </Box>
);

const Article = ({ title, content }) => (
  <Box as="article" p={4} borderBottom="1px" borderColor="gray.200">
    <Heading as="h2" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{content}</Text>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.xl" py={8}>
    <VStack spacing={8}>
      <Article
        title="Article 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
      />
      <Article
        title="Article 2"
        content="Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
      />
      <Article
        title="Article 3"
        content="Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </VStack>
  </Container>
);

const Footer = () => (
  <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  );
};

export default Index;