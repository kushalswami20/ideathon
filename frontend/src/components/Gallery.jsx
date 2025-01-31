import React, { useState } from 'react';
import { Search, Calendar, MapPin, Users } from 'lucide-react';
import './css/Gallery.css';

const eventTypes = [
  { id: 'all', label: 'All Events' },
  { id: 'health', label: 'Health Camps' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'awareness', label: 'Awareness Drives' },
  { id: 'community', label: 'Community Events' }
];

const events = [
  {
    id: 0,
    title: "Pitch-a-thon",
    type: "health",
    date: "Febraury 14, 2025",
    location: "DTU CCDR",
    attendees: 150,
    imageUrl: "/api/placeholder/400/300",
    description: "A competition focusing on women's health and wellness."
  },
  {
    id: 1,
    title: "Women's Health Workshop",
    type: "health",
    date: "March 15, 2024",
    location: "City Hospital",
    attendees: 150,
    imageUrl: "/api/placeholder/400/300",
    description: "A comprehensive workshop focusing on women's health and wellness."
  },
  {
    id: 2,
    title: "Cancer Awareness Drive",
    type: "awareness",
    date: "March 20, 2024",
    location: "Community Center",
    attendees: 200,
    imageUrl: "/api/placeholder/400/300",
    description: "Raising awareness about cancer prevention and early detection."
  },
  {
    id: 3,
    title: "Community Health Fair",
    type: "community",
    date: "April 5, 2024",
    location: "Central Park",
    attendees: 300,
    imageUrl: "/api/placeholder/400/300",
    description: "Annual health fair bringing healthcare services to the community."
  },
  {
    id: 4,
    title: "Mental Health Workshop",
    type: "workshop",
    date: "April 15, 2024",
    location: "Mind & Wellness Center",
    attendees: 100,
    imageUrl: "/api/placeholder/400/300",
    description: "Interactive session on mental health awareness and well-being."
  }
];

const EventCard = ({ event, eventTypes }) => (
  <div className="event-card">
    <img
      src={event.imageUrl}
      alt={event.title}
      className="event-image"
    />
    <div className="event-content">
      <h3 className="event-title">{event.title}</h3>
      <div className="event-details">
        <div className="detail-row">
          <Calendar size={16} />
          <span>{event.date}</span>
        </div>
        <div className="detail-row">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        <div className="detail-row">
          <Users size={16} />
          <span>{event.attendees} Attendees</span>
        </div>
      </div>
      <p className="event-description">{event.description}</p>
      <div>
        <span className={`event-tag tag-${event.type}`}>
          {eventTypes.find(t => t.id === event.type)?.label}
        </span>
      </div>
    </div>
  </div>
);

const FilterButtons = ({ activeFilter, setActiveFilter, eventTypes }) => (
  <div className="filter-buttons">
    {eventTypes.map(type => (
      <button
        key={type.id}
        onClick={() => setActiveFilter(type.id)}
        className={`filter-button ${activeFilter === type.id ? 'active' : ''}`}
      >
        {type.label}
      </button>
    ))}
  </div>
);

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-container">
    <input
      type="text"
      placeholder="Search events..."
      className="search-input"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Search className="search-icon" size={20} />
  </div>
);

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="gallery-container">
      {/* Header */}
      <header className="gallery-header">
      <div className="gallery-header-background"></div>
        <div className="gallery-header-overlay" />
        <div className="gallery-header-content">
          <h1 className="gallery-title">Event Gallery</h1>
          <p className="gallery-description">
            Explore our collection of events and initiatives making a difference in the community
          </p>
        </div>
      </header>

      {/* Filters Section */}
      <section className="filters-container">
        <div className="filters-wrapper">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButtons 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            eventTypes={eventTypes} 
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="gallery-grid">
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              eventTypes={eventTypes} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;