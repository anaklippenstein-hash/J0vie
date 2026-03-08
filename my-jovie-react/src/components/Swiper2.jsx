import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Swiper2 = () => {
    return(
        <div className="mySwiper2-wrap">
            <button className="swiper2-nav-btn swiper2-prev" aria-label="Previous testimonial">
                &#8249;
            </button>
            <Swiper
                navigation={{
                    prevEl: '.swiper2-prev',
                    nextEl: '.swiper2-next',
                }}
                modules={[Navigation]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className="slide-content2">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="slide-box1">
                                    <h3>Allison, Texas</h3>
                                    <p>Jovie took the time to find the perfect nanny for our family! Our nanny makes our lives so much easier by going above and beyond. And our son loves the nanny! I would highly recommend going through Jovie if you need care for your children.</p>
                                </div>
                            </div>
                            <div className="col-lg-4"><img src="/images/family1.webp" alt="" className='img-fluid' /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content2">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="slide-box1">
                                    <h3>Hannah, Illinois</h3>
                                    <p>We love using Jovie for both part-time nanny care and babysitting needs. The staff are extremely responsive when changes in schedule arise. In addition, the nanny we have used for over a year has been a wonderful addition to our family. We have used nanny care since our youngest was 4 months.</p>
                                </div>
                            </div>
                            <div className="col-lg-4"><img src="/images/family2big.webp" alt="" className='img-fluid' /></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content2">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="slide-box1">
                                    <h3>Dawn, New York</h3>
                                    <p>Finding someone that is able to pick up your kids from daycare, get them off the bus, and take them to/from soccer practice is not easy. Especially someone that you trust. Jovie was able to help when I have to work late a few times a month.</p>
                                </div>
                            </div>
                            <div className="col-lg-4"><img src="/images/family3.webp" alt="" className='img-fluid' /></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button className="swiper2-nav-btn swiper2-next" aria-label="Next testimonial">
                &#8250;
            </button>
        </div>
    )
}
export default Swiper2;
