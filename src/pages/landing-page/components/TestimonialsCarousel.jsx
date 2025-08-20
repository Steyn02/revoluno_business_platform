import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Owner, Bloom Coffee Roasters",
      business: "Coffee Shop Chain",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `Revoluno transformed our business completely. We went from juggling 5 different systems to having everything in one place. Our revenue increased by 45% in just 6 months, and we're saving over 20 hours per week on admin tasks.`,
      metrics: {
        revenueIncrease: "45%",
        timeSaved: "20 hrs/week",
        implementation: "2 weeks"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop",
      hasVideo: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CEO, StyleHub Boutique",
      business: "Fashion Retail",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `The unified inventory system alone paid for itself in the first month. No more overselling online when we're out of stock in-store. The business loan feature helped us expand to our second location without the traditional banking headaches.`,
      metrics: {
        revenueIncrease: "60%",
        timeSaved: "15 hrs/week",
        implementation: "1 week"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      hasVideo: true
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      title: "Founder, Wellness Studio",
      business: "Health & Wellness",
      location: "Denver, CO",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `As a service business, the appointment booking and payment processing integration is a game-changer. Clients can book and pay online, and everything syncs perfectly. Our no-show rate dropped by 70% with automated reminders.`,
      metrics: {
        revenueIncrease: "35%",
        timeSaved: "25 hrs/week",
        implementation: "3 days"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      hasVideo: false
    },
    {
      id: 4,
      name: "David Kim",
      title: "Owner, TechFix Solutions",
      business: "Electronics Repair",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `The analytics dashboard gives me insights I never had before. I can see which services are most profitable, track customer lifetime value, and make data-driven decisions. The ROI tracking shows we've increased efficiency by 80%.`,
      metrics: {
        revenueIncrease: "50%",
        timeSaved: "18 hrs/week",
        implementation: "1 week"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      hasVideo: true
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Co-owner, Farm Fresh Market",
      business: "Grocery & Produce",
      location: "Portland, OR",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `Managing perishable inventory was our biggest challenge. Revoluno's smart alerts and automated reordering based on sales patterns reduced our waste by 40% while ensuring we never run out of popular items.`,
      metrics: {
        revenueIncrease: "30%",
        timeSaved: "12 hrs/week",
        implementation: "5 days"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
      hasVideo: false
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from <span className="text-indigo-600">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how businesses like yours have transformed their operations and 
            accelerated growth with Revoluno's unified platform.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Testimonial Content */}
                <div>
                  {/* Quote */}
                  <div className="mb-6">
                    <Icon name="Quote" size={40} className="text-indigo-300 mb-4" />
                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      "{currentTestimonial?.quote}"
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <img
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {currentTestimonial?.name}
                      </h4>
                      <p className="text-gray-600">{currentTestimonial?.title}</p>
                      <p className="text-sm text-gray-500">
                        {currentTestimonial?.business} • {currentTestimonial?.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">
                      {currentTestimonial?.rating}.0 out of 5
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">
                        {currentTestimonial?.metrics?.revenueIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-indigo-600">
                        {currentTestimonial?.metrics?.timeSaved}
                      </div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-purple-600">
                        {currentTestimonial?.metrics?.implementation}
                      </div>
                      <div className="text-sm text-gray-600">Setup Time</div>
                    </div>
                  </div>
                </div>

                {/* Video/Image */}
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={currentTestimonial?.videoThumbnail}
                      alt={`${currentTestimonial?.business} case study`}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    {currentTestimonial?.hasVideo && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Icon name="Play" size={24} className="text-indigo-600 ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Business Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {currentTestimonial?.business}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <Icon name="ChevronLeft" size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <Icon name="ChevronRight" size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-indigo-600 w-8' :'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {testimonials?.map((testimonial, index) => (
            <motion.button
              key={testimonial?.id}
              onClick={() => goToTestimonial(index)}
              className={`relative p-3 rounded-lg transition-all ${
                index === currentIndex
                  ? 'bg-indigo-100 border-2 border-indigo-300' :'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {testimonial?.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {testimonial?.business}
                  </div>
                </div>
              </div>
              {testimonial?.hasVideo && (
                <Icon name="Play" size={12} className="absolute top-1 right-1 text-indigo-600" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isAutoPlaying
                ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' :'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon 
              name={isAutoPlaying ? "Pause" : "Play"} 
              size={16} 
              className="inline mr-2" 
            />
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
          </button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their operations with Revoluno. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
              Start Your Transformation
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              Read More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;