import React, { useState } from 'react';
import { MessageSquare, ArrowRight, UserCircle, Bot } from 'lucide-react';

const CareerAdvisor = () => {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Welcome to the Bounded AI CMGF Transition Assistant. Which of the Five Pillars are you looking to explore regarding your transition today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate bounded AI response with constraints
    setTimeout(() => {
      let aiResponse = "As a Bounded AI, I operate strictly within the CMGF series parameters. Based on your input, I recommend reviewing Peer-Reviewed Source #412 within the Five Pillars Database regarding human capital institutional throughput.";
      
      if (userMsg.toLowerCase().includes('education')) {
        aiResponse = "I have cross-referenced the AI Education Futures Hub. Your transition pathway strongly correlates with structured credentialing. Please consult the regulatory frameworks for compliance.";
      } else if (userMsg.toLowerCase().includes('salary')) {
        aiResponse = "I am constrained from providing speculative financial advice. The CMGF framework relies on empirical human capital economics. Please refer to Pillar 3 for median transition outcomes.";
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="animate-fade-in delay-300 glass-panel" style={{ padding: '3rem', marginTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bounded AI Simulation</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Experience the guardrailed approach to military transition career advising, protecting veterans from AI hallucination via strict regulatory constraints.
        </p>
      </div>

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        background: 'var(--bg-secondary)', 
        borderRadius: '12px', 
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        
        {/* Chat Window */}
        <div style={{ height: '400px', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{
                background: msg.role === 'ai' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                color: msg.role === 'ai' ? 'var(--accent-purple)' : 'var(--accent-blue)',
                padding: '0.5rem',
                borderRadius: '50%'
              }}>
                {msg.role === 'ai' ? <Bot size={20} /> : <UserCircle size={20} />}
              </div>
              <div style={{
                background: msg.role === 'ai' ? 'rgba(255,255,255,0.03)' : 'var(--accent-blue)',
                color: 'var(--text-primary)',
                padding: '1rem',
                borderRadius: '12px',
                borderTopLeftRadius: msg.role === 'ai' ? '0px' : '12px',
                borderTopRightRadius: msg.role === 'user' ? '0px' : '12px',
                maxWidth: '80%',
                lineHeight: '1.5',
                fontSize: '0.95rem'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ padding: '0.5rem', borderRadius: '50%', color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.1)' }}><Bot size={20} /></div>
               <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderTopLeftRadius: '0px', color: 'var(--text-secondary)' }}>
                 Analyzing CMGF Datasets...
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem', background: 'var(--bg-primary)' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about education, compliance, or human capital economics..."
            style={{ 
              flex: 1, 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-primary)',
              fontSize: '1rem',
              padding: '0.5rem 1rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            style={{ 
              background: 'var(--accent-blue)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              padding: '0.5rem 1.5rem',
              cursor: (!input.trim() || isTyping) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              opacity: (!input.trim() || isTyping) ? 0.5 : 1,
              transition: 'opacity 0.2s ease'
            }}
          >
            Query <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerAdvisor;
