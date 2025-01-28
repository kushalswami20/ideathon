import React, { useState } from 'react';
import { X } from 'lucide-react';
import './css/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Event Title 1",
      description: "Description of the first event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Event Title 2",
      description: "Description of the second event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 16, 2024"
    },
    {
      id: 3,
      title: "Event Title 3",
      description: "Description of the third event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 17, 2024"
    },
    {
      id: 4,
      title: "Event Title 4",
      description: "Description of the fourth event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 18, 2024"
    },
    {
      id: 5,
      title: "Event Title 5",
      description: "Description of the fifth event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 19, 2024"
    },
    {
      id: 6,
      title: "Event Title 6",
      description: "Description of the sixth event or image",
      imageUrl: "src/assets/bgimg.jpeg",
      date: "March 20, 2024"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="gallery-page">
      <header className="header header-with-bg">
        {/* Parallax background for header */}
        <div className="header-background"></div>
        <div className="header-content">
          <h1>Our Gallery</h1>
          <p className="subtitle">Explore our collection of memorable moments and inspiring events</p>
        </div>
      </header>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openModal(item)}
            >
              <img src={item.imageUrl} alt={item.title} />
              <div className="gallery-item-overlay">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                <X size={24} />
              </button>
              <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p className="modal-date">{selectedImage.date}</p>
                <p className="modal-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;