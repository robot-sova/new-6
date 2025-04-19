import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  
const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Barbecue Grill Repairs?",
      img: "/bbq-grill/BBQ-repair-Los-Angeles.webp",
      description: (
        <>
          <p style="text-align: start">When it comes to <strong>BBQ repair services</strong>, homeowners across Los Angeles trust us for unmatched expertise. Here's why:</p>
          <ul>
            <li><strong>Same-Day Service</strong>: We understand how a <strong>broken grill</strong> can derail your plans. With same-day appointments, we ensure your grill is ready in time for your next cookout.</li>
            <li><strong>Certified Technicians</strong>: Our team specializes in <strong>BBQ grill repairs</strong>, handling issues with <strong>gas grills</strong>, <strong>charcoal grills</strong>, <strong>built-in grills</strong>, and more.</li>
            <li><strong>Top-Quality Parts</strong>: We use only durable <strong>replacement parts</strong> like <strong>burners</strong>, <strong>grates</strong>, and <strong>venturi tubes</strong>, ensuring long-lasting repairs.</li>
            <li><strong>Transparent Pricing</strong>: Before starting any job, we provide a detailed quote for labor and parts, so you'll know exactly what to expect.</li>
          </ul>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of BBQ Grills We Fix and How We Fix Them",
      img: "/bbq-grill/BBQ-Same-Day-Repair-LA.webp",
      description: (
        <>
          <h3><strong>Gas Grill Repair: Reliable Cooking for Everyday Use</strong></h3>
          <p style="text-align: start"><strong>Gas grills</strong> are convenient and provide consistent heat for cooking. Common issues include <strong>clogged burners</strong>, <strong>faulty igniters</strong>, or <strong>gas leaks</strong> from worn valves or connections.</p>
          <ul><li><strong>How We Fix It</strong>: We inspect the <strong>burners</strong>, <strong>gas lines</strong>, and <strong>control valves</strong>, cleaning or replacing components as needed. Whether it's a simple igniter repair or replacing venturi tubes, we'll restore your grill to peak performance.</li></ul>
          <h3><strong>Charcoal Grill Repair: Simple and Delicious Grilling Solutions</strong></h3>
          <p style="text-align: start"><strong>Charcoal grills</strong> offer a classic grilling experience, but damaged <strong>grates</strong>, worn <strong>ash pans</strong>, or faulty <strong>vents</strong> can disrupt your cooking.</p>
          <ul><li><strong>How We Fix It</strong>: We repair or replace <strong>grates</strong>, <strong>vents</strong>, and handles, ensuring even heat distribution and airflow. Whether it's a minor adjustment or a full rebuild, we've got you covered.</li></ul>
          <h3><strong>Electric BBQ Grill Repair: Clean and Modern Grilling</strong></h3>
          <p style="text-align: start">Perfect for small spaces, <strong>electric grills</strong> eliminate the need for gas or charcoal but can experience <strong>heating element failures</strong> or <strong>thermostat malfunctions</strong>.</p>
          <ul><li><strong>How We Fix It</strong>: We inspect and replace defective <strong>heating elements</strong>, recalibrate <strong>thermostats</strong>, and repair any <strong>wiring issues</strong>, ensuring your grill is ready for clean, efficient cooking.</li></ul>
          <h3><strong>Pellet BBQ Grill Repair: Precision and Versatility</strong></h3>
          <p style="text-align: start"><strong>Pellet grills</strong> are ideal for controlled cooking with a smoky flavor but rely on mechanical components like <strong>augers</strong>, <strong>ignition systems</strong>, and <strong>control boards</strong> that may fail.</p>
          <ul><li><strong>How We Fix It</strong>: We clean feed systems, repair or replace <strong>control panels</strong>, and fix <strong>auger jams</strong> so you can enjoy precision grilling again.</li></ul>
          <h3><strong>Built-In Grill Repair: The Heart of Outdoor Kitchens</strong></h3>
          <p style="text-align: start"><strong>Built-in grills</strong> are integral to outdoor kitchens, combining style and function. Cracked <strong>burners</strong>, faulty <strong>igniters</strong>, or damaged exteriors can impact performance.</p>
          <ul><li><strong>How We Fix It</strong>: We replace <strong>grill parts</strong>, repair <strong>gas lines</strong>, and clean grease buildup without disrupting your outdoor kitchen's design.</li></ul>
          <h3><strong>Portable BBQ Grill Repair: On-the-Go Grilling</strong></h3>
          <p style="text-align: start"><strong>Portable grills</strong> are great for tailgating or camping but can suffer from <strong>propane leaks</strong>, ignition failures, or broken components.</p>
          <ul><li><strong>How We Fix It</strong>: Our technicians fix <strong>propane connections</strong>, replace damaged parts, and ensure your grill is safe and ready for your next adventure.</li></ul>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common BBQ Grill Issues We Repair",
      img: "/bbq-grill/bbq-maintanance-in-los-angeles.webp",
      description: (
        <>
          <h3><strong>Grill Not Heating Properly</strong></h3>
          <ul><li><strong>How We Fix It</strong>: Faulty <strong>burners</strong>, clogged <strong>gas lines</strong>, or defective <strong>control valves</strong> are cleaned or replaced for even heat distribution.</li></ul>
          <h3><strong>Igniter Fails to Spark</strong></h3>
          <ul><li><strong>How We Fix It</strong>: We replace worn-out igniters and repair corroded connections to ensure reliable starts.</li></ul>
          <h3><strong>Excessive Smoke or Strange Smells</strong></h3>
          <ul><li><strong>How We Fix It</strong>: Buildup of <strong>grease</strong> or debris can cause smoke and odors. We provide professional <strong>grill cleaning services</strong> and check ventilation for proper airflow.</li></ul>
          <h3><strong>Clogged or Damaged Burners</strong></h3>
          <ul><li><strong>How We Fix It</strong>: We clean debris-clogged burners and replace damaged components to restore proper flame control.</li></ul>
          <h3><strong>Faulty Temperature Controls</strong></h3>
          <ul><li><strong>How We Fix It</strong>: Defective thermometers, control knobs, or wiring are replaced and recalibrated for precise cooking temperatures.</li></ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Full-Service BBQ Grill Repair",
      img: "/bbq-grill/BBQ-repair-near-me.webp",
      description: (
        <>
          <h3><strong>Outdoor Kitchen Grill Repair</strong></h3>
          <p style="text-align: start">We specialize in repairing <strong>built-in grills</strong>, ensuring your outdoor kitchen remains the perfect space for entertaining.</p>
          <h3><strong>High-End BBQ Grill Repair</strong></h3>
          <p style="text-align: start">Our technicians handle repairs for premium models, addressing issues with <strong>infrared burners</strong>, <strong>rotisserie systems</strong>, and more.</p>
          <h3><strong>Portable Grill Repair</strong></h3>
          <p style="text-align: start">From <strong>propane leaks</strong> to broken handles, we ensure your <strong>portable BBQ grill</strong> is ready for your next outing.</p>
        </>
      ),
    }
  ,
    {
      id: "content5",
      title: "Signs Your BBQ Grill Needs Repair",
      img: "/bbq-grill/bbq-repair-signs.webp",
      description: (
        <>
          <p><strong>Inconsistent Heat:</strong> If your grill heats unevenly or fails to reach temperature, it may indicate clogged burners or faulty regulators.</p>
          <p><strong>Ignition Issues:</strong> Trouble lighting the grill or constant clicking usually means the igniter or battery needs replacement.</p>
          <p><strong>Rust or Corrosion:</strong> Corrosion on burners, grates, or gas lines is a safety hazard and should be addressed immediately.</p>
          <p><strong>Unusual Smells:</strong> Strong gas odors or smoke buildup can point to leaks or blockages—call us to stay safe.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "BBQ Grill Maintenance Tips from Our Experts",
      img: "/bbq-grill/bbq-maintenance-tips.webp",
      description: (
        <>
          <p><strong>Regular Cleaning:</strong> Clean grates, burners, and drip trays after each use to prevent grease buildup and flare-ups.</p>
          <p><strong>Check Gas Connections:</strong> Test for leaks using soapy water on hoses and fittings. If you see bubbles, tighten or replace the line.</p>
          <p><strong>Cover Your Grill:</strong> Protect your BBQ from weather with a fitted cover to reduce rust and wear.</p>
          <p><strong>Season Your Grates:</strong> Lightly oil grates before use to improve performance and prevent sticking.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Contact Us for Expert BBQ Grill Repair in Los Angeles",
      img: "/bbq-grill/contact-bbq-repair.webp",
      description: (
        <>
          <p>Don’t let a broken grill ruin your weekend plans. Call <strong>Same Day Appliance Repair</strong> for fast, affordable BBQ grill repair in Los Angeles. We handle all major brands and grill types—gas, charcoal, electric, and more.</p>
          <p>Contact us now to schedule your service and get back to grilling with confidence!</p>
        </>
      ),
    }
  ]
  


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
