import {
  Container,
  Paper,
  Text,
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';

function Reviews() {
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
      fw={700}>NHẬN XÉT (0)</Text>
    <Text style={{ marginBottom: '10px' }}
    variant="gradient"
    gradient={{ from: 'black', to: 'cyan', deg: 45 }}
    sx={{ fontFamily: 'Jost' }}
    ta="left"
    size={25}
    fs="italic">
    Nhận xét/ Đánh giá
    </Text>
    <Text style={{ marginBottom: '5px' }}
    variant="gradient"
    gradient={{ from: 'black', to: 'cyan', deg: 5 }}
    sx={{ fontFamily: 'Jost' }}
    ta="left"
    size={16}
    fs="italic"
    c="dimmed">
    Chưa có đánh giá nào.
    </Text>
    <Text style={{ marginBottom: '50px' }}
    variant="gradient"
    gradient={{ from: 'black', to: 'cyan', deg: 5 }}
    sx={{ fontFamily: 'Jost' }}
    ta="left"
    size={16}
    fs="italic"
    c="dimmed">
    Chỉ những khách hàng đã mua sản phẩm này mới có thể đánh giá.
    </Text>
  </Paper>
  </Container>
);
}

export default Reviews
