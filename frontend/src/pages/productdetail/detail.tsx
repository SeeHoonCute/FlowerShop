import React from 'react';
import { useMantineTheme, Container, Paper, Grid, Title, Button, Text, Stack } from '@mantine/core';
import { NumberWithAddSub } from '../../components/number_with_add_sub';
import { Rating } from '@mantine/core';

interface Data {
  variantId: string;
  productId: string;
  imageId: string;
  variantName: string;
  price: number;
  quantity: number;
  discount: Float32Array;
  ratingValue: Float32Array;
}

const data: Data[] = [
  {
    variantId: "V1",
    productId: "P1",
    imageId: "I1",
    variantName: "Bó Hoa BH-001",
    price: 12500,
    quantity: 10,
    discount: new Float32Array([0.28, 0.3, 0.1]),
    ratingValue: new Float32Array([4.5, 4.7, 4.2])
  },
  {
    variantId: "V2",
    productId: "P2",
    imageId: "I2",
    variantName: "Hoa cẩm tú cầu",
    price: 125000,
    quantity: 15,
    discount: new Float32Array([0.28, 0.3, 0.1]),
    ratingValue: new Float32Array([4.8, 4.9, 4.6])
  },

];

function ProductDetail() {
  const theme = useMantineTheme();
  const selectedData = data[0];

  return (
    <Container size="xl" pt="3rem">
      <Paper shadow="ms" radius="0" p="md">
        <Grid>
          <Grid.Col span={6}>
            <Stack>
              <Title style={{ fontFamily: 'Jost', fontSize: '40px', color: 'red', fontStyle: 'italic' }}>
                {selectedData.variantName}
              </Title>
              <Rating defaultValue={4} />
              <Title >
                <Grid>
                  <Grid.Col span={2}>
                  <Text size="lg">Giá:</Text>
                  </Grid.Col>
                  <Grid.Col span={5} c={theme.colors.red[6]}>
                  <Text size="xl"><s>{selectedData.price.toFixed(0)}VND</s></Text>

                  </Grid.Col>
                  <Grid.Col span={5}>
                  <Text size="xl">{selectedData.price}VND</Text>
                  </Grid.Col>
                </Grid>
              </Title>
              <NumberWithAddSub />
              <Button color="pink" maw="200px">
                Add to cart
              </Button>
              <Text>SKU: {selectedData.variantId}</Text>
              <Text>Thể loại: Giỏ hoa, chúc mừng kỉ niệm, chúc mừng sinh nhật, ngày của mẹ, ngày của phụ nữ</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ProductDetail;
