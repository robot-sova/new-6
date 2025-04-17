import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Commercial Freezer Repair?",
      img: "/freezer/1-freezer-repair.webp",
      description: (
        <>
          <p>When you work with <strong>Same Day Appliance Repair</strong>, you're choosing a team of expert technicians equipped with the tools, top-quality parts, and experience to handle any <strong>commercial freezer repair</strong> needs. Here's why businesses trust us with their essential appliances:</p>
          <p><strong>Same-Day Service:</strong> We understand that a fully operational freezer is crucial to your business. Our <strong>same-day repair services</strong> minimize downtime, keeping your operations running smoothly and avoiding costly losses due to spoilage.</p>
          <p><strong>Certified Technicians:</strong> Our technicians are not only certified but bring extensive experience across all major <strong>commercial freezer brands and models</strong>. Whether it's a simple fix or a complex repair, we have the expertise to diagnose and resolve issues promptly.</p>
          <p><strong>Top-Quality Parts:</strong> We use only original, high-grade parts sourced from trusted suppliers. By choosing high-quality parts, we ensure your freezer operates efficiently and provides long-lasting performance, reducing the need for repeated repairs.</p>
          <p><strong>Transparent Pricing:</strong> With us, you get straightforward pricing. We provide clear, upfront quotes for labor and parts—no hidden fees—so you'll know exactly what to expect before any work begins.</p>
          <p>Trust Same Day Appliance Repair to get your <strong>commercial freezer</strong> back to optimal performance with reliable and timely service.</p>
        </>
      ),
    },
  
    {
      id: "content2",
      title: "Common Household Refrigerator and Freezer Types We Service and Our Approach to Repair",
      img: "/freezer/2-freezer-repair.webp",
      description: (
        <>
          <h3><strong>Top-Freezer Refrigerator Repair: Reliable Cooling Solutions</strong></h3>
          <p>Popular in many homes, <strong>top-freezer refrigerators</strong> can experience <strong>common freezer problems</strong> like <strong>temperature</strong> fluctuations, frost buildup, and gasket wear. We inspect <strong>condenser, evaporator</strong>, and <strong>door seals</strong> to ensure consistent cooling.</p>
          <h3><strong>Side-by-Side Refrigerator Repair: Balanced Cooling Service</strong></h3>
          <p><strong>Side-by-side refrigerators</strong> may experience <strong>unusual noises</strong>, <strong>control board</strong> malfunctions, and water dispenser issues. We restore cooling across compartments efficiently.</p>
          <h3><strong>Bottom-Freezer Refrigerator Repair: Efficient Temperature Control</strong></h3>
          <p>Issues with <strong>fan motors</strong>, <strong>compressors</strong>, and <strong>thermostats</strong> are addressed through comprehensive checks and part replacements.</p>
          <h3><strong>French Door Refrigerator Repair: Handling Complex Cooling Systems</strong></h3>
          <p>We address <strong>water supply</strong>, <strong>inlet valve</strong>, and <strong>evaporator fan</strong> problems with precise, expert service.</p>
        </>
      ),
    },
  
    {
      id: "content3",
      title: "Common Household Refrigerator and Freezer Problems We Fix",
      img: "/freezer/3-freezer-repair.webp",
      description: (
        <>
          <p><strong>Freezer or Refrigerator Not Cooling Properly</strong><br /><strong>Solution:</strong> We check <strong>condenser coils</strong>, <strong>evaporator fans</strong>, and <strong>thermostats</strong>, replacing parts to restore cooling.</p>
          <p><strong>Frost Buildup in the Freezer Compartment</strong><br /><strong>Solution:</strong> We repair or <strong>replace</strong> faulty gaskets and inspect the <strong>defrost system</strong>.</p>
          <p><strong>Water Leakage on the Kitchen Floor</strong><br /><strong>Solution:</strong> We clear clogged <strong>water supply lines</strong> and fix <strong>evaporator pan</strong> drainage.</p>
          <p><strong>Unusual Noises</strong><br /><strong>Solution:</strong> We repair <strong>fan motors</strong> or <strong>compressors</strong> for smooth, quiet operation.</p>
          <p><strong>Ice Maker Not Working</strong><br /><strong>Solution:</strong> We service the <strong>water dispenser</strong>, <strong>inlet valves</strong>, and <strong>ice maker</strong> components.</p>
        </>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Refrigerator or Freezer Needs Repair",
      img: "/freezer/5-freezer-repair.webp",
      description: (
        <>
          <p><strong>Unusual Noises:</strong> May signal <strong>compressor</strong> or <strong>fan motor</strong> issues.</p>
          <p><strong>Warm Interior:</strong> Could be due to faulty <strong>coils</strong>, <strong>evaporator fans</strong>, or <strong>thermostats</strong>.</p>
          <p><strong>Frost Buildup:</strong> Suggests defrost system failure—can lead to bigger issues if ignored.</p>
          <p><strong>Water Leaks:</strong> Often from clogged <strong>drain lines</strong> or <strong>water supply</strong> issues.</p>
          <p><strong>Frequent Cycling:</strong> Indicates <strong>thermostat</strong> or <strong>compressor</strong> problems and causes high energy bills.</p>
        </>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Freezer Repair for Every Home",
      description: (
        <>
          <p><strong>Kitchen Freezer Repair:</strong> We repair <strong>top</strong>, <strong>bottom</strong>, and <strong>stand-alone models</strong> quickly and efficiently.</p>
          <p><strong>Freezer Repair for Large Families:</strong> Specialized in <strong>high-capacity models</strong> to handle <strong>bulk storage</strong>.</p>
          <p><strong>High-End and Built-In Freezer Repair:</strong> Experts in <strong>Sub-Zero, Thermador</strong>, and <strong>Viking</strong>. We handle <strong>sealed systems</strong>, <strong>calibration</strong>, and <strong>panel replacements</strong>.</p>
          <p><strong>Wine and Specialty Freezer Repair:</strong> Repairing <strong>thermostat</strong>, <strong>fans</strong>, and <strong>door seals</strong> to preserve specialty items at optimal temperatures.</p>
        </>
      ),
    },
  
    {
      id: "content6",
      title: "Importance of Regular Refrigerator and Freezer Maintenance",
      description: (
        <>
          <p>We clean <strong>condenser coils</strong>, inspect <strong>door gaskets</strong>, and check <strong>temperature settings</strong> to avoid high energy use and breakdowns.</p>
          <p>Routine maintenance allows early detection of wear, saving money on future <strong>repair costs</strong>.</p>
        </>
      ),
    },
  
    {
      id: "content7",
      title: "Deciding Between Refrigerator or Freezer Repair and Replacement",
      description: (
        <>
          <p>If <strong>repair costs</strong> exceed 50% of a new unit or the <strong>appliance</strong> is over 10 years old, replacement is likely more cost-effective. We assess total <strong>repair cost</strong> and guide you with clarity.</p>
        </>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us Today for Household Refrigerator and Freezer Repair",
      description: (
        <>
          <p>For expert <strong>refrigerator</strong> and <strong>freezer repair</strong> in <strong>Los Angeles</strong>, trust Same Day Appliance Repair for reliable and fast service. <strong>Schedule</strong> your appointment today.</p>
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
