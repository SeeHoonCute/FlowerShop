import {Center, SegmentedControl, Box, Group, Text, Title} from '@mantine/core';
import {IconFlame, IconTrendingUp, IconTrendingDown} from '@tabler/icons-react';

const SortingBar = () => {
  return (
    <Group position="left">
      <Text size="lg" weight={700}>Sắp xếp theo</Text>
      <SegmentedControl
        data={[
          {
            value: 'preview',
            label: (
              <Center>
                <IconFlame size="1rem"/>
                <Box ml={10}>Bán chạy</Box>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <Box ml={10}>Mới nhất</Box>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <IconTrendingUp size="1rem"/>
                <Box ml={10}>Giá tăng dần</Box>
              </Center>
            ),
          },
          {
            value: 'export',
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
