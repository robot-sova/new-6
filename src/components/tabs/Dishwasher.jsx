import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "ontent1",
      title: "Why Choose Same Day Appliance Repair for Dishwasher Repair Services?",
      img: "/dishwasher/dishwasher-repair-los-angeles.webp",
      description: (
        <>
          <p>Choosing Same Day Appliance Repair means selecting a team of certified <strong>appliance repair technicians</strong> dedicated to diagnosing issues, providing effective fixes, and offering maintenance tips to keep your <strong>dishwasher</strong> running smoothly.</p>
          <ul>
            <li><p><strong>Same-Day Appointments:</strong> We offer same-day <strong>service appointments</strong> to work around your schedule.</p></li>
            <li><p><strong>Certified Technicians:</strong> Our <strong>factory-trained</strong> team services all major brands and models with precision.</p></li>
            <li><p><strong>Use of Original Parts:</strong> Only original parts with warranty coverage for lasting results.</p></li>
            <li><p><strong>Transparent Pricing:</strong> Clear cost breakdown with no hidden fees—know exactly what you're paying for.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "types",
      title: "Types of Dishwashers We Repair and Our Specialized Approach",
      img: "/dishwasher/dishwasher-2.webp",
      description: (
        <>
          <p>We service all dishwasher types with tailored repair strategies:</p>
          <h3>Built-In Dishwasher Repair</h3>
          <p>We fix <strong>drain clogs</strong>, <strong>spray arm issues</strong>, and <strong>heating element failures</strong>.</p>
          <h3>Portable Dishwasher Repair</h3>
          <p>Common issues include <strong>float switch malfunctions</strong> and <strong>leaky door seals</strong>.</p>
          <h3>Countertop Dishwasher Repair</h3>
          <p>We resolve <strong>filter clogs</strong> and <strong>water flow</strong> problems for reliable cleaning.</p>
        </>
      ),
    },
    {
      id: "problems",
      title: "Common Dishwasher Problems We Fix",
      img: "/dishwasher/dishwasher-3.webp",
      description: (
        <>
          <ul>
            <li><p><strong>Not Draining:</strong> Clogged <strong>filter</strong> or <strong>drain hose</strong>.</p></li>
            <li><p><strong>Dishes Still Dirty:</strong> Issues with <strong>spray arms</strong>, <strong>heating element</strong>, or <strong>inlet valve</strong>.</p></li>
            <li><p><strong>Leaks:</strong> Caused by <strong>door seal damage</strong> or <strong>cracked hoses</strong>.</p></li>
            <li><p><strong>Odd Noises:</strong> Typically <strong>motor issues</strong> or blocked components.</p></li>
            <li><p><strong>Not Filling with Water:</strong> Faulty <strong>float switch</strong>, <strong>inlet valve</strong>, or <strong>latch</strong>.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "signs",
      title: "Signs Your Dishwasher Needs Repair – When to Call Us",
      img: "/dishwasher/dishwasher-5.webp",
      description: (
        <>
          <ul>
            <li><p><strong>Food Residue:</strong> May signal <strong>clogged filter</strong> or low water pressure.</p></li>
            <li><p><strong>Pooling Water:</strong> Drainage issues or <strong>blocked hoses</strong>.</p></li>
            <li><p><strong>Cycle Interruptions:</strong> Indicates <strong>control board</strong> or <strong>motor</strong> problems.</p></li>
            <li><p><strong>Odors:</strong> Often caused by <strong>trapped food</strong> or drain problems.</p></li>
          </ul>
        </>
      ),
    },
    {
      id: "industries",
      title: "Full-Service Dishwasher Repair for Every Home",
      img: "/dishwasher/dishwasher-6.webp",
      description: (
        <>
          <h3><strong>Kitchen Dishwasher Repair</strong></h3>
          <p>We service all models including <strong>built-in</strong>, <strong>portable</strong>, and <strong>countertop</strong> units.</p>
          <h3><strong>Dishwasher Repair for Large Families</strong></h3>
          <p>We fix <strong>motor strain</strong>, <strong>temperature settings</strong>, and <strong>cycle issues</strong> in high-capacity models.</p>
          <h3><strong>High-End and Built-In Dishwasher Repair</strong></h3>
          <p>We handle <strong>sensor calibration</strong>, <strong>control boards</strong>, and <strong>filtration systems</strong> on brands like <strong>Bosch</strong> and <strong>Miele</strong>.</p>
          <h3><strong>Wine Glass and Specialty Dishware Cycle Repair</strong></h3>
          <p>We service <strong>specialty racks</strong>, <strong>cycle programming</strong>, and <strong>delicate settings</strong>.</p>
        </>
      ),
    },
    {
      id: "maintenance",
      title: "Routine Dishwasher Maintenance Service for Longevity and Efficiency",
      description: (
        <>
          <ul>
            <li><p><strong>Filter and Drain Cleaning:</strong> Prevent clogs and improve flow.</p></li>
            <li><p><strong>Spray Arm Cleaning:</strong> Remove food and soap blockages for better coverage.</p></li>
            <li><p><strong>Seal Inspection:</strong> Prevent leaks by replacing worn <strong>door seals</strong>.</p></li>
          </ul>
          <p><strong>Schedule maintenance today</strong> and keep your dishwasher in top condition.</p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us for Dishwasher Repair Services in Los Angeles",
      description: (
        <>
          <p>If your dishwasher isn’t performing as it should, <strong>don’t wait</strong>. Contact <strong>Same Day Appliance Repair</strong> for <strong>same-day dishwasher repair services</strong> in Los Angeles and surrounding areas.</p>
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
