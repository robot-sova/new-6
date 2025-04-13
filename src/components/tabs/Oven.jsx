import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Us for Oven Repair Services?",
      img: "/oven-repair/1-oven.webp",
      description: (
        <>
          <p>Same-Day Appointments: We recognize the importance of a working oven and offer same-day service to resolve oven issues quickly, ensuring you can return to cooking as usual.</p>
          <p>Certified Technicians: Our skilled, factory-trained technicians are experienced with oven brands and models across the board. Whether it's a gas oven that won't ignite or an electric oven with heating issues, we diagnose and provide lasting solutions.</p>
        <p>Use of Original Parts: We only use genuine replacement parts from trusted suppliers. Each part comes with a warranty, which helps keep your oven running smoothly and ensures reliability in the long run.</p>
       <p>Transparent Repair Costs: Before beginning any work, we offer clear repair cost estimates so that you know exactly what to expect. We believe in transparent pricing with no hidden fees.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Ovens We Repair and Our Specialized Approach",
      img: "/oven-repair/2-oven.webp",
      description: (
        <>
   <p>Electric Oven Repair: Known for reliable and consistent heat, electric ovens may experience heating element issues, thermostat malfunctions, or circuit breaker problems. Our technicians perform thorough inspections to keep your oven temperature regulated and ensure safe preheating time and baking performance.</p>
   <p>Gas Oven Repair: With precise temperature control, gas ovens can sometimes suffer from igniter problems, gas valve malfunctions, or surface burner issues. We check gas lines and verify safety, guaranteeing your gas oven operates safely with the appropriate off-position function.</p>
   <p>Wall Oven Repair: Popular for saving space, wall ovens require specialized repair knowledge. From door handle repairs to fixing lock-out indicators, our team has the skills to handle all wall oven challenges, including manual lock issues, lock motor stops running, and door lock problems.</p>
   <p>Convection Oven Repair: For even cooking and efficiency, convection ovens rely on fans and precise temperature. Our technicians address fan malfunctions, oven door problems, and other issues so your oven stays locked and performs at an optimal level.</p>


        </>
      ),
    },
    {
      id: "content3",
      title: "Dishwasher Repair",
      img: "dishwasher.jpg",
      description: "A properly functioning dishwasher saves time and energy.",
    },
    {
      id: "content4",
      title: "Dryer Repair",
      img: "dryer.jpg",
      description: "Dryers need periodic checks and maintenance to ensure efficiency.",
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
               <img src={item.img} alt={item.title} className="image-float" />
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
               <img src={item.img} alt={item.title} className="image-float" />
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
