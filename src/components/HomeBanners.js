'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanners(){
    return(
        <Carousel showThumbs={false}>
                <div>
                    <img src="banners/banner-1.jpg" />
                </div>
                <div>
                    <img src="banners/banner-2.jpg" />
                </div>
            </Carousel>
    );
}