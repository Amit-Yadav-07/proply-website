import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, Tech Innovations",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            testimonial: "Working with this team has been absolutely transformative for our business. Their attention to detail and commitment to excellence is unmatched. They delivered beyond our expectations and helped us achieve results we never thought possible.",
            company: "Tech Innovations Inc.",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Founder & CTO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            testimonial: "The level of professionalism and expertise they brought to our project was remarkable. From the initial consultation to the final delivery, every step was handled with precision and care. I couldn't be happier with the results.",
            company: "Digital Dynamics",
            location: "Austin, TX"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            testimonial: "Their innovative approach and dedication to understanding our unique needs set them apart from everyone else. The team went above and beyond to ensure our success, and the impact on our business has been incredible.",
            company: "Creative Solutions Ltd.",
            location: "New York, NY"
        },
        {
            id: 4,
            name: "David Park",
            role: "Operations Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            testimonial: "I've worked with many service providers over the years, but none have impressed me as much as this team. Their strategic thinking, combined with flawless execution, delivered results that exceeded all our goals and expectations.",
            company: "Global Enterprises",
            location: "Seattle, WA"
        },
        {
            id: 5,
            name: "Jessica Thompson",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            testimonial: "The transformation they brought to our operations was nothing short of amazing. Their expertise and commitment to quality helped us streamline our processes and achieve remarkable growth in record time.",
            company: "Innovation Labs",
            location: "Boston, MA"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br  py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Hear from the amazing clients who have trusted us with their success stories and achieved remarkable results.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        modules={[Autoplay, Pagination, EffectFade]}
                        className="testimonialSwiper pb-16"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mx-4 relative overflow-hidden">

                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-purple-50 rounded-full transform translate-x-32 -translate-y-32 opacity-50"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50 to-blue-50 rounded-full transform -translate-x-24 translate-y-24 opacity-50"></div>

                                    <div className="relative z-10">
                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                                <Quote className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex justify-center mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                                            "{testimonial.testimonial}"
                                        </blockquote>

                                        {/* Client Info */}
                                        <div className="flex items-center justify-center space-x-6">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                                                />
                                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                                                <p className="text-blue-600 font-semibold mb-1">{testimonial.role}</p>
                                                <p className="text-gray-600 text-sm">{testimonial.company}</p>
                                                <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mobileTestimonialSwiper pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-2xl shadow-xl p-6 mx-2 relative overflow-hidden">

                                    {/* Background Pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-purple-50 rounded-full transform translate-x-16 -translate-y-16 opacity-40"></div>

                                    <div className="relative z-10">
                                        {/* Quote Icon */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                                <Quote className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-lg text-gray-700 text-center leading-relaxed mb-6 font-medium">
                                            "{testimonial.testimonial}"
                                        </blockquote>

                                        {/* Client Info */}
                                        <div className="text-center">
                                            <div className="relative inline-block mb-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 mx-auto"
                                                />
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                                            <p className="text-blue-600 font-semibold text-sm mb-1">{testimonial.role}</p>
                                            <p className="text-gray-600 text-sm">{testimonial.company}</p>
                                            <p className="text-gray-500 text-xs">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-semibold">500+ Happy Clients</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Star className="w-5 h-5 text-yellow-600 fill-current" />
                            </div>
                            <span className="font-semibold">4.9/5 Average Rating</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-semibold">100% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .testimonialSwiper .swiper-pagination-bullet,
                .mobileTestimonialSwiper .swiper-pagination-bullet {
                    background: #3b82f6;
                    opacity: 0.3;
                    width: 12px;
                    height: 12px;
                }
                
                .testimonialSwiper .swiper-pagination-bullet-active,
                .mobileTestimonialSwiper .swiper-pagination-bullet-active {
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                    opacity: 1;
                    transform: scale(1.3);
                }

                .testimonialSwiper .swiper-pagination {
                    bottom: 0px;
                }

                .mobileTestimonialSwiper .swiper-pagination {
                    bottom: 0px;
                }
            `}</style>
        </div>
    );
};

export default Testimonials;