import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

   const items = [
    {
      id: "why-us",
      title: "Why Choose Same Day Appliance Repair for Cooktop Repair Services?",
      img: "/cooktop-repair/Best-cooktop-repair-service.webp",
      description: (
        <>
          <p>When you choose <strong>Same Day Appliance Repair</strong>, you're choosing trusted experts who provide high-quality <strong>appliance repair services</strong> tailored to your needs. Here's why residents across <strong>Los Angeles</strong> turn to us for their <strong>cooktop repair service</strong>:</p>
          <p><strong>Same-Day Service</strong>: We understand that a working <strong>cooktop</strong> is critical for your daily routine. Our <strong>same-day service</strong> minimizes downtime, ensuring you can resume cooking quickly.</p>
          <p><strong>Certified Technicians</strong>: Our <strong>factory-trained service technicians</strong> have extensive experience repairing <strong>gas cooktops</strong>, <strong>electric cooktops</strong>, and <strong>induction cooktops</strong> across all major brands and models.</p>
          <p><strong>Top-Quality Parts</strong>: We use only original, high-grade <strong>replacement parts</strong> to ensure long-term reliability and performance. Whether it's a faulty <strong>coil element</strong> or a malfunctioning <strong>control switch</strong>, we provide parts that meet the highest standards.</p>
          <p><strong>Transparent Pricing</strong>: No hidden costs. We provide upfront quotes for labor and parts so you know exactly what the <strong>repair cost</strong> will be before we begin.</p>
          <p><strong>Flexible Scheduling</strong>: We offer <strong>flexible scheduling</strong>, making it easy to fit a <strong>service call</strong> into your busy lifestyle.</p>
        </>
      )
    },
    {
      id: "types",
      title: "Common Cooktop Types We Repair - Our Specialized Approach",
      img: "/cooktop-repair/cooktop-repair-service-los-angeles.webp",
      description: (
        <>
          <p>Our technicians have expertise in a variety of <strong>cooktop models</strong>. Here's how we approach different types of <strong>cooktop repairs</strong>:</p>
          <h3><strong>Gas Cooktop Repair</strong></h3>
          <p><strong>Gas cooktops</strong> are favored for their precise temperature control and cooking efficiency but can encounter issues like:</p>
          <ul>
            <li><p><strong>Clogged burner openings</strong></p></li>
            <li><p><strong>Igniter malfunctions</strong></p></li>
            <li><p><strong>Gas leaks</strong></p></li>
          </ul>
          <p>Your service technician thoroughly inspects <strong>burner caps</strong>, cleans out <strong>burner openings</strong>, and ensures safe and efficient operation by testing <strong>control switches</strong> and repairing faulty igniters.</p>
          <h3><strong>Electric Cooktop Repair</strong></h3>
          <p><strong>Electric cooktops</strong> are reliable but can face problems like:</p>
          <ul>
            <li><p><strong>Damaged electric coils</strong></p></li>
            <li><p><strong>Control panel malfunctions</strong></p></li>
            <li><p><strong>Temperature inconsistencies</strong></p></li>
          </ul>
          <p>We diagnose and repair faulty <strong>coil elements</strong>, recalibrate <strong>control switches</strong>, and resolve issues with <strong>indicator lights</strong>.</p>
          <h3><strong>Induction Cooktop Repair</strong></h3>
          <p><strong>Induction cooktops</strong> may experience:</p>
          <ul>
            <li><p><strong>Heating irregularities</strong></p></li>
            <li><p><strong>Sensor failures</strong></p></li>
            <li><p><strong>Control board issues</strong></p></li>
          </ul>
          <p>Our technicians specialize in troubleshooting <strong>induction cooktops</strong> and resolving <strong>control board</strong> and sensor issues.</p>
        </>
      )
    },
    {
      id: "problems",
      title: "Common Cooktop Problems We Fix",
      img: "/cooktop-repair/cooktop-repair-service-near-me.webp",
      description: (
        <>
          <p>With years of experience, our team resolves a wide range of <strong>cooktop issues</strong>. Below are some of the most common problems we address:</p>
          <ul>
            <li><p><strong>Burner Not Heating Properly</strong>: Often stems from damaged <strong>electric coils</strong>, clogged gas lines, or thermostat malfunctions.</p></li>
            <li><p><strong>Igniter Fails to Spark</strong>: A faulty igniter can prevent <strong>gas cooktops</strong> from lighting. We clean and replace defective parts.</p></li>
            <li><p><strong>Control Panel Malfunction</strong>: We repair or replace defective <strong>control boards</strong> and <strong>switches</strong>.</p></li>
            <li><p><strong>Indicator Lights Not Working</strong>: Signals electrical problems. We restore functionality.</p></li>
            <li><p><strong>Cracked or Damaged Cooktop Surface</strong>: We assess and recommend safe replacements.</p></li>
          </ul>
        </>
      )
    }
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
