import './ContentSection.css'

function ContentSection() {
    return (
        <>
            {/* Introduction Section */}
            <section className="content-section intro-section">
                <div className="content-container">
                    <div className="content-text-block">
                        <h2 className="section-title">A Timeless Escape</h2>
                        <p className="section-description">
                            Nestled on the shores of an Italian lake, our boutique hotel offers an intimate
                            retreat where classic elegance meets modern luxury. Every detail has been
                            thoughtfully curated to create an unforgettable experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Collage Gallery Section */}
            <section className="content-section collage-section">
                <div className="collage-grid">
                    <div className="collage-item large">
                        <img src="/assets/images/gene-giromini-GQT9PtnuFn4-unsplash.jpg" alt="Hotel exterior" />
                    </div>
                    <div className="collage-item medium">
                        <img src="/assets/images/katarzyna-urbanek-_4qQsmE4VdA-unsplash.jpg" alt="Hotel lounge area" />
                    </div>
                    <div className="collage-text-overlay">
                        <h3>Experience</h3>
                        <p>Curated moments of serenity</p>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="content-section rooms-section">
                <div className="content-flex">
                    <div className="content-image">
                        <img src="/assets/images/visualsofdana-T5pL6ciEn-I-unsplash.jpg" alt="Luxury hotel room" />
                    </div>
                    <div className="content-text">
                        <span className="label uppercase">Accommodations</span>
                        <h2>Where Comfort Meets Elegance</h2>
                        <p>
                            Each of our thoughtfully designed suites offers breathtaking lake views,
                            handcrafted furnishings, and modern amenities that honor Italian craftsmanship.
                        </p>
                        <a href="#rooms" className="text-link">Explore Suites →</a>
                    </div>
                </div>
            </section>

            {/* Dining Section */}
            <section className="content-section dining-section">
                <div className="content-flex reverse">
                    <div className="content-image">
                        <img src="/assets/images/dmitry-limonov-T8rO5Pp_4Ig-unsplash.jpg" alt="Fine dining" />
                    </div>
                    <div className="content-text">
                        <span className="label uppercase">Dining</span>
                        <h2>Culinary Excellence</h2>
                        <p>
                            Savor authentic Italian cuisine crafted from locally sourced ingredients.
                            Our chef brings generations of tradition to every plate.
                        </p>
                        <a href="#dining" className="text-link">View Menu →</a>
                    </div>
                </div>
            </section>

            {/* Wellness Section */}
            <section className="content-section wellness-section">
                <div className="content-container">
                    <div className="wellness-grid">
                        <div className="wellness-image">
                            <img src="/assets/images/sasha-kaunas-TAgGZWz6Qg8-unsplash (1).jpg" alt="Wellness spa" />
                        </div>
                        <div className="wellness-text">
                            <span className="label uppercase">Wellness</span>
                            <h2>Restore & Rejuvenate</h2>
                            <p>
                                Our spa sanctuary offers bespoke treatments inspired by ancient wellness
                                traditions, complemented by modern therapeutic techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offers Section */}
            <section className="content-section offers-section">
                <div className="content-container">
                    <div className="section-header-center">
                        <span className="label uppercase">Special Offers</span>
                        <h2 className="section-title">Exclusive Experiences</h2>
                        <p className="section-description">
                            Discover our carefully curated packages designed to make your stay unforgettable
                        </p>
                    </div>

                    <div className="offers-grid">
                        <div className="offer-card">
                            <div className="offer-image">
                                <img src="/assets/images/the-anam-_twiIcIsp2s-unsplash.jpg" alt="Romantic getaway" />
                            </div>
                            <div className="offer-content">
                                <h3>Romantic Escape</h3>
                                <p>Three nights in our deluxe suite with champagne, couples spa treatment, and private lakeside dinner for two.</p>
                                <span className="offer-price">From €850</span>
                            </div>
                        </div>

                        <div className="offer-card">
                            <div className="offer-image">
                                <img src="/assets/images/gene-giromini-GQT9PtnuFn4-unsplash.jpg" alt="Wellness retreat" />
                            </div>
                            <div className="offer-content">
                                <h3>Wellness Retreat</h3>
                                <p>Five-day rejuvenation package including daily spa treatments, yoga sessions, and nutritional cuisine.</p>
                                <span className="offer-price">From €1,200</span>
                            </div>
                        </div>

                        <div className="offer-card">
                            <div className="offer-image">
                                <img src="/assets/images/katarzyna-urbanek-_4qQsmE4VdA-unsplash.jpg" alt="Cultural experience" />
                            </div>
                            <div className="offer-content">
                                <h3>Cultural Discovery</h3>
                                <p>Weekend package with guided tours of local villas, wine tasting, and cooking class with our chef.</p>
                                <span className="offer-price">From €650</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Hotel Section */}
            <section className="content-section about-section">
                <div className="about-layout">
                    <div className="about-image-large">
                        <img src="/images/visualsofdana-T5pL6ciEn-I-unsplash.jpg" alt="Aurelius Riverside interior" />
                    </div>
                    <div className="about-content">
                        <span className="label uppercase">About Us</span>
                        <h2>Aurelius Riverside</h2>
                        <p>
                            Established in 1897, Aurelius Riverside has been welcoming discerning travelers
                            to the shores of Lake Como for over a century. Our historic villa, meticulously
                            restored to preserve its original grandeur, combines timeless Italian elegance
                            with contemporary luxury.
                        </p>
                        <p>
                            With just 24 exclusive suites, we offer an intimate escape where personalized
                            service and attention to detail create unforgettable moments. Our heritage gardens,
                            lakeside terraces, and michelin-starred dining make every stay a journey through
                            Italian sophistication.
                        </p>
                        <div className="about-features">
                            <div className="feature-item">
                                <h4>24</h4>
                                <p>Exclusive Suites</p>
                            </div>
                            <div className="feature-item">
                                <h4>1897</h4>
                                <p>Since</p>
                            </div>
                            <div className="feature-item">
                                <h4>★★★★★</h4>
                                <p>Five Star Luxury</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Gallery Section */}
            <section className="content-section experience-gallery">
                <div className="content-container">
                    <div className="section-header-center">
                        <h2 className="section-title">The Aurelius Experience</h2>
                    </div>
                    <div className="experience-grid">
                        <div className="experience-item">
                            <img src="/images/dmitry-limonov-T8rO5Pp_4Ig-unsplash.jpg" alt="Fine dining experience" />
                            <div className="experience-overlay">
                                <h3>Michelin-Starred Dining</h3>
                            </div>
                        </div>
                        <div className="experience-item">
                            <img src="/images/sasha-kaunas-TAgGZWz6Qg8-unsplash (1).jpg" alt="Spa wellness" />
                            <div className="experience-overlay">
                                <h3>Award-Winning Spa</h3>
                            </div>
                        </div>
                        <div className="experience-item">
                            <img src="/images/the-anam-_twiIcIsp2s-unsplash.jpg" alt="Lake views" />
                            <div className="experience-overlay">
                                <h3>Breathtaking Views</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentSection
