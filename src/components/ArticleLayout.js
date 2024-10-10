import React from 'react';
import { Calendar } from 'lucide-react';
import '../css/ArticleLayout.css';

const ArticleLayout = () => {
  const events = [
    { id: 1, title: "Tech Conference 2024", date: "May 15-17, 2024", image: require('../img/hero/music.jpg') },
    { id: 2, title: "Art Exhibition: African Visions", date: "June 1-30, 2024", image: require('../img/hero/music.jpg') },
    { id: 3, title: "Music Festival", date: "July 10-12, 2024", image: require('../img/hero/music.jpg') },
    { id: 4, title: "Food and Wine Expo", date: "August 5-7, 2024", image: require('../img/hero/music.jpg') },
  ];

  return (
    <div className="events-layout">
      <header className="header">
        <h1>Upcoming Events</h1>
        <p>Discover exciting events happening in your area</p>
      </header>

      <main className="main-content">
        <section className="featured-events">
          <h2>Featured Events</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="event-date">
                    <Calendar className="calendar-icon" />
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-events">
          <h2>About Our Events</h2>
          <p>
            We bring you the most exciting and diverse events in the region. From tech conferences to art exhibitions, 
            music festivals to food expos, there's something for everyone. Join us in celebrating culture, innovation, 
            and community.
          </p>
        </section>

        <section className="ongoing-events">
          <h2>Ongoing Events</h2>
          <div className="ongoing-event-card">
            <h3>Summer Art Workshop Series</h3>
            <p>
              Join our weekly art workshops throughout the summer. Learn various techniques from local artists.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>123 Event Street, City Center, 12345</p>
            <p>Tel: +1 234 567 8900</p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Event Organizers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleLayout;