import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "why-us",
      title: "Why Choose Same Day Appliance Repair for Dryer Repair Services?",
      img: "/dryer-repair/dryer-repair-1.webp",
      description: (
        <>
          <p>When you select <strong>Same Day Appliance Repair</strong>, you're opting for expert technicians who can <strong>diagnose</strong> your <strong>dryer issues</strong>, find <strong>fast fixes</strong>, and provide ongoing maintenance tips to extend your appliance's <strong>life</strong>.</p>
          <ul>
            <li><p><strong>Same-Day Appointments:</strong> Flexible scheduling around your routine.</p></li>
            <li><p><strong>Certified Technicians:</strong> Trained across major dryer brands and models.</p></li>
            <li><p><strong>Use of Original Parts:</strong> OEM parts backed by warranties.</p></li>
            <li><p><strong>Transparent Pricing:</strong> Upfront quotes—no hidden fees.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "types",
      title: "Types of Dryers We Repair and Our Specialized Approach",
      img: "/dryer-repair/dryer-repair-2.webp",
      description: (
        <>
          <p>We repair a wide range of dryers:</p>
          <h3><strong>Electric Dryer Repair</strong></h3>
          <p>Fixing faulty thermostats, heating elements, and connections.</p>
          <h3><strong>Gas Dryer Repair</strong></h3>
          <p>Resolving igniter, gas valve, and thermal fuse issues.</p>
          <h3><strong>Vented Dryer Repair</strong></h3>
          <p>Clearing vent clogs and repairing drum belts and fans.</p>
          <h3><strong>Ventless Dryer Repair</strong></h3>
          <p>Diagnosing filter clogs, condensation, and airflow challenges.</p>
        </>
      ),
    },
    {
      id: "problems",
      title: "Common Dryer Problems We Fix",
      img: "/dryer-repair/dryer-repair-6.webp",
      description: (
        <>
          <ul>
            <li><p><strong>Dryer Not Heating Properly:</strong> Replacing thermal fuses or heating elements.</p></li>
            <li><p><strong>Drum Not Spinning:</strong> Repairing motor, pulley, or belt issues.</p></li>
            <li><p><strong>Unusual Noises:</strong> Fixing drum rollers or bearings.</p></li>
            <li><p><strong>Overheating or Mid-Cycle Shutoff:</strong> Cleaning vents, checking thermostats.</p></li>
            <li><p><strong>Door Not Closing:</strong> Adjusting or replacing latch and switches.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "signs",
      title: "Signs Your Dryer Needs Repair Services– When To Call Us",
      description: (
        <>
          <h3><strong>Extended Drying Times</strong></h3>
          <p>Often airflow or heating element related.</p>
          <h3><strong>Unusual Smells</strong></h3>
          <p>Burnt or musty smells signal clogged vents or motor issues.</p>
          <h3><strong>Cycle Failure</strong></h3>
          <p>Failure to start or complete a cycle may require control board repair.</p>
          <h3><strong>Overheating</strong></h3>
          <p>Fix airflow issues or thermal fuses to reduce fire risk.</p>
        </>
      ),
    },
    {
      id: "industries",
      title: "Full-Service Dryer Repair for Every Home",
      description: (
        <>
          <h3><strong>Laundry Room Dryer Repair</strong></h3>
          <p>Repairs for all types including gas, electric, front-load, and top-load dryers.</p>
          <h3><strong>Dryer Repair for Large Households</strong></h3>
          <p>Fixing motor strain, temperature issues, and drum damage in high-capacity units.</p>
          <h3><strong>High-End and Built-In Dryer Repair</strong></h3>
          <p>Expert repairs for Miele, Bosch, Electrolux luxury models using OEM parts.</p>
          <h3><strong>Compact and Specialty Dryer Repair</strong></h3>
          <p>Special care for stackable, ventless, or compact units to ensure efficient use.</p>
          <p><strong>Contact us today</strong> for fast and reliable dryer repair service.</p>
        </>
      ),
    },
    {
      id: "maintenance",
      title: "Dryer Maintenance for Efficiency and Safety",
      description: (
        <>
          <h3><strong>Dryer Vent Cleaning</strong></h3>
          <p>Clearing blockages to prevent overheating and reduce fire risks.</p>
          <h3><strong>Lint Trap Checks</strong></h3>
          <p>Ensuring clean airflow and protecting internal components.</p>
          <h3><strong>Electrical Component Inspection</strong></h3>
          <p>Checking thermostats, elements, and wiring for safe, efficient performance.</p>
          <p>Schedule regular dryer maintenance to save energy and avoid repairs.</p>
        </>
      ),
    },
    {
      id: "repair-replace",
      title: "Deciding Between Dryer Repair and Replacement",
      description: (
        <>
          <p>If repair costs near 50% of the price of a new unit, replacement may be the smarter investment.</p>
          <p>We evaluate age, frequency of issues, and energy savings to help guide your choice.</p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us for Dryer Repair Services in Los Angeles",
      description: (
        <>
          <p>Don’t wait on dryer issues. <strong>Call Same Day Appliance Repair</strong> for fast, affordable service in Los Angeles and nearby areas. We work with all major brands and models.</p>
        </>
      ),
    },
  ];
  


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.title}</h2>
             <div className="tab-body-float">
             {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
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
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
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
