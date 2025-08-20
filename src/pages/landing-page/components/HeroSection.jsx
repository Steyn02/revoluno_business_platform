import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onDemoClick, onPreviewClick }) => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({
    businesses: 0,
    processed: 0,
    uptime: 0
  });

  const metrics = [
    { label: "Businesses Served", value: 25000, suffix: "K+", key: "businesses", displayValue: 25 },
    { label: "Revenue Processed", value: 50000000, suffix: "M+", key: "processed", displayValue: 50 },
    { label: "Platform Uptime", value: 99.9, suffix: "%", key: "uptime", displayValue: 99.9 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      metrics?.forEach((metric) => {
        let start = 0;
        const end = metric?.displayValue;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedCounts(prev => ({
            ...prev,
            [metric?.key]: metric?.key === 'uptime' ? start?.toFixed(1) : Math.floor(start)
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Sell Everywhere.
            </span>
            <br />
            <span className="text-gray-900">Grow Faster.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              One Platform.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unite your online store, in-person POS, and business loans in one powerful system - 
            <span className="text-indigo-600 font-semibold"> no more juggling multiple vendors.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="default"
              size="lg"
              onClick={onDemoClick}
              className="shadow-cta font-semibold text-lg px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              iconName="Calendar"
              iconPosition="left"
            >
              Get Free Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onPreviewClick}
              className="font-semibold text-lg px-8 py-4 border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              iconName="Play"
              iconPosition="left"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {metrics?.map((metric, index) => (
              <motion.div
                key={metric?.key}
                className={`text-center p-4 rounded-lg transition-all duration-500 ${
                  currentMetric === index 
                    ? 'bg-white shadow-lg scale-105 border border-indigo-100' 
                    : 'bg-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                  {animatedCounts?.[metric?.key]}{metric?.suffix}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {metric?.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <Icon name="ChevronDown" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;