import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import CardProduct from "../../components/CardProduct/Index";
import Collection1 from "../../assets/img/Colection/Colectinon1.webp";
import Styles from "./styles.module.scss";
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

function FeaturesCards() {
  const { classes, theme } = useStyles();

  return (
    <Container size="lg" py="xl">
      <Group position="center" >
        <Badge variant="filled" size="lg" className={Styles.titleColection}>
          Bộ sưu tập đáng chú ý
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      Hoa là ngôn ngữ không lời của tình yêu
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      "Có bao giờ bạn nhìn vào một đóa hoa và cảm thấy tình yêu lớn đến vô tận? Đó chính là cách mà hoa nói với chúng ta, rằng dù trong thế giới tối tăm, có thể nở rộ những nụ cười và tình yêu."
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <CardProduct image={Collection1} title={'Hoa hồng'} category={'"Hoa hồng là một ngôn ngữ không cần lời, nó tỏa ra vẻ đẹp và mùi hương để nói lên tình yêu và lòng trung thành."'}></CardProduct>
        <CardProduct image={Collection1} title={'Hoa hồng'} category={'"Hoa hồng là một ngôn ngữ không cần lời, nó tỏa ra vẻ đẹp và mùi hương để nói lên tình yêu và lòng trung thành."'}></CardProduct>
        <CardProduct image={Collection1} title={'Hoa hồng'} category={'"Hoa hồng là một ngôn ngữ không cần lời, nó tỏa ra vẻ đẹp và mùi hương để nói lên tình yêu và lòng trung thành."'}></CardProduct>
      </SimpleGrid>
    </Container>
  );
}
export default FeaturesCards;
