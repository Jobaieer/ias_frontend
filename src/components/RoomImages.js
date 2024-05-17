'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function RoomImages(){
    return(
        <Carousel showThumbs={false}>
                <div>
                    <img src="/rooms/d.jpg" />
                </div>
                <div>
                    <img src="/rooms/dd.jpg" />
                </div>
                <div>
                    <img src="/rooms/q.jpg" />
                </div>
                <div>
                    <img src="/rooms/sd.jpg" />
                </div>
                <div>
                    <img src="/rooms/kq.jpg" />
                </div>
                <div>
                    <img src="/rooms/p.jpg" />
                </div>
            </Carousel>
    );
}