// ServicesCardList.jsx
import React from 'react';
import { ArrowRight, TrendingUp, Building2, UserCheck, Home } from 'lucide-react';

const ServicesCardList = () => {
  const services = [
    {
      id: 1,
      title: "Investment",
      shortDescription: "High-return property investments",
      stats: {
        roi: "25%",
        properties: "500+",
        invested: "$2.5B",
        clients: "1,200+"
      },
      clientLogos: [
        { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
        { name: "JPMorgan", logo: "https://logo.clearbit.com/jpmorgan.com" },
        { name: "BlackRock", logo: "https://logo.clearbit.com/blackrock.com" },
        { name: "Vanguard", logo: "https://logo.clearbit.com/vanguard.com" },
        { name: "Morgan Stanley", logo: "https://logo.clearbit.com/morganstanley.com" },
        { name: "Wells Fargo", logo: "https://logo.clearbit.com/wellsfargo.com" }
      ],
      icon: TrendingUp,
      bgGradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Development",
      shortDescription: "Premium property development",
      stats: {
        projects: "150+",
        sqft: "5M+",
        value: "$3.2B",
        timeline: "18mo"
      },
      clientLogos: [
        { name: "Marriott", logo: "https://logo.clearbit.com/marriott.com" },
        { name: "Hilton", logo: "https://logo.clearbit.com/hilton.com" },
        { name: "WeWork", logo: "https://logo.clearbit.com/wework.com" },
        { name: "CBRE", logo: "https://logo.clearbit.com/cbre.com" },
        { name: "Brookfield", logo: "https://logo.clearbit.com/brookfield.com" },
        { name: "Related", logo: "https://logo.clearbit.com/related.com" }
      ],
      icon: Building2,
      bgGradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 3,
      title: "Management",
      shortDescription: "Complete property management",
      stats: {
        managed: "2,000+",
        occupancy: "98%",
        revenue: "$850M",
        response: "2hrs"
      },
      clientLogos: [
        { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
        { name: "Booking.com", logo: "https://logo.clearbit.com/booking.com" },
        { name: "Expedia", logo: "https://logo.clearbit.com/expedia.com" },
        { name: "Zillow", logo: "https://logo.clearbit.com/zillow.com" },
        { name: "Redfin", logo: "https://logo.clearbit.com/redfin.com" },
        { name: "Compass", logo: "https://logo.clearbit.com/compass.com" }
      ],
      icon: UserCheck,
      bgGradient: "from-pink-500 via-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "Residential",
      shortDescription: "Luxury residential solutions",
      stats: {
        homes: "3,500+",
        avgPrice: "$2.8M",
        satisfaction: "99%",
        locations: "25+"
      },
      clientLogos: [
        { name: "Sotheby's", logo: "https://logo.clearbit.com/sothebysrealty.com" },
        { name: "Coldwell Banker", logo: "https://logo.clearbit.com/coldwellbanker.com" },
        { name: "RE/MAX", logo: "https://logo.clearbit.com/remax.com" },
        { name: "Century 21", logo: "https://logo.clearbit.com/century21.com" },
        { name: "Keller Williams", logo: "https://logo.clearbit.com/kw.com" },
        { name: "Douglas Elliman", logo: "https://logo.clearbit.com/elliman.com" }
      ],
      icon: Home,
      bgGradient: "from-green-500 via-teal-500 to-blue-500"
    }
  ];

  return (
    <div className="w-full px-4 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Real Estate Services
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Premium solutions across all property sectors
        </p>
      </div>
   
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          
          return (
            <div
              key={service.id}
              className="relative h-[500px] lg:h-[600px] group cursor-pointer"
            >
              {/* Card Container */}
              <div className={`w-full h-full bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl`}>
                
                {/* Card Content */}
                <div className="h-full p-6 text-white flex flex-col">
                  
                  {/* Top Icon - Always visible */}
                  <div className="flex items-center justify-center mb-auto">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
   
                  {/* Content Container */}
                  <div className="space-y-4 mt-auto group-hover:mt-0 transition-all duration-500">
                    
                    {/* Line 1: Title - Always visible */}
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {service.title}
                    </h3>
                    
                    {/* Line 2: Short Description - Always visible */}
                    <p className="text-white/90 text-lg">
                      {service.shortDescription}
                    </p>
   
                    {/* Line 3: Stats - Appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                            <div className="font-bold">{value}</div>
                            <div className="text-white/80 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
   
                    {/* Line 4: More Stats - Appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(service.stats).slice(2, 4).map(([key, value]) => (
                          <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                            <div className="font-bold">{value}</div>
                            <div className="text-white/80 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
   
                    {/* Line 5: Company Logos - Appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                      <div className="text-center text-sm text-white/90 mb-2">Trusted by</div>
                      <div className="grid grid-cols-3 gap-2">
                        {service.clientLogos.slice(0, 3).map((client, index) => (
                          <div key={client.name} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="h-4 w-auto object-contain brightness-0 invert opacity-90"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <span className="text-xs text-white/80 font-medium hidden">
                              {client.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
   
                    {/* Line 6: CTA Button - Appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
                      <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg">
                        Get Started
                      </button>
                    </div>
   
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
   
      <style jsx>{`
        .brightness-0 {
          filter: brightness(0);
        }
        .invert {
          filter: invert(1);
        }
      `}</style>
    </div>
   );
};

export default ServicesCardList;