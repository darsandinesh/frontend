import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Phone, Mail, ChevronDown, ChevronUp, Send } from 'lucide-react';

const faqData = [
    {
        question: "How do I add a new product?",
        answer: "To add a new product, navigate to the 'My Products' page using the sidebar menu. Click on the 'Add Product' button in the top right corner. Fill in the product details including name, category, price, quantity, and upload clear images. Once done, click 'Save Product' to publish your listing."
    },
    {
        question: "When will I receive payments for my orders?",
        answer: "Payments are processed weekly. Funds for completed orders (delivered and accepted by the buyer) are released to your registered bank account every Friday. You can track your upcoming payouts in the 'Payments' section."
    },
    {
        question: "How can I update my profile information?",
        answer: "Go to your Profile page by clicking on your avatar in the top right corner or selecting 'Profile' from the sidebar. Click 'Edit Profile' to update your personal details, farm information, and contact info."
    },
    {
        question: "What happens if a buyer rejects my delivery?",
        answer: "If a buyer rejects a delivery due to quality issues, you will be notified immediately. You can view the rejection reason in the order details. Our support team will review the case, and if the rejection is valid, the goods will be returned to you (logistics fees may apply)."
    },
    {
        question: "Can I cancel an order?",
        answer: "You can cancel an order only if it hasn't been shipped yet. Go to Order Management, find the order, and select 'Cancel' from the actions menu. Please note that frequent cancellations may affect your seller rating."
    }
];

const FarmerSupport: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [contactForm, setContactForm] = useState({
        subject: '',
        message: '',
        category: 'Order Issue'
    });

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        alert('Your message has been sent to our support team. We will get back to you shortly.');
        setContactForm({ subject: '', message: '', category: 'Order Issue' });
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">How can we help you?</h1>
                <p className="text-gray-500 text-lg">
                    Browse our common questions or reach out to our dedicated farmer support team.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div className="p-3 bg-blue-50 rounded-full text-blue-600 mb-3">
                            <Phone size={20} />
                        </div>
                        <div className="font-semibold text-gray-900">Call Us</div>
                        <div className="text-sm text-gray-500 mt-1">+1 (800) 123-4567</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div className="p-3 bg-green-50 rounded-full text-green-600 mb-3">
                            <Mail size={20} />
                        </div>
                        <div className="font-semibold text-gray-900">Email Us</div>
                        <div className="text-sm text-gray-500 mt-1">support@agrilink.com</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div className="p-3 bg-amber-50 rounded-full text-amber-600 mb-3">
                            <MessageSquare size={20} />
                        </div>
                        <div className="font-semibold text-gray-900">Live Chat</div>
                        <div className="text-sm text-gray-500 mt-1">Available 9am - 5pm</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* FAQs Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <HelpCircle className="text-green-600" size={20} />
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                                >
                                    <span className={`font-medium ${openIndex === index ? 'text-green-700' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp size={18} className="text-gray-400" />
                                    ) : (
                                        <ChevronDown size={18} className="text-gray-400" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4 pt-1 text-gray-600 text-sm leading-relaxed bg-gray-50/30">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Send className="text-green-600" size={20} />
                            Send us a Message
                        </h2>
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Category</label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                                    value={contactForm.category}
                                    onChange={e => setContactForm({ ...contactForm, category: e.target.value })}
                                >
                                    <option>Order Issue</option>
                                    <option>Payment Question</option>
                                    <option>Technical Support</option>
                                    <option>Account & Profile</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Brief summary of your issue"
                                    value={contactForm.subject}
                                    onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[150px]"
                                    placeholder="Describe your issue in detail..."
                                    value={contactForm.message}
                                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="pt-2">
                                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md flex justify-center items-center gap-2">
                                    <Send size={18} />
                                    Submit Request
                                </button>
                                <p className="text-xs text-gray-400 text-center mt-3">
                                    Our team typically responds within 24 hours.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerSupport;
