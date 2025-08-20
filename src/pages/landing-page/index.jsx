import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SolutionOverview from './components/SolutionOverview';
import ProblemSection from './components/ProblemSection';
import FeaturesComparison from './components/FeaturesComparison';
import PaymentMethods from './components/PaymentMethods';
import BusinessTools from './components/BusinessTools';
import PricingSection from './components/PricingSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import StatisticsCounter from './components/StatisticsCounter';
import TrustBadges from './components/TrustBadges';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handlePreviewClick = () => {
    setIsPreviewModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection 
        onDemoClick={handleDemoClick}
        onPreviewClick={handlePreviewClick}
      />
      {/* Trust Badges */}
      <TrustBadges />
      {/* Problem Section */}
      <ProblemSection />
      {/* Solution Overview */}
      <SolutionOverview />
      {/* Features Comparison */}
      <FeaturesComparison />
      {/* Payment Methods */}
      <PaymentMethods />
      {/* Business Tools */}
      <BusinessTools />
      {/* Statistics Counter */}
      <StatisticsCounter />
      {/* Testimonials */}
      <TestimonialsCarousel />
      {/* Pricing Section */}
      <PricingSection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Final CTA */}
      <FinalCTA 
        onDemoClick={handleDemoClick}
      />
      {/* Demo Modal */}
      {isDemoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeDemoModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e?.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Schedule Your Free Demo
            </h3>
            <p className="text-gray-600 mb-6">
              See how Revoluno can transform your business in just 30 minutes.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div className="flex gap-3">
                <button
                  onClick={closeDemoModal}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Preview Modal */}
      {isPreviewModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePreviewModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Platform Preview
              </h3>
              <button
                onClick={closePreviewModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-600">Interactive Demo Video Coming Soon</p>
            </div>
            <p className="text-gray-600 mb-4">
              Experience how Revoluno unifies your entire business operations in one platform.
            </p>
            <button
              onClick={closePreviewModal}
              className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Close Preview
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LandingPage;