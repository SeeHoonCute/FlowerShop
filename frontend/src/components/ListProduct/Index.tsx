import {Card, Container, SimpleGrid, UnstyledButton, createStyles, rem} from "@mantine/core";
import FeaturesCard, {ProductProps} from "../Product/Index";
import image from "../../assets/images/bo-hoa-hong-1.jpg";
import {useEffect, useState} from "react";
import FlowerImg from "../../assets/img/FlowerImg/hoa.webp";
import Flower1 from "../../assets/imgCollection/Product/7.jpg";
import Flower2 from "../../assets/imgCollection/Product/16.jpg";
import Flower3 from "../../assets/imgCollection/Product/17.jpg";
import Flower4 from "../../assets/imgCollection/Product/25.jpg";
import Flower5 from "../../assets/imgCollection/Product/27.jpg";
import Flower6 from "../../assets/imgCollection/Product/31.jpg";
import Flower7 from "../../assets/imgCollection/Product/37.jpg";
import Flower8 from "../../assets/imgCollection/Product/32.jpg";
import Flower9 from "../../assets/imgCollection/Product/34.jpg";
import Flower10 from "../../assets/imgCollection/Product/40.jpg";
import Flower11 from "../../assets/imgCollection/Product/26.jpg";
import Flower12 from "../../assets/imgCollection/Product/38.jpg";

const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    backgroundColor: 'initial',
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
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },
}));


const FeaturesAsymmetrical = () => {
  const { classes, theme } = useStyles();
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const productsList = products.map((product) => {
    return (
    <UnstyledButton className={classes.item}>
      <FeaturesCard {...product}/>
    </UnstyledButton>
    )
  })
  return (
    <Card className={classes.card}>
    <SimpleGrid cols={6} mt="md">
      {productsList}
    </SimpleGrid>
  </Card>
  );
}
export default FeaturesAsymmetrical

const mockProducts: ProductProps[] = [
  {image: Flower2,
    link: "aaa",
    name: "Bó Hoa BH-001",
    price: {
      present: 12500,
      original: 12500,
    },
    discount: 0,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 4.5,
      rateCount: 2050,
    },
    soldCount: 2000,
  },
  {image: Flower1,
    link: "aaa",
    name: "Bó Hoa BH-005",
    price: {
      present: 79000,
      original: 145000,
    },
    discount: 46,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 4.9,
      rateCount: 1200,
    },
    soldCount: 2000,
  },
  {image: Flower6,
    link: "aaa",
    name: "Bó Hoa BH-0012",
    price: {
      present: 105000,
      original: 140000,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 2003,
    },
    soldCount: 2000,
  },

  {image: Flower3,
    link: "aaa",
    name: "Bó Hoa BH-007",
    price: {
      present: 109000,
      original: 150000,
    },
    discount: 27,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 5,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: Flower4,
    link: "aaa",
    name: "Bó Hoa GH-002",
    price: {
      present: 289000,
      original: 329000,
    },
    discount: 12,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3.5,
      rateCount: 25500,
    },
    soldCount: 2000,
  },
  {image: Flower5,
    link: "aaa",
    name: "Bó Hoa ST-003",
    price: {
      present: 110000,
      original: 200000,
    },
    discount: 45,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 25100,
    },
    soldCount: 2000,
  },
  {image: Flower12,
    link: "aaa",
    name: "Bó Hoa BD-07",
    price: {
      present: 333000,
      original: 341000,
    },
    discount: 50,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3.75,
      rateCount: 2030,
    },
    soldCount: 2000,
  },
  {image: Flower7,
    link: "aaa",
    name: "Bó Hoa BH-009",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 75,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 4.5,
      rateCount: 570,
    },
    soldCount: 2000,
  },
  {image: Flower8,
    link: "aaa",
    name: "Bó Hoa BT-005",
    price: {
      present: 128000,
      original: 154000,
    },
    discount: 17,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 5,
      rateCount: 20,
    },
    soldCount: 2000,
  },

  {image: Flower9,
    link: "aaa",
    name: "Bó Hoa BS-002",
    price: {
      present: 124000,
      original: 158599,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 5,
      rateCount: 12400,
    },
    soldCount: 2000,
  },
  {image: Flower10,
    link: "aaa",
    name: "Bó Hoa AH-003",
    price: {
      present: 178000,
      original: 250000,
    },
    discount: 29,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3.5,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: Flower11,
    link: "aaa",
    name: "Bó Hoa AH-010",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 50,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 4.5,
      rateCount: 34200,
    },
    soldCount: 2000,
  },
];
