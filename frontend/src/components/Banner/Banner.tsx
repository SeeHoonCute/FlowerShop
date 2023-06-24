import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import BannerImg from "../../assets/img/baner.png";
import Styles from "./styles.module.scss";
import Colection1 from "../../assets/img/Colection/Colectinon1.webp";

import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import banner1 from "../../assets/img/Banner/Flower.png";
import banner2 from "../../assets/img/Banner/Flower1.png";
import banner3 from "../../assets/img/Banner/Flower2.png";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));

const images = [
  banner1,
  BannerImg,

  banner2,
  banner3,
  ];

function Banner() {
  const theme = useMantineTheme();
  // const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
    const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image} className={Styles.Slider}>
      {/* <Image className={Styles.Img} src={image} height={500} /> */}
      <img src={image} className={Styles.Img} height={500}></img>
    </Carousel.Slide>
  ));

  return (
        <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
    </Card.Section>
  );
}
export default Banner;
