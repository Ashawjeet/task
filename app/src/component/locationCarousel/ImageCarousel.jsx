import React, { useState, useEffect } from "react";
import './mycss.css';

import pic1 from './img/img(1).webp';

const ImageCarousel = (data) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data.locationData) {
      const imagess = data.locationData.locationImg.map((x) => ({
        src: x,
        alt: "",
        title: data.locationData.locationTitle,
        description: "",
        thumbnailSrc: x,
      }));
      setImages(imagess);
    }
  }, [data.locationData]);

console.log('data.locationdata:' , data.locationData.locationImg , 'images:' , images)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPlaying, images]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="image-carousel">
      <div className="thumbnails">
  {images.map((image, index) => (
    <img
      key={index}
      src={`http://localhost:4000/locationImg/${image.thumbnailSrc}`} 
      alt={'not avilable'}
      className={index === currentIndex ? "active" : "inactive"}
      onClick={() => handleThumbnailClick(index)}
    />
  ))}
</div>


      <div className="image-container">
        <img src={`http://localhost:4000/locationImg/${images[currentIndex]?.src}`} alt={'not avilable'} />
        <div className="image-details">
          <h2>{images[currentIndex]?.title}</h2>
          <p>{''}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
