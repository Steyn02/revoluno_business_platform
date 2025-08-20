import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PaymentMethods = () => {
  const [activeDemo, setActiveDemo] = useState('card');
  const [transactionStep, setTransactionStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Card Payments',
      icon: 'CreditCard',
      description: 'Accept all major credit and debit cards',
      features: ['Chip & PIN', 'Contactless', 'Online payments', 'Recurring billing'],
      processingTime: '2 seconds',
      fees: '2.9% + 30¢'
    },
    {
      id: 'mobile',
      name: 'Mobile Wallets',
      icon: 'Smartphone',
      description: 'Apple Pay, Google Pay, Samsung Pay, and more',
      features: ['Tap to pay', 'QR codes', 'In-app payments', 'Biometric security'],
      processingTime: '1 second',
      fees: '2.9% + 30¢'
    },
    {
      id: 'cash',
      name: 'Cash Management',
      icon: 'Banknote',
      description: 'Smart cash drawer integration with tracking',
      features: ['Auto counting', 'Change calculation', 'Deposit tracking', 'Theft protection'],
      processingTime: 'Instant',
      fees: 'No fees'
    }
  ];

  const transactionSteps = [
    { label: 'Payment Initiated', icon: 'Play', color: 'blue' },
    { label: 'Processing', icon: 'Loader', color: 'yellow' },
    { label: 'Approved', icon: 'CheckCircle', color: 'green' },
    { label: 'Receipt Generated', icon: 'FileText', color: 'purple' }
  ];

  const simulateTransaction = () => {
    setIsProcessing(true);
    setTransactionStep(0);

    const stepDuration = 800;
    transactionSteps?.forEach((_, index) => {
      setTimeout(() => {
        setTransactionStep(index + 1);
        if (index === transactionSteps?.length - 1) {
          setIsProcessing(false);
        }
      }, stepDuration * (index + 1));
    });
  };

  const supportedCards = [
    { name: 'Visa', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=60&fit=crop' },
    { name: 'Mastercard', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=60&fit=crop' },
    { name: 'American Express', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=60&fit=crop' },
    { name: 'Discover', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=60&fit=crop' }
  ];

  const mobileWallets = [
    { name: 'Apple Pay', icon: 'Smartphone' },
    { name: 'Google Pay', icon: 'Smartphone' },
    { name: 'Samsung Pay', icon: 'Smartphone' },
    { name: 'PayPal', icon: 'Smartphone' }
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
            Accept <span className="text-indigo-600">Every Payment Method</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional cards to the latest mobile wallets, give your customers the flexibility 
            they want while you enjoy unified reporting and instant settlements.
          </p>
        </motion.div>

        {/* Payment Method Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {paymentMethods?.map((method) => (
            <button
              key={method?.id}
              onClick={() => setActiveDemo(method?.id)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeDemo === method?.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={method?.icon} size={20} className="inline mr-2" />
              {method?.name}
            </button>
          ))}
        </div>

        {/* Active Payment Method Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Demo Interface */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Live Transaction Simulator
              </h3>
              
              {/* Sample Transaction */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Sample Purchase</span>
                  <span className="font-bold text-gray-900">$47.99</span>
                </div>
                <div className="text-sm text-gray-500">Coffee Shop Order #1234</div>
              </div>

              {/* Transaction Steps */}
              <div className="space-y-3 mb-6">
                {transactionSteps?.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg transition-all ${
                      transactionStep > index
                        ? `bg-${step?.color}-50 border border-${step?.color}-200`
                        : transactionStep === index
                        ? `bg-${step?.color}-100 border border-${step?.color}-300`
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      transactionStep > index
                        ? `bg-${step?.color}-500 text-white`
                        : transactionStep === index
                        ? `bg-${step?.color}-400 text-white`
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {transactionStep === index && isProcessing ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon name="Loader" size={16} />
                        </motion.div>
                      ) : (
                        <Icon name={step?.icon} size={16} />
                      )}
                    </div>
                    <span className={`font-medium ${
                      transactionStep > index ? `text-${step?.color}-700` : 'text-gray-600'
                    }`}>
                      {step?.label}
                    </span>
                    {transactionStep > index && (
                      <Icon name="Check" size={16} className={`ml-auto text-${step?.color}-500`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Simulate Button */}
              <button
                onClick={simulateTransaction}
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  isProcessing
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' :'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Simulate Transaction'}
              </button>
            </div>

            {/* Processing Time & Fees */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {paymentMethods?.find(m => m?.id === activeDemo)?.processingTime}
                </div>
                <div className="text-sm text-gray-600">Processing Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-indigo-600 mb-1">
                  {paymentMethods?.find(m => m?.id === activeDemo)?.fees}
                </div>
                <div className="text-sm text-gray-600">Transaction Fee</div>
              </div>
            </div>
          </motion.div>

          {/* Method Details */}
          <motion.div
            key={`${activeDemo}-details`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {paymentMethods?.map((method) => (
              activeDemo === method?.id && (
                <div key={method?.id}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                      <Icon name={method?.icon} size={32} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{method?.name}</h3>
                      <p className="text-gray-600">{method?.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                    {method?.features?.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <Icon name="Check" size={20} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Supported Options */}
                  {activeDemo === 'card' && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Supported Cards:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {supportedCards?.map((card, index) => (
                          <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-md">
                            <div className="w-12 h-8 bg-gray-200 rounded mr-3"></div>
                            <span className="font-medium text-gray-700">{card?.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDemo === 'mobile' && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Supported Wallets:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {mobileWallets?.map((wallet, index) => (
                          <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-md">
                            <Icon name={wallet?.icon} size={24} className="text-indigo-600 mr-3" />
                            <span className="font-medium text-gray-700">{wallet?.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </motion.div>
        </div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bank-Level Security & Compliance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your customers' payment data is protected by the same security standards used by major banks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'PCI DSS Level 1', description: 'Highest security certification' },
              { icon: 'Lock', title: 'End-to-End Encryption', description: 'Data encrypted at all times' },
              { icon: 'Eye', title: 'Fraud Detection', description: 'AI-powered fraud prevention' },
              { icon: 'FileCheck', title: '99.9% Uptime', description: 'Guaranteed availability' }
            ]?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={item?.icon} size={24} className="text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item?.title}</h4>
                <p className="text-sm text-gray-600">{item?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethods;