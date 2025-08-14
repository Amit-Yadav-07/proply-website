// TabbedCardList.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye, Play, Headphones } from 'lucide-react';
import { tabbedCardListData, mediaTypes } from './data.js';

const TabbedCardList = () => {
  const [activeTab, setActiveTab] = useState('research');
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeData = tabbedCardListData.find(tab => tab.id === activeTab);
  const cards = activeData?.cards || [];

  // Check scroll position
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 280;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 280;
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Reset scroll position when changing tabs
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  // Update scroll indicators on scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollPosition();
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, [activeTab]);

  // Media type icon
  const getMediaIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'audio': return <Headphones className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-12">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
          Latest Content
        </h2>
        
        <div className="flex bg-white rounded-xl p-2 shadow-lg border border-gray-200/50">
          {tabbedCardListData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg border border-gray-200 transition-all duration-300 ${
            canScrollLeft
              ? 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:border-blue-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-6 h-6 mx-auto" />
        </button>

        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg border border-gray-200 transition-all duration-300 ${
            canScrollRight
              ? 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:border-blue-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-6 h-6 mx-auto" />
        </button>

        {/* Scrollable Cards Container */}
        <div className="mx-12">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`flex-shrink-0 bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  index === 3 ? 'w-72 opacity-60' : 'w-80'
                }`}
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {card.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  {activeTab === 'media' && card.type && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-lg">
                      {getMediaIcon(card.type)}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {card.category}
                    </span>
                    <span className="text-xs text-gray-500">{card.date}</span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{card.readTime || card.duration}</span>
                    </div>
                    {activeTab === 'media' && card.views && (
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{card.views}</span>
                      </div>
                    )}
                    {activeTab === 'blogs' && card.author && (
                      <div className="flex items-center space-x-2">
                        {card.authorImage && (
                          <img
                            src={card.authorImage}
                            alt={card.author}
                            className="w-4 h-4 rounded-full"
                          />
                        )}
                        <span>{card.author}</span>
                      </div>
                    )}
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md">
                    {activeTab === 'media' ? 'Watch Now' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TabbedCardList;