import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem, Rating, ActionIcon } from '@mantine/core';
import { IconGasStation, IconGauge, IconHeart, IconManualGearbox, IconShoppingCart, IconUsers } from '@tabler/icons-react';
import FlowerImg from "../../assets/img/FlowerImg/hoa.webp";
import Styles from "./styles.module.scss";
export type ProductProps = {
  image: string;
  link: string;
  name: string;
  price: {
    present: number;
    original?: number;
  };
  shopType: string;
  address: string;
  discount: number;
  rating: {
    rate: number;
    rateCount: number;
  };
  soldCount: number;
};
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
  rating: {
    position: 'absolute',
    // top: rem(1),
    // left: rem(1),
    pointerEvents: 'none',
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 200,
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
  },
  title: {
    display: 'block',
    fontSize: rem(2),
  },


  label: {
    // marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));
const vnd = new Intl.NumberFormat('vi');
const FeaturesCard = (props: ProductProps) => {
  const {classes, cx, theme} = useStyles();
  const linkProps = {href: 'products/' + props.link, rel: 'noopener noreferrer'};

  return (
    <Card withBorder radius="md" className={Styles.card}>
      <Card.Section className={classes.imageSection}>
        <a {...linkProps}>
        <Image className={Styles.image} src={props.image}/>
        </a>
      </Card.Section>
      <Group position="apart" mt="md" className={Styles.fontSize}>
        <div>
          <Text className={Styles.name} fw={500} {...linkProps}>{props.name}</Text>
        </div>

      </Group>
      <Card.Section className={classes.section}>
        {/* <Group className={Styles.edition}> */}
          <div className={Styles.edition}>
          <Text fz="xl" fw={700} sx={{ lineHeight: 1 }} className={Styles.description}>
              {vnd.format(props.price.present)}đ
            </Text>
          <Group position="apart" mt="md" className={Styles.fontSize}>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3} className={Styles.Cost}>
            {vnd.format(props.price.original??0)}đ
            </Text>
            <Badge variant="outline" className={Styles.ColorFont} {...linkProps}>-{props.discount}%</Badge>
          </Group>
            {/* <Text fz="sm" lineClamp={4}> */}
              <Group position="apart" mt="md" className={Styles.fontSize}>
                <div>
                <Rating value={props.rating.rate} fractions={2} readOnly size="xs"/>
                </div>
                <Text mr="xs" color="dimmed"> ({props.rating.rateCount}) </Text>
              </Group>

            {/* </Text> */}
          </div>
        {/* </Group> */}
      </Card.Section>
    </Card>

  );
};

export default FeaturesCard;

