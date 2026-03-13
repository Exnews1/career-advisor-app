import React from 'react';
import { BookOpen, GraduationCap, Scale } from 'lucide-react';

const HubCard = ({ icon, title, count, desc, tags }) => {
  return (
    <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px' }}>
          {icon}
        </div>
        <div style={{ color: 'var(--text-secondary)', fontWeight: '600', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>
          {count}
        </div>
      </div>
      
      <h3 style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', flex: 1, fontSize: '0.95rem' }}>{desc}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
        {tags.map((tag, i) => (
          <span key={i} style={{ 
            fontSize: '0.75rem', 
            padding: '4px 10px', 
            background: 'var(--bg-secondary)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '4px',
            color: 'var(--text-secondary)'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ResearchHubs = () => {
  const hubs = [
    {
      icon: <BookOpen size={32} color="var(--accent-cyan)" />,
      count: '797',
      title: 'Five Pillars Database',
      desc: 'The complete repository of peer-reviewed sources structuring the human capital transition paradigm.',
      tags: ['Peer-Reviewed', 'Economics', 'Military']
    },
    {
      icon: <GraduationCap size={32} color="var(--accent-purple)" />,
      count: 'Hub',
      title: 'AI Education Futures',
      desc: 'Research integrating artificial intelligence bounded constructs into modern institutional learning and vetting.',
      tags: ['EdTech', 'Governance', 'AI Ethics']
    },
    {
      icon: <Scale size={32} color="var(--accent-blue)" />,
      count: 'Policy',
      title: 'U.S. Incarceration Research',
      desc: 'Intersection of structural employment mobility, institutional throughput, and human capital constraints.',
      tags: ['Policy', 'Labor Markets', 'Demographics']
    }
  ];

  return (
    <div className="animate-fade-in delay-200" style={{ marginTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Research & Knowledge Hubs</h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-purple)', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {hubs.map((hub, index) => (
          <HubCard key={index} {...hub} />
        ))}
      </div>
    </div>
  );
};

export default ResearchHubs;
