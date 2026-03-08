import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination,  Navigation } from 'swiper/modules';
const Swiper1 = () => {
    return(
        <div className="mySwiper-wrap">
            <button className="swiper-nav-btn jovie-prev" aria-label="Previous slide">
                &#8249;
            </button>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    1100: {
                        slidesPerView: 5,
                    },
                    1147: {
                        slidesPerView: 5,
                    },
                }}
                pagination={{
                clickable: true,
                }}
                navigation={{
                    prevEl: '.jovie-prev',
                    nextEl: '.jovie-next',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/slide1.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Nannies</h3>
                        <p>Experienced & vetted nannies offer personalized in-home care to make your family’s life smoother.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide2.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Babysitters</h3>
                        <p>Book reliable & background-checked babysitters you can count on.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide3.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Conference & Business Events</h3>
                        <p>Trust the industry experts in professional childcare staffing solutions for corporate events.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide4.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Wedding Childcare</h3>
                        <p>Enjoy your wedding knowing that everyone, big and small, is having a wonderful time.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide6.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Event Childcare</h3>
                        <p>Include the little ones in your big day with on-site childcare staffing at your celebration.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide5.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Childcare Center Staffing</h3>
                        <p>Find reliable staff extension for childcare centers & schools.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide7.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Hotel & Vacation Babysitting Services</h3>
                        <p>Help guests relax with convenient on-site hotel & resort childcare staffing.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide88.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Sports Teams Childcare</h3>
                        <p>Ensure peace of mind for players, staff, and their families from preseason to playoffs.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide8.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Church Childcare</h3>
                        <p>Vetted childcare staffing for churches, synagogues, mosques, temples, and other religious venues.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide10.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Employee Backup Childcare</h3>
                        <p>Create a valuable employee benefit that working parents will appreciate.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/slide11.webp" alt="" className='img-fliud' />
                    <div className="slide-text">
                        <h3>Gym & Club Childcare Staffing
</h3>
                        <p>Help parents fully experience the benefits of their membership with a safe environment for the kiddos.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button className="swiper-nav-btn jovie-next" aria-label="Next slide">
                &#8250;
            </button>
        </div>
    )
}
export default Swiper1;
