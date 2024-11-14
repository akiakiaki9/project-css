import React from 'react'

export default function AboutUsComp() {
    return (
        <div className='aboutus'>
            <div className="aboutus-blok">
                <div className="aboutus-blok__section">
                    <div className="aboutus-blok__section__container aboutus-blok__section__container-1">
                        <p className='aboutus__p1'>About Our Agency</p>
                        <h1>Your trusted partner for business</h1>
                        <p className='aboutus__p2'>This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining. Through our years of experience, we’ve also learned that while each channel.</p>
                        <div className='aboutus__div'></div>
                    </div>
                    <div className="aboutus-blok__section__container aboutus-blok__section__container-2">
                        <img className='aboutus__img1' src="/images/aboutus/about1.jpeg" alt="AboutUs" />
                    </div>
                </div>
                <div className="aboutus-blok__section">
                    <div className="aboutus-blok__section__container aboutus-blok__section__container-1">
                        <img className='aboutus__img3' src="/images/aboutus/about3.jpeg" alt="AboutUs" />
                    </div>
                    <div className="aboutus-blok__section__container aboutus-blok__section__container-2">
                        <img className='aboutus__img2' src="/images/aboutus/about2.jpeg" alt="AboutUs" />
                    </div>
                </div>
            </div>
            <div className='funfact-ab'>
                <div className="funfact-ab-blok">
                    <div className="funfact-ab-blok__section funfact-ab-blok__section-1">
                        <h1>Our fun fact</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    </div>
                    <div className="funfact-ab-blok__section funfact-ab-blok__section-2">
                        <div className="funfact-ab-blok__section__container">
                            <div className="funfact-ab-blok__section__container-part">
                                <h1>40K</h1>
                                <div className='funfact-ab-blok__section__container-part__finally'>
                                    <b>+</b>
                                    <p>Global Happy Clients</p>
                                </div>
                            </div>
                            <div className="funfact-ab-blok__section__container-part">
                                <h1>50K</h1>
                                <div className='funfact-ab-blok__section__container-part__finally'>
                                    <b>+</b>
                                    <p>Project Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="funfact-ab-blok__section__container">
                            <div className="funfact-blok__section__container-part">
                                <h1>245</h1>
                                <div className='funfact-ab-blok__section__container-part__finally'>
                                    <b>+</b>
                                    <p>Team Members</p>
                                </div>
                            </div>
                            <div className="funfact-ab-blok__section__container-part">
                                <h1>550</h1>
                                <div className='funfact-ab-blok__section__container-part__finally'>
                                    <b>+</b>
                                    <p>Digital products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};