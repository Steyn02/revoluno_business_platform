import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const problemPoints = [
    {
      id: 1,
      title: "Multiple Payment Processors",
      description: "Managing 3-5 different payment systems with separate fees, reporting, and reconciliation",
      cost: "$200-500/month in extra fees",
      position: { top: "20%", left: "15%" }
    },
    {
      id: 2,
      title: "Inventory Chaos",
      description: "Stock levels never sync between online and in-store, leading to overselling and customer complaints",
      cost: "15-25% revenue loss",
      position: { top: "45%", left: "25%" }
    },
    {
      id: 3,
      title: "Financing Headaches",
      description: "Separate loan applications, credit checks, and approval processes that take weeks",
      cost: "30-60 day delays",
      position: { top: "65%", left: "10%" }
    },
    {
      id: 4,
      title: "Data Silos",
      description: "Customer data scattered across platforms, making personalization and marketing impossible",
      cost: "40% lower customer lifetime value",
      position: { top: "30%", right: "20%" }
    },
    {
      id: 5,
      title: "Technical Support Nightmare",
      description: "When something breaks, you're bounced between 4-6 different support teams",
      cost: "8-12 hours downtime per incident",
      position: { top: "55%", right: "15%" }
    }
  ];

  const solutionFeatures = [
    {
      icon: "CreditCard",
      title: "Unified Payments",
      description: "One system for all payment types - online, in-store, mobile, and cash"
    },
    {
      icon: "Package",
      title: "Real-time Inventory",
      description: "Automatic sync across all channels with low-stock alerts and reorder points"
    },
    {
      icon: "DollarSign",
      title: "Instant Financing",
      description: "Pre-approved business loans based on your actual sales data"
    },
    {
      icon: "BarChart3",
      title: "Complete Analytics",
      description: "360° view of your business with actionable insights and forecasting"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Stop Juggling <span className="text-red-600">Multiple Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most businesses waste thousands managing separate platforms for payments, inventory, and financing. 
            There's a better way.
          </p>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Current Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="AlertTriangle" size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Current Setup</h3>
                  <p className="text-red-600 font-medium">Fragmented & Expensive</p>
                </div>
              </div>

              {/* Interactive Problem Visualization */}
              <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 h-80 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-red-200 rounded-lg transform rotate-12"></div>
                  <div className="absolute top-4 left-4 w-20 h-20 bg-orange-200 rounded-lg transform -rotate-6"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-red-300 rounded-lg transform rotate-45"></div>
                </div>

                {/* Interactive Hotspots */}
                {problemPoints?.map((point) => (
                  <motion.div
                    key={point?.id}
                    className="absolute cursor-pointer"
                    style={point?.position}
                    onHoverStart={() => setActiveHotspot(point?.id)}
                    onHoverEnd={() => setActiveHotspot(null)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Tooltip */}
                    {activeHotspot === point?.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute z-10 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-64 -translate-x-1/2 -translate-y-full mb-2"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{point?.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{point?.description}</p>
                        <div className="text-sm font-semibold text-red-600">{point?.cost}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Problem Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">5-8</div>
                  <div className="text-sm text-gray-600">Different Systems</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">$500+</div>
                  <div className="text-sm text-gray-600">Monthly Waste</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revoluno Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Revoluno Platform</h3>
                  <p className="text-green-600 font-medium">Unified & Efficient</p>
                </div>
              </div>

              {/* Solution Features */}
              <div className="space-y-4 mb-6">
                {solutionFeatures?.map((feature, index) => (
                  <motion.div
                    key={feature?.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={feature?.icon} size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature?.title}</h4>
                      <p className="text-sm text-gray-600">{feature?.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Solution Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">Unified System</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to simplify your business operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              See the Difference
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              Calculate Your Savings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;