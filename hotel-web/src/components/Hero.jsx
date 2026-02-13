import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-video">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video-element"
                >
                    <source src="/assets/video/mainpage.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Where Lake
                    <br />
                    Meets Luxury
                </h1>
                <p className="hero-subtitle">Classic Italian Elegance</p>
            </div>
        </section>
    )
}

export default Hero
