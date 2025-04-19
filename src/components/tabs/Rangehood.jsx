import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Range Hood Repairs?",
      img: "/range-hood-repair/same-day-kitchen-hood-repair.webp",
      description: (
        <>
          <p>When it comes to <strong>range hood repair</strong>, we combine expertise, the right tools, and high-quality replacement parts to deliver exceptional results. Here's why homeowners in Los Angeles trust us:</p><h3><strong>Same-Day Service</strong></h3><p>A malfunctioning <strong>range hood</strong> can quickly turn your <strong>cooking area</strong> into an uncomfortable space filled with <strong>smoke</strong> and <strong>steam</strong>. Our same-day service ensures your <strong>vent hood</strong> is fixed promptly so you can return to a clean, comfortable kitchen.</p><h3><strong>Professional Technicians</strong></h3><p>Our certified <strong>repairmen</strong> are trained to handle a variety of issues, including faulty <strong>fan motors</strong>, damaged <strong>fan blades</strong>, and defective <strong>control boards</strong>. They bring years of experience and professionalism to every job, ensuring your <strong>range hood</strong> is repaired correctly the first time.</p><h4><strong>Top-Quality Replacement Parts</strong></h4><p>We use only original parts, such as <strong>motor bearings</strong>, switches, and filters, to guarantee lasting results. From replacing a <strong>blower wheel housing</strong> to fixing a defective <strong>control board</strong>, we ensure your appliance operates like new.</p><h3><strong>Transparent Pricing</strong></h3><p>We provide upfront quotes for all labor and parts, so you'll know the exact <strong>pricing</strong> before any work begins. No surprises—just honest, reliable service.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Range Hood Types We Fix - How We Repair Them",
      img: "/range-hood-repair/licensed-hood-repair-technician.webp",
      description: (
        <>
          <p>Our technicians fix <strong>all range hoods</strong> to get your <strong>kitchen ventilation system</strong> running like new. Here's how we address <strong>common issues</strong> with different <strong>range hood models</strong>:</p><h3><strong>Under-Cabinet Range Hood</strong></h3><p><strong>Under-cabinet range hoods</strong> are small and <strong>space-saving</strong> but often have:</p><ul><li><p><strong>Bad fan motors</strong></p></li><li><p><strong>Clogged filters</strong></p></li><li><p><strong>Lighting issues</strong></p></li></ul><li><p><strong>Bad fan motors</strong></p></li><p><strong>Bad fan motors</strong></p><li><p><strong>Clogged filters</strong></p></li><p><strong>Clogged filters</strong></p><li><p><strong>Lighting issues</strong></p></li><p><strong>Lighting issues</strong></p><p>We clean or replace <strong>filters</strong>, repair or replace bad <strong>fan motors</strong>, and fix <strong>lighting problems</strong>.</p><h3><strong>Wall-Mounted Range Hood</strong></h3><p><strong>Wall-mounted range hoods</strong> have <strong>great ventilation</strong> and a <strong>modern look</strong> but may have:</p><ul><li><p><strong>Poor airflow</strong></p></li><li><p><strong>Broken blower motors</strong></p></li><li><p><strong>Damaged control panels</strong></p></li></ul><li><p><strong>Poor airflow</strong></p></li><p><strong>Poor airflow</strong></p><li><p><strong>Broken blower motors</strong></p></li><p><strong>Broken blower motors</strong></p><li><p><strong>Damaged control panels</strong></p></li><p><strong>Damaged control panels</strong></p><p>Our technicians inspect and repair <strong>blower motors</strong>, clean <strong>vent ducts</strong>, and replace defective <strong>control boards</strong> so your <strong>range hood works properly</strong>.</p><h3><strong>Island Range Hood</strong></h3><p><strong>Island range hoods</strong> are designed for <strong>kitchens with island cooktops</strong> and ventilate from above. Common issues are:</p><ul><li><p><strong>Noise</strong></p></li><li><p><strong>Grease buildup in filters</strong></p></li><li><p><strong>Faulty sensors or controls</strong></p></li></ul><li><p><strong>Noise</strong></p></li><p><strong>Noise</strong></p><li><p><strong>Grease buildup in filters</strong></p></li><p><strong>Grease buildup in filters</strong></p><li><p><strong>Faulty sensors or controls</strong></p></li><p><strong>Faulty sensors or controls</strong></p><p>We fix <strong>noise</strong> by repairing or replacing <strong>fan motors</strong>, clean <strong>filters thoroughly</strong>, and recalibrate or replace defective <strong>sensors and control systems</strong>.</p><h3><strong>Ductless Range Hood</strong></h3><p><strong>Ductless range hoods</strong>, which <strong>filter and recirculate air</strong>, are great for spaces without exterior venting. They often have:</p><ul><li><p><strong>Clogged charcoal filters</strong></p></li><li><p><strong>Ineffective odor removal</strong></p></li><li><p><strong>Damaged fan blades</strong></p></li></ul><li><p><strong>Clogged charcoal filters</strong></p></li><p><strong>Clogged charcoal filters</strong></p><li><p><strong>Ineffective odor removal</strong></p></li><p><strong>Ineffective odor removal</strong></p><li><p><strong>Damaged fan blades</strong></p></li><p><strong>Damaged fan blades</strong></p><p>We clean or replace <strong>charcoal filters</strong>, repair damaged <strong>fan blades</strong>, and optimize <strong>airflow</strong> to improve <strong>odor and grease removal</strong>.</p><h3><strong>Commercial Range Hood</strong></h3><p><strong>Commercial range hoods</strong> used in <strong>restaurants</strong> and <strong>large kitchens</strong> are heavily used and often have:</p><ul><li><p><strong>Damaged fan belts or motors</strong></p></li><li><p><strong>Grease trap blockages</strong></p></li><li><p><strong>Electrical issues</strong></p></li></ul><li><p><strong>Damaged fan belts or motors</strong></p></li><p><strong>Damaged fan belts or motors</strong></p><li><p><strong>Grease trap blockages</strong></p></li><p><strong>Grease trap blockages</strong></p><li><p><strong>Electrical issues</strong></p></li><p><strong>Electrical issues</strong></p><p>We repair <strong>commercial range hoods</strong> by replacing <strong>fan belts</strong>, clearing <strong>grease traps</strong>, and addressing <strong>electrical problems </strong>so your kitchen meets <strong>safety codes</strong> and runs smoothly.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Range Hood Problems and How We Fix Them",
      img: "/range-hood-repair/residential-hood-repair.webp",
      description: (
        <>
          <p>Our team has extensive experience diagnosing and repairing a wide range of <strong>range hood issues</strong>. Here's how we handle the most common problems:</p><h3><strong>Range Hood Fan Not Working</strong></h3><p><strong>How We Fix It:</strong> The issue could be with the <strong>fan motor</strong>, <strong>fan blades</strong>, or electrical components. Our technicians test the <strong>motor bearings</strong>, replace damaged <strong>fan blades</strong>, and ensure the fan operates smoothly to clear smoke and steam effectively.</p><h3><strong>Noisy Exhaust Fan</strong></h3><p><strong>How We Fix It:</strong> A noisy <strong>kitchen exhaust fan</strong> often points to loose <strong>fan blades</strong> or worn-out <strong>motor bearings</strong>. We secure the components, replace faulty parts, and eliminate the noise for quieter operation.</p><h3><strong>Lights Not Working</strong></h3><p><strong>How We Fix It:</strong> Faulty wiring, burned-out bulbs, or damaged <strong>control boards</strong> can disrupt your <strong>range hood lighting</strong>. Our technicians replace bulbs, test wiring, and fix or replace defective components to restore proper lighting.</p><h3><strong>Weak Ventilation</strong></h3><p><strong>How We Fix It:</strong> If your <strong>vent hood</strong> struggles to remove grease and odors, the problem may lie in a clogged filter or a failing <strong>blower wheel housing</strong>. We clean or replace filters, inspect ductwork, and repair or replace the blower to ensure efficient ventilation.</p><h3><strong>Range Hood Won't Turn On</strong></h3><p><strong>How We Fix It:</strong> A tripped <strong>circuit breaker</strong>, defective <strong>switch</strong>, or damaged electrical components could prevent your <strong>range hood</strong> from powering on. We test the electrical system, replace faulty parts, and get your appliance running again.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Range Hood Needs Repair – Insights from Our Technicians",
      img: "/range-hood-repair/range-hood-repair-near-me.webp",
      description: (
        <>
          <p>Our skilled <strong>repairmen</strong> often encounter warning signs that indicate your <strong>range hood</strong> may need professional attention. Watch out for these issues:</p><ul><li><p><strong>Persistent Smoke or Steam:</strong> If your <strong>range hood</strong> isn't clearing smoke effectively, it's time for a professional inspection.</p></li><li><p><strong>Unusual Noises:</strong> Grinding or rattling sounds usually point to worn-out <strong>motor bearings</strong> or loose <strong>fan blades</strong>.</p></li><li><p><strong>Weak Suction Power:</strong> A clogged <strong>filter</strong> or faulty motor can reduce your hood's efficiency.</p></li><li><p><strong>Flickering Lights:</strong> Intermittent lighting signals electrical issues or a defective <strong>control board</strong>.</p></li><li><p><strong>Grease Build-Up:</strong> Excessive grease accumulation may indicate that your hood isn't functioning properly and needs repair or maintenance.</p>
  </li></ul><li><p><strong>Persistent Smoke or Steam:</strong> If your <strong>range hood</strong> isn't clearing smoke effectively, it's time for a professional inspection.</p></li><p><strong>Persistent Smoke or Steam:</strong> If your <strong>range hood</strong> isn't clearing smoke effectively, it's time for a professional inspection.</p><li><p><strong>Unusual Noises:</strong> Grinding or rattling sounds usually point to worn-out <strong>motor bearings</strong> or loose <strong>fan blades</strong>.</p></li><p><strong>Unusual Noises:</strong> Grinding or rattling sounds usually point to worn-out <strong>motor bearings</strong> or loose <strong>fan blades</strong>.</p><li><p><strong>Weak Suction Power:</strong> A clogged <strong>filter</strong> or faulty motor can reduce your hood's efficiency.</p></li><p><strong>Weak Suction Power:</strong> A clogged <strong>filter</strong> or faulty motor can reduce your hood's efficiency.</p><li><p><strong>Flickering Lights:</strong> Intermittent lighting signals electrical issues or a defective <strong>control board</strong>.</p></li><p><strong>Flickering Lights:</strong> Intermittent lighting signals electrical issues or a defective <strong>control board</strong>.</p><li><p><strong>Grease Build-Up:</strong> Excessive grease accumulation may indicate that your hood isn't functioning properly and needs repair or maintenance.</p>
  </li><p><strong>Grease Build-Up:</strong> Excessive grease accumulation may indicate that your hood isn't functioning properly and needs repair or maintenance.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Full-Service Range Hood Repair",
      img: "/range-hood-repair/range-hood-repair.webp",
      description: (
        <>
          <p>We provide comprehensive <strong>range hood repair services</strong> to address all issues efficiently and effectively. Here's what we offer:</p><h3><strong>Wall-Mounted Range Hood Repair</strong></h3><p>Our technicians repair wall-mounted hoods, tackling problems like noisy <strong>fans</strong>, clogged ducts, and faulty electrical systems.</p><h3><strong>Under-Cabinet Range Hood Repair</strong></h3><p>We specialize in under-cabinet range hood repairs, including fixing weak ventilation, damaged switches, and <strong>motor replacements</strong>.</p><h3><strong>Island Range Hood Repair</strong></h3><p>Island range hoods require precise attention due to their unique placement. Our team handles <strong>motor repairs</strong>, duct inspections, and <strong>fan blade replacements</strong> with care and expertise.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Maintenance Services for Long-Lasting Range Hoods",
      img: "/range-hood-repair/kitchen-exhaust-repair-near-me.webp",
      description: (
        <>
          <p>Regular maintenance is essential for keeping your <strong>range hood</strong> in top condition. Here's what our services include:</p><ul><li><p><strong>Filter Cleaning or Replacement:</strong> Prevent clogs and improve ventilation with routine filter maintenance.</p></li><li><p><strong>Ductwork Inspection:</strong> Identify and resolve blockages in your vent system for optimal airflow.</p></li><li><p><strong>Fan Motor Testing:</strong> Ensure the <strong>motor bearings</strong> and fan are operating efficiently to avoid noisy operation.</p></li><li><p><strong>Grease Removal:</strong> Clean internal components to prevent grease build-up and fire hazards.</p></li></ul><li><p><strong>Filter Cleaning or Replacement:</strong> Prevent clogs and improve ventilation with routine filter maintenance.</p></li><p><strong>Filter Cleaning or Replacement:</strong> Prevent clogs and improve ventilation with routine filter maintenance.</p><li><p><strong>Ductwork Inspection:</strong> Identify and resolve blockages in your vent system for optimal airflow.</p></li><p><strong>Ductwork Inspection:</strong> Identify and resolve blockages in your vent system for optimal airflow.</p><li><p><strong>Fan Motor Testing:</strong> Ensure the <strong>motor bearings</strong> and fan are operating efficiently to avoid noisy operation.</p></li><p><strong>Fan Motor Testing:</strong> Ensure the <strong>motor bearings</strong> and fan are operating efficiently to avoid noisy operation.</p><li><p><strong>Grease Removal:</strong> Clean internal components to prevent grease build-up and fire hazards.</p></li><p><strong>Grease Removal:</strong> Clean internal components to prevent grease build-up and fire hazards.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Deciding Between Microwave Repair and Replacement",
      img: "/range-hood-repair/range-hood-repair-today.webp",
      description: (
        <>
          <p>If your <strong>range hood</strong> has frequent issues or the repair cost exceeds 50% of the price of a new unit, replacement may be the best option. We'll help you decide based on:</p><ul><li><p><strong>Age of the Hood:</strong> Older models may lack efficiency and advanced features.</p></li><li><p><strong>Repair Frequency:</strong> Frequent breakdowns suggest it's time for an upgrade.</p></li><li><p><strong>Energy Efficiency:</strong> Modern range hoods are quieter, more powerful, and energy-efficient.</p></li></ul><li><p><strong>Age of the Hood:</strong> Older models may lack efficiency and advanced features.</p></li><p><strong>Age of the Hood:</strong> Older models may lack efficiency and advanced features.</p><li><p><strong>Repair Frequency:</strong> Frequent breakdowns suggest it's time for an upgrade.</p></li><p><strong>Repair Frequency:</strong> Frequent breakdowns suggest it's time for an upgrade.</p><li><p><strong>Energy Efficiency:</strong> Modern range hoods are quieter, more powerful, and energy-efficient.</p></li><p><strong>Energy Efficiency:</strong> Modern range hoods are quieter, more powerful, and energy-efficient.</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Contact Us for Range Hood Repair Services in Los Angeles",
      img: "/range-hood-repair/under-cabinet-range-hood-repair.webp",
      description: (
        <>
          <p>Don't let a malfunctioning <strong>range hood</strong> disrupt your kitchen. Contact Same Day Appliance Repair today for expert <strong>range hood repair services</strong>. Our team is ready to diagnose and fix any issue, ensuring your <strong>vent hood</strong> is working properly.</p>
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
