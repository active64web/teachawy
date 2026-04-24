"use client";
import "./MainSlider.scss"
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MainSlider = ({ isAr }: { isAr: boolean }) => {
    return (
        <div className="main_slider">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                className="mySwiper"
                dir="ltr"
            >
                <SwiperSlide>
                    <Image
                        src="/images/main_slider_1.jpg"
                        alt={isAr ? "صورة توضيحية" : "Illustration"}
                        width={300}
                        height={400}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/main_slider_2.jpg"
                        alt={isAr ? "صورة توضيحية" : "Illustration"}
                        width={300}
                        height={400}
                    />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}

export default MainSlider;