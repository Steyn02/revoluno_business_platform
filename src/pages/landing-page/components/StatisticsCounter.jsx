import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [counters, setCounters] = useState({
    businesses: 0,
    revenue: 0,
    uptime: 0,
    support: 0
  });

  const statistics = [
    {
      id: 'businesses',
      icon: 'Building2',
      finalValue: 25000,
      displayValue: '25K+',
      label: 'Businesses Served',
      description: 'Growing businesses trust Revoluno',
      color: 'blue',
      suffix: 'K+'
    },
    {
      id: 'revenue',
      icon: 'DollarSign',
      finalValue: 50,
      displayValue: '$50M+',
      label: 'Revenue Processed',
      description: 'Monthly transaction volume',
      color: 'green',
      prefix: '$',
      suffix: 'M+'
    },
    {
      id: 'uptime',
      icon: 'Shield',
      finalValue: 99.9,
      displayValue: '99.9%',
      label: 'Platform Uptime',
      description: 'Guaranteed reliability',
      color: 'purple',
      suffix: '%',
      decimal: true
    },
    {
      id: 'support',
      icon: 'Clock',
      finalValue: 24,
      displayValue: '24/7',
      label: 'Customer Support',
      description: 'Always here when you need us',
      color: 'orange',
      suffix: '/7'
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const animateCounters = () => {
      statistics?.forEach((stat) => {
        let startValue = 0;
        const endValue = stat?.finalValue;
        const duration = 2000;
        const increment = endValue / (duration / 16);

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }

          setCounters(prev => ({
            ...prev,
            [stat?.id]: stat?.decimal ? startValue?.toFixed(1) : Math.floor(startValue)
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateCounters, 300);
    return () => clearTimeout(timer);
  }, [isInView]);

  const testimonialStats = [
    {
      metric: '40%',
      label: 'Average Revenue Increase',
      description: 'Within first 6 months of using Revoluno'
    },
    {
      metric: '60%',
      label: 'Time Savings',
      description: 'On administrative tasks and reporting'
    },
    {
      metric: '95%',
      label: 'Customer Satisfaction',
      description: 'Based on 10,000+ user reviews'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)]?.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-yellow-400">Thousands</span> of Businesses
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Join the growing community of successful businesses that have transformed 
            their operations with Revoluno's all-in-one platform.
          </p>
        </motion.div>

        {/* Main Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics?.map((stat, index) => (
            <motion.div
              key={stat?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-${stat?.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={stat?.icon} size={32} className={`text-${stat?.color}-300`} />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold">
                    {stat?.prefix || ''}
                    {counters?.[stat?.id]}
                    {stat?.suffix || ''}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {stat?.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-indigo-200">
                  {stat?.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Real Results from Real Businesses
            </h3>
            <p className="text-indigo-200">
              See the impact Revoluno has made on businesses just like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialStats?.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat?.metric}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {stat?.label}
                </h4>
                <p className="text-sm text-indigo-200">
                  {stat?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Growing Fast, Growing Strong
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            {[
              { year: '2022', businesses: '5K', color: 'blue' },
              { year: '2023', businesses: '15K', color: 'purple' },
              { year: '2024', businesses: '25K+', color: 'pink' }
            ]?.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className={`w-12 h-12 bg-${milestone?.color}-500 rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{milestone?.year?.slice(-2)}</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{milestone?.businesses}</div>
                  <div className="text-sm text-indigo-200">Businesses</div>
                </div>
                {index < 2 && (
                  <Icon name="ArrowRight" size={20} className="text-indigo-300 ml-4 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-indigo-100 mb-6">
            Ready to become our next success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors shadow-lg">
              Join 25K+ Businesses
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              See Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsCounter;