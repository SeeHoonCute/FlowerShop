import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselWithClickableImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const images: string[] = [
    'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
    'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
    'https://hoatuoithanhthao.com/media/ftp/h%C3%ACnh-%E1%BA%A3nh-b%C3%B3-hoa-h%E1%BB%93ng(1).jpg',
  ];

  const discounts: string= '20%'

  return (

    <div style={{width:"400px"}}>
      <Carousel
        selectedItem={activeIndex}
        onChange={handleImageClick}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
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
                {discounts}
              </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselWithClickableImages;
