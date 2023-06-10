import {SimpleGrid} from "@mantine/core";
import ProductCard from "../product_card/product_card";
import {getProductData, getRatingData, Product, Rating,ProductCardProps} from "../../pages/products/methods"
import image from "../../assets/images/bo-hoa-hong-1.jpg";
import {useEffect, useState} from "react";
import axios from 'axios';


const ProductsList = ({ page, size, setTotalPage }: { page: number ; size: number; setTotalPage:(number: number)=>void }) => {
  const [cardProps, setCardProps] = useState<ProductCardProps[]>([]);
  // const [products, setProducts] = useState<ProductCardProps[]>([]);

  async function fetchData() {
    try {
      const productData = await getProductData(page, size); // Lấy 20 sản phẩm từ trang thứ 2

      if (productData) {
        // console.log(productData);
        setTotalPage(productData.total_pages)
        // Sử dụng Promise.all để chờ tất cả các yêu cầu ratingData hoàn thành
        const ratingPromises = productData.products.map((product: Product) =>
          getRatingData(product.productId)
        );
        const ratingDataList = await Promise.all(ratingPromises);

        const cardPropsData: ProductCardProps[] = productData.products.map(
          (product: Product, index: number) => {
            const ratingData = ratingDataList[index];

            var countRating = ratingData.length;
            const ratingValues = ratingData.map(
              (rating: Rating) => Number(rating.ratingValue)
            );
            const sum = ratingValues.reduce(
              (accumulator: number, ratingValue: number) =>
                accumulator + ratingValue,
              0
            );
            const average = sum / ratingData.length;

            // Các dòng lệnh xử lý dữ liệu khác của sản phẩm
            const cardPropsData: ProductCardProps = {
              // id: product.productId,
              // image: product.mainImage,
              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/640px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg",
              link: product.mainImage, // Cập nhật link dựa trên nguồn dữ liệu
              name: product.productName,
              price: {
                present: product.Price * 0.9, // Kiểm tra chính xác tên thuộc tính của giá
                original: product.Price, // Kiểm tra chính xác tên thuộc tính của giá
              },
              shopType: '', // Cập nhật loại cửa hàng dựa trên nguồn dữ liệu
              address: '', // Cập nhật địa chỉ dựa trên nguồn dữ liệu
              rating: {
                rate: average,
                rateCount: countRating,
              },
              soldCount: 5,
            };
            return cardPropsData;
          }
        );

        setCardProps(cardPropsData);
      }
    } catch (error) {
      console.error('Error retrieving product data:', error);
    }
  }

  useEffect(() => {
    fetchData();

  }, [page]);

  const cardPropsList = cardProps.map((product) => {
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
      {cardPropsList}
    </SimpleGrid>
  )
}

export default ProductsList;
