import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

const contentStyle: React.CSSProperties = {
    margin: 'auto',
    height: '450px',
    width: '900px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',

};

const HomeCarousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        // console.log(currentSlide);
    };

    // Truy cập các method như next or prev trong thư viện thì dùng useRef
    const refCarousel = useRef<CarouselRef>(null)
    const handleNext = () => {
        refCarousel.current?.next()
    }
    const handlePrev = () => {
        refCarousel.current?.prev()
    }

    return (
        <div >
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <Carousel ref={refCarousel} autoplay={true} afterChange={onChange}>
                <div>
                    <img style={contentStyle} src="https://lienquan.garena.vn/files/skin/6ee0ca6c7839effd7b244bbe29f50a9e5d256414a590a.jpg" />
                </div>
                <div>
                    <img style={contentStyle} src="https://kenh14cdn.com/thumb_w/600/2020/6/23/photo-1-15929095917691763068776-crop-15929114397871248100140.jpg" />
                </div>
                <div>
                    <img style={contentStyle} src="https://lvgames.net/lqm/wp-content/uploads/2023/05/hinh-anh-nen-aov-x-sao-kirito-va-asuna-lien-quan-mobile-29-5-lvgames.net_.jpg" alt="" />
                </div>
                <div>
                    <img style={contentStyle} src="https://lvgames.net/lqm/wp-content/uploads/2020/09/hinh_nen_ngo_khong_dac_vu_bang_hau_680x382.jpg" alt="" />
                    
                </div>
            </Carousel>
        </div>
    );
};



export default HomeCarousel;


