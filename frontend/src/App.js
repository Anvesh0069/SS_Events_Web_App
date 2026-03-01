import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Sparkles, Monitor, Lightbulb, TrendingUp, MessageCircle, Menu, X } from 'lucide-react';
import '@/App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // ========================================
  // 📱 WHATSAPP CONFIGURATION
  // Update the phone number below (format: country code + number without + or spaces)
  // Example: For +91 9849010190, use '919849010190'
  // ========================================
  const handleWhatsApp = () => {
    const phoneNumber = '919849010190'; // 🔄 CHANGE THIS: Your WhatsApp Business Number
    const message = encodeURIComponent('Hi SS Events! I would like to inquire about your event services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" data-testid="main-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2" data-testid="brand-logo">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
                SS Events
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors" data-testid="nav-home">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors" data-testid="nav-services">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors" data-testid="nav-gallery">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors" data-testid="nav-about">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors" data-testid="nav-contact">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2" data-testid="mobile-menu">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded" data-testid="mobile-nav-home">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded" data-testid="mobile-nav-services">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded" data-testid="mobile-nav-gallery">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded" data-testid="mobile-nav-about">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded" data-testid="mobile-nav-contact">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1761472606347-bfebc5a3e546?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3ZWRkaW5nJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzcxNzc3ODMzfDA&ixlib=rb-4.1.0&q=85"
            alt="Elegant Event Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-amber-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" data-testid="hero-content">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" data-testid="hero-title">
            Illuminating Your <span className="text-amber-300">Special Moments</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            20 Years of Excellence in Event Lighting & Management | Hyderabad's Trusted Name
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all shadow-xl"
              data-testid="cta-get-quote"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all"
              data-testid="cta-view-services"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="services-title">Our Premium Services</h2>
            <p className="text-xl text-gray-600" data-testid="services-subtitle">Complete event solutions with cutting-edge technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all" data-testid="service-card-lighting">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Lighting</h3>
              <p className="text-gray-600">State-of-the-art lighting solutions to create the perfect ambiance for your event</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all" data-testid="service-card-screens">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital LED Screens</h3>
              <p className="text-gray-600">High-resolution LED displays for presentations, videos, and visual entertainment</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all" data-testid="service-card-truss">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Stage & Truss Setup</h3>
              <p className="text-gray-600">Professional stage construction and truss systems for events of any scale</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all" data-testid="service-card-management">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Setup</h3>
              <p className="text-gray-600">End-to-end event management with latest equipment and professional team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-amber-50" data-testid="event-types-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="event-types-title">Events We Serve</h2>
            <p className="text-xl text-gray-600" data-testid="event-types-subtitle">From intimate gatherings to grand celebrations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group" data-testid="event-type-weddings">
              <img 
                src="https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Wedding Events"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Weddings & Receptions</h3>
                  <p className="text-gray-200">Make your special day unforgettable with magical lighting</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group" data-testid="event-type-corporate">
              <img 
                src="https://images.pexels.com/photos/29708240/pexels-photo-29708240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Corporate Events"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Corporate Events</h3>
                  <p className="text-gray-200">Professional setups for conferences and corporate gatherings</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl group" data-testid="event-type-ceremonies">
              <img 
                src="https://images.pexels.com/photos/36154338/pexels-photo-36154338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Ceremonies"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">House Warming & Ceremonies</h3>
                  <p className="text-gray-200">Elegant setups for traditional ceremonies and celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white" data-testid="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="why-choose-title">Why Choose SS Events?</h2>
            <p className="text-xl text-gray-600" data-testid="why-choose-subtitle">Two decades of trust and excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8" data-testid="feature-experience">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">20 Years Experience</h3>
              <p className="text-gray-600">Two decades of creating memorable events across Hyderabad</p>
            </div>

            <div className="text-center p-8" data-testid="feature-equipment">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Latest Equipment</h3>
              <p className="text-gray-600">State-of-the-art lighting and audio-visual technology</p>
            </div>

            <div className="text-center p-8" data-testid="feature-team">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Team</h3>
              <p className="text-gray-600">Experienced technicians ensuring flawless execution</p>
            </div>

            <div className="text-center p-8" data-testid="feature-trusted">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted Name</h3>
              <p className="text-gray-600">Hyderabad's most reliable event services provider</p>
            </div>

            <div className="text-center p-8" data-testid="feature-scale">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">All Event Scales</h3>
              <p className="text-gray-600">Specialists in small to mid-scale events</p>
            </div>

            <div className="text-center p-8" data-testid="feature-location">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Koti, Hyderabad</h3>
              <p className="text-gray-600">Serving Hyderabad and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="gallery-title">Our Work</h2>
            <p className="text-xl text-gray-600" data-testid="gallery-subtitle">Real events we've transformed into magical experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 - Luxurious Wedding Aisle */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-black" data-testid="gallery-video-1">
              <video 
                className="w-full h-80 object-cover cursor-pointer"
                controls
                preload="auto"
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
              >
                <source src="https://customer-assets.emergentagent.com/job_capability-finder-28/artifacts/ofuauy8i_WhatsApp%20Video%202026-02-24%20at%207.21.24%20PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 pointer-events-none">
                <p className="text-white font-bold text-lg">Luxurious Wedding Aisle</p>
                <p className="text-gray-200 text-sm">Purple lighting, chandeliers & floral elegance</p>
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                OUR WORK
              </div>
            </div>

            {/* Video 2 - Modern Stage Setup */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-black" data-testid="gallery-video-2">
              <video 
                className="w-full h-80 object-cover cursor-pointer"
                controls
                preload="auto"
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
              >
                <source src="https://customer-assets.emergentagent.com/job_capability-finder-28/artifacts/8efb5ec8_WhatsApp%20Video%202026-02-24%20at%207.21.25%20PM%20%281%29.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 pointer-events-none">
                <p className="text-white font-bold text-lg">Geometric LED Stage</p>
                <p className="text-gray-200 text-sm">Modern meets classic opulence</p>
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                OUR WORK
              </div>
            </div>

            {/* Video 3 - Triangular Light Projection */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-black" data-testid="gallery-video-3">
              <video 
                className="w-full h-80 object-cover cursor-pointer"
                controls
                preload="auto"
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
              >
                <source src="https://customer-assets.emergentagent.com/job_capability-finder-28/artifacts/h3wxegek_WhatsApp%20Video%202026-02-24%20at%207.23.01%20PM%20%281%29.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 pointer-events-none">
                <p className="text-white font-bold text-lg">3D Light Projection</p>
                <p className="text-gray-200 text-sm">Innovative triangular hologram effect</p>
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                OUR WORK
              </div>
            </div>

            {/* Video 4 - Religious Ceremony LED Setup */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-black" data-testid="gallery-video-4">
              <video 
                className="w-full h-80 object-cover cursor-pointer"
                controls
                preload="auto"
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
              >
                <source src="https://customer-assets.emergentagent.com/job_capability-finder-28/artifacts/v56rddm5_WhatsApp%20Video%202026-02-24%20at%207.30.56%20PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 pointer-events-none">
                <p className="text-white font-bold text-lg">Grand LED Display Setup</p>
                <p className="text-gray-200 text-sm">Religious ceremony with digital screens</p>
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                OUR WORK
              </div>
            </div>

            {/* Video 5 - Event with Stage Performance */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl group bg-black" data-testid="gallery-video-5">
              <video 
                className="w-full h-80 object-cover cursor-pointer"
                controls
                preload="auto"
                playsInline
                webkit-playsinline="true"
                controlsList="nodownload"
              >
                <source src="https://customer-assets.emergentagent.com/job_capability-finder-28/artifacts/ofqmpt5h_WhatsApp%20Video%202026-02-24%20at%207.30.19%20PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 pointer-events-none">
                <p className="text-white font-bold text-lg">Dynamic Stage Lighting</p>
                <p className="text-gray-200 text-sm">Neon effects & professional sound</p>
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none">
                OUR WORK
              </div>
            </div>

            {/* Image 1 - Stock */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group" data-testid="gallery-image-1">
              <img 
                src="https://images.pexels.com/photos/19376436/pexels-photo-19376436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Wedding Celebration"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Wedding Celebrations</p>
              </div>
            </div>

            {/* Image 2 - Stock */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group" data-testid="gallery-image-2">
              <img 
                src="https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Traditional Wedding Setup"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Traditional Ceremonies</p>
              </div>
            </div>

            {/* Image 3 - Stock */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group" data-testid="gallery-image-3">
              <img 
                src="https://images.pexels.com/photos/36154338/pexels-photo-36154338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Elegant Ceremony Setup"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Elegant Setups</p>
              </div>
            </div>

            {/* Image 4 - Stock */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group" data-testid="gallery-image-4">
              <img 
                src="https://images.pexels.com/photos/29708240/pexels-photo-29708240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Corporate Event Stage"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Corporate Events</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 italic">These are real projects executed by SS Events team</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">What Our Clients Say</h2>
            <p className="text-xl text-gray-600" data-testid="testimonials-subtitle">Trusted by hundreds of happy clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg" data-testid="testimonial-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"SS Events made our wedding absolutely magical! The lighting setup was beyond our expectations. Highly professional team!"</p>
              <div>
                <p className="font-bold text-gray-900">Priya & Karthik</p>
                <p className="text-gray-600 text-sm">Wedding, Hyderabad</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg" data-testid="testimonial-2">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Excellent service for our corporate event. The LED screens and stage setup were top-notch. Will definitely work with them again!"</p>
              <div>
                <p className="font-bold text-gray-900">Rajesh Kumar</p>
                <p className="text-gray-600 text-sm">Corporate Event</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg" data-testid="testimonial-3">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"Very reliable and experienced team. They handled our house warming ceremony beautifully. Great value for money!"</p>
              <div>
                <p className="font-bold text-gray-900">Sanjana Reddy</p>
                <p className="text-gray-600 text-sm">House Warming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 text-white" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="contact-title">Let's Create Magic Together</h2>
            <p className="text-xl text-gray-200" data-testid="contact-subtitle">Get in touch with us for your next event</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-testid="contact-info">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              
              {/* 🔄 CHANGE PROPRIETOR NAME HERE */}
              <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <h4 className="font-semibold text-lg text-amber-300 mb-2">Proprietor</h4>
                <p className="text-2xl font-bold text-white">Ram Lal</p>
                <p className="text-gray-200 text-lg">(Kalu Bhaya)</p>
                <p className="text-gray-300 text-sm mt-2">20 Years of Event Excellence</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-gray-200">Koti, Hyderabad, Telangana</p>
                  </div>
                </div>

                {/* 🔄 CHANGE PHONE NUMBERS HERE */}
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-200">+91 9849010190</p>
                    <p className="text-gray-200">+91 9849010190</p>
                  </div>
                </div>

                {/* 🔄 CHANGE EMAIL ADDRESSES HERE */}
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-200">anveshreddy00741@gmail.com</p>
                    <p className="text-gray-200">anveshreddy00741@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <p className="text-gray-200">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                <p className="text-gray-200 text-sm mt-2">Available for emergencies 24/7</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center space-y-6" data-testid="contact-cta">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-gray-200 mb-6">Contact us now for a free consultation and quote</p>
                
                <button 
                  onClick={handleWhatsApp}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2 mb-4"
                  data-testid="whatsapp-button"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Chat on WhatsApp</span>
                </button>

                {/* 🔄 CHANGE CALL BUTTON PHONE NUMBER HERE */}
                <a 
                  href="tel:+919849010190"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2"
                  data-testid="call-button"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call Us Now</span>
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-bold mb-3">Quick Quote Request</h4>
                <p className="text-gray-200 text-sm">Share your event details via WhatsApp and get an instant quote!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold">SS Events</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2025 SS Events. All rights reserved. | Illuminating Hyderabad for 20 Years
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-bounce"
        data-testid="floating-whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
}

export default App;