import React from 'react';
import { ArrowRight, ShieldCheck, Database, BrainCircuit } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="animate-fade-in">
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '100px', marginBottom: '2rem', color: 'var(--accent-purple)', fontSize: '0.875rem', fontWeight: '500' }}>
          <BrainCircuit size={16} />
          <span>Robert McCoy's Research Portfolio</span>
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Career Mobility Governance <br/>
          <span className="text-gradient">Framework (CMGF)</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          A bounded AI architecture engineered for profound military-to-civilian career transitions, integrating workforce development, policy, and human capital economics.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '0.875rem 2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s ease', WebkitAppRegion: 'no-drag'
          }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
            View CMGF Series 2026
            <ArrowRight size={18} />
          </button>
          <button className="glass-panel" style={{
            color: 'var(--text-primary)', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            Explore 797 Peer-Reviewed Sources
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '6rem' }} className="animate-fade-in delay-200">
        {[
          { icon: <ShieldCheck size={28} color="var(--accent-cyan)" />, title: '8 Regulatory Frameworks', desc: 'Ensuring responsible AI compliance and equitable outcome modeling.' },
          { icon: <Database size={28} color="var(--accent-blue)" />, title: 'Five Pillars Database', desc: 'Reference architecture spanning thousands of vetted data points.' },
          { icon: <BrainCircuit size={28} color="var(--accent-purple)" />, title: 'Bounded AI Analysis', desc: 'Precision-constrained AI to prevent hallucination in career advisory.' }
        ].map((feat, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '50%' }}>
              {feat.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>{feat.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
