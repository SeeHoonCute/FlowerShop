import {
  Button,
  Center,
  Container,
  Grid,
  Image,
  Indicator,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import {NumberWithAddSub} from "../components/number_with_add_sub";
import hoa from "../assets/img/bo-hoa-hong-1.jpg";

export const ProductDetail = () => {
  const theme = useMantineTheme();

  return (
    <Container size="lg" pt="3rem">
      <Paper shadow="xs" radius="md" p="md">
        <Grid>
          <Grid.Col span={6}>
            <Center>
              <Indicator inline label="-20%" size={16}
                         position="top-start"
                         color={theme.colors.red[4]}>
                <Image src={hoa}></Image>
              </Indicator>
            </Center>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack>
              <Title order={1}>Bó hoa hồng</Title><Title order={3}>
              <Grid>
                <Grid.Col span={2}>
                  Giá:
                </Grid.Col>
                <Grid.Col span={5} c={theme.colors.red[4]}>
                  <s>1.000.000VND</s>
                </Grid.Col>
                <Grid.Col span={5}>
                  900.000VND
                </Grid.Col>
              </Grid>
            </Title>
              <NumberWithAddSub/>
              <Button maw="200px">Add to cart</Button>
              <Text>SKU: BS-0328</Text>
              <Text>Categories: Baskets of flowers, Happy Anniversary, Happy Birthday, Mother's Day, Women's Day</Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}> </Grid.Col>
          <Grid.Col span={4}> </Grid.Col>
          <Grid.Col span={4}> </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ProductDetail;
