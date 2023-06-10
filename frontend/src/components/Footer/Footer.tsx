import { createStyles, Text, Container, ActionIcon, Group, rem, Image, SimpleGrid, Grid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Logo from "../../assets/img/Colection/logo1.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(300),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  logoImg:{
    width: rem(5)
  },
  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));
const data : FooterLinksProps[] = [
  {
    title: 'LIÊN HỆ VỚI SEEHOON',
    links:[
      {
        label: 'Hotline & Chat trực tuyến (24/7)',
          link: '#',
      },
      {
        label: 'Hướng dẫn đặt hàng',
          link: '#',
      },
      {
        label: 'Giao hàng & Nhận hàng',
          link: '#',
      },
      {
        label: 'Hướng dẫn đổi trả hàng',
        link: '#',
      }
    ]
  },
  {
    title: 'VỀ SEEHOON',
    links:[
      {
        label:'Tất cả danh mục',
        link: '#'
      },
      {
        label:'Về SeeHoon Flower Việt Nam',
        link: '#'
      },
      {
        label:'Bán hàng cùng SeeHoon Flower',
        link: '#'
      },
      {
        label:'Chương trình SeeHoon Flower Afﬁliate',
        link: '#'
      },
      {
        label:'Tuyển dụng',
        link: '#'
      },
      {
        label:'Điều khoản sử dụng',
        link: '#'
      },
      {
        label:'Chính sách bảo mật',
        link: '#'
      },
      {
        label:'Báo chí',
        link: '#'
      },
      {
        label:'Bảo vệ quyền sở hữu trí tuệ',
        link: '#'
      },
      {
        label:'Quy chế hoạt động sàn SeeHoon Flower',
        link: '#'
      },
      {
        label:'Quy trình giải quyết tranh chấp, khiếu nại',
        link: '#'
      },
    ]
  },
  // {
  //   title:'SEEHOON FLOWER - NỀN TẢNG MUA SẮM TRỰC TUYẾN HÀNG ĐẦU VIỆT NAM',
  //   links:[{
  //     label: 'Thành lập từ năm 2012, SeeHoon Flower là nền tảng thương mại điện tử hàng đầu Đông Nam Á, tiên phong thúc đẩy sự phát triển tại khu vực thông qua Thương mại & Công nghệ. Hiện nay, với nền tảng logistics và hệ thống thanh toán lớn nhất khu vực, SeeHoon Flower trở thành một phần trong đời sống của người tiêu dùng và hướng đến mục tiêu phục vụ cho 300 triệu khách hàng trên toàn khu vực Đông Nam Á vào năm 2030.',
  //     link: '#'
  //   }]
  // }
]

interface FooterLinksProps {
    title: string;
    links: { label: string; link: string }[];
}

function Footer() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} my = "md">
        <Grid>
          <Grid.Col xs = {3} className={classes.logo}>
            <Image src = {Logo} className={classes.logoImg}></Image>
            <Text size="xs" color="dimmed" className={classes.description}>
            “Tất cả chúng ta không thể làm được những điều vĩ đại, nhưng chúng ta có thể làm những điều nhỏ bé với tình yêu lớn lao.” – Mother Teresa
            </Text>
          </Grid.Col>

          <Grid.Col
            xs = {9}
            className={classes.groups}
          >{groups}</Grid.Col>
        </Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          SeeHoon Flower
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
export default Footer
