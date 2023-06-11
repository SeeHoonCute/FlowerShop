import { useState } from 'react';
import styles from "./styles.module.scss";
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  TextInput,
  Code,
  Grid,
  Image,
  Button
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
  IconSearch,
  IconShoppingCart
} from '@tabler/icons-react';
import SeeHoonLogo from "../../assets/img/SeeHoon.jpg";
import iconCart from "../../assets/img/IconCart.png";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
      }`,
    marginBottom: rem(20),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
    margin: rem(10),
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
    marginTop: rem(10),
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

function HeaderTabs({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={styles.header}>
      <Container className={styles.mainSection} fluid p="xs">
        <Grid m={0}>
          <Grid.Col span="content">
            <Group>
              <Image maw={40} mx="auto" radius="md" src={SeeHoonLogo} alt="SeeHoon Logo" />
              <Text component="span" size="xl" className={styles.titleLogo}>SeeHoon Flower</Text>
            </Group>
          </Grid.Col>
          <Grid.Col span="auto" px={"10rem"}>
            <TextInput
              placeholder="Tìm kiếm"
              size="md"
              icon={<IconSearch size="0.8rem" stroke={1.5} />}
              rightSectionWidth={100}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              className={styles.searchButton}
            />
          </Grid.Col>
          <Grid.Col span="content" >
            <Group>
              <Button bg='#8a8686'className={styles.Button}>
                <a href="http://localhost:5173/checkout"><IconShoppingCart/></a>
            
            </Button>
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    // className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group spacing={7}>
                      <Avatar src={user.image} alt={user.name} radius="xl" size={"md"} />
                      <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                        {user.name}
                      </Text>
                      <IconChevronDown size={rem(12)} stroke={1.5}/>
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
                  >
                    Thích
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconStar size="0.9rem" color={theme.colors.yellow[6]} stroke={1.5} />}
                  >
                    Đã lưu
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconMessage size="0.9rem" color={theme.colors.blue[6]} stroke={1.5} />}
                  >
                    Bình luận
                  </Menu.Item>

                  <Menu.Label>Cài đặt</Menu.Label>
                  <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                    Cài đặt tài khoản
                  </Menu.Item>
                  <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                    Thay đổi tài khoản
                  </Menu.Item>
                  <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                    <a href="http://localhost:5173/signup">
                    Đăng xuất
                    </a>
                    </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Cần xem xét kỹ</Menu.Label>
                  <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}>
                    Tạm dừng đăng ký
                  </Menu.Item>
                  <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
                    Xóa tài khoản
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
export default HeaderTabs
