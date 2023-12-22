import { Carousel } from "@mantine/carousel";
import { Center, Image, Space, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import Slider1 from "../../../../assets/imagesForm/image1.png";
import Slider2 from "../../../../assets/imagesForm/image2.png";
import Slider3 from "../../../../assets/imagesForm/image3.png";
import Slider4 from "../../../../assets/imagesForm/image4.png";

const assets = [
  {
    src: Slider1,
    title: "Chào mừng trở lại!",
    text: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    sunText: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    id: 1,
  },
  {
    src: Slider2,
    title: "Chào mừng trở lại!",
    text: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    sunText: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    id: 2,
  },
  {
    src: Slider3,
    title: "Chào mừng trở lại!",
    text: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    sunText: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    id: 3,
  },
  {
    src: Slider4,
    title: "Chào mừng trở lại!",
    text: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    sunText: "Ánh sáng đi trước âm thanh, vì thế, con người ta trông có vẻ thông minh cho đến khi ta nghe họ phát biểu.",
    id: 4,
  },
];

function SliderLogin() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
      sx={{ maxWidth: 600 }}
      mx="auto"
      loop
      withIndicators
      height={700}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {
          width: 5,
          backgroundColor: "black",
          height: 4,
          transition: "width 250ms ease",

          "&[data-active]": {
            width: 20,
          },
        },
      }}
    >{assets.map((item) => {
      return (
        <Carousel.Slide key={item.id}>
          <Image src={item.src} />
          <Center>
            <div>
              <Text size="lg" weight={"bold"}>
                {item.title}
              </Text>
              <Space h="xs" />
              <Text size="sm" c="dimmed" weight={"normal"}>
                {item.text}
              </Text>
              <Text size="xs" c="dimmed" weight={"normal"}>
                {item.sunText}
              </Text>
            </div>
          </Center>
        </Carousel.Slide>
      );
    })}
    </Carousel>
  );
}

export default SliderLogin;
