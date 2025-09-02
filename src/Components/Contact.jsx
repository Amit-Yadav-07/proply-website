import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Home, Calendar, Star, CheckCircle, Globe, Shield, Award, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          budget: '',
          message: '',
          preferredTime: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "connect@proplyy.com",
      description: "Get a response within 24 hours",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 8419901093",
      description: "Available 7 days a week",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "607, Felix Square",
      description: "Sushant Golf City, Lucknow",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 8PM",
      description: "Sunday: 10AM - 6PM",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  const propertyTypes = [
    "Residential Apartment",
    "Villa/Independent House",
    "Commercial Space",
    "Plot/Land",
    "Rental Property",
    "Investment Property"
  ];

  const budgetRanges = [
    "Under ₹50 Lakhs",
    "₹50L - ₹1 Crore",
    "₹1Cr - ₹2 Crores",
    "₹2Cr - ₹5 Crores",
    "Above ₹5 Crores"
  ];

  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "Trusted Service", desc: "100% verified properties" },
    { icon: <Award className="w-8 h-8" />, title: "Expert Guidance", desc: "Professional real estate advice" },
    { icon: <Globe className="w-8 h-8" />, title: "Wide Network", desc: "Extensive property portfolio" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-600 text-sm font-medium">Premium Real Estate Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 mb-6 tracking-tight">
            Let's Find Your Dream Home
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Ready to make your real estate dreams come true? Our expert team is here to guide you through every step of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">property journey</span>
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} text-white rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-900 font-semibold mb-1">{info.value}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for reaching out. Our team will contact you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Time to Call</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Map and Location Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us Here</h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sSushant%20Golf%20City%2C%20Shaheed%20Path%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              500+
            </div>
            <div className="text-gray-600 text-lg font-medium">Properties Sold</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
              1000+
            </div>
            <div className="text-gray-600 text-lg font-medium">Happy Families</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2">
              5★
            </div>
            <div className="text-gray-600 text-lg font-medium">Customer Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-200 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600'} border-2 border-white flex items-center justify-center text-white font-bold shadow-lg`}>
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Ready to Begin Your Property Journey?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their dream homes with Proplyy.
              Your perfect property is just a call away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918419901093"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a
                href="mailto:connect@proplyy.com"
                className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}