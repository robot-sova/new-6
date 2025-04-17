import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Refrigerator Repair?",
      img: "/refrigerator-repair/refrigerator-repair-1.webp",
      description: (
        <>
          <p><strong>Same-Day Service:</strong> We know that a working refrigerator is vital to your home. Our <strong>same-day service</strong> minimizes downtime, ensuring your food stays fresh.</p>
          <p><strong>Certified Technicians:</strong> Our team is highly trained, <strong>certified</strong>, and experienced in working with all major <strong>refrigerator brands and models</strong>. From minor adjustments to complex repairs, we've got you covered.</p>
          <p><strong>Top-Quality Parts:</strong> We only use <strong>original, high-grade parts</strong> from trusted suppliers. This guarantees long-term performance and reduces the chance of future breakdowns.</p>
          <p><strong>Transparent Pricing:</strong> With us, there are no surprises. We provide clear quotes for <strong>labor and parts</strong> upfront, so you know the exact cost before we begin.</p>
        </>
      ),
    },
  
    {
      id: "content2",
      title: "Common Refrigerator Types We Repair and Our Approach",
      img: "/images/commercial-refrigerator-repair-los-angeles.webp",
      description: (
        <>
          <p><strong>Top-Freezer Refrigerator Repair:</strong> These units can experience <strong>temperature inconsistencies</strong>, <strong>ice buildup</strong>, or <strong>leaking</strong>. We inspect <strong>compressor, evaporator coils</strong>, and <strong>door gaskets</strong>, and fix <strong>thermostat</strong> or <strong>compressor</strong> issues.</p>
          <p><strong>Bottom-Freezer Refrigerator Repair:</strong> We resolve <strong>frost build-up</strong>, <strong>fan malfunctions</strong>, and <strong>blocked vents</strong> through <strong>fan repairs</strong> and <strong>defrost system maintenance</strong>.</p>
          <p><strong>French Door Refrigerator Repair:</strong> We address <strong>ice maker malfunctions</strong>, <strong>door seal issues</strong>, and <strong>inconsistent temperatures</strong> by servicing <strong>compressors</strong>, <strong>thermostats</strong>, and airflow.</p>
          <p><strong>Side-by-Side Refrigerator Repair:</strong> We handle <strong>faulty water dispensers</strong>, <strong>temperature fluctuations</strong>, and <strong>air vent blockages</strong>, checking <strong>fan motors</strong> and <strong>compressors</strong>.</p>
        </>
      ),
    },
  
    {
      id: "content3",
      title: "Common Refrigerator Problems and Our Repair Approach",
      img: "/refrigerator-repair/refrigerator-repair-3.webp",
      description: (
        <>
          <p><strong>Refrigerator Not Cooling:</strong> We inspect <strong>compressor</strong>, <strong>evaporator coils</strong>, and <strong>thermostats</strong> to restore cooling.</p>
          <p><strong>Excessive Frost:</strong> We replace <strong>door gaskets</strong> and inspect the <strong>defrost heater</strong> and <strong>thermostat</strong>.</p>
          <p><strong>Water Leaks:</strong> We clear <strong>drain lines</strong> and fix <strong>water valves</strong>.</p>
          <p><strong>Strange Noises:</strong> Caused by <strong>fan motor</strong> or <strong>compressor</strong>. We replace noisy components.</p>
          <p><strong>Door Seal Issues:</strong> We replace <strong>damaged door gaskets</strong> to maintain energy efficiency.</p>
        </>
      ),
    },
  
    {
      id: "content4",
      title: "Signs Your Refrigerator Needs Repair – When and Why to Call Us",
      img: "/refrigerator-repair/commercial-freezer-repair-3.webp",
      description: (
        <>
          <p><strong>Unusual Smells:</strong> May indicate mold or spoiled food. We sanitize and inspect.</p>
          <p><strong>Water Leaks:</strong> Can cause floor damage—address quickly.</p>
          <p><strong>Inconsistent Cooling:</strong> Threatens food safety—restored by techs.</p>
          <p><strong>Excessive Frost:</strong> Caused by circulation issues or faulty defrost system.</p>
          <p><strong>Strange Noises:</strong> Fixed by replacing faulty components.</p>
        </>
      ),
    },
  
    {
      id: "content5",
      title: "Full-Service Refrigerator Repair for Every Home",
      description: (
        <>
          <p><strong>Kitchen Refrigerator Repair:</strong> Covers all models with <strong>same-day service</strong> to avoid <strong>food waste</strong>.</p>
          <p><strong>Large Family Repair:</strong> We handle <strong>high-capacity units</strong> and <strong>temperature issues</strong>.</p>
          <p><strong>High-End and Built-In:</strong> Brands like <strong>Sub-Zero, Thermador</strong>, and <strong>Viking</strong> require <strong>custom calibration</strong> and <strong>panel replacements</strong>.</p>
          <p><strong>Wine Coolers:</strong> We fix <strong>thermostat</strong>, <strong>fan</strong>, and <strong>door seals</strong> to preserve drink quality.</p>
        </>
      ),
    },
  
    {
      id: "content6",
      title: "Professional Household Maintenance Services – What You'll Receive and Why It's Essential",
      description: (
        <>
          <p><strong>Coil Cleaning:</strong> Prevents overworking and lowers energy bills.</p>
          <p><strong>Seal Checks:</strong> Ensure a tight fit to prevent temperature loss.</p>
          <p><strong>Drain Line Clearing:</strong> Removes clogs and odors.</p>
          <p><strong>Temperature Control:</strong> We calibrate <strong>thermostats</strong> to preserve food.</p>
          <p><strong>Fan and Motor Check:</strong> We inspect and replace to avoid overheating.</p>
        </>
      ),
    },
  
    {
      id: "content7",
      title: "Deciding Between Repair and Replacement",
      description: (
        <>
          <p>If your <strong>fridge</strong> is <strong>breaking down often</strong>, consider replacing it.</p>
          <p>We recommend replacement when <strong>repair costs</strong> are above <strong>50%</strong> of a new model.</p>
          <p>Our <strong>technicians</strong> offer guidance based on <strong>age</strong>, <strong>efficiency</strong>, and <strong>repair frequency</strong>.</p>
        </>
      ),
    },
  
    {
      id: "content8",
      title: "Contact Us Today for Expert Refrigerator Repair and Maintenance",
      description: (
        <>
          <p>If you notice household refrigerator issues, don't wait. <strong>Call Same Day Appliance Repair</strong> for fast, reliable help.</p>
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
                <img src={item.img} alt={item.title} className="tabs-image"  loading="lazy" />
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
                  <img src={item.img} alt={item.title} className="tabs-image" />
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
