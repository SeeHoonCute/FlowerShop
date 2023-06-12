import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
  Image
} from '@mantine/core';
import { IconPlant} from '@tabler/icons-react';
import HoaHong from "../../assets/img/FlowerCollection/HoaHong.png";
import HoaHaiDuong from "../../assets/img/FlowerCollection/HoaHaiDuong.jpg";
import HoaTulip from "../../assets/img/FlowerCollection/HoaTulip.jpg";
import HoaHuongDuong from "../../assets/img/FlowerCollection/HoaHuongDuong.jpg"
import HoaCamTuCau from "../../assets/img/FlowerCollection/HoaCamTuCau.jpg"
import HoaOaiHuong from "../../assets/img/FlowerCollection/HoaOaiHuong.jpg"
import HoaMauDon from "../../assets/img/FlowerCollection/HoaMauDon.jpg"
import HoaCatTuong from "../../assets/img/FlowerCollection/HoaCatTuong.jpg"
import HoaCucHoaMi from "../../assets/img/FlowerCollection/HoaCucHoaMi.jpg"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type ColectionCard = {
  title: string,
  image: string;
  link: string;
};

const mockdata :ColectionCard[] = [
  // { title: 'Hoa Hồng', icon: IconPlant, color: 'violet' },
  // { title: 'Hoa Hải Đường', icon: IconPlant, color: 'indigo' },
  // { title: 'Hoa Tulip', icon: IconPlant, color: 'blue' },
  // { title: 'Hoa Hướng Dương', icon: IconPlant, color: 'green' },
  // { title: 'Hoa Cẩm Tú Cầu', icon: IconPlant, color: 'teal' },
  // { title: 'Hoa SeeHoon', icon: IconPlant, color: 'cyan' },
  // { title: 'Hoa SeeHoon', icon: IconPlant, color: 'pink' },
  // { title: 'Hoa SeeHoon', icon: IconPlant, color: 'red' },
  // { title: 'Hoa SeeHoon', icon: IconPlant, color: 'orange' },
  { title: 'Hoa Hồng', image: HoaHong, link: "http://localhost:5173/products"},
  { title: 'Hoa Hải Đường', image: HoaHaiDuong, link: "#"},
  { title: 'Hoa Tulip', image: HoaTulip,link: "#"},
  { title: 'Hoa Hướng Dương', image: HoaHuongDuong, link: "#"},
  { title: 'Hoa Cẩm Tú Cầu', image: HoaCamTuCau, link: "#"},
  { title: 'Hoa Oải Hương', image: HoaOaiHuong , link: "#"},
  { title: 'Hoa Mẫu Đơn', image:HoaMauDon, link: "#"},
  { title: 'Hoa Cát Tường', image: HoaCatTuong, link: "#"},
  { title: 'Hoa Cúc Họa Mi', image: HoaCucHoaMi, link: "#"},
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    border: 'none',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(200),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },
}));


function ActionsGrid() {
  const { classes, theme } = useStyles();
  const [collection, setCollection] = useState<ColectionCard[]>([]);
  const navigator = useNavigate();
  // const linkProps = {href: '/' + mockdata.link, rel: 'noopener noreferrer'};
  useEffect(() => {
    setCollection(mockdata);
  }, []);
  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
        <Image src={item.image} height={170} onClick={()=>navigator("/products")}></Image>
        <Text size="xs" mt={7}>
            {item.title}
          </Text>

    </UnstyledButton>
  ));
  return (
    <Card className={classes.card}>
      <SimpleGrid cols={9} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
export  default ActionsGrid;

// import CollectionProduct, {CollectionProductProps} from "../CardProduct/Index";
// import collectionImg from "../../assets/img/Colection/col.png";
// import { Component, useEffect, useState } from "react";
// import { Card, SimpleGrid, rem,createStyles } from "@mantine/core";
// import {IconCreditCard,IconFlower} from "@tabler/icons-react";
// const mockCollections: CollectionProductProps[] =[
//   {
//     name: "Hoa Tulip",
//     icon: <IconFlower/>,
//     color: 'violet',
//   },
//   {
//     name: "Hoa Tulip",
//     icon: <IconFlower/>,
//     color: 'violet',
//   },
//   {
//     name: "Hoa Tulip",
//     icon: <IconFlower/>,
//     color: 'violet',
//   },
//   {
//     name: "Hoa Tulip",
//     icon: <IconFlower/>,
//     color: 'violet',
//   },

// ]
// const useStyles = createStyles((theme) => ({
//  collection:{
//   margin: rem(50)
//  }
// }));
// function CollectionProductList() {
//   const { classes } = useStyles();
//   const [collections, setCollection] = useState<CollectionProductProps[]>([]);
//   useEffect(() => {
//     setCollection(mockCollections);
//   }, []);
//   const CollectionproductsList = collections.map((collection) => {
//     return (
//       <CollectionProduct {...collection}/>
//     )
//   })
//   return (
//       <SimpleGrid cols={7} mt="md" className={classes.collection}>
//       {CollectionproductsList}
//       </SimpleGrid>
//   )
// }
// export default CollectionProductList;
