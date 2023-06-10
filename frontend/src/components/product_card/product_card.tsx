import {IconShoppingCart, IconHeart, IconShare} from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem, Rating,
} from '@mantine/core';
import {ProductCardProps} from "../../pages/products/methods"

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: rem(4),
    left: rem(4),
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));
const vnd = new Intl.NumberFormat('vi');

const ProductCard = (props: ProductCardProps) => {
  const {classes, cx, theme} = useStyles();
  const linkProps = {href: 'products/' + props.link, target: '_blank', rel: 'noopener noreferrer'};

  return (
    <Card withBorder radius="md" className={cx(classes.card)} >
      <Card.Section>
        <a {...linkProps}>
          <Image src={props.image} height={250}/>
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient"
             gradient={{from: theme.colors.pink[2], to: theme.colors.pink[6]}}>
        {props.shopType}
      </Badge>

      <Text className={classes.title} size="xl" fw={500} component="a" {...linkProps}>
        {props.name}
      </Text>

      <Text td="line-through" component="span" size="sm" color="gray" mr="xs">
        {vnd.format(props.price.original??0)}đ
      </Text>
      <Text component="span" size="1.4rem" weight={700} color={theme.fn.primaryColor()}>
        {vnd.format(props.price.present)}
        <Text component="span" size="xs">đ</Text>
      </Text>

      <Text fz="sm" lineClamp={4}>
        <Group spacing={2}>
          <Rating value={props.rating.rate} fractions={2} readOnly size="xs"/>
          <Text mr="xs" color="dimmed"> ({props.rating.rateCount}) </Text>
          <Text color="dimmed">Đã bán {props.soldCount}</Text>
        </Group>
      </Text>

      <Group position="apart" className={classes.footer}>
        <Center>
          <Text fz="sm" inline>
            {props.address}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size="1rem" color={theme.colors.red[6]}/>
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShoppingCart size="1rem" color={theme.colors.yellow[7]}/>
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size="1rem"/>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default ProductCard;
