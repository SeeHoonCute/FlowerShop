import {useEffect, useState} from 'react';
import styles from "./styles.module.scss";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  rem,
  TextInput,
  Grid,
  Image,
  Button, useMantineTheme
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconChevronDown,
  IconSearch,
  IconShoppingCart
} from '@tabler/icons-react';
import SeeHoonLogo from "../../assets/img/SeeHoon.jpg";
import {AuthFirebase} from "../../api/firebase/firebase";
import {IconUser} from "@tabler/icons-react";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

function HeaderTabs({user, tabs}: HeaderTabsProps) {
  const theme = useMantineTheme();
  const [opened, {toggle}] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const firebaseAuth = new AuthFirebase();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  })

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
            <Group onClick={() => navigate("/")} style={{cursor: "pointer"}}>
              <Image maw={40} mx="auto" radius="md" src={SeeHoonLogo} alt="SeeHoon Logo"/>
              <Text component="span" size="xl" className={styles.titleLogo} weight={700}>Flowery</Text>
            </Group>
          </Grid.Col>
          <Grid.Col span="auto" px={"md"}>
            <TextInput
              placeholder="Tìm kiếm"
              size="md"
              icon={<IconSearch size="0.8rem" stroke={1.5}/>}
              rightSectionWidth={100}
              styles={{rightSection: {pointerEvents: 'none'}}}
              className={styles.searchButton}
              maw={900}
              mx="auto"
            />
          </Grid.Col>
          <Grid.Col span="content">
            <Group>
              <Button bg='#8a8686' className={styles.Button}>
                <IconShoppingCart/>
              </Button>
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{transition: 'pop-top-right'}}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    // className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group spacing={7}>
                      <Avatar src={user.image} alt={user.name} radius="xl" size={"md"}/>
                      <Text weight={500} size="sm" sx={{lineHeight: 1}} mr={3}>
                        {auth.currentUser?.displayName}
                      </Text>
                      <IconChevronDown size={rem(12)} stroke={1.5}/>
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                {loggedIn ?
                  <Menu.Dropdown>
                    <Menu.Item
                      icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5}/>}
                    >
                      Sản phẩm yêu thích
                    </Menu.Item>

                    <Menu.Item icon={<IconUser size="0.9rem" stroke={1.5}/>} onClick={() => {
                      navigate("/user")
                    }}>
                      Thông tin cá nhân
                    </Menu.Item>

                    <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5}/>} onClick={() => {
                      firebaseAuth.signOut()
                    }}>Đăng xuất</Menu.Item>
                  </Menu.Dropdown>
                  :
                  <Menu.Dropdown>
                    <Menu.Item onClick={() => navigate("/login")}>
                      Đăng nhập
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/signup")}>
                      Đăng ký
                    </Menu.Item>
                  </Menu.Dropdown>
                }
              </Menu>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default HeaderTabs
