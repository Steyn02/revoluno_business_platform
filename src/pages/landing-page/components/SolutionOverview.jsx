import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionOverview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      id: 1,
      title: "Online Storefront",
      subtitle: "Professional E-commerce",
      icon: "Globe",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        "Mobile-optimized store design",
        "SEO & marketing tools built-in",
        "Inventory sync across channels",
        "Customer analytics & insights"
      ],
      benefits: [
        "Launch in 24 hours",
        "No coding required",
        "Built-in payment processing",
        "Automatic tax calculations"
      ],
      stats: { metric: "300%", label: "Avg. Online Sales Increase" }
    },
    {
      id: 2,
      title: "Revoluno POS",
      subtitle: "Smart Point of Sale",
      icon: "CreditCard",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        "Accept all payment types",
        "Real-time inventory updates",
        "Customer loyalty programs",
        "Offline mode capability"
      ],
      benefits: [
        "2-second transaction time",
        "Works on any device",
        "Automatic receipt printing",
        "Staff management tools"
      ],
      stats: { metric: "40%", label: "Faster Checkout Process" }
    },
    {
      id: 3,
      title: "Business Loans",
      subtitle: "Instant Capital Access",
      icon: "DollarSign",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      features: [
        "Pre-approved based on sales data",
        "Flexible repayment terms",
        "No personal guarantees required",
        "Same-day funding available"
      ],
      benefits: [
        "5-minute application",
        "Rates from 6.9% APR",
        "Up to $500K available",
        "No hidden fees"
      ],
      stats: { metric: "24hrs", label: "Average Approval Time" }
    }
  ];

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
            Three Pillars of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Business Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to sell everywhere, manage everything, and grow faster - 
            all integrated into one powerful platform.
          </p>
        </motion.div>

        {/* Solution Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions?.map((solution, index) => (
            <motion.div
              key={solution?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(solution?.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${solution?.bgGradient} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Card Header */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution?.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={solution?.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution?.title}</h3>
                  <p className="text-gray-600 font-medium">{solution?.subtitle}</p>
                </div>

                {/* Features List */}
                <div className="relative z-10 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution?.features?.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Benefits - Show on Hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === solution?.id ? 1 : 0,
                    height: hoveredCard === solution?.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 overflow-hidden"
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-4">
                    {solution?.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Icon name="Star" size={16} className="text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Stats */}
                <div className="relative z-10 mt-auto pt-4 border-t border-white/30">
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${solution?.gradient} bg-clip-text text-transparent`}>
                      {solution?.stats?.metric}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {solution?.stats?.label}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredCard === solution?.id ? 1 : 0,
                    opacity: hoveredCard === solution?.id ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-r ${solution?.gradient} rounded-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See How They Work Together
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how a single sale flows seamlessly through your online store, 
              POS system, and business analytics - all updating in real-time.
            </p>
          </div>

          {/* Integration Flow Visualization */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Flow Steps */}
            {[
              { icon: "ShoppingCart", label: "Customer Orders", color: "blue" },
              { icon: "ArrowRight", label: "", color: "gray" },
              { icon: "CreditCard", label: "Payment Processed", color: "purple" },
              { icon: "ArrowRight", label: "", color: "gray" },
              { icon: "Package", label: "Inventory Updated", color: "green" },
              { icon: "ArrowRight", label: "", color: "gray" },
              { icon: "BarChart3", label: "Analytics Updated", color: "orange" }
            ]?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {step?.label && (
                  <>
                    <div className={`w-12 h-12 bg-${step?.color}-100 rounded-full flex items-center justify-center mb-2`}>
                      <Icon name={step?.icon} size={24} className={`text-${step?.color}-600`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {step?.label}
                    </span>
                  </>
                )}
                {!step?.label && (
                  <Icon name={step?.icon} size={20} className="text-gray-400 mt-6" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
              See Live Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;