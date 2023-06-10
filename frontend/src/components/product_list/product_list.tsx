import {SimpleGrid} from "@mantine/core";
import ProductCard, {ProductCardProps} from "../product_card/product_card";
import {useEffect, useState} from "react";
import FlowerImg from "../../assets/img/FlowerImg/hoa.webp";
const mockProducts: ProductCardProps[] = [
  {
    image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {
    image: FlowerImg,
    link: "#",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {
    image: FlowerImg,
    link: "#",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {
    image: FlowerImg,
    link: "#",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {
    image: FlowerImg,
    link: "#",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
  {
    image: FlowerImg,
    link: "aaa",
    name: "Đoá hoa hồng siêu to",
    price: {
      present: 100000,
      original: 200000,
    },
    shopType: "Chính hãng",
    address: "Hà Nội",
    rating: {
      rate: 3,
      rateCount: 200,
    },
    soldCount: 2000,
  },
];

const ProductsList = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const productsList = products.map((product) => {
    return (
      <ProductCard {...product}/>
    )
  })

  return (
    <SimpleGrid
      mb="lg"
      cols={4}
      spacing="lg"
      breakpoints={[
        {maxWidth: 'lg', cols: 3, spacing: 'md'},
        {maxWidth: 'md', cols: 2, spacing: 'sm'},
      ]}
    >
      {productsList}
    </SimpleGrid>
  )
}

export default ProductsList;
