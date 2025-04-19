import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "why-us",
      title: "Why Choose Same Day Appliance Repair for Range Repair Services?",
      img: "/range-repair/range-repair-los-angeles.webp",
      description: (
        <>
          <p>When you choose <strong>Same Day Appliance Repair</strong>, you select a team that values <strong>efficiency</strong> and <strong>quality service</strong>. Our <strong>service technicians</strong> are highly trained to diagnose, fix, and provide ongoing maintenance tips to extend your appliance's life.</p>
          <ul>
            <li><p><strong>Same-Day Service Call:</strong> We understand the importance of a working range, so we offer <strong>same-day appointments</strong> to keep your kitchen running smoothly.</p></li>
            <li><p><strong>Certified, Factory-Trained Technicians:</strong> Our <strong>technicians</strong> are experienced with all major <strong>range</strong> models and brands, ensuring an accurate <strong>diagnosis</strong> and fast <strong>repair</strong> for every issue.</p></li>
            <li><p><strong>Use of Original Parts:</strong> We use only top-quality <strong>replacement</strong> parts from trusted suppliers. Backed by a <strong>warranty</strong>, these parts provide lasting performance and help you avoid repeat issues.</p></li>
            <li><p><strong>Transparent Pricing and Repair Cost:</strong> With upfront pricing, you'll know the exact <strong>repair cost</strong> for parts and <strong>labor</strong> before we start. Our transparency means no hidden fees.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "types",
      title: "Types of Ranges We Repair and Our Specialized Approach",
      img: "/range-repair/best-range-repair-service.webp",
      description: (
        <>
          <p>Our <strong>range of repair services covers</strong> all types, including <strong>gas</strong> and <strong>electric</strong> models. Here's how we handle each:</p>
          <h3><strong>Gas Range Repair</strong></h3>
          <p>A <strong>gas range</strong> offers precision but can face issues like a faulty <strong>igniter</strong>, clogged <strong>gas burners</strong>, or problems with the gas supply. We inspect <strong>gas lines</strong>, connections, and <strong>surface burners</strong>, replacing any damaged parts to ensure safe and reliable heating.</p>
          <h3><strong>Electric Range Repair</strong></h3>
          <p>Electric ranges can develop problems with <strong>heating elements</strong>, temperature regulation, and <strong>wiring</strong>. We test each <strong>heating</strong> element, examine the wiring, and repair or replace parts as needed to restore consistent, reliable heat.</p>
        </>
      ),
    },
    {
      id: "problems",
      title: "Common Range Problems We Fix",
      img: "/range-repair/range-repair-near-me.webp",
      description: (
        <>
          <p>With years of experience, our <strong>service technicians</strong> have seen and resolved a wide range of <strong>everyday issues</strong>. Here are some frequent problems we repair:</p>
          <ul>
            <li><p><strong>Range Not Heating Properly:</strong> Often due to a faulty <strong>heating element</strong> or <strong>burner</strong> issues. We test and replace components as needed to restore proper operation.</p></li>
            <li><p><strong>Gas Burner Won't Light:</strong> A <strong>gas burner</strong> that won't light could be due to a <strong>faulty igniter</strong>, <strong>clogged burner</strong>, or <strong>gas</strong> supply problem. We inspect, clean, and fix all parts to restore functionality.</p></li>
            <li><p><strong>Inconsistent Temperature:</strong> A <strong>malfunctioning thermostat</strong> or control panel often causes inconsistent heat. We recalibrate or replace faulty parts to ensure accurate cooking temperatures.</p></li>
            <li><p><strong>Unresponsive Control Panel:</strong> Issues with the <strong>control board</strong> can make your range challenging to operate. If necessary, our technicians test and replace the control panel to restore full functionality.</p></li>
            <li><p><strong>Unusual Smells or Smoke:</strong> This can indicate a <strong>gas leak</strong>, electrical issue, or <strong>debris</strong> buildup. Our team inspects and repairs as needed and ensures safe operation.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "signs",
      title: "Signs Your Range Needs Professional Repair – When to Call Us",
      description: (
        <>
          <p>Our expert technicians often see how seemingly small <strong>range repair</strong> issues can quickly become costly problems. Here are the key signs that it's time to schedule a <strong>professional service</strong>:</p>
          <h3><strong>Extended Heating Times</strong></h3>
          <p>If your <strong>range</strong> takes longer than usual to reach the desired temperature, it could signal issues with <strong>burners</strong> or <strong>heating elements</strong>. Addressing it early can restore efficiency.</p>
          <h3><strong>Gas Smell</strong></h3>
          <p>A <strong>gas odor</strong> is a safety concern. If detected, turn off your range, ventilate, and call us immediately.</p>
          <h3><strong>Clicking or Sparking Without Ignition</strong></h3>
          <p>This issue usually points to a <strong>faulty igniter</strong> or <strong>misaligned burners</strong>. It should be serviced to prevent gas buildup and ignition delay.</p>
          <h3><strong>Burner Not Lighting</strong></h3>
          <p>Often caused by <strong>clogged gas burners</strong> or a <strong>faulty igniter</strong>. Our cleaning and inspection services restore performance.</p>
          <p>Taking action early extends your range's life and performance. Contact us today to schedule expert service.</p>
        </>
      ),
    },
    {
      id: "industries",
      title: "Full-Service Range Repair for Every Kitchen",
      img: "/range-repair/range-repair-service.webp",
      description: (
        <>
          <h3><strong>Kitchen Range Repair</strong></h3>
          <p>We repair gas, electric, and dual-fuel models—everything from <strong>igniter problems</strong> to <strong>burner malfunctions</strong>.</p>
          <h3><strong>Range Repair for Large Households</strong></h3>
          <p>Specializing in high-capacity models, we fix <strong>temperature issues</strong> and <strong>control failures</strong> with ease.</p>
          <h3><strong>High-End and Built-In Range Repair</strong></h3>
          <p>Luxury brands like <strong>Wolf</strong> and <strong>Thermador</strong> require precise service. We use OEM parts and techniques to maintain performance and style.</p>
          <h3><strong>Specialty and Compact Range Repair</strong></h3>
          <p>We handle <strong>induction</strong> and <strong>dual-fuel</strong> models with specialized service for <strong>sensor</strong> and <strong>power flow</strong> issues.</p>
          <p><strong>Contact us today</strong> to book reliable range repair and restore peak kitchen performance.</p>
        </>
      ),
    },
    {
      id: "maintenance",
      title: "Routine Range Maintenance Services for Long-Lasting Performance and Efficiency",
      img: "/range-repair/range-repair-today.webp",
      description: (
        <>
          <p><strong>Routine maintenance</strong> prevents costly repairs and boosts safety. Here's what we offer:</p>
          <h3><strong>Thorough Cleaning of Burners and Igniters</strong></h3>
          <p>We remove <strong>residue</strong> and <strong>debris</strong> from <strong>burners</strong> and <strong>igniters</strong> to restore even heating.</p>
          <h3><strong>Inspection of Gas Lines and Connections</strong></h3>
          <p>We check for <strong>leaks</strong> and ensure secure <strong>gas connections</strong> for safe cooking.</p>
          <h3><strong>Testing Heating Elements (Electric Ranges)</strong></h3>
          <p>Each <strong>heating element</strong> is tested and replaced if needed to ensure smooth electric range operation.</p>
          <p><strong>Call us today</strong> to schedule expert maintenance and enjoy safe, efficient performance.</p>
        </>
      ),
    },
    {
      id: "repair-replace",
      title: "Deciding Between Range Repair and Replacement",
      description: (
        <>
          <p>If your <strong>range</strong> breaks down frequently, consider repair vs. replacement. When <strong>repairs exceed 50%</strong> of a new range’s value, it may be time to upgrade.</p>
          <p>We assess your <strong>burners</strong>, <strong>heating elements</strong>, and <strong>controls</strong> to recommend the best choice.</p>
          <p><strong>New models</strong> offer <strong>better energy efficiency</strong>, <strong>reliability</strong>, and <strong>features</strong>—saving you money long-term.</p>
          <p><strong>Contact Same Day Appliance Repair</strong> for fast service and expert advice on keeping your kitchen running at its best.</p>
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
