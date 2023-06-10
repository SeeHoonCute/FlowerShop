import {
  Container,
  Paper,
  Text,

} from "@mantine/core";
import App from "./sanphamlienqan";
function Despription() {
return (
  <Container size="lg" pt="3rem">
  <Paper shadow="xs" radius="0" p="md">
      <Text style={{ marginBottom: '20px' }}
      variant="gradient"
      gradient={{ from: 'red', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Jost' }}
      ta="left"
      size={40}
      fs="italic"
      fw={700}>CÁC SẢN PHẨM LIÊN QUAN</Text>
<App/>

  </Paper>

  </Container>
);
}

export default Despription
