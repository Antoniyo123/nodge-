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
        <div className="running-images">
          {[...Array(15)].map((_, index) => (
            <img key={index} src={require('../img/hero/NODGE LOGO.png')} alt={`Logo ${index + 1}`} />
          ))}
        </div>
        <h1 className="animate-on-scroll">Upcoming Events</h1>
      </header>

      <main className="main-content">
        <section className="featured-events">
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card animate-on-scroll">
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="event-overlay">
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
              </div>
            ))}
          </div>
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
        <p>© 2024 PT Cipta Ruang Kreatif. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ArticleLayout;