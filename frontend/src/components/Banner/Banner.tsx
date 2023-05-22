import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import BannerImg from "../../assets/img/baner.png";
import Styles from "./styles.module.scss";

import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';

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
  BannerImg,
  BannerImg,
  BannerImg,
  ];
function Banner() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image} className={Styles.Slider}>
      <Image className={Styles.Img} src={image} height={500} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" className={Styles.Slider}>
      <Card.Section className={Styles.Slider}>
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
    </Card>
  );
}
export default Banner;
