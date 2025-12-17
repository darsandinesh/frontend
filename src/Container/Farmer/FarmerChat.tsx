import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, ArrowLeft, Mic } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'me' | 'other';
    time: string;
    type: 'text' | 'image' | 'audio';
}

interface Contact {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    online: boolean;
}

const mockContacts: Contact[] = [
    { id: '1', name: 'Fresh Mart Ltd', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80', lastMessage: 'Is the organic wheat still available?', time: '10:30 AM', unread: 2, online: true },
    { id: '2', name: 'Green Grocers', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80', lastMessage: 'Payment has been sent.', time: 'Yesterday', unread: 0, online: false },
    { id: '3', name: 'City Supermarket', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80', lastMessage: 'We need 500kg of potatoes.', time: 'Yesterday', unread: 0, online: true },
    { id: '4', name: 'Eco Foods', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80', lastMessage: 'Thanks for the delivery!', time: 'Dec 12', unread: 0, online: false },
];

const mockMessages: Message[] = [
    { id: '1', text: 'Hi, I saw your listing for organic wheat.', sender: 'other', time: '10:00 AM', type: 'text' },
    { id: '2', text: 'Yes, it is available. We have about 2 tons in stock.', sender: 'me', time: '10:05 AM', type: 'text' },
    { id: '3', text: 'Great! What is the price for bulk orders?', sender: 'other', time: '10:15 AM', type: 'text' },
    { id: '4', text: 'For orders above 1 ton, we offer a 10% discount.', sender: 'me', time: '10:20 AM', type: 'text' },
    { id: '5', text: 'Is the organic wheat still available?', sender: 'other', time: '10:30 AM', type: 'text' },
];

const FarmerChat: React.FC = () => {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(mockContacts[0]);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState<Message[]>(mockMessages);
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);
    const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: messageInput,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text'
        };

        setMessages([...messages, newMessage]);
        setMessageInput('');
    };

    const handleContactSelect = (contact: Contact) => {
        setSelectedContact(contact);
        setIsMobileChatOpen(true);
        // In a real app, you'd fetch messages for this contact here
    };

    const startVideoCall = () => {
        setIsVideoCallActive(true);
    };

    const endVideoCall = () => {
        setIsVideoCallActive(false);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
            {/* Contacts Sidebar */}
            <div className={`w-full md:w-80 border-r border-gray-100 flex flex-col ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
                <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {mockContacts.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => handleContactSelect(contact)}
                            className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${selectedContact?.id === contact.id ? 'bg-green-50/50 border-l-4 border-green-500' : 'border-l-4 border-transparent'
                                }`}
                        >
                            <div className="relative">
                                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                                {contact.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{contact.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                                    {contact.unread > 0 && (
                                        <span className="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                                            {contact.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            {selectedContact ? (
                <div className={`flex-1 flex flex-col ${!isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                        <div className="flex items-center gap-3">
                            <button
                                className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                                onClick={() => setIsMobileChatOpen(false)}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="relative">
                                <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full object-cover" />
                                {selectedContact.online && (
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{selectedContact.name}</h3>
                                <div className="flex items-center gap-1">
                                    <span className={`w-1.5 h-1.5 rounded-full ${selectedContact.online ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                    <p className="text-xs text-gray-500 bg-transparent">{selectedContact.online ? 'Online' : 'Offline'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
                                <Phone size={20} />
                            </button>
                            <button
                                onClick={startVideoCall}
                                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                            >
                                <Video size={20} />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                                <MoreVertical size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${msg.sender === 'me'
                                            ? 'bg-green-600 text-white rounded-br-none'
                                            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-green-100' : 'text-gray-400'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <button type="button" className="p-2 text-gray-400 hover:text-green-600 hover:bg-gray-100 rounded-full transition-colors">
                                <Paperclip size={20} />
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full pl-4 pr-10 py-3 bg-gray-100 border-transparent focus:bg-white border focus:border-green-500 rounded-xl focus:outline-none transition-all"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <Smile size={20} />
                                </button>
                            </div>
                            {messageInput.trim() ? (
                                <button
                                    type="submit"
                                    className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transition-colors flex items-center justify-center"
                                >
                                    <Send size={18} className="ml-0.5" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="p-3 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
                                >
                                    <Mic size={20} />
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            ) : (
                <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gray-50/30 text-center p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Video size={36} className="text-green-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Connect with Buyers</h2>
                    <p className="text-gray-500 max-w-md">Select a conversation from the sidebar to start chatting or initiate a video call.</p>
                </div>
            )}

            {/* Video Call Modal (Overlay) */}
            {isVideoCallActive && selectedContact && (
                <div className="absolute inset-0 z-50 bg-gray-900 flex flex-col">
                    <div className="flex-1 relative">
                        {/* Remote Video (Mockup) */}
                        <img
                            src={selectedContact.avatar}
                            alt="Remote User"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-4">
                                <img src={selectedContact.avatar} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedContact.name}</h2>
                            <p className="text-white/70 animate-pulse">Connecting...</p>
                        </div>

                        {/* Local Video (PiP) */}
                        <div className="absolute bottom-24 right-6 w-36 h-48 bg-gray-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                <span className="text-white/50 text-xs">Your Camera</span>
                            </div>
                        </div>
                    </div>

                    {/* Call Controls */}
                    <div className="h-24 bg-gray-900/90 backdrop-blur flex items-center justify-center gap-6 pb-4">
                        <button className="p-4 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full transition-colors backdrop-blur-md">
                            <Mic size={24} />
                        </button>
                        <button className="p-4 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full transition-colors backdrop-blur-md">
                            <Video size={24} />
                        </button>
                        <button
                            onClick={endVideoCall}
                            className="p-5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-transform hover:scale-105"
                        >
                            <Phone size={28} className="rotate-[135deg]" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FarmerChat;
