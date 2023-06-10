import {
  Center,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mantine/core";
import Imagepd from "./image";
import Detail from "./detail";
import Commit from "./commit";
import Review from './review';
import Despription from "./Despription";
import App from "./sanphamlq"
export const ProductDetail = () => {



  return (
    <Container size="lg" pt="3rem">
      <Paper shadow="xs" radius="0" p="md">
        <Grid>
          <Grid.Col span={6}>
            <Center>
             <Imagepd/>
            </Center>
          </Grid.Col>
          <Grid.Col span={6}>
          <Center>
            <Stack>
            <Detail/>
            </Stack>
            </Center>
          </Grid.Col>
        </Grid>
        <Commit/>
        <Review/>
        <Despription/>
<App/>
      </Paper>
    </Container>

  );
}

export default ProductDetail;
