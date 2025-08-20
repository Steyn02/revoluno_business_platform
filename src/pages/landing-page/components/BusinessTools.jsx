import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BusinessTools = () => {
  const [activeCategory, setActiveCategory] = useState('management');

  const toolCategories = [
    {
      id: 'management',
      name: 'Business Management',
      icon: 'Settings',
      color: 'indigo'
    },
    {
      id: 'analytics',
      name: 'Analytics & Reports',
      icon: 'BarChart3',
      color: 'purple'
    },
    {
      id: 'marketing',
      name: 'Marketing Tools',
      icon: 'Megaphone',
      color: 'pink'
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: 'Zap',
      color: 'yellow'
    }
  ];

  const tools = {
    management: [
      {
        icon: 'Users',
        title: 'Staff Management',
        description: 'Employee scheduling, time tracking, and performance monitoring',
        features: ['Shift scheduling', 'Time clock integration', 'Performance metrics', 'Payroll integration'],
        benefit: 'Reduce labor costs by 15%'
      },
      {
        icon: 'Package',
        title: 'Inventory Control',
        description: 'Real-time stock tracking with automated reordering',
        features: ['Low stock alerts', 'Supplier management', 'Cost tracking', 'Waste reduction'],
        benefit: 'Prevent 95% of stockouts'
      },
      {
        icon: 'FileText',
        title: 'Invoice & Billing',
        description: 'Automated invoicing with payment tracking',
        features: ['Custom templates', 'Recurring billing', 'Payment reminders', 'Tax calculations'],
        benefit: 'Get paid 40% faster'
      },
      {
        icon: 'Calendar',
        title: 'Appointment Booking',
        description: 'Online scheduling with automated confirmations',
        features: ['Online booking', 'SMS reminders', 'Calendar sync', 'No-show tracking'],
        benefit: 'Reduce no-shows by 60%'
      }
    ],
    analytics: [
      {
        icon: 'TrendingUp',
        title: 'Sales Analytics',
        description: 'Comprehensive sales performance tracking and forecasting',
        features: ['Revenue trends', 'Product performance', 'Sales forecasting', 'Goal tracking'],
        benefit: 'Increase revenue by 25%'
      },
      {
        icon: 'Users',
        title: 'Customer Insights',
        description: 'Deep customer behavior analysis and segmentation',
        features: ['Purchase patterns', 'Customer lifetime value', 'Churn prediction', 'Segmentation'],
        benefit: 'Improve retention by 35%'
      },
      {
        icon: 'PieChart',
        title: 'Financial Reports',
        description: 'Real-time financial dashboards and P&L statements',
        features: ['Profit & loss', 'Cash flow', 'Tax reports', 'Budget tracking'],
        benefit: 'Save 10 hours/week'
      },
      {
        icon: 'Target',
        title: 'Performance Metrics',
        description: 'KPI tracking with customizable dashboards',
        features: ['Custom KPIs', 'Benchmark comparisons', 'Alert systems', 'Mobile dashboards'],
        benefit: 'Make data-driven decisions'
      }
    ],
    marketing: [
      {
        icon: 'Mail',
        title: 'Email Marketing',
        description: 'Automated email campaigns with customer segmentation',
        features: ['Drip campaigns', 'A/B testing', 'Personalization', 'Analytics'],
        benefit: '300% ROI on campaigns'
      },
      {
        icon: 'Gift',
        title: 'Loyalty Programs',
        description: 'Points-based rewards system to increase repeat business',
        features: ['Points system', 'Tier rewards', 'Referral bonuses', 'Mobile app'],
        benefit: 'Increase repeat sales 45%'
      },
      {
        icon: 'Percent',
        title: 'Promotions & Discounts',
        description: 'Smart promotional tools with performance tracking',
        features: ['Coupon codes', 'Flash sales', 'Bundle offers', 'Performance tracking'],
        benefit: 'Boost sales during slow periods'
      },
      {
        icon: 'Share2',
        title: 'Social Media Integration',
        description: 'Connect and manage your social media presence',
        features: ['Post scheduling', 'Review management', 'Social selling', 'Engagement tracking'],
        benefit: 'Grow social following 200%'
      }
    ],
    automation: [
      {
        icon: 'RefreshCw',
        title: 'Inventory Automation',
        description: 'Automatic reordering based on sales patterns',
        features: ['Smart reordering', 'Supplier integration', 'Seasonal adjustments', 'Cost optimization'],
        benefit: 'Never run out of stock'
      },
      {
        icon: 'MessageSquare',
        title: 'Customer Communications',
        description: 'Automated customer notifications and follow-ups',
        features: ['Order confirmations', 'Shipping updates', 'Review requests', 'Win-back campaigns'],
        benefit: 'Improve customer satisfaction'
      },
      {
        icon: 'DollarSign',
        title: 'Pricing Optimization',
        description: 'Dynamic pricing based on market conditions',
        features: ['Competitor monitoring', 'Demand-based pricing', 'Margin optimization', 'A/B price testing'],
        benefit: 'Increase profit margins 20%'
      },
      {
        icon: 'Clock',
        title: 'Task Automation',
        description: 'Automate repetitive business tasks',
        features: ['Workflow automation', 'Report generation', 'Data backups', 'System integrations'],
        benefit: 'Save 20+ hours per week'
      }
    ]
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
            Complete <span className="text-indigo-600">Business Toolkit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond payments and inventory, get access to professional-grade tools that help you 
            manage, analyze, and grow your business like never before.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {toolCategories?.map((category) => (
            <motion.button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category?.id
                  ? `bg-${category?.color}-600 text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category?.icon} size={20} className="inline mr-2" />
              {category?.name}
            </motion.button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {tools?.[activeCategory]?.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Tool Header */}
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 bg-${toolCategories?.find(c => c?.id === activeCategory)?.color}-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <Icon 
                    name={tool?.icon} 
                    size={24} 
                    className={`text-${toolCategories?.find(c => c?.id === activeCategory)?.color}-600`} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool?.title}</h3>
                  <p className="text-gray-600 text-sm">{tool?.description}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tool?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${toolCategories?.find(c => c?.id === activeCategory)?.color}-100 text-${toolCategories?.find(c => c?.id === activeCategory)?.color}-700`}>
                <Icon name="TrendingUp" size={14} className="mr-1" />
                {tool?.benefit}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with the tools you already use, or discover new ones that integrate perfectly with your Revoluno platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'QuickBooks', icon: 'Calculator' },
              { name: 'Mailchimp', icon: 'Mail' },
              { name: 'Shopify', icon: 'ShoppingBag' },
              { name: 'Slack', icon: 'MessageSquare' },
              { name: 'Google Analytics', icon: 'BarChart3' },
              { name: 'Zapier', icon: 'Zap' }
            ]?.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2 shadow-md">
                  <Icon name={integration?.icon} size={24} className="text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {integration?.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              View All Integrations
            </button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business Operations?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get access to all these powerful tools in one unified platform. 
            No more juggling multiple subscriptions or learning different systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTools;