import {useState} from 'react';
import {createStyles, Box, Text, Group, rem} from '@mantine/core';
import {AuthFirebase} from "../../api/firebase/firebase";
import {useNavigate} from "react-router-dom";

const LINK_HEIGHT = 38;
const INDICATOR_SIZE = 10;
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
  },

  links: {
    position: 'relative',
  },

  indicator: {
    transition: 'transform 150ms ease',
    border: `${rem(2)} solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: 'absolute',
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`,
  },
}));

interface TableOfContentsFloatingProps {
  links: { label: string; link: string; order: number }[];
  active: number;
  setActive: (index: number) => void;
}

export function UserSideBar({links, active, setActive}: TableOfContentsFloatingProps) {
  const {classes, cx} = useStyles();
  const authFirebase = new AuthFirebase();
  const navigate = useNavigate();

  const items = links.map((item, index) => (
    <Box<'a'>
      component="a"
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      key={item.label}
      className={cx(classes.link, {[classes.linkActive]: active === index})}
      sx={(theme) => ({paddingLeft: `calc(${item.order} * ${theme.spacing.lg})`})}
    >
      <Text>
        {item.label}
      </Text>
    </Box>
  ));

  return (
    <div>
      <Group mb="md">
        <Text>Quản lý tài khoản</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{transform: `translateY(${rem(active * LINK_HEIGHT + INDICATOR_OFFSET)})`}}
        />
        {items}
        <Box<'a'>
          component="a"
          onClick={(event) => {
            authFirebase.signOut()
              .then(() => {
                navigate('/')
              });
          }}
          className={classes.link}
          c={'red'}
          fw={700}
          sx={(theme) => ({paddingLeft: `calc(1 * ${theme.spacing.lg})`})}
        >
          <Text>
            Đăng xuất
          </Text>
        </Box>
      </div>
    </div>
  );
}
