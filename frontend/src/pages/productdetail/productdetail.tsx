import {
  Center,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mantine/core";
import Imagepd from "./image";
import Detail from "./detail";
import Commit from "./commit";
import Review from './review';
import Despription from "./Despription";
import App from "./sanphamlq"
import axios from 'axios';


  interface productDetail{
    productId: string,
    ratingValue: string,
    quantity: number,
      variant:{
      variantId: string,
      variantName: String,
      Image:string,
      price: number
      discount: number
    }
    category:{
      categoryName: string
    }
    }

  interface Product {
      productId: string;
      shopId: string;
      mainImage: string;
      productName: string;
      productDescription: string;
      quantity: number;
      status: string;
      Price: number;
    }
    
  interface Rating {
      ratingId: string;
      userId: string;
      productId: string;
      review: string;
      ratingValue: number;
      createdAt: string;
    }

  interface variant{
    variantId: string,
    productId: string,
    imageUrl: string,
    variantName: string,
    price: string,
    quantity: string,
    discount: string
  }

  interface Category{
    categoryId: string,
    categoryName: string,
  }

  interface Image{
    imageId: string,
    imageUrl:string,
  }

  async function getProductDetailData(productId:string) {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving rating data:', error);
      return null;
    }
  }
  export async function getVariantDataByProductId(productId:string){
    try {
      const response = await axios.get(`http://127.0.0.1:8000/variants/product/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving rating data:', error);
      return null;
    }
  }

  export async function getImageDataByImageId(imageId:string){
    try {
      const response = await axios.get(`http://127.0.0.1:8000/images/${imageId}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving rating data:', error);
      return null;
    }
  }

  // async function getCategoryDataByProductId(productId:string){
  //   try {
  //     const response = await axios.get(`http://127.0.0.1:8000/products/product/${productId}`);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error retrieving rating data:', error);
  //     return null;
  //   }
  // }

  async function getProductRating(productId: string): Promise<number | null> {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/ratings/product/${productId}`);
      const ratingData: Rating[] = response.data;
      if (ratingData.length > 0) {
        // Tính trung bình các rating value
        const totalRating = ratingData.reduce((sum, rating) => sum + rating.ratingValue, 0);
        return totalRating / ratingData.length;
      }
      return null; // Không có rating nào
    } catch (error) {
      console.error('Error retrieving rating data:', error);
      return null;
    }
  }
  
  // async function getVariantImage(variantId: string): Promise<string | null> {
  //   try {
  //     const response = await axios.get(`http://127.0.0.1:8000/images/variant/${variantId}`);
  //     const imageData: Image[] = response.data;
  //     if (imageData.length > 0) {
  //       return imageData[0].imageUrl; // Lấy ảnh đầu tiên
  //     }
  //     return null; // Không có ảnh nào
  //   } catch (error) {
  //     console.error('Error retrieving variant image:', error);
  //     return null;
  //   }
  // }
  
  // async function getProductDetail(productId: string): Promise<productDetail | null> {
  //   try {
  //     const product: Product = await getProductDetailData(productId);
  //     if (!product) {
  //       return null;
  //     }
  
  //     const ratingValue: number | null = await getProductRating(productId);
  //     const variantData: variant[] | null = await getVariantDataByProductId(productId);
  //     if (!variantData || variantData.length === 0) {
  //       return null;
  //     }
  //     const variant: variant = variantData[0]; // Lấy variant đầu tiên
  //     const image: string | null = await getVariantImage(variant.variantId);
  //     const category: Category | null = await getCategoryData(productId);
  
  //     return {
  //       productId: product.productId,
  //       ratingValue: ratingValue || 0, // Nếu không có rating, giá trị mặc định là 0
  //       quantity: product.quantity,
  //       variant: {
  //         variantId: variant.variantId,
  //         variantName: variant.variantName,
  //         Image: image || '', // Nếu không có ảnh, giá trị mặc định là chuỗi rỗng
  //         price: parseFloat(variant.price),
  //         discount: parseFloat(variant.discount)
  //       },
  //       category: {
  //         categoryName: category?.categoryName || '' // Nếu không có category, giá trị mặc định là chuỗi rỗng
  //       }
  //     };
  //   } catch (error) {
  //     console.error('Error retrieving product detail:', error);
  //     return null;
  //   }
  // }



  export const ProductDetail = () => {

    async function fetchData() {
    try {
      const product = await getProductDetailData('1');
      if (!product) {
        console.log("nguyetri fail ròi: ")
        return null;
      }
    console.log("nguyetri: ", product)
    } catch (error) {
        console.error('Error retrieving product detail:', error);
      }
    };

  return (
    <Container size="lg" pt="3rem">
      <Paper shadow="xs" radius="0" p="md">
        <Grid>
          <Grid.Col span={6}>
            <Center>
             <Imagepd/>
            </Center>
          </Grid.Col>
          <Grid.Col span={6}>
          <Center>
            <Stack>
            <Detail/>
            </Stack>
            </Center>
          </Grid.Col>
        </Grid>
        <Commit/>
        <Review/>
        <Despription/>
<App/>
      </Paper>
    </Container>

  );
}

export default ProductDetail;
