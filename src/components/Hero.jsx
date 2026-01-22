import { useState, useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const [useVideoFallback, setUseVideoFallback] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            setUseVideoFallback(false);
          })
          .catch((error) => {
            // Autoplay was prevented, use poster fallback
            console.log('Video autoplay blocked, using poster fallback:', error);
            setUseVideoFallback(true);
          });
      }
    }
  }, []);

  return (
    <section className="hero" id="home">
      {/* Video Background or Fallback */}
      <div className="hero__background">
        {!useVideoFallback ? (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/video/hero-poster.jpg"
          >
            <source src="https://dev.opendesignsin.com/Paradise-Recycling/1127/Video/videos/BanVideosss.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="hero__poster"
            style={{ backgroundImage: 'url(/video/hero-poster.jpg)' }}
          />
        )}
        <div className="hero__overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero__content">
        {/* Top Split Row with Decorative Line */}
        <div className="hero__top-split">
          <h2 className="hero__split-left">TURNING</h2>
          <div className="hero__decorative-line">
            <div className="line"></div>
            <div className="marker">×</div>
            <div className="line"></div>
          </div>
          <h2 className="hero__split-right">SCRAP INTO</h2>
        </div>

        {/* Main Headline */}
        <h1 className="hero__headline">SUSTAINABILITY</h1>

        {/* Orange Label Bar */}
        <div className="hero__label-bar">
          <p className="hero__label-text">
            LEADING THE FUTURE OF COPPER, STEEL, AND E-WASTE RECYCLING WITH PRECISION, PERFORMANCE, AND PURPOSE.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
