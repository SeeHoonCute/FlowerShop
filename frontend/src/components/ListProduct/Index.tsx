import {Card, Container, SimpleGrid, UnstyledButton, createStyles, rem} from "@mantine/core";
import FeaturesCard, {ProductProps} from "../Product/Index";
import image from "../../assets/images/bo-hoa-hong-1.jpg";
import {useEffect, useState} from "react";
import FlowerImg from "../../assets/img/FlowerImg/hoa.webp";
// import { ProductProps } from "../Product/Index";

const mockProducts: ProductProps[] = [
  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 50,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 75,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },

  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    discount: 25,
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
];
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
