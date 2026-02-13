import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Aurelius Riverside</h2>
                        <p className="footer-tagline">Classic Italian Riverside Luxury</p>
                    </div>

                    <div className="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#accommodations">Accommodations</a></li>
                            <li><a href="#dining">Dining</a></li>
                            <li><a href="#wellness">Wellness & Spa</a></li>
                            <li><a href="#experiences">Experiences</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#offers">Special Offers</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Visit Us</h4>
                        <p>Via Lago Bella, 123<br />Como, Italy 22100</p>
                        <p>+39 031 123 4567</p>
                        <p>info@lago-hotel.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Aurelius Riverside. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
