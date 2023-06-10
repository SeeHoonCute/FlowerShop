import {
  Box,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Text,
} from "@mantine/core";

function Despription() {
return (
  <Container size="lg" pt="3rem">
<Paper shadow="xs" radius="0" p="md">
  <Grid>
    <Grid.Col span={4}>
    <Center>
    <Box display="flex">
    <Image src="https://i.imgur.com/l8QrojH.png" alt="Image" width={100} height={100} />
    <Box>
      <Text weight={700} size="lg">
      Bộ sưu tập hoa
      </Text>
      <Text>
      Đa dạng loại hoa
      </Text>
    </Box>
  </Box>
    </Center>
      </Grid.Col>
    <Grid.Col span={4}>
      <Center>
      <Box display="flex" >
    <Image src="https://i.imgur.com/68pIZji.png" alt="Image" width={100} height={100} />
    <Box>
      <Text weight={700} size="lg">
      Miễn phí vận chuyển
      </Text>
      <Text>
      Miễn phí vận chuyển 8km cho đơn hàng từ 2.000.000đ
      </Text>
    </Box>
  </Box>
      </Center>
      </Grid.Col>
    <Grid.Col span={4}>
      <Center>
      <Box display="flex">
    <Image src="https://i.imgur.com/cg8fvrr.png" alt="Image" width={70} height={70} />
    <Box>
      <Text weight={700} size="lg">
      100% Đảm bảo chất lượng
      </Text>
      <Text>
      Chúng tôi gửi hình ảnh trước khi giao
      </Text>
    </Box>
  </Box>
      </Center>
      </Grid.Col>
  </Grid>
    </Paper>
  </Container>
);
}

export default Despription
