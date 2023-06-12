import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getImageDataByImageId, getVariantDataByProductId } from './productdetail';
import { Image } from '@mantine/core';

import Flower2 from "../../assets/imgCollection/Product/16.jpg";
  // const images: string[] = [
  //   'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
  //   'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
  //   'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
  // ];

  // const discounts: string= '20%'

  interface Image{
    imageId: string,
    imageUrl:string,
  }

  interface Variant{
    variantId: string,
    productId: string,
    imageId: string,
    variantName: string,
    price: string,
    quantity: string,
    discount: string,
  }

  interface VariantImage{
    variantId: string,
    productId: string,
    price: string,
    quantity: string,
    discount: string,
    urlImage: string[]
  }

  function CarouselWithClickableImages() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState<Image[]>([]);
    const [variants, setVariants] = useState<Variant[]>([]);
    const [discounts, setDiscounts] = useState<string[]>([]);

    const handleImageClick = (index: number) => {
      setActiveIndex(index);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const imagesResponse = await axios.get('API_URL_FOR_IMAGES');
          const variantsData = await getVariantDataByProductId('2');
          setVariants(variantsData);

          const imageUrls = variantsData.map((variant:Variant)=>{
            console.log("variant.imageId: ", variant.imageId);
            const imageData = getImageDataByImageId(variant.imageId);
            console.log("imageData: ", imageData);
            return imageData;
          })
          const ImageDataList = await Promise.all(imageUrls);
          console.log("ImageDataList respone:",ImageDataList)

          setImages(ImageDataList)

          // const discountsData: string[] = variantsData.map(variant => variant.discount);
          // setDiscounts(discountsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    return (
      <div style={{ width: '400px' }}>
        <Image src={Flower2}></Image>
        <Carousel selectedItem={activeIndex} onChange={handleImageClick}>
          {/* {images.map((image, index) => (
            <div key={index}>
              <img src={image.imageUrl} alt={`Image ${index + 1}`} />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(255, 0, 0, 0.8)',
                  color: '#fff',
                  padding: '5px',
                  borderRadius: '6px',
                  fontSize: '35px',
                  fontWeight: 'bold',
                }}
              >
                {discounts[index]}
              </div>
            </div>
          ))} */}
        </Carousel>
      </div>
    );
  }

  export default CarouselWithClickableImages;
