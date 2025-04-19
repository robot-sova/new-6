import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Induction Cooktop Repairs?",
      img: "/induction-cooktop-repair/best-induction-cooktop-repair-service.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
  <img alt="best induction cooktop repair service" height="500px" loading="lazy" src="/induction-cooktop-repair/best-induction-cooktop-repair-service.webp" width="400px"/>
  <figcaption>Best Induction Cooktop Repair Service</figcaption>
  </div>
  <p>When you choose Same Day Appliance Repair, you're selecting a team of professionals who specialize in <strong>induction cooktops</strong> and other <strong>appliances</strong>. Here's why Los Angeles residents trust us for their <strong>cooktop repair</strong> needs:</p><ul><li><p><strong>Same-Day Service</strong>: We know a <strong>broken cooktop</strong> can disrupt your daily routine. Our same-day service ensures your kitchen is back in working order without delays.</p></li><li><p><strong>Certified Technicians</strong>: Our repair team is highly trained in servicing <strong>induction cooktops</strong>, <strong>electric stoves</strong>, and other models. We have years of experience troubleshooting and fixing appliances across all brands.</p></li><li><p><strong>Top-Quality Parts</strong>: We only use high-grade replacement parts, including <strong>heating elements</strong>, <strong>circuit boards</strong>, and fuses, ensuring your <strong>cooktop</strong> is repaired for long-term performance.</p></li><li><p><strong>Transparent Pricing</strong>: No more guessing games. We provide upfront quotes, so you know exactly what to expect in terms of <strong>repair costs</strong> before we begin.</p></li><li><p><strong>Warranty on Repairs</strong>: All our repairs come with a warranty for peace of mind, ensuring your <strong>appliance</strong> stays in top shape.</p>
  </li></ul>
        </>
      ),
    },
    {
      id: "content2",
      title: "Common Induction Cooktop Types We Repair and Our Specialized Approach",
      img: "/induction-cooktop-repair/induction-cooktop-repair-near-me.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
  <img alt="induction cooktop repair near me" height="500px" loading="lazy" src="/induction-cooktop-repair/induction-cooktop-repair-near-me.webp" width="400px"/>
  <figcaption>Induction Cooktop Repair Near Me</figcaption>
  </div>
  <p>Our experienced technicians specialize in <strong>induction cooktop repair</strong> for a wide range of models and brands, ensuring your <strong>induction cooking</strong> experience is safe and efficient. Here's how we handle various types of <strong>cooktops</strong> and their common issues:</p><h3><strong>Standard Induction Cooktop Repair: Efficient and Modern Cooking Solutions</strong></h3><p><strong>Induction cooktops</strong> are prized for their fast, energy-efficient heating and sleek designs. However, they can face problems such as:</p><ul><li><p><strong>Faulty heating elements</strong></p></li><li><p><strong>Circuit board failures</strong></p></li><li><p><strong>Error codes on display</strong></p></li></ul><p>Our technicians use advanced tools to <strong>troubleshoot</strong> issues with the <strong>electromagnetic field</strong> and replace defective parts like <strong>circuit boards</strong> or <strong>burners</strong>. We test the unit after repairs to ensure it provides consistent and reliable heat while maintaining safety standards.</p><h3><strong>Built-In Induction Cooktop Repair: Seamless Integration and Functionality</strong></h3><p>Built-in <strong>induction cooktops</strong> are designed to blend seamlessly into your kitchen layout. Common problems include:</p><ul><li><p><strong>Glass surface cracks</strong></p></li><li><p><strong>Power supply issues</strong></p></li><li><p><strong>Faulty sensors</strong></p></li></ul><p>We address these issues by replacing damaged <strong>glass panels</strong>, fixing <strong>blown fuses</strong>, and recalibrating or replacing faulty sensors. Our team ensures your <strong>built-in cooktop</strong> retains its sleek appearance while performing flawlessly.</p><h3><strong>Portable Induction Cooktop Repair: Convenient Cooking Anywhere</strong></h3><p>Portable <strong>induction cooktops</strong> are ideal for small kitchens or on-the-go cooking but can encounter:</p><ul><li><p><strong>Overheating units</strong></p></li><li><p><strong>Damaged power cords or plugs</strong></p></li><li><p><strong>Malfunctioning controls</strong></p></li></ul><p>Our technicians repair or replace damaged <strong>power cords</strong>, fix control panels, and ensure the unit cools and operates correctly. We focus on restoring portability and efficiency so you can continue to enjoy <strong>induction cooking</strong> wherever you need it.</p><h3><strong>Dual-Zone Induction Cooktop Repair: Precise Heating for Multi-Tasking</strong></h3><p>Dual-zone <strong>induction cooktops</strong> allow you to cook at different temperatures on separate burners, but they can face issues like:</p><ul><li><p>Uneven <strong>heating elements</strong></p></li><li><p><strong>Burner activation problems</strong></p></li><li><p>Inconsistent <strong>temperature control</strong></p></li></ul><p>We recalibrate the <strong>electronics</strong>, replace defective components, and test both zones to ensure your <strong>dual-zone cooktop </strong>operates smoothly and provides even heat distribution.</p><h3><strong>Commercial Induction Cooktop Repair: High-Performance Cooking for Businesses</strong></h3><p><strong>Induction cooktops</strong> in restaurants or commercial kitchens experience heavy usage, leading to:</p><ul><li><p><strong>Frequent circuit breaker trips</strong></p></li><li><p>Burnt-out <strong>coils or burners</strong></p></li><li><p>Malfunctioning <strong>igniters</strong></p></li></ul><p>We specialize in repairing high-performance units from brands like <strong>Viking</strong> and <strong>Bosch</strong>, ensuring quick turnaround times to minimize downtime. Our repairs focus on restoring full power and reliability to support your business operations.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Induction Cooktop Problems and How We Fix Them",
      img: "/induction-cooktop-repair/induction-cooktop-repair-service-los-angeles.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
  <img alt="induction cooktop repair service los angeles" height="500px" loading="lazy" src="/induction-cooktop-repair/induction-cooktop-repair-service-los-angeles.webp" width="400px"/>
  <figcaption>Induction Cooktop Repair Service Los Angeles</figcaption>
  </div>
  <h3><strong>Induction Cooktop Not Heating</strong></h3><ul><li><p><strong>Customer Concern</strong>: "The <strong>burner</strong> is activated, but my <strong>cookware</strong> isn't heating."</p></li><li><p><strong>How We Fix It</strong>: If your <strong>induction cooktop</strong> isn't heating, we inspect the <strong>circuit board</strong>, <strong>coil</strong>, and <strong>power supply</strong>. Often, the issue lies in damaged electronics or incompatible pans. We test the <strong>appliance</strong> and fix or replace faulty components to ensure proper heat distribution.</p></li></ul><h3><strong>Error Codes on the Display</strong></h3><ul><li><p><strong>Customer Concern</strong>: "My cooktop shows error codes, and I don't know what they mean."</p></li><li><p><strong>How We Fix It</strong>: Error codes often indicate issues with the <strong>electronics</strong> or <strong>circuit board</strong>. We troubleshoot the system, diagnose the problem, and replace damaged parts, eliminating the error codes and restoring normal operation.</p></li></ul><h3><strong>Cooktop Shuts Off Unexpectedly</strong></h3><ul><li><p><strong>Customer Concern</strong>: "My <strong>induction stove</strong> turns off during cooking."</p></li><li><p><strong>How We Fix It</strong>: Overheating or <strong>circuit breaker</strong> issues are common causes of this problem. We inspect the cooling fan, <strong>coil</strong>, and <strong>fuse</strong> to determine the root cause. Replacing faulty parts or recalibrating the system resolves the issue.</p></li></ul><h3><strong>Cracked Glass Surface</strong></h3><ul><li><p><strong>Customer Concern</strong>: "The glass on my <strong>induction cooktop</strong> is cracked."</p></li><li><p><strong>How We Fix It</strong>: A cracked glass surface compromises safety and performance. Our technicians replace the damaged glass with a durable, high-quality replacement, ensuring your <strong>appliance</strong> looks and functions like new.</p></li></ul><h3><strong>Buzzing or Clicking Noises</strong></h3><ul><li><p><strong>Customer Concern</strong>: "My cooktop makes strange noises while in use."</p></li><li><p><strong>How We Fix It</strong>: Noises are often caused by misaligned <strong>burners</strong> or issues with the <strong>electromagnetic field</strong>. We realign components, replace faulty parts, and ensure your <strong>induction cooktop</strong> operates quietly.</p></li></ul><h3><strong>Unresponsive Controls</strong></h3><ul><li><p><strong>Customer Concern</strong>: "The touch controls on my <strong>induction stove</strong> aren't working."</p></li><li><p><strong>How We Fix It</strong>: We troubleshoot the control panel, test the <strong>circuit board</strong>, and recalibrate the controls. If necessary, we replace damaged electronics to restore full functionality.</p></li></ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Induction Cooktop Needs Repair",
      img: "/induction-cooktop-repair/induction-cooktop-repair-today.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
  <img alt="induction cooktop repair today" height="500px" loading="lazy" src="/induction-cooktop-repair/induction-cooktop-repair-today.webp" width="400px"/>
  <figcaption>Induction Cooktop Repair Today</figcaption>
  </div>
  <p>Recognizing early signs of trouble with your <strong>induction cooktop</strong> can save you from more costly repairs. Here's what to look for:</p><ul><li><p><strong>Cooktop Not Heating</strong>: If your <strong>magnet sticks</strong> to the pan but it won't heat, it could signal issues with the <strong>coil</strong> or <strong>circuit board</strong>.</p></li><li><p><strong>Error Messages</strong>: Persistent error codes on the display indicate a need for professional troubleshooting.</p></li><li><p><strong>Visible Damage</strong>: Cracks or chips in the glass surface compromise safety and should be addressed immediately.</p></li><li><p><strong>Strange Noises</strong>: Buzzing or clicking sounds suggest issues with the <strong>electromagnetic field</strong> or <strong>burner alignment</strong>.</p></li><li><p><strong>Sudden Shutdowns</strong>: If the <strong>cooktop cools</strong> unexpectedly during use, it may be due to overheating or a blown fuse.</p></li></ul><p>If you notice any of these issues, call us for expert <strong>induction cooktop repair services</strong>.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Full-Service Induction Cooktop Repair for Every Home",
      img: "/induction-cooktop-repair/same-day-induction-cooktop-repair.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
  <img alt="same day induction cooktop repair" height="500px" loading="lazy" src="/induction-cooktop-repair/same-day-induction-cooktop-repair.webp" width="400px"/>
  <figcaption>Same Day Induction Cooktop Repair</figcaption>
  </div>
  <h4><strong>Residential Induction Cooktop Repair</strong></h4><p>For home kitchens, we handle everything from minor adjustments to major repairs, ensuring your <strong>induction cooktop </strong>operates smoothly.</p><h4><strong>High-End and Luxury Induction Cooktop Repair</strong></h4><p>Luxury <strong>induction cooktops</strong> like <strong>Bosch</strong> and <strong>Viking cooktops</strong> feature advanced technology. Our technicians specialize in servicing high-end models, addressing issues like precise temperature calibration, <strong>circuit board</strong> replacement, and <strong>coil</strong> repairs.</p><h4><strong>Electric and Induction Cooktop Repair</strong></h4><p>Whether you have an <strong>electric stove</strong>, <strong>induction stove</strong>, or hybrid model, we are equipped to handle repairs for all types of <strong>cooktops</strong>.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Maintenance Services for Induction Cooktops",
      img: "",
      description: (
        <>
          <p>Regular maintenance can extend the lifespan of your <strong>induction cooktop</strong> and prevent unexpected breakdowns. Our services include:</p><ul><li><p><strong>Cleaning and Inspection</strong>: Removing <strong>aluminum foil</strong>, dust, and debris to prevent overheating.</p></li><li><p><strong>Coil and Circuit Testing</strong>: Ensuring the <strong>coil</strong> and <strong>circuit board</strong> are functioning efficiently.</p></li><li><p><strong>Glass Surface Maintenance</strong>: Inspecting and cleaning the surface to avoid scratches or chips.</p></li><li><p><strong>Temperature Calibration</strong>: Verifying and adjusting the <strong>circuit board</strong> for precise heating.</p></li></ul>
        </>
      ),
    },
    {
      id: "content7",
      title: "Deciding Between Induction Cooktop Repair and Replacement",
      img: "",
      description: (
        <>
          <p>If your <strong>induction cooktop</strong> frequently malfunctions, you may need to decide whether to repair or replace it. Consider these factors:</p><ul><li><p><strong>Repair Costs vs. Replacement</strong>: If <strong>repair costs</strong> exceed 50% of the price of a new unit, replacement might be more cost-effective.</p></li><li><p><strong>Age of the Cooktop</strong>: Older models may lack modern safety features and energy efficiency.</p></li><li><p><strong>Performance</strong>: If the <strong>induction cooktop</strong> cannot maintain consistent heat, it might be time for an upgrade.</p></li></ul><p>Our repair technicians will provide honest advice tailored to your needs.</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Contact Us for Expert Induction Cooktop Repair Services",
      img: "",
      description: (
        <>
          <p>Don't let a malfunctioning <strong>induction cooktop</strong> disrupt your cooking routine. Contact Same Day Appliance Repair for fast, reliable service. From troubleshooting error codes to replacing <strong>heating elements</strong>, we're here to help.</p>
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
