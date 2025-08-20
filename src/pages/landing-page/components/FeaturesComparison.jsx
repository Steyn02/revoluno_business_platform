import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FeaturesComparison = () => {
  const [activeView, setActiveView] = useState('current');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      category: "Payment Processing",
      current: {
        title: "Multiple Payment Processors",
        description: "Separate systems for online, in-store, and mobile payments",
        issues: ["3-5 different monthly fees", "Complex reconciliation", "Inconsistent reporting"],
        cost: "$200-500/month",
        efficiency: 30
      },
      revoluno: {
        title: "Unified Payment Hub",
        description: "One system handles all payment types with unified reporting",
        benefits: ["Single monthly fee", "Automatic reconciliation", "Real-time analytics"],
        savings: "60% cost reduction",
        efficiency: 95
      }
    },
    {
      id: 2,
      category: "Inventory Management",
      current: {
        title: "Manual Inventory Tracking",
        description: "Spreadsheets and separate systems that never sync",
        issues: ["Overselling incidents", "Manual stock counts", "No low-stock alerts"],
        cost: "15-25% revenue loss",
        efficiency: 25
      },
      revoluno: {
        title: "Real-time Inventory Sync",
        description: "Automatic updates across all channels with smart alerts",
        benefits: ["Zero overselling", "Automated reordering", "Predictive analytics"],
        savings: "20% revenue increase",
        efficiency: 98
      }
    },
    {
      id: 3,
      category: "Business Financing",
      current: {
        title: "Traditional Bank Loans",
        description: "Lengthy applications with weeks of waiting and paperwork",
        issues: ["30-90 day approval", "Personal guarantees required", "Complex paperwork"],
        cost: "30-60 day delays",
        efficiency: 15
      },
      revoluno: {
        title: "Data-Driven Financing",
        description: "Pre-approved loans based on your actual sales performance",
        benefits: ["24-hour approval", "No personal guarantees", "Simple application"],
        savings: "Same-day funding",
        efficiency: 90
      }
    },
    {
      id: 4,
      category: "Customer Analytics",
      current: {
        title: "Fragmented Data",
        description: "Customer information scattered across multiple platforms",
        issues: ["No unified customer view", "Manual report generation", "Limited insights"],
        cost: "40% lower CLV",
        efficiency: 20
      },
      revoluno: {
        title: "360° Customer Intelligence",
        description: "Complete customer journey tracking with AI-powered insights",
        benefits: ["Unified customer profiles", "Automated insights", "Predictive analytics"],
        savings: "50% higher CLV",
        efficiency: 92
      }
    }
  ];

  const roiCalculator = {
    monthlyRevenue: 50000,
    currentCosts: 1200,
    revolunoSavings: 720,
    efficiencyGains: 8000
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
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
            Current Setup vs. <span className="text-indigo-600">Revoluno Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See exactly how much time, money, and efficiency you'll gain by switching to our unified platform.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveView('current')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeView === 'current' ?'bg-red-500 text-white shadow-md' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current Setup
            </button>
            <button
              onClick={() => setActiveView('revoluno')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeView === 'revoluno' ?'bg-indigo-600 text-white shadow-md' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Revoluno Platform
            </button>
          </div>
        </motion.div>

        {/* Features Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features?.map((feature, index) => (
            <motion.div
              key={feature?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedFeature(selectedFeature === feature?.id ? null : feature?.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{feature?.category}</h3>
                <Icon 
                  name={selectedFeature === feature?.id ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-gray-400" 
                />
              </div>

              <AnimatePresence>
                {activeView === 'current' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-l-4 border-red-400 pl-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{feature?.current?.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{feature?.current?.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {feature?.current?.issues?.map((issue, idx) => (
                          <div key={idx} className="flex items-center text-sm text-red-600">
                            <Icon name="AlertCircle" size={14} className="mr-2 flex-shrink-0" />
                            {issue}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Cost Impact: </span>
                          <span className="font-semibold text-red-600">{feature?.current?.cost}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Efficiency:</span>
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-red-400 rounded-full"
                              style={{ width: `${feature?.current?.efficiency}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-red-600 ml-2">
                            {feature?.current?.efficiency}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeView === 'revoluno' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-l-4 border-green-400 pl-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{feature?.revoluno?.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{feature?.revoluno?.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {feature?.revoluno?.benefits?.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-green-600">
                            <Icon name="CheckCircle" size={14} className="mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Savings: </span>
                          <span className="font-semibold text-green-600">{feature?.revoluno?.savings}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Efficiency:</span>
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-green-400 rounded-full"
                              style={{ width: `${feature?.revoluno?.efficiency}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-green-600 ml-2">
                            {feature?.revoluno?.efficiency}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedFeature === feature?.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">ROI Impact for Your Business:</h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Monthly Savings:</span>
                          <div className="font-bold text-green-600">$480-720</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Time Saved:</span>
                          <div className="font-bold text-indigo-600">15-20 hrs/week</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Potential ROI with Revoluno
            </h3>
            <p className="text-gray-600">
              Based on average business metrics for companies similar to yours
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                ${roiCalculator?.monthlyRevenue?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">
                ${roiCalculator?.currentCosts?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Current System Costs</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">
                ${roiCalculator?.revolunoSavings?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Monthly Savings</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600 mb-2">
                ${roiCalculator?.efficiencyGains?.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Efficiency Value</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              ${(roiCalculator?.revolunoSavings + roiCalculator?.efficiencyGains)?.toLocaleString()}/month
            </div>
            <div className="text-gray-600 mb-6">Total Monthly Value Increase</div>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
              Calculate My Exact ROI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesComparison;