import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import '../css/ArticleLayout.css';

const ArticleLayout = () => {
  const events = [
    { id: 1, title: "Tech Conference 2024", date: "May 15-17, 2024", location: "Convention Center", time: "9:00 AM - 6:00 PM", image: require('../img/hero/music.jpg') },
    { id: 2, title: "Art Exhibition: Monochrome", date: "June 1-30, 2024", location: "National Gallery", time: "10:00 AM - 8:00 PM", image: require('../img/hero/music.jpg') },
    { id: 3, title: "Jazz Night", date: "July 10-12, 2024", location: "City Park", time: "7:00 PM - 11:00 PM", image: require('../img/hero/music.jpg') },
    { id: 4, title: "Design Symposium", date: "August 5-7, 2024", location: "Design Center", time: "11:00 AM - 5:00 PM", image: require('../img/hero/music.jpg') },
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div className="events-layout">
      <header className="header">
        <h1 className="animate-on-scroll">Upcoming Events</h1>
        <p className="animate-on-scroll">Curated experiences for the discerning mind</p>
      </header>

      <main className="main-content">
        <section className="featured-events">
          <h2 className="animate-on-scroll">Featured Events</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card animate-on-scroll">
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}></div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="event-detail">
                    <Calendar className="icon" />
                    {event.date}
                  </p>
                  <p className="event-detail">
                    <MapPin className="icon" />
                    {event.location}
                  </p>
                  <p className="event-detail">
                    <Clock className="icon" />
                    {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-events animate-on-scroll">
          <h2>About Our Events</h2>
          <p>
            We curate exceptional experiences that challenge perspectives and inspire creativity. 
            Join us in exploring the depth and nuance of contemporary culture through our carefully 
            selected events.
          </p>
        </section>

        <section className="newsletter animate-on-scroll">
          <h2>Stay Informed</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="footer">
  <div className="footer-top">
    <nav className="footer-nav">
      <a href="/">About Us</a>
      <a href="/">Contact</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Terms of Service</a>
    </nav>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Monochrome Events. All rights reserved.</p>
    <div className="social-links">
      <a href="/">FB</a>
      <a href="/">TW</a>
      <a href="/">IG</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default ArticleLayout;