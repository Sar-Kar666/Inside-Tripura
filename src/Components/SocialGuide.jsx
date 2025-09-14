import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Heart, ExternalLink } from 'lucide-react';

// Card Component for Social Platforms
const SocialCard = ({ platforms, hoveredSocial, setHoveredSocial }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {platforms.map((platform, index) => (
        <Card key={platform.name} platform={platform} hoveredSocial={hoveredSocial} setHoveredSocial={setHoveredSocial} />
      ))}
    </div>
  );
};

// Individual Card Component
const Card = ({ platform, hoveredSocial, setHoveredSocial }) => {
  const IconComponent = platform.icon;
  
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ${platform.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-100/10 cursor-pointer ${platform.hoverBg}`}
      onMouseEnter={() => setHoveredSocial(platform.name)}
      onMouseLeave={() => setHoveredSocial(null)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />
      
      <CardContent platform={platform} IconComponent={IconComponent} hoveredSocial={hoveredSocial} />

      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 transition-opacity duration-300 ${hoveredSocial === platform.name ? 'opacity-5' : ''}`} />
    </div>
  );
};

// Card Content Component
const CardContent = ({ platform, IconComponent, hoveredSocial }) => {
  return (
    <div className="relative p-8">
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${platform.color} mb-6 shadow-lg transform transition-transform duration-300 ${hoveredSocial === platform.name ? 'rotate-12 scale-110' : ''}`}>
        <IconComponent className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
        {platform.name}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
        {platform.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {platform.handle}
        </span>
        
        <ExternalLink className={`w-4 h-4 text-slate-400 transition-all duration-300 ${hoveredSocial === platform.name ? 'translate-x-1 -translate-y-1 text-slate-600 dark:text-slate-300' : ''}`} />
      </div>
    </div>
  );
};

const SocialGuide = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-purple-500 to-pink-500',
      description: 'Behind-the-scenes content & visual stories',
      handle: '@yourcompany',
      url: '#',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      hoverBg: 'hover:from-purple-500/20 hover:to-pink-500/20'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-blue-400 to-blue-600',
      description: 'Latest updates & industry insights',
      handle: '@yourcompany',
      url: '#',
      bgColor: 'bg-gradient-to-br from-blue-400/10 to-blue-600/10',
      hoverBg: 'hover:from-blue-400/20 hover:to-blue-600/20'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      description: 'Professional updates & networking',
      handle: 'Your Company',
      url: '#',
      bgColor: 'bg-gradient-to-br from-blue-600/10 to-blue-800/10',
      hoverBg: 'hover:from-blue-600/20 hover:to-blue-800/20'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'from-red-500 to-red-700',
      description: 'Tutorials, reviews & video content',
      handle: 'Your Channel',
      url: '#',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-red-700/10',
      hoverBg: 'hover:from-red-500/20 hover:to-red-700/20'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-500 to-blue-700',
      description: 'Community discussions & events',
      handle: 'Your Company',
      url: '#',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-700/10',
      hoverBg: 'hover:from-blue-500/20 hover:to-blue-700/20'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-600',
      description: 'Real-time chat & community',
      handle: 'Join Our Server',
      url: '#',
      bgColor: 'bg-gradient-to-br from-indigo-500/10 to-purple-600/10',
      hoverBg: 'hover:from-indigo-500/20 hover:to-purple-600/20'
    }
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Stay Connected</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Follow Our Journey
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join our community across social platforms for exclusive content, updates, and behind-the-scenes insights. 
            Choose your favorite platform and stay in the loop!
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ${platform.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-100/10 cursor-pointer ${platform.hoverBg}`}
                onMouseEnter={() => setHoveredSocial(platform.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${platform.color} mb-6 shadow-lg transform transition-transform duration-300 ${hoveredSocial === platform.name ? 'rotate-12 scale-110' : ''}`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {platform.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {platform.handle}
                    </span>
                    
                    <ExternalLink className={`w-4 h-4 text-slate-400 transition-all duration-300 ${hoveredSocial === platform.name ? 'translate-x-1 -translate-y-1 text-slate-600 dark:text-slate-300' : ''}`} />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 transition-opacity duration-300 ${hoveredSocial === platform.name ? 'opacity-5' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Never Miss an Update
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Be the first to know about new features, events, and exclusive content
              </p>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Follow All Platforms
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">50K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Total Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">Daily</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Content Updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">24/7</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialGuide;