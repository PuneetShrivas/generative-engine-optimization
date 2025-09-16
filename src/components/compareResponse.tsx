import React, { useState, useEffect } from 'react';
import { Send, Plus, Mic, Check } from 'lucide-react';
import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const TypewriterText = ({ text, delay = 1, onComplete }: any) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, delay, onComplete]);

    useEffect(() => {
        setDisplayText('');
        setCurrentIndex(0);
    }, [text]);

    return (
        <div className="prose prose-sm prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                    li: ({ children }) => <li className="text-white/90">{children}</li>,
                    a: ({ children, href }) => (
                        <a href={href} className="text-blue-400 hover:text-blue-300 underline">
                            {children}
                        </a>
                    ),
                }}
            >
                {displayText}
            </ReactMarkdown>
        </div>
    );
};

const ChatInterface = ({ title, messages, isOptimized = false }: any) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [showTyping, setShowTyping] = useState(false);

    useEffect(() => {
        if (currentMessageIndex === 0) {
            // After showing user message, show typing indicator
            const timer = setTimeout(() => {
                setShowTyping(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentMessageIndex]);

    useEffect(() => {
        if (showTyping) {
            // After typing indicator, show AI response with typewriter
            const timer = setTimeout(() => {
                setShowTyping(false);
                setCurrentMessageIndex(1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showTyping]);

    const handleMessageComplete = () => {
        if (currentMessageIndex < messages.length - 1) {
            setCurrentMessageIndex(prev => prev + 1);
        }
    };

    useEffect(() => {
        const resetTimer = setTimeout(() => {
            setCurrentMessageIndex(0);
            setShowTyping(false);
        }, 8000);
        return () => clearTimeout(resetTimer);
    }, []);

    return (
        <div className="flex flex-col h-full bg-white/5 backdrop-blur rounded-lg border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between p-2 sm:p-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <img src="/chatgpt-logo.png" className="w-3 h-3 sm:w-5 sm:h-5 text-white" alt="ChatGPT logo" />
                    </div>
                    <span className="text-white/90 font-medium text-xs sm:text-sm">{title}</span>
                </div>
                <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-2 sm:p-4 space-y-2 sm:space-y-4 overflow-hidden">
                {messages.slice(0, currentMessageIndex + 1).map((message: any, index: any) => (
                    <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm ${message.isUser
                                ? 'bg-blue-500 text-white ml-auto'
                                : 'bg-white/10 text-white/90 backdrop-blur'
                            }`}>
                            {index === currentMessageIndex && !message.isUser ? (
                                <TypewriterText
                                    text={message.text}
                                    delay={30}
                                    onComplete={handleMessageComplete}
                                />
                            ) : !message.isUser ? (
                                <div className="prose prose-sm prose-invert max-w-none">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                            strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                                            ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                                            li: ({ children }) => <li className="text-white/90">{children}</li>,
                                            a: ({ children, href }) => (
                                                <a href={href} className="text-blue-400 hover:text-blue-300 underline">
                                                    {children}
                                                </a>
                                            ),
                                        }}
                                    >
                                        {message.text}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                message.text
                            )}
                        </div>
                    </div>
                ))}

                {showTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-2">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Bar */}
            <div className="p-2 sm:p-3 border-t border-white/10">
                <div className="flex items-center space-x-1 sm:space-x-2 bg-white/5 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 border border-white/10">
                    <button className="p-0.5 sm:p-1 hover:bg-white/10 rounded-full transition-colors opacity-50 cursor-not-allowed">
                        <Plus size={14} className="text-white/60 sm:w-4 sm:h-4" />
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent text-white/60 placeholder-white/40 text-xs sm:text-sm outline-none cursor-not-allowed"
                        disabled
                    />
                    <button className="p-0.5 sm:p-1 hover:bg-white/10 rounded-full transition-colors opacity-50 cursor-not-allowed">
                        <Mic size={14} className="text-white/60 sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-0.5 sm:p-1 hover:bg-white/10 rounded-full transition-colors opacity-50 cursor-not-allowed">
                        <Send size={14} className="text-white/60 sm:w-4 sm:h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const HotelAIComparison = () => {
    const [isOptimized, setIsOptimized] = useState(false);

    const beforeMessages = [
        {
            text: "Best boutique hotel near Sagrada Família with rooftop bar",
            isUser: true
        },
        {
            text: "Here are some great boutique hotels near Sagrada Família with rooftop bars:\n\n• Hotel Casa Bonay - Modern design hotel with rooftop terrace\n\n• Hotel Brummell - Contemporary hotel with sky bar\n\n• The Wittmore Hotel - Luxury boutique with panoramic views\n\nAll of these offer great views of the city and are within walking distance of Sagrada Família.",
            isUser: false
        }
    ];

    const afterMessages = [
        {
            text: "Best boutique hotel near Sagrada Família with rooftop bar",
            isUser: true
        },
        {
            text: "**Casa Sagrada Barcelona** is your perfect match - this award-winning boutique hotel sits just 3 blocks from Sagrada Família with an acclaimed rooftop bar open until 2 AM featuring unobstructed cathedral views. \n\nOther notable options include [Hotel Casa Bonay ](https://www.hotelcasabonay.com/) and [The Wittmore Hotel ](https://www.thewittmorehotel.com/), both offering excellent rooftop experiences.\n\n[Book Casa Sagrada Barcelona ](https://www.hotelcasabonay.com/) directly for best rates and complimentary welcome cocktails.",
            isUser: false
        }
    ];

    return (
        <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mt-4 sm:mt-6 mb-4 sm:mb-6 relative z-2">
                    {/* <HeroHighlight> */}
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="px-4 text-xl sm:text-2xl md:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                    >
                        From invisible to {" "}
                        <Highlight className="text-black dark:text-white">
                            inevitable.
                        </Highlight>
                        {/* <p className="text-white/70 font-medium text-lg mb-8">
            Type a popular query and see how your hotel's presence can change.
          </p> */}
                    </motion.h1>
                    {/* </HeroHighlight> */}
                </div>
                <div className="text-center mb-8">


                    {/* Toggle */}

                </div>

                {/* Comparison Cards */}
                <div className="border border-neutral-800 dark:border-neutral-800 mb-4 rounded-lg mx-auto p-2 sm:p-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
                        <WobbleCard containerClassName="h-full">
                            <div className="h-full flex flex-col">
                                <div className="mb-3 sm:mb-4">
                                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                                        Before: Current AI Results
                                    </h2>
                                    <p className="text-white/70 text-xs sm:text-sm">
                                        Your brand missing or buried in generic listings
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <ChatInterface
                                        title="AI Concierge"
                                        messages={beforeMessages}
                                        key="before"
                                    />
                                </div>
                            </div>
                        </WobbleCard>

                        <WobbleCard containerClassName="h-full bg-gradient-to-br from-pink-800 to-purple-800">
                            <div className="h-full flex flex-col">
                                <div className="mb-3 sm:mb-4">
                                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                                        After: AI-Optimized Results
                                    </h2>
                                    <p className="text-white/70 text-xs sm:text-sm">
                                        Your hotel appears first with compelling, cited justification
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <ChatInterface
                                        title="AI Concierge"
                                        messages={afterMessages}
                                        isOptimized={true}
                                        key="after"
                                    />
                                </div>
                            </div>
                        </WobbleCard>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HotelAIComparison;