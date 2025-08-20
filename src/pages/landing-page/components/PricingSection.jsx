import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('growth');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for new businesses getting started',
      monthlyPrice: 49,
      yearlyPrice: 39,
      trialDays: 14,
      popular: false,
      features: [
        'Online storefront with 5 products',
        'Basic POS system',
        'Payment processing (2.9% + 30¢)',
        'Inventory management',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      limits: {
        products: '5 products',
        transactions: '100/month',
        users: '1 user'
      },
      bestFor: 'Solo entrepreneurs, service providers'
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Most popular for growing businesses',
      monthlyPrice: 99,
      yearlyPrice: 79,
      trialDays: 30,
      popular: true,
      features: [
        'Unlimited products',
        'Advanced POS with offline mode',
        'Payment processing (2.7% + 30¢)',
        'Real-time inventory sync',
        'Advanced analytics & reports',
        'Business loan access up to $100K',
        'Priority support',
        'Staff management (up to 5 users)',
        'Marketing tools',
        'API access'
      ],
      limits: {
        products: 'Unlimited',
        transactions: 'Unlimited',
        users: '5 users'
      },
      bestFor: 'Retail stores, restaurants, growing businesses'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Advanced features for established businesses',
      monthlyPrice: 199,
      yearlyPrice: 159,
      trialDays: 45,
      popular: false,
      features: [
        'Everything in Growth',
        'Multi-location support',
        'Payment processing (2.5% + 30¢)',
        'Advanced automation',
        'Custom integrations',
        'Business loans up to $500K',
        'Dedicated account manager',
        'Unlimited users',
        'White-label options',
        'Advanced security features',
        'Custom reporting',
        'Priority phone support'
      ],
      limits: {
        products: 'Unlimited',
        transactions: 'Unlimited',
        users: 'Unlimited'
      },
      bestFor: 'Multi-location businesses, franchises'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Analytics',
      price: 29,
      description: 'Deep insights, forecasting, and custom dashboards'
    },
    {
      name: 'Marketing Automation',
      price: 39,
      description: 'Email campaigns, loyalty programs, and social media tools'
    },
    {
      name: 'Additional Locations',
      price: 19,
      description: 'Per additional location (Enterprise plan only)'
    },
    {
      name: 'Premium Support',
      price: 49,
      description: '24/7 phone support with 1-hour response time'
    }
  ];

  const faqItems = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No setup fees, no hidden costs. You only pay the monthly subscription and transaction fees. We even provide free onboarding and training.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH bank transfers, and PayPal. All payments are processed securely with bank-level encryption.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your billing period.'
    }
  ];

  const getCurrentPrice = (plan) => {
    return billingCycle === 'monthly' ? plan?.monthlyPrice : plan?.yearlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan?.monthlyPrice * 12;
    const yearlyCost = plan?.yearlyPrice * 12;
    return monthlyCost - yearlyCost;
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
            Simple, <span className="text-indigo-600">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size and goals. 
            All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                billingCycle === 'monthly' ?'bg-indigo-600 text-white shadow-md' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all relative ${
                billingCycle === 'yearly' ?'bg-indigo-600 text-white shadow-md' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan?.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan?.name}</h3>
                  <p className="text-gray-600 mb-4">{plan?.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getCurrentPrice(plan)}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'month, billed yearly'}
                    </span>
                  </div>

                  {billingCycle === 'yearly' && (
                    <div className="text-green-600 font-medium text-sm">
                      Save ${getSavings(plan)} per year
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limits */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Plan Limits:</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Products: {plan?.limits?.products}</div>
                    <div>Transactions: {plan?.limits?.transactions}</div>
                    <div>Team members: {plan?.limits?.users}</div>
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Best for:</h4>
                  <p className="text-sm text-gray-600">{plan?.bestFor}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan?.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan?.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start {plan?.trialDays}-Day Free Trial
                </button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  No credit card required
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns?.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{addon?.name}</h4>
                <div className="text-2xl font-bold text-indigo-600 mb-2">
                  ${addon?.price}/month
                </div>
                <p className="text-sm text-gray-600">{addon?.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems?.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">{faq?.question}</h4>
                <p className="text-gray-600">{faq?.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Shield" size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Try Revoluno risk-free for 30 days. If you're not completely satisfied, 
            we'll refund your money, no questions asked. That's how confident we are that you'll love our platform.
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

export default PricingSection;