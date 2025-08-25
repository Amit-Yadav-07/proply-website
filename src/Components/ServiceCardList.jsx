import React from 'react';
import { ArrowRight, TrendingUp, Building2, UserCheck, Home, Users, Handshake, Star, Award } from 'lucide-react';

const ServicesCardList = () => {
  const services = [
    {
      id: 1,
      title: "Developer",
      subtitle: "Building tomorrow's landmarks",
      icon: Building2,
      bgGradient: "from-blue-600 via-blue-700 to-indigo-800",
      details: {
        description: "From concept to completion, we develop premium residential and commercial properties that set new standards in luxury and sustainability.",
        stats: [
          { label: "Projects Completed", value: "250+", icon: Award },
          { label: "Sq.Ft Developed", value: "8.5M+", icon: Building2 },
          { label: "Investment Value", value: "$4.2B", icon: TrendingUp },
          { label: "Average Timeline", value: "16 Months", icon: Star }
        ],
        features: [
          "Luxury Residential Complexes",
          "Commercial Office Spaces",
          "Mixed-Use Developments",
          "Sustainable Architecture"
        ]
      }
    },
    {
      id: 2,
      title: "Channel Partnership",
      subtitle: "Connecting markets globally",
      icon: Handshake,
      bgGradient: "from-purple-600 via-purple-700 to-pink-800",
      details: {
        description: "Strategic partnerships with leading real estate firms, brokers, and investors to maximize market reach and investment opportunities.",
        stats: [
          { label: "Partner Network", value: "500+", icon: Users },
          { label: "Global Markets", value: "35+", icon: Star },
          { label: "Deal Volume", value: "$1.8B", icon: TrendingUp },
          { label: "Success Rate", value: "94%", icon: Award }
        ],
        features: [
          "Broker Network Management",
          "International Partnerships",
          "Investment Syndication",
          "Market Intelligence"
        ]
      }
    },
    {
      id: 3,
      title: "Customer Solutions",
      subtitle: "Tailored real estate experiences",
      icon: UserCheck,
      bgGradient: "from-green-600 via-emerald-700 to-teal-800",
      details: {
        description: "Comprehensive customer-centric services from property search to post-purchase support, ensuring seamless real estate experiences.",
        stats: [
          { label: "Happy Clients", value: "5,000+", icon: Users },
          { label: "Satisfaction Rate", value: "98%", icon: Star },
          { label: "Properties Sold", value: "2,800+", icon: Home },
          { label: "Support Response", value: "< 2 Hours", icon: Award }
        ],
        features: [
          "Property Consultation",
          "Legal & Documentation",
          "Financing Assistance",
          "After-Sales Support"
        ]
      }
    },
    {
      id: 4,
      title: "Investment Services",
      subtitle: "Premium investment opportunities",
      icon: TrendingUp,
      bgGradient: "from-orange-600 via-red-700 to-rose-800",
      details: {
        description: "High-yield real estate investment opportunities with comprehensive portfolio management and risk assessment for institutional and individual investors.",
        stats: [
          { label: "Portfolio Value", value: "$3.5B", icon: TrendingUp },
          { label: "Average ROI", value: "28%", icon: Award },
          { label: "Active Investors", value: "1,500+", icon: Users },
          { label: "Investment Properties", value: "850+", icon: Building2 }
        ],
        features: [
          "Portfolio Diversification",
          "Risk Assessment",
          "Market Analysis",
          "Wealth Management"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Real Estate Excellence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive real estate solutions designed to exceed expectations and deliver exceptional value across all property sectors
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              className="group relative h-100 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Main Card */}
              <div className={`relative w-full h-full bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-2xl`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-6 -translate-x-6"></div>
                </div>

                {/* Card Content */}
                <div className="relative h-full p-8 text-white flex flex-col">

                  {/* Normal State Content */}
                  <div className="group-hover:opacity-0 group-hover:scale-95 transition-all duration-500 ease-out">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-3 mb-8">
                      <h3 className="text-2xl font-bold leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-lg font-light">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Learn More Indicator */}
                    <div className="mt-auto">
                      <div className="flex items-center text-white/80 text-sm font-medium">
                        <span>Hover for details</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Hover State Content */}
                  <div className="absolute inset-8 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out delay-200">

                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <IconComponent className="w-6 h-6 mr-2" />
                        <h4 className="text-xl font-bold">{service.title}</h4>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {service.details.description}
                      </p>
                    </div>



                    {/* Key Features */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-white/90 mb-3">Key Services:</div>
                      <div className="space-y-2">
                        {service.details.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-white/90">
                            <div className="w-1.5 h-1.5 bg-white/80 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group/btn">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transform scale-110 transition-all duration-700 ease-out -z-10`}></div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      {/* <div className="max-w-4xl mx-auto text-center mt-20">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Real Estate Experience?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Connect with our experts and discover how we can help you achieve your property goals.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto group">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ServicesCardList;