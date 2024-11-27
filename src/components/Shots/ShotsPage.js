import React, { useState } from 'react';
import { Download, ShoppingCart, ZoomIn } from 'lucide-react';
import '../../css/Shots/ShotPage.css';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedResolution, setSelectedResolution] = useState('');

  const photos = [
    {
      id: 1,
      title: "Demonstrasi indonesia peringatan darurat",
      image: require('../../img/shots/foto2.png'),
      description: "Historical moment captured during the health conference",
      date: "1975-03-15",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    },
    {
      id: 2,
      title: "First Pers Conference",
      image: require('../../img/shots/foto3.png'),
      description: "First press conference documentation",
      date: "1975-04-20",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    },
    {
      id: 3,
      title: "Demonstrasi indonesia peringatan darurat",
      image: require('../../img/shots/foto2.png'),
      description: "Historical moment captured during the health conference",
      date: "1975-03-15",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    },
    {
      id: 4,
      title: "First Pers Conference",
      image: require('../../img/shots/foto3.png'),
      description: "First press conference documentation",
      date: "1975-04-20",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    },
    {
      id: 5,
      title: "Demonstrasi indonesia peringatan darurat",
      image: require('../../img/shots/foto2.png'),
      description: "Historical moment captured during the health conference",
      date: "1975-03-15",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    },
    {
      id: 6,
      title: "First Pers Conference",
      image: require('../../img/shots/foto3.png'),
      description: "First press conference documentation",
      date: "1975-04-20",
      photographer: "Andika Lensa",
      prices: {
        low: 25,
        medium: 50,
        high: 100
      },
      resolutions: {
        low: "1200x800px",
        medium: "2400x1600px",
        high: "4800x3200px"
      }
    }
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleDownload = () => {
    if (selectedPhoto && selectedResolution) {
      alert(`Downloading ${selectedPhoto.title} in ${selectedResolution} resolution`);
      // Implement actual download logic here
    }
  };

  const handlePurchase = () => {
    if (selectedPhoto && selectedResolution) {
      alert(`Purchasing ${selectedPhoto.title} in ${selectedResolution} resolution`);
      // Implement actual purchase flow here
    }
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>SHOTS</h1>
        <p>Exploring our photojournalism collection</p>
      </header>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="photo-image-container">
              <img 
                src={photo.image} 
                alt={photo.title}
                className="photo-image"
              />
              <div className="photo-overlay">
                <button 
                  className="zoom-button"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <ZoomIn />
                </button>
              </div>
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <p>{photo.date}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedPhoto.title}</h2>
              <button 
                className="close-button"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.title}
                  className="modal-image"
                />
                <div className="watermark">NODGE+ WATERMARK</div>
              </div>

              <div className="photo-details">
                <div className="photo-metadata">
                  <p><strong>Date:</strong> {selectedPhoto.date}</p>
                  <p><strong>Photographer:</strong> {selectedPhoto.photographer}</p>
                  <p>{selectedPhoto.description}</p>
                </div>

                <div className="purchase-options">
                  <label>Select Resolution</label>
                  <select 
                    value={selectedResolution}
                    onChange={(e) => setSelectedResolution(e.target.value)}
                    className="resolution-select"
                  >
                    <option value="">Choose resolution</option>
                    {Object.entries(selectedPhoto.resolutions).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value} - ${selectedPhoto.prices[key]}
                      </option>
                    ))}
                  </select>

                  <div className="action-buttons">
                    <button 
                      className="download-button"
                      onClick={handleDownload}
                      disabled={!selectedResolution}
                    >
                      <Download />
                      Download with Watermark
                    </button>
                    <button 
                      className="purchase-button"
                      onClick={handlePurchase}
                      disabled={!selectedResolution}
                    >
                      <ShoppingCart />
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;