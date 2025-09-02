import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, Target, Award, Zap, Globe, Heart, Star, ArrowRight, Play, Sparkles, TrendingUp, Shield, Coffee, Code, Palette, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('story');
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        // Animated counters
        const timer1 = setInterval(() => setCounter1(prev => prev < 150 ? prev + 3 : 150), 50);
        const timer2 = setInterval(() => setCounter2(prev => prev < 98 ? prev + 2 : 98), 60);
        const timer3 = setInterval(() => setCounter3(prev => prev < 24 ? prev + 1 : 24), 100);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
        };
    }, []);

    const features = [
        { icon: <Code className="w-8 h-8" />, title: "Development Excellence", desc: "Cutting-edge code that scales", color: "from-blue-400 to-blue-600" },
        { icon: <Palette className="w-8 h-8" />, title: "Creative Design", desc: "Visually stunning experiences", color: "from-purple-400 to-purple-600" },
        { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", desc: "Optimized for performance", color: "from-yellow-400 to-orange-500" },
        { icon: <Shield className="w-8 h-8" />, title: "Secure & Reliable", desc: "Built with security first", color: "from-green-400 to-green-600" },
        { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Serving clients worldwide", color: "from-indigo-400 to-blue-500" },
        { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation Lab", desc: "Tomorrow's tech today", color: "from-amber-400 to-yellow-500" }
    ];

    const teamMembers = [
        { name: "Alex Chen", role: "Founder & CEO", specialty: "Product Vision", avatar: "👨‍💼", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
        { name: "Sarah Kim", role: "Lead Designer", specialty: "UX/UI Magic", avatar: "👩‍🎨", color: "bg-gradient-to-br from-purple-400 to-purple-600" },
        { name: "Mike Rodriguez", role: "Tech Lead", specialty: "Full-Stack Ninja", avatar: "👨‍💻", color: "bg-gradient-to-br from-green-400 to-green-600" },
        { name: "Emily Watson", role: "Growth Director", specialty: "Strategy Guru", avatar: "👩‍🚀", color: "bg-gradient-to-br from-pink-400 to-pink-600" }
    ];

    const milestones = [
        { year: "2020", title: "Founded", desc: "Started with a dream and laptop", icon: <Sparkles className="w-6 h-6" /> },
        { year: "2021", title: "First Major Client", desc: "Landed Fortune 500 contract", icon: <TrendingUp className="w-6 h-6" /> },
        { year: "2022", title: "Team Expansion", desc: "Grew to 15+ specialists", icon: <Users className="w-6 h-6" /> },
        { year: "2023", title: "Global Recognition", desc: "Won 3 industry awards", icon: <Award className="w-6 h-6" /> },
        { year: "2024", title: "Innovation Hub", desc: "Launched R&D division", icon: <Lightbulb className="w-6 h-6" /> }
    ];

    const values = [
        { icon: <Heart className="w-6 h-6" />, title: "Passion-Driven", desc: "We love what we do", color: "text-red-500" },
        { icon: <Star className="w-6 h-6" />, title: "Excellence Always", desc: "No compromises on quality", color: "text-yellow-500" },
        { icon: <Users className="w-6 h-6" />, title: "Client Success", desc: "Your win is our win", color: "text-blue-500" },
        { icon: <Zap className="w-6 h-6" />, title: "Innovation First", desc: "Always pushing boundaries", color: "text-purple-500" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
            {/* Static Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-200 shadow-lg">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-600 text-sm font-medium">Award-Winning Digital Agency</span>
                    </div> */}

                    {/* Video Section */}
                    <div className="mb-8">
                        <div className="relative">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-84 md:h-80 lg:h-[80vh] object-cover"
                            >
                                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
                        We don't just build websites, we craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">digital experiences</span> that captivate, convert, and inspire
                    </p>

                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            Watch Our Story
                        </button>
                        <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div> */}
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-blue-300 shadow-lg">
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
                            {counter1}+
                        </div>
                        <div className="text-gray-600 text-lg font-medium">Projects Delivered</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-purple-300 shadow-lg">
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                            {counter2}%
                        </div>
                        <div className="text-gray-600 text-lg font-medium">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-green-300 shadow-lg">
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2">
                            {counter3}/7
                        </div>
                        <div className="text-gray-600 text-lg font-medium">Always Available</div>
                    </div>
                </div>

                {/* Tabbed Content Section */}
                <div className="mb-20">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['story', 'team', 'journey'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Story Tab */}
                    {activeTab === 'story' && (
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Born from a simple belief that <span className="text-blue-600 font-semibold">technology should empower, not complicate</span>.
                                        We started Proplyy in a garage with nothing but passion and a vision to revolutionize how businesses connect with their audiences.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Today, we're proud to be the creative force behind some of the web's most <span className="text-purple-600 font-semibold">innovative digital experiences</span>.
                                        Our journey from startup to industry leader is fueled by one thing: your success.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Coffee className="w-6 h-6 text-yellow-500" />
                                        <span className="text-gray-500">Powered by coffee and creativity since 2020</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                                        <div className="text-6xl mb-4">🚀</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission Control</h3>
                                        <p className="text-gray-600">Every project is a mission to Mars - ambitious, precise, and absolutely extraordinary.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Team Tab */}
                    {activeTab === 'team' && (
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Meet The Dream Team</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="group text-center">
                                        <div className={`w-24 h-24 ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                                            {member.avatar}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                                        <p className="text-gray-500 text-sm">{member.specialty}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Journey Tab */}
                    {activeTab === 'journey' && (
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="flex items-center gap-6 group">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                            {milestone.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                                                <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                                            </div>
                                            <p className="text-gray-600">{milestone.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Features Grid */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What Makes Us Different</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 text-center transform hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4 group-hover:scale-110 transition-all duration-300 ${value.color}`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-200 shadow-xl">
                        <div className="flex justify-center mb-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600'} border-2 border-white flex items-center justify-center text-white font-bold shadow-lg`}>
                                        ⭐
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">Ready to Create Magic Together?</h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join 150+ businesses that trust Proplyy to bring their digital dreams to life.
                            Let's build something extraordinary.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                                <Sparkles className="w-6 h-6" />
                                Start Your Project
                                <ArrowRight className="w-6 h-6" />
                            </button>
                            <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}