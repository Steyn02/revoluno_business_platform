import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', name: 'General', icon: 'HelpCircle' },
    { id: 'pricing', name: 'Pricing & Billing', icon: 'DollarSign' },
    { id: 'technical', name: 'Technical', icon: 'Settings' },
    { id: 'security', name: 'Security', icon: 'Shield' },
    { id: 'support', name: 'Support', icon: 'Headphones' }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: 'What exactly is Revoluno and how does it work?',
        answer: `Revoluno is an all-in-one business commerce platform that unifies your online store, point-of-sale system, and business financing into one integrated solution. Instead of managing multiple separate systems, you get everything you need to sell everywhere - online, in-person, and through mobile channels.\n\nOur platform automatically syncs inventory, payments, and customer data across all channels, giving you real-time insights and eliminating the complexity of juggling multiple vendors.`,
        hasVideo: true
      },
      {
        id: 2,
        question: 'How quickly can I get started with Revoluno?',
        answer: `Most businesses are up and running within 24-48 hours. Our setup process includes:\n\n• Account creation and verification (15 minutes)\n• Store customization and product import (2-4 hours)\n• Payment processor integration (same day)\n• Staff training and onboarding (1-2 hours)\n\nWe provide dedicated onboarding specialists and step-by-step guides to ensure a smooth transition from your current systems.`
      },
      {
        id: 3,
        question: 'Can Revoluno replace all my current business systems?',
        answer: `Yes, Revoluno is designed to replace multiple systems including:\n\n• E-commerce platforms (Shopify, WooCommerce)\n• POS systems (Square, Clover)\n• Payment processors (separate merchant accounts)\n• Inventory management software\n• Basic accounting tools\n• Customer relationship management\n• Business loan applications\n\nYou'll save money on multiple subscriptions while gaining better integration and functionality.`
      },
      {
        id: 4,
        question: 'What types of businesses work best with Revoluno?',
        answer: `Revoluno is perfect for businesses that sell both online and in-person, including:\n\n• Retail stores and boutiques\n• Restaurants and cafes\n• Service-based businesses\n• Health and wellness providers\n• Electronics and repair shops\n• Beauty salons and spas\n\nAny business processing $10K+ monthly revenue and looking to streamline operations will see significant benefits.`
      }
    ],
    pricing: [
      {
        id: 5,
        question: 'Are there any hidden fees or setup costs?',
        answer: `No hidden fees, ever. Our transparent pricing includes:\n\n• Monthly subscription fee (based on your plan)\n• Transaction processing fees (2.5% - 2.9% + 30¢)\n• No setup fees\n• No cancellation fees\n• No per-user fees (except Starter plan)\n• No additional fees for features included in your plan\n\nThe only additional costs are optional add-ons you choose to purchase.`
      },
      {
        id: 6,
        question: 'How do your transaction fees compare to other processors?',
        answer: `Our rates are highly competitive and often lower than using multiple separate systems:\n\n• Revoluno: 2.5% - 2.9% + 30¢ (all-in-one)\n• Square: 2.6% - 2.9% + 10¢ (POS only)\n• Shopify + processor: 2.9% + 30¢ + monthly fees\n• Traditional merchant account: 2.2% - 2.9% + monthly fees + setup\n\nPlus, you save on multiple subscription fees, making Revoluno more cost-effective overall.`
      },
      {
        id: 7,
        question: 'Can I change my plan or cancel anytime?',
        answer: `Absolutely. You have complete flexibility:\n\n• Upgrade or downgrade plans instantly\n• Changes take effect immediately\n• Prorated billing adjustments\n• Cancel anytime with no penalties\n• Account remains active until billing period ends\n• Export all your data if you leave\n\nWe believe in earning your business every month, not locking you into long-term contracts.`
      }
    ],
    technical: [
      {
        id: 8,
        question: 'How does Revoluno integrate with my existing tools?',
        answer: `Revoluno offers extensive integrations with popular business tools:\n\n• Accounting: QuickBooks, Xero, FreshBooks\n• Marketing: Mailchimp, Constant Contact, HubSpot\n• E-commerce: Import from Shopify, WooCommerce, BigCommerce\n• Social Media: Facebook, Instagram, Google My Business\n• Shipping: UPS, FedEx, USPS, DHL\n• Banking: Most major banks and credit unions\n\nOur API also allows custom integrations for specific business needs.`
      },
      {
        id: 9,
        question: 'What happens if my internet goes down?',answer: `Revoluno's POS system includes robust offline capabilities:\n\n• Continue processing card payments offline\n• Track inventory changes locally\n• Accept cash and check payments\n• Automatic sync when connection returns\n• No lost transactions or data\n• Offline mode works for up to 72 hours\n\nYour business keeps running even during internet outages.`
      },
      {
        id: 10,
        question: 'Can I import my existing product catalog and customer data?',
        answer: `Yes, we make migration easy with:\n\n• Automated import tools for major platforms\n• CSV file upload for custom data\n• Product images and descriptions\n• Customer purchase history\n• Inventory levels and pricing\n• Categories and product variants\n• Historical sales data for analytics\n\nOur migration specialists help ensure nothing is lost during the transition.`
      }
    ],
    security: [
      {
        id: 11,
        question: 'How secure is my business and customer data?',
        answer: `Security is our top priority with enterprise-grade protection:\n\n• PCI DSS Level 1 certification (highest security standard)\n• 256-bit SSL encryption for all data transmission\n• SOC 2 Type II compliance\n• Regular third-party security audits\n• Multi-factor authentication\n• Role-based access controls\n• Automated security monitoring 24/7\n\nYour data is more secure with us than most businesses can achieve on their own.`
      },
      {
        id: 12,
        question: 'Where is my data stored and who has access?',
        answer: `Your data is stored in secure, GDPR-compliant data centers:\n\n• Primary servers in US with EU options available\n• Encrypted at rest and in transit\n• Daily automated backups\n• 99.9% uptime guarantee\n• Only authorized personnel have access\n• You maintain full ownership of your data\n• Easy data export available anytime\n\nWe never sell or share your business data with third parties.`
      }
    ],
    support: [
      {
        id: 13,
        question: 'What kind of customer support do you provide?',
        answer: `We offer comprehensive support to ensure your success:\n\n• 24/7 chat and email support (all plans)\n• Phone support (Growth and Enterprise plans)\n• Dedicated onboarding specialist\n• Video training library\n• Live webinar training sessions\n• Community forum with expert moderators\n• Priority support for urgent issues\n\nOur average response time is under 2 hours for all inquiries.`
      },
      {
        id: 14,
        question: 'Do you provide training for my staff?',
        answer: `Yes, comprehensive training is included:\n\n• Live onboarding session for your team\n• Role-specific training modules\n• Video tutorials for all features\n• Printable quick-reference guides\n• Ongoing training for new features\n• Custom training sessions for Enterprise customers\n• Certification program for power users\n\nWe ensure your entire team is confident using the platform.`
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentFAQs = faqs?.[activeCategory] || [];

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
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Revoluno's platform, pricing, security, and more. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories?.map((category) => (
            <motion.button
              key={category?.id}
              onClick={() => {
                setActiveCategory(category?.id);
                setOpenFAQ(null);
              }}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category?.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category?.icon} size={20} className="inline mr-2" />
              {category?.name}
            </motion.button>
          ))}
        </div>

        {/* FAQ List */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {currentFAQs?.map((faq, index) => (
              <motion.div
                key={faq?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq?.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq?.question}
                    </h3>
                    {faq?.hasVideo && (
                      <div className="flex items-center text-indigo-600 text-sm">
                        <Icon name="Play" size={16} className="mr-1" />
                        <span>Video</span>
                      </div>
                    )}
                  </div>
                  <Icon 
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-gray-500 flex-shrink-0" 
                  />
                </button>

                <AnimatePresence>
                  {openFAQ === faq?.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="prose prose-gray max-w-none">
                          {faq?.answer?.split('\n\n')?.map((paragraph, idx) => (
                            <p key={idx} className="text-gray-700 mb-3 last:mb-0">
                              {paragraph?.split('\n')?.map((line, lineIdx) => (
                                <span key={lineIdx}>
                                  {line}
                                  {lineIdx < paragraph?.split('\n')?.length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          ))}
                        </div>
                        
                        {faq?.hasVideo && (
                          <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                            <div className="flex items-center text-indigo-700">
                              <Icon name="Play" size={20} className="mr-2" />
                              <span className="font-medium">Watch Video Explanation</span>
                            </div>
                            <p className="text-sm text-indigo-600 mt-1">
                              See a detailed walkthrough of this topic in our video library.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageCircle" size={32} className="text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our expert support team is available 24/7 to help you with any questions about 
            Revoluno's features, setup process, or how we can best serve your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              <Icon name="MessageCircle" size={20} className="inline mr-2" />
              Chat with Support
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              <Icon name="Phone" size={20} className="inline mr-2" />
              Schedule Call
            </button>
            <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              <Icon name="Book" size={20} className="inline mr-2" />
              Help Center
            </button>
          </div>
        </motion.div>

        {/* Popular Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Popular Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started Guide',
                description: 'Step-by-step setup instructions for new users',
                icon: 'BookOpen',
                link: '#'
              },
              {
                title: 'Video Training Library',
                description: 'Comprehensive video tutorials for all features',
                icon: 'Play',
                link: '#'
              },
              {
                title: 'API Documentation',
                description: 'Technical documentation for developers',
                icon: 'Code',
                link: '#'
              }
            ]?.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={resource?.icon} size={24} className="text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource?.title}</h4>
                <p className="text-gray-600 mb-4">{resource?.description}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;