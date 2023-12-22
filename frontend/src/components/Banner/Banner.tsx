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
// createStyles là một hàm từ thư viện Mantine, giúp tạo ra các đối tượng chứa các quy tắc CSS cho các lớp CSS Modules.
// useStyles sử dụng createStyles để tạo ra các đối tượng chứa các quy tắc CSS.
const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//     Một quy tắc CSS cho lớp có tên là price.
// Màu sắc của lớp này phụ thuộc vào chủ đề (theme) của ứng dụng. Nếu chủ đề là 'dark', màu sắc sẽ là trắng; nếu không, màu sắc sẽ là đen.
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
    // Khi người dùng di chuột qua nó (:hover), quy tắc CSS bên trong carouselControls sẽ được áp dụng, tăng độ mờ (opacity) lên 1.
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
    // Áp dụng hiệu ứng chuyển động (transition) cho thuộc tính opacity trong 150ms, bắt đầu từ giá trị 0.
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',
//     Thiết lập chiều rộng và chiều cao của chỉ mục (indicator).
// Có một hiệu ứng chuyển động cho chiều rộng khi chỉ mục đang hoạt động (được đặt bởi thuộc tính data-active).

    '&[data-active]': {
      width: rem(16),
    },
  },
}));
// Mảng chứa đường dẫn của các hình ảnh được sử dụng trong carousel.
const images = [
  banner1,
  BannerImg,

  banner2,
  banner3,
  ];

function Banner() {
  const theme = useMantineTheme();
    const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image} className={Styles.Slider}>
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
