import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [isUrgencyVisible, setIsUrgencyVisible] = useState(true);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if(seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          setIsUrgencyVisible(false);
          clearInterval(timer);
          return prev;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Increase Revenue',
      description: 'Average 40% revenue growth in first 6 months',
      color: 'green'
    },
    {
      icon: 'Clock',
      title: 'Save Time',
      description: 'Reduce admin work by 20+ hours per week',
      color: 'blue'
    },
    {
      icon: 'DollarSign',
      title: 'Cut Costs',
      description: 'Save 60% on software and processing fees',
      color: 'purple'
    },
    {
      icon: 'Shield',
      title: 'Reduce Risk',
      description: 'Enterprise-grade security and compliance',
      color: 'orange'
    }
  ];

  const testimonialQuotes = [
    {
      quote: "Revoluno transformed our business completely. 45% revenue increase in 6 months.",
      author: "Sarah Chen, Bloom Coffee Roasters"
    },
    {
      quote: "The unified system paid for itself in the first month. No more overselling!",
      author: "Marcus Rodriguez, StyleHub Boutique"
    },
    {
      quote: "Our no-show rate dropped 70% with automated reminders. Game-changer!",
      author: "Jennifer Walsh, Wellness Studio"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % testimonialQuotes?.length);
    }, 4000);

    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Timer */}
        {isUrgencyVisible && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3">
              <Icon name="Clock" size={20} className="text-red-300 mr-2" />
              <span className="text-red-200 font-medium mr-4">Limited Time Offer Ends In:</span>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{timeLeft?.days}</div>
                  <div className="text-xs text-red-200">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{timeLeft?.hours}</div>
                  <div className="text-xs text-red-200">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{timeLeft?.minutes}</div>
                  <div className="text-xs text-red-200">Min</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{timeLeft?.seconds}</div>
                  <div className="text-xs text-red-200">Sec</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to <span className="text-yellow-400">Transform</span> Your Business?
          </h2>
          <p className="text-xl lg:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
            Join 25,000+ businesses that have already revolutionized their operations with Revoluno. 
            Your competitors are already getting ahead - don't get left behind.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits?.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className={`w-12 h-12 bg-${benefit?.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <Icon name={benefit?.icon} size={24} className={`text-${benefit?.color}-300`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit?.title}</h3>
              <p className="text-indigo-200 text-sm">{benefit?.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rotating Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto"
          >
            <Icon name="Quote" size={32} className="text-yellow-400 mx-auto mb-4" />
            <blockquote className="text-lg text-white mb-4">
              "{testimonialQuotes?.[currentQuote]?.quote}"
            </blockquote>
            <cite className="text-indigo-200 font-medium">
              — {testimonialQuotes?.[currentQuote]?.author}
            </cite>
          </motion.div>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-lg shadow-2xl hover:from-yellow-300 hover:to-orange-400 transition-all"
            >
              <Icon name="Rocket" size={20} className="inline mr-2" />
              Start Free 30-Day Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              <Icon name="Calendar" size={20} className="inline mr-2" />
              Schedule Live Demo
            </motion.button>
          </div>
          <p className="text-indigo-200 mt-4 text-sm">
            ✓ No credit card required  ✓ Setup in 24 hours  ✓ 30-day money-back guarantee
          </p>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-green-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              100% Risk-Free Guarantee
            </h3>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
              Try Revoluno for 30 days completely risk-free. If you don't see measurable improvements in your business efficiency and revenue, we'll refund every penny. No questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">30 Days</div>
                <div className="text-indigo-200">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-indigo-200">Customer Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">Free</div>
                <div className="text-indigo-200">Setup & Migration</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-indigo-200 mb-6">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'TechCrunch', 'Forbes', 'Business Insider', 'Entrepreneur', 'Inc. Magazine'
            ]?.map((publication, index) => (
              <div key={index} className="text-white font-medium">
                {publication}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-yellow-300 font-semibold mb-4">
            🔥 Over 500 businesses joined Revoluno this month
          </p>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Don't let another day pass managing multiple systems, losing revenue to inefficiencies, 
            and watching competitors get ahead. Your transformation starts today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;