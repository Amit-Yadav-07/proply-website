import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, MapPin, Star, TrendingUp } from 'lucide-react';
import slideImgOne from '../assets/Images/1.jpg'
import slideImgTwo from '../assets/Images/2.png'
import slideImgThree from '../assets/Images/3.jpg'

// Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ImageCarousel = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const slides = [
        {
            id: 1,
            desktopImage: slideImgOne,
            mobileImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", // Modern house
            title: "Luxury Waterfront Estates",
            subtitle: "Premium Living Redefined",
            description: "Experience unparalleled luxury in our exclusive waterfront properties featuring world-class amenities and breathtaking ocean views.",
            price: "$2.8M - $5.2M",
            location: "Miami Beach, FL",
            features: ["Ocean Views", "Private Beach", "Infinity Pool", "Smart Home"],
            rating: 4.9
        },
        {
            id: 2,
            desktopImage: slideImgTwo,
            mobileImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", // Modern interior
            title: "Downtown Penthouse Collection",
            subtitle: "Urban Sophistication",
            description: "Discover the pinnacle of city living with our exclusive penthouse collection in the heart of downtown's most prestigious district.",
            price: "$1.5M - $3.9M",
            location: "Manhattan, NY",
            features: ["City Views", "Rooftop Access", "Concierge", "Gym & Spa"],
            rating: 4.8
        },
        {
            id: 3,
            desktopImage: slideImgThree,
            mobileImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop", // House exterior
            title: "Mountain View Residences",
            subtitle: "Serene Highland Living",
            description: "Escape to tranquil mountain retreats where luxury meets nature, offering the perfect balance of comfort and scenic beauty.",
            price: "$950K - $2.1M",
            location: "Aspen, CO",
            features: ["Mountain Views", "Ski Access", "Fireplace", "Private Deck"],
            rating: 4.9
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-12 lg:py-20" style={{ marginTop: '-23px' }}>
            <div className="max-w-8xl mx-auto px-4 lg:px-8">



                {/* Desktop Layout */}
                {!isMobile && (
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 25,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper pb-16"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="w-[900px] h-[500px]">
                                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden group">

                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={slide.desktopImage}
                                            alt={slide.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="relative h-full flex items-center">
                                        <div className="w-1/2 p-8 lg:p-12 text-white">

                                            {/* Rating & Location */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span className="font-semibold">{slide.rating}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-white/90">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="text-sm">{slide.location}</span>
                                                </div>
                                            </div>

                                            {/* Subtitle */}
                                            <p className="text-blue-300 font-semibold text-lg mb-2 tracking-wide">
                                                {slide.subtitle}
                                            </p>

                                            {/* Title */}
                                            <h3 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                                {slide.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/90 text-lg leading-relaxed mb-6">
                                                {slide.description}
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {slide.features.map((feature, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Price & CTA */}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-white/70 text-sm mb-1">Starting from</p>
                                                    <p className="text-2xl font-bold text-white">{slide.price}</p>
                                                </div>
                                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                                    <span>View Details</span>
                                                    <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Mobile Layout */}
                {isMobile && (
                    <div className="space-y-8">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">

                                {/* Mobile Image */}
                                <div className="relative h-64">
                                    <img
                                        src={slide.mobileImage}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Strong Gradient Overlay for Text Visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                                    {/* Floating Elements */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="font-semibold text-white text-sm">{slide.rating}</span>
                                        </div>
                                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                                            <span className="text-white font-bold text-lg">{slide.price.split(' - ')[0]}</span>
                                        </div>
                                    </div>

                                    {/* Bottom Text Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center space-x-2 text-white/90 mb-2">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm font-medium">{slide.location}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight shadow-text">
                                            {slide.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Mobile Content */}
                                <div className="p-6">
                                    <p className="text-blue-600 font-semibold mb-2 tracking-wide">
                                        {slide.subtitle}
                                    </p>

                                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                                        {slide.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {slide.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center border border-blue-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price Range & CTA */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-gray-500 text-sm">Price Range</p>
                                            <p className="text-xl font-bold text-gray-900">{slide.price}</p>
                                        </div>
                                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                                            <TrendingUp className="w-4 h-4" />
                                            <span>Explore</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Custom Styles for Text Shadow */}
            <style jsx>{`
               .shadow-text {
                   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
               }
               
               .mySwiper .swiper-pagination-bullet {
                   background: #3b82f6;
                   opacity: 0.5;
               }
               
               .mySwiper .swiper-pagination-bullet-active {
                   background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                   opacity: 1;
                   transform: scale(1.2);
               }
           `}</style>
        </div>
    );
};

export default ImageCarousel;