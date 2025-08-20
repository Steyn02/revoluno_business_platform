import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const securityBadges = [
    {
      id: 1,
      name: 'PCI DSS Level 1',
      description: 'Highest level of payment security certification',
      icon: 'Shield',
      color: 'green',
      verified: true
    },
    {
      id: 2,
      name: 'SOC 2 Type II',
      description: 'Audited security, availability, and confidentiality',
      icon: 'FileCheck',
      color: 'blue',
      verified: true
    },
    {
      id: 3,
      name: 'GDPR Compliant',
      description: 'European data protection regulation compliant',
      icon: 'Lock',
      color: 'purple',
      verified: true
    },
    {
      id: 4,
      name: 'ISO 27001',
      description: 'International security management standard',
      icon: 'Award',
      color: 'orange',
      verified: true
    }
  ];

  const paymentPartners = [
    {
      name: 'Visa',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop',
      description: 'Authorized Visa payment processor'
    },
    {
      name: 'Mastercard',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop',
      description: 'Certified Mastercard partner'
    },
    {
      name: 'American Express',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop',
      description: 'Official Amex service provider'
    },
    {
      name: 'Discover',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop',
      description: 'Discover network member'
    }
  ];

  const integrationPartners = [
    {
      name: 'QuickBooks',
      icon: 'Calculator',
      description: 'Certified QuickBooks integration'
    },
    {
      name: 'Shopify',
      icon: 'ShoppingBag',
      description: 'Official Shopify Plus partner'
    },
    {
      name: 'Stripe',
      icon: 'CreditCard',
      description: 'Stripe verified partner'
    },
    {
      name: 'Square',
      icon: 'Square',
      description: 'Square technology partner'
    },
    {
      name: 'PayPal',
      icon: 'Smartphone',
      description: 'PayPal certified developer'
    },
    {
      name: 'Xero',
      icon: 'FileText',
      description: 'Xero app marketplace partner'
    }
  ];

  const mediaMentions = [
    {
      outlet: 'TechCrunch',
      headline: 'Revoluno Raises $50M to Unify Business Commerce',
      date: '2024-03-15',
      type: 'funding'
    },
    {
      outlet: 'Forbes',
      headline: 'Top 10 Fintech Companies Transforming Small Business',
      date: '2024-02-20',
      type: 'recognition'
    },
    {
      outlet: 'Business Insider',
      headline: 'How Revoluno is Simplifying Payment Processing',
      date: '2024-01-10',
      type: 'feature'
    },
    {
      outlet: 'Entrepreneur',
      headline: 'The All-in-One Platform Every Business Needs',
      date: '2023-12-05',
      type: 'review'
    }
  ];

  const businessMetrics = [
    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Industry-leading reliability',
      icon: 'Activity'
    },
    {
      metric: '24/7',
      label: 'Customer Support',
      description: 'Always here when you need us',
      icon: 'Headphones'
    },
    {
      metric: '<2s',
      label: 'Transaction Speed',
      description: 'Lightning-fast processing',
      icon: 'Zap'
    },
    {
      metric: '256-bit',
      label: 'SSL Encryption',
      description: 'Bank-level security',
      icon: 'Shield'
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
            Trusted by Industry <span className="text-indigo-600">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your business deserves the highest standards of security, reliability, and compliance. 
            That's why we've earned certifications from the most trusted organizations in the industry.
          </p>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBadges?.map((badge, index) => (
              <motion.div
                key={badge?.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className={`w-16 h-16 bg-${badge?.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={badge?.icon} size={32} className={`text-${badge?.color}-600`} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{badge?.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{badge?.description}</p>
                {badge?.verified && (
                  <div className="flex items-center justify-center text-green-600">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Authorized Payment Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paymentPartners?.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-20 h-12 bg-gray-100 rounded mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">{partner?.name}</span>
                </div>
                <p className="text-sm text-gray-600">{partner?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technology Integration Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrationPartners?.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-indigo-50 transition-colors">
                  <Icon name={partner?.icon} size={24} className="text-gray-600 group-hover:text-indigo-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{partner?.name}</h4>
                <p className="text-xs text-gray-600">{partner?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Featured In
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaMentions?.map((mention, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <Icon name="Newspaper" size={16} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{mention?.outlet}</h4>
                      <p className="text-sm text-gray-500">{mention?.date}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mention?.type === 'funding' ? 'bg-green-100 text-green-700' :
                    mention?.type === 'recognition' ? 'bg-blue-100 text-blue-700' :
                    mention?.type === 'feature'? 'bg-purple-100 text-purple-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {mention?.type}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{mention?.headline}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Performance You Can Count On
            </h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every metric that matters to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {businessMetrics?.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">{metric?.metric}</div>
                <h4 className="font-semibold mb-1">{metric?.label}</h4>
                <p className="text-sm text-indigo-100">{metric?.description}</p>
              </motion.div>
            ))}
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
            Join the Most Trusted Business Platform
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            With industry-leading security, reliability, and partnerships, 
            Revoluno gives you the confidence to focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
              Start Secure Trial
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              View Security Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;