import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from "../components/Card"
import SectionHeader from '../components/SectionHeader';
import Swiper from "../components/Swiper"
import Expert from "../components/ExpertSec"
import Swiper2 from "../components/Swiper2"
const Home = () => {
    return (
        <>
            <main>

                {/* hero-section starts */}
                <section className='hero' id='hero-section'>
                    <div className='hero-content'>
                        <h1>Building Stronger Families</h1>
                        <p>Jovie provides flexible and trusted local nannies and babysitters when you need it.</p>
                        <h4>Find Nannies + Babysitters Near You</h4>

                        <form className='hero-search' onSubmit={(e) => e.preventDefault()}>
                            <input type='text' placeholder='Enter Zip Code' aria-label='Enter Zip Code' />
                            <button type='submit'>Search</button>
                        </form>
                    </div> 
                </section>
                {/* hero-section end */}


                {/* about-section starts*/}
                <section className='about' id='about-section'>
                    <div className="about-content">
                        <h1>Finding the Right Nanny or Sitter Made Easy</h1>
                        <h4>Jovie provides personalized in-your-home childcare to help modern families thrive. From first-time parents to navigating the school years, our professional nannies and babysitters are prepared to help make your life smoother. Through careful vetting and a personalized matching process, we’re dedicated to helping you find the perfect nanny or babysitter who fits your family.</h4>
                    </div>
                </section>
                {/* about-section end*/}


                {/* service-section starts */}
                <section className='service' id='service-section'>
                    <div className="service-container">
                        <div className="row gy-5">
                            <div className="col-12 col-lg-6 text-center">
                                <div className='service-img'><img src="/images/Home_Value-Props.webp" alt="" className='img-fluid rounded-4'/></div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <Card head ="Reliable Care" headD ="Our nannies & babysitters are experienced and thoroughly screened to ensure they’re ready to provide the best care for your family, no matter the situation." img ="/images/love.svg" imgBg ="/images/Orange-Blob.webp"/>
                                <Card head ="Flexible Scheduling" headD ="Every family has unique needs! Find care when you need it for as long as you need it, whether that’s part-time, full-time, or on-demand." img ="/images/rocket.svg" imgBg ="/images/Blue-Blob.webp"/>
                                <Card head ="Full-Service Support" headD ="We’re here to simplify your life! From background checks and hiring to payroll and taxes, let us handle all the paperwork so you can focus on what truly matters: your family." img ="/images/shapes1.svg" imgBg ="/images/Yellow-Blob.webp"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service-section end */}


                {/* solution section starts */}
                <section className='solution' id='solution-section'>
                    <SectionHeader head="Which Childcare Solution Do You Need Today?" />
                    <Swiper/>
                </section>
                {/* solution section end */}


                {/* expert section starts */}
                <section className='expert' id='expert-section'>
                    <SectionHeader head="Expert Childcare You Can Trust - Backed by
                     20 Years of Experience" />
                     <div className="expert-content">
                        <Expert head="screened nannies + babysitters" number="9k" img="/images/orange-img.svg" imgBg="/images/Orange-Circle.webp"/>
                        <Expert head="families served" number="300k+" img="/images/blue-img.svg" imgBg="/images/Blue-Circle.webp"/>
                        <Expert head="states in the U.S." number="31k" img="/images/green-img.svg" imgBg="/images/Green-Circle.webp"/>
                     </div>
                </section>
                {/* expert section end */}


                {/* kid-tes section starts */}
                <section className='kid-tes' id='kid-tes-section'>
                    <SectionHeader head="Kids (and Parents!) Love Us" />
                    <Swiper2 />
                </section>
                {/* kid-tes section end */}

            </main>
        </>
    );
};

export default Home;
