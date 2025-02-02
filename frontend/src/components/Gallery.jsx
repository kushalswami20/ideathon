import React, { useState } from 'react';
import { Search, Calendar, MapPin, Users } from 'lucide-react';
import './css/Gallery.css';
import IDH from "../assets/Event1.jpg"
import event5 from "../assets/Event5.jpg"
import event2 from "../assets/event2.jpg"
import team from "../assets/Team.jpeg"
import event3 from "../assets/event3.jpg"

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
    title: "International Day of Happiness",
    type: "awareness",
    date: "March 20, 2024",
    location: "Pragyan Hall",
    attendees: 50,
    imageUrl: IDH,
    description: "A celebration promoting mental well-being and happiness."
  },
  {
    id: 1,
    title: "Outdoor Trip",
    type: "community",
    date: "April 15, 2024",
    location: "Yamuna Biodiversity Park",
    attendees: 50,
    imageUrl: event2,
    description: "A nature excursion fostering community engagement and outdoor learning."
  },
  {
    id: 2,
    title: "Photography Event",
    type: "workshop",
    date: "January 21, 2024",
    location: "GIS Lab, DTU",
    attendees: 100,
    imageUrl: event3,
    description: "A hands-on photography workshop to enhance visual storytelling skills."
  },
  {
    id: 3,
    title: "Poster Competition",
    type: "awareness",
    date: "February 5, 2024",
    location: "BR Auditorium, DTU",
    attendees: 200,
    imageUrl: team,
    description: "A creative competition to raise awareness on social and environmental issues."
  },
  {
    id: 4,
    title: "Wetland Visit",
    type: "awareness",
    date: "March 21, 2024",
    location: "Yamuna Biodiversity Park",
    attendees: 100,
    imageUrl: event5,
    description: "An educational visit highlighting the importance of wetland conservation."
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
