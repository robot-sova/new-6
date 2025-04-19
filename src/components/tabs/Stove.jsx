import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "why-us",
      title: "Why Choose Same Day Appliance Repair for Stove Repair Services?",
      img: "/stove-repair/stove-repair-1.webp",
      description: (
        <>
          <p style="text-align: start">
            When you choose <strong>Same Day Appliance Repair</strong>, you're selecting expert technicians who can diagnose stove issues, find fast solutions, and provide ongoing maintenance advice to extend the life of your appliance. We're committed to finding and fixing any stove issue, from electric stove elements that won't heat to gas stove igniters that aren't sparking.
          </p>
          <ul>
            <li><p><strong>Same-Day Appointments</strong>: We understand how important a functioning stove is in your daily life. That's why we offer same-day and flexible appointment times to work around your schedule.</p></li>
            <li><p><strong>Certified Technicians</strong>: Our team is highly trained and certified, with hands-on experience across all major stove brands and models. You can trust that we'll diagnose the issue accurately and recommend the most effective solution.</p></li>
            <li><p><strong>Use of Original Parts</strong>: We only use original parts from trusted suppliers, backed by warranties that start at three months. Quality parts ensure longevity and reliable performance, helping you avoid repeated repairs.</p></li>
            <li><p><strong>Transparent Pricing</strong>: Before starting any repair, we provide a detailed breakdown of costs. With our transparent pricing, you'll always know what to expect—no hidden fees.</p></li>
          </ul>
        </>
      ),
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="tabs-container" ref={containerRef}>
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${
                  activeTab === item.id ? 'active' : ''
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`tab-panel ${
                  activeTab === item.id ? 'active-tab' : ''
                }`}
              >
                <h2>{item.title}</h2>
                {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
                <p>{item.description}</p>
                <button className="tabs-button">{item.button}</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? '−' : '+'}
                </span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.title}</h2>
                  {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
                  <p>{item.description}</p>
                  <button className="tabs-button">{item.button}</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
