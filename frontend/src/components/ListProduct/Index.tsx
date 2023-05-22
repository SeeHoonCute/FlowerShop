import { createStyles, Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import Product from "../Product/Index";
function FeaturesAsymmetrical() {
  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={5} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </SimpleGrid>
    </Container>
  );
}
export default FeaturesAsymmetrical
