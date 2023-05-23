import {Center, SegmentedControl, Box, Group, Text} from '@mantine/core';
import {IconFlame, IconTrendingUp, IconTrendingDown} from '@tabler/icons-react';

const SortingBar = () => {
  return (
    <Group position="left" mb="lg">
      <Text size="lg" weight={700}>Sắp xếp theo</Text>
      <SegmentedControl
        data={[
          {
            value: 'top',
            label: (
              <Center>
                <IconFlame size="1rem"/>
                <Box ml={10}>Bán chạy</Box>
              </Center>
            ),
          },
          {
            value: 'new',
            label: (
              <Center>
                <Box ml={10}>Mới nhất</Box>
              </Center>
            ),
          },
          {
            value: 'up',
            label: (
              <Center>
                <IconTrendingUp size="1rem"/>
                <Box ml={10}>Giá tăng dần</Box>
              </Center>
            ),
          },
          {
            value: 'down',
            label: (
              <Center>
                <IconTrendingDown size="1rem"/>
                <Box ml={10}>Giá giảm dần</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

export default SortingBar;
