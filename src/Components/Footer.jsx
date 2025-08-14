// Footer.jsx
import React from 'react';
import { 
 Shield, 
 Mail, 
 Phone, 
 MapPin, 
 Facebook, 
 Twitter, 
 Instagram, 
 Linkedin, 
 Youtube,
 ArrowRight,
 TrendingUp,
 Building2,
 UserCheck,
 Home,
 Star,
 Award,
 Globe
} from 'lucide-react';

const Footer = () => {
 const currentYear = new Date().getFullYear();

 const footerLinks = {
   services: [
     { name: "Property Investment", href: "#investment", icon: TrendingUp },
     { name: "Property Development", href: "#development", icon: Building2 },
     { name: "Property Management", href: "#management", icon: UserCheck },
     { name: "Luxury Residential", href: "#residential", icon: Home }
   ],
   company: [
     { name: "About Us", href: "#about" },
     { name: "Our Team", href: "#team" },
     { name: "Careers", href: "#careers" },
     { name: "Press & Media", href: "#press" },
     { name: "Partners", href: "#partners" },
     { name: "Awards", href: "#awards" }
   ],
   resources: [
     { name: "Market Reports", href: "#reports" },
     { name: "Investment Guide", href: "#guide" },
     { name: "Blog & Insights", href: "#blog" },
     { name: "Case Studies", href: "#cases" },
     { name: "Webinars", href: "#webinars" },
     { name: "Documentation", href: "#docs" }
   ],
   support: [
     { name: "Help Center", href: "#help" },
     { name: "Contact Support", href: "#support" },
     { name: "Live Chat", href: "#chat" },
     { name: "FAQ", href: "#faq" },
     { name: "Community", href: "#community" },
     { name: "Feedback", href: "#feedback" }
   ],
   legal: [
     { name: "Privacy Policy", href: "#privacy" },
     { name: "Terms of Service", href: "#terms" },
     { name: "Cookie Policy", href: "#cookies" },
     { name: "GDPR Compliance", href: "#gdpr" },
     { name: "Disclaimer", href: "#disclaimer" }
   ]
 };

 const socialLinks = [
   { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
   { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
   { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
   { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
   { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" }
 ];

 const achievements = [
   { icon: Award, label: "Industry Leader", value: "15+ Years" },
   { icon: Star, label: "Client Rating", value: "4.9/5" },
   { icon: Globe, label: "Global Reach", value: "25+ Cities" },
   { icon: TrendingUp, label: "Portfolio Value", value: "$8.5B+" }
 ];

 const contactInfo = [
   { 
     icon: MapPin, 
     label: "Headquarters", 
     value: "123 Real Estate Plaza, New York, NY 10001",
     link: "#location"
   },
   { 
     icon: Phone, 
     label: "Phone", 
     value: "+1 (555) 123-4567",
     link: "tel:+15551234567"
   },
   { 
     icon: Mail, 
     label: "Email", 
     value: "hello@proplyy.com",
     link: "mailto:hello@proplyy.com"
   }
 ];

 return (
   <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
     {/* Background Pattern */}
     <div className="absolute inset-0 opacity-5">
       <div className="absolute inset-0" style={{
         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
       }} />
     </div>

     <div className="relative">
       {/* Top Section - Newsletter & CTA */}
       <div className="border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             {/* Left - Newsletter */}
             <div>
               <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                 Stay Ahead of the Market
               </h3>
               <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                 Get exclusive market insights, investment opportunities, and industry reports delivered to your inbox weekly.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <div className="flex-1 relative">
                   <input
                     type="email"
                     placeholder="Enter your email address"
                     className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                   />
                 </div>
                 <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-xl">
                   <span>Subscribe</span>
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
             </div>

             {/* Right - Achievements */}
             <div className="grid grid-cols-2 gap-4">
               {achievements.map((achievement, index) => {
                 const IconComponent = achievement.icon;
                 return (
                   <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                     <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-3">
                       <IconComponent className="w-6 h-6 text-blue-400" />
                     </div>
                     <div className="font-bold text-xl text-white mb-1">{achievement.value}</div>
                     <div className="text-gray-400 text-sm">{achievement.label}</div>
                   </div>
                 );
               })}
             </div>
           </div>
         </div>
       </div>

       {/* Main Footer Content */}
       <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
           
           {/* Company Info - Takes 2 columns on large screens */}
           <div className="lg:col-span-2">
             <div className="flex items-center space-x-3 mb-6">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                 <Shield className="w-6 h-6 text-white" />
               </div>
               <div className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                 Proplyy
               </div>
             </div>
             
             <p className="text-gray-300 mb-8 leading-relaxed">
               Leading the future of real estate with innovative solutions, strategic investments, and unparalleled expertise. Your trusted partner in building wealth through property.
             </p>

             {/* Contact Info */}
             <div className="space-y-4 mb-8">
               {contactInfo.map((contact, index) => {
                 const IconComponent = contact.icon;
                 return (
                   <a 
                     key={index}
                     href={contact.link}
                     className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                   >
                     <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                       <IconComponent className="w-4 h-4" />
                     </div>
                     <div>
                       <div className="text-sm text-gray-400">{contact.label}</div>
                       <div className="font-medium">{contact.value}</div>
                     </div>
                   </a>
                 );
               })}
             </div>

             {/* Social Links */}
             <div className="flex space-x-3">
               {socialLinks.map((social) => {
                 const IconComponent = social.icon;
                 return (
                   <a
                     key={social.name}
                     href={social.href}
                     aria-label={social.name}
                     className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm text-gray-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color} hover:shadow-lg`}
                   >
                     <IconComponent className="w-5 h-5" />
                   </a>
                 );
               })}
             </div>
           </div>

           {/* Services Links */}
           <div>
             <h4 className="font-bold text-white text-lg mb-6">Our Services</h4>
             <ul className="space-y-3">
               {footerLinks.services.map((link) => {
                 const IconComponent = link.icon;
                 return (
                   <li key={link.name}>
                     <a
                       href={link.href}
                       className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                     >
                       <IconComponent className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                       <span>{link.name}</span>
                     </a>
                   </li>
                 );
               })}
             </ul>
           </div>

           {/* Company Links */}
           <div>
             <h4 className="font-bold text-white text-lg mb-6">Company</h4>
             <ul className="space-y-3">
               {footerLinks.company.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           {/* Resources Links */}
           <div>
             <h4 className="font-bold text-white text-lg mb-6">Resources</h4>
             <ul className="space-y-3">
               {footerLinks.resources.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           {/* Support Links */}
           <div>
             <h4 className="font-bold text-white text-lg mb-6">Support</h4>
             <ul className="space-y-3">
               {footerLinks.support.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>

       {/* Bottom Section */}
       <div className="border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
           <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
             {/* Copyright */}
             <div className="text-gray-400 text-center lg:text-left">
               <p>&copy; {currentYear} Proplyy. All rights reserved. Built with excellence and innovation.</p>
             </div>

             {/* Legal Links */}
             <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
               {footerLinks.legal.map((link, index) => (
                 <React.Fragment key={link.name}>
                   <a
                     href={link.href}
                     className="text-gray-400 hover:text-white transition-colors duration-300"
                   >
                     {link.name}
                   </a>
                   {index < footerLinks.legal.length - 1 && (
                     <span className="text-gray-600">•</span>
                   )}
                 </React.Fragment>
               ))}
             </div>
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
};

export default Footer;