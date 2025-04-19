import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Wine Cellar Repairs?",
      img: "/wine/best-wine-cellar-repair-service-los-angeles.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
    <img alt="best wine cellar repair service los angeles" height="1000px" loading="lazy" src="/wine/best-wine-cellar-repair-service-los-angeles.webp" width="2000px"/>
    </div>
    <h3><strong>Expert Knowledge of Wine Cellar Cooling Systems</strong></h3><p style="text-align: start">Working with <strong>wine cellars</strong> daily, we've gained deep expertise in handling a variety of <strong>cooling systems</strong>, including those for <strong>custom wine cellar designs</strong> and <strong>wine cellar refrigeration units</strong>. Whether it's a malfunctioning <strong>climate control system</strong> or a worn-out <strong>evaporator coil</strong>, we have the skills and tools to get the job done right.</p><h3><strong>Responsive and Cost-Effective Solutions</strong></h3><p style="text-align: start">Every call is an opportunity to help clients find the most <strong>cost-effective</strong> solution to their <strong>wine cellar issues</strong>. Our approach includes careful diagnostics to determine whether a <strong>repair</strong> or <strong>replacement</strong> is more practical, minimizing repair costs while ensuring long-term functionality.</p><h3><strong>Comprehensive Maintenance Services</strong></h3><p style="text-align: start"><strong>Regular maintenance</strong> is a big part of our work. We emphasize the importance of scheduling <strong>wine cellar maintenance </strong>to avoid costly <strong>potential repairs</strong>. By cleaning <strong>evaporator coils</strong>, recalibrating <strong>temperature settings</strong>, and ensuring all components are in optimal condition, we help our clients extend the life of their <strong>cellar cooling units</strong>.</p>
        </>
      ),
    },
    
    {
      id: "content2",
      title: "Common Wine Cellar Types We Repair - Our Approach",
      img: "/wine/same-day-wine-cellar-repair.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
    <img alt="same day wine сellar repair" height="500px" loading="lazy" src="/wine/same-day-wine-cellar-repair.webp" width="400px"/>
    </div>
    <p style="text-align: start">As experienced <strong>wine cellar technicians</strong>, we understand the complexities of maintaining the perfect environment for your wine collection. Each type of <strong>wine cellar cooling system</strong> has unique features and potential challenges, and we take pride in providing tailored solutions to meet the specific needs of our clients. Here's how we approach the most common types of <strong>wine cellars</strong>:</p><h3>Custom Wine Cellars: Tailored Elegance and Functionality</h3><p style="text-align: start"><strong>Custom wine cellars</strong> are often designed to showcase collections while preserving their quality. These unique spaces rely on advanced <strong>wine cellar cooling systems</strong> to maintain precise temperature and humidity levels. Over time, issues like faulty <strong>evaporator coils</strong>, inefficient airflow, or malfunctioning <strong>climate control systems</strong> can arise.</p><p style="text-align: start"><strong>What We Do:</strong></p><ul><li><p>Inspect and repair <strong>wine cellar cooling units</strong> to ensure consistent climate control.</p></li><li><p>Calibrate temperature and humidity settings for optimal storage.</p></li><li><p>Clean and maintain evaporator coils and other essential components.</p></li><li><p>Replace or upgrade outdated cooling systems with modern, energy-efficient solutions.</p></li></ul><h3>Walk-In Wine Rooms: Large-Scale Storage Solutions</h3><p style="text-align: start"><strong>Wine rooms</strong> or walk-in <strong>wine cellars</strong> are popular for larger collections and commercial use. These systems often require robust <strong>wine cellar refrigeration units</strong> capable of maintaining stable conditions across a larger space. Problems such as uneven cooling, leaks, or failing <strong>cooling systems</strong> can compromise the quality of your wines.</p><p style="text-align: start"><strong>What We Do:</strong></p><ul><li><p>Diagnose and fix uneven temperature distribution or airflow issues.</p></li><li><p>Repair leaks or malfunctions in the <strong>wine cellar refrigeration unit</strong>.</p></li><li><p>Perform regular maintenance to prolong the life of the system.</p></li><li><p>Advise on best practices for maintaining a large-scale <strong>wine cellar cooling system</strong>.</p></li></ul><h3>Built-In Wine Cellars: Seamless Integration</h3><p style="text-align: start">Built-in <strong>wine cellars</strong> are designed to blend seamlessly into your home's design while offering reliable wine storage. These systems can experience issues such as poor insulation, failing <strong>cooling units</strong>, or temperature fluctuations due to their location or setup.</p><p style="text-align: start"><strong>What We Do:</strong></p><ul><li><p>Assess and improve insulation to maintain stable conditions.</p></li><li><p>Repair or replace malfunctioning cooling units.</p></li><li><p>Recalibrate temperature settings to ensure wines are stored at optimal levels.</p></li><li><p>Provide advice on upgrades or retrofits to improve efficiency.</p></li></ul><h3>Small-Scale Wine Cellars: Compact and Efficient</h3><p style="text-align: start">Smaller <strong>wine cellars</strong> or wine rooms are perfect for personal collections but require the same attention to detail as larger setups. Compact <strong>cooling systems</strong> can face challenges such as <strong>evaporator coil</strong> freezing, fan malfunctions, or inadequate humidity control.</p><p style="text-align: start"><strong>What We Do:</strong></p><ul><li><p>Troubleshoot and repair compact <strong>wine cellar cooling units</strong>.</p></li><li><p>Clean and maintain fan systems to ensure proper airflow.</p></li><li><p>Address potential issues with temperature or humidity settings.</p></li><li><p>Offer maintenance plans to keep smaller systems running smoothly.</p></li></ul><h3>Commercial Wine Cellars: Robust Systems for Business Needs</h3><p style="text-align: start"><strong>Commercial wine cellars</strong> in restaurants, wineries, or retail stores demand high-capacity <strong>cooling systems</strong> to preserve large quantities of wine. Frequent usage, heavy loads, and environmental factors can lead to <strong>repair needs</strong> such as condenser failures, fan breakdowns, or inconsistent climate control.</p><p style="text-align: start"><strong>What We Do:</strong></p><ul><li><p>Repair and maintain large-scale refrigeration and cooling units.</p></li><li><p>Optimize system performance to handle heavy-duty usage.</p></li><li><p>Provide regular maintenance to minimize downtime and ensure reliable operation.</p></li><li><p>Replace failing components like fans, <strong>evaporator coils</strong>, or thermostats with high-quality parts.</p>
    </li></ul>
        </>
      ),
    },
    
    {
      id: "content3",
      title: "Common Wine Cellar Problems We Fix",
      img: "/wine/wine-cellar-repair-near-me.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
    <img alt="wine сellar repair near me" height="500px" loading="lazy" src="/wine/wine-cellar-repair-near-me.webp" width="400px"/>
    </div>
    <p style="text-align: start">Our team addresses <strong>potential issues</strong> with <strong>wine cellar systems</strong> that affect storage conditions, including:</p><ul><li><p><strong>Temperature Fluctuations</strong>: A <strong>wine cellar cooling unit</strong> struggling to maintain consistent temperatures can jeopardize the quality of your wines. We recalibrate thermostats, repair <strong>cooling units</strong>, and fix <strong>climate control systems</strong> to restore stability.</p></li><li><p><strong>Inefficient Cooling</strong>: If your <strong>wine cellar cooling system</strong> isn't delivering enough cold air, we inspect the <strong>evaporator coils</strong>, fans, and refrigeration lines to ensure proper airflow and efficiency.</p></li><li><p><strong>Humidity Imbalances</strong>: A <strong>wine room</strong> with improper humidity can dry out corks or promote mold growth. We adjust the <strong>cooling system</strong> and provide solutions to maintain proper humidity levels.</p></li><li><p><strong>Noise and Vibrations</strong>: Noisy systems can disrupt the peace of your <strong>wine cellar</strong>. We replace worn-out components, tighten loose parts, and ensure the system operates quietly.</p></li></ul>
        </>
      ),
    },
    
    {
      id: "content4",
      title: "Signs Your Wine Cellar Needs Repair – When and Why to Call Us",
      img: "/wine/wine-cellar-repair-today.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
    <img alt="wine cellar repair today" height="500px" loading="lazy" src="/wine/wine-cellar-repair-today.webp" width="400px"/>
    </div>
    <p style="text-align: start">Identifying early signs of <strong>wine cellar problems</strong> is crucial to maintaining the integrity of your wine collection. Our <strong>professional wine cellar technicians</strong> recommend looking out for these common issues:</p><h3>1. <strong>Cooling System Not Maintaining Temperature</strong></h3><p style="text-align: start">If your <strong>wine cellar cooling unit</strong> fails to maintain the desired temperature, your wines may be at risk. This often indicates problems with the <strong>compressor system</strong>, <strong>thermostat</strong>, or <strong>evaporator coil</strong>. Immediate attention can prevent further damage to your collection.</p><h3>2. <strong>Unusual Noises</strong></h3><p style="text-align: start">Loud humming, rattling, or clicking noises coming from the <strong>wine cellar refrigeration system</strong> may suggest issues with the <strong>fan motor</strong>, loose components, or a failing compressor. Our technicians can diagnose and fix these problems to restore quiet and efficient operation.</p><h3>3. <strong>Ice or Frost Build-Up</strong></h3><p style="text-align: start">Ice or frost on <strong>evaporator coils</strong> or other parts of the cooling system can disrupt airflow and cause inconsistent cooling. This is often caused by poor air circulation or a malfunctioning defrost system. We'll address the root cause and ensure proper airflow in your <strong>wine cellar cooling system</strong>.</p><h3>4. <strong>Fluctuating Temperatures</strong></h3><p style="text-align: start">Temperature fluctuations can compromise the quality and aging process of your wine. This could be due to calibration issues with the <strong>thermostat</strong>, control board errors, or problems with the <strong>climate control system</strong>. Our technicians will stabilize the system to maintain consistent conditions.</p><h3>5. <strong>Excess Humidity or Condensation</strong></h3><p style="text-align: start">Too much moisture inside your <strong>wine cellar</strong> can lead to mold growth, label damage, or poor cork preservation. This issue is often linked to faulty door seals or improper humidity control. We'll inspect and replace damaged seals or components to restore balanced humidity levels.</p><h3>6. <strong>Unresponsive Control Systems</strong></h3><p style="text-align: start">If your <strong>wine cellar cooling unit</strong> fails to respond to adjustments, the <strong>control board</strong> or electronic components may require repair or replacement.</p><h3>Why Address These Issues Immediately?</h3><p style="text-align: start">Ignoring these signs can lead to:</p><ul><li><p><strong>Spoiled or damaged wine</strong> due to temperature instability.</p></li><li><p>Increased <strong>repair costs</strong> from escalating system failures.</p></li><li><p>Reduced lifespan of your <strong>wine cellar cooling system</strong>.</p></li></ul><p style="text-align: start">If you notice any of these potential issues, don't delay. Contact us today for <strong>professional wine cellar repair services</strong> to ensure your system functions optimally and your valuable collection remains safe.</p>
        </>
      ),
    },
    
    {
      id: "content5",
      title: "Full-Service Wine Cellar Repair Services for Every Home",
      img: "/wine/wine-cellar-repair-los-angeles.webp",
      description: (
        <>
          <div class="content__page-desc-phot">
    <img alt="wine cellar repair los angeles" height="500px" loading="lazy" src="/wine/wine-cellar-repair-los-angeles.webp" width="400px"/>
    </div>
    <p>Your <strong>wine cellar</strong> is essential for preserving your wine collection in the perfect environment. Our specialized services ensure your wine remains stored under optimal conditions, whether you have a <strong>custom wine cellar</strong>, a <strong>large wine collection</strong>, or a <strong>commercial wine room</strong>.</p><h3><strong>Residential Wine Cellar Repair</strong></h3><p>Your home <strong>wine cellar</strong> plays a crucial role in maintaining the quality of your wines. Whether you have a small <strong>climate-controlled system</strong> or a fully equipped <strong>wine room</strong>, our technicians are equipped to handle issues like <strong>temperature inconsistencies</strong>, <strong>humidity problems</strong>, or <strong>evaporator coil malfunctions</strong>. Our fast response ensures your wine collection remains unaffected by environmental changes.</p><h3><strong>Wine Cellar Repair for Large Collections</strong></h3><p>For <strong>wine enthusiasts</strong> and collectors with large cellars, reliability is paramount. High-capacity <strong>wine cellar cooling systems</strong> must maintain stable conditions for extensive wine collections. Our technicians specialize in diagnosing and repairing large-scale systems, addressing issues like <strong>condenser fan failures</strong>, <strong>thermostat malfunctions</strong>, and <strong>clogged drain lines</strong>, ensuring your wines remain perfectly preserved.</p><h3><strong>High-End and Custom Wine Cellar Repair</strong></h3><p>Luxury and custom <strong>wine cellars</strong> often include advanced <strong>climate control systems</strong>, unique configurations, and high-end materials. Our experienced technicians are trained to handle <strong>precision cooling adjustments</strong>, <strong>humidity controls</strong>, and <strong>sealed system repairs</strong> to maintain both functionality and aesthetic integrity. From <strong>built-in systems</strong> to sophisticated standalone units, we ensure seamless operation without compromising design.</p><h3><strong>Commercial Wine Cellar Repair</strong></h3><p>For restaurants, wineries, and businesses that rely on <strong>commercial wine rooms</strong>, maintaining consistent <strong>temperature and humidity</strong> is essential for serving high-quality wines. Our team provides fast and effective repair services for <strong>commercial wine cellar refrigeration systems</strong>, addressing problems like <strong>compressor failures</strong>, <strong>evaporator fan issues</strong>, and <strong>control board malfunctions</strong> to keep your business running smoothly.</p><h3><strong>Specialized Wine Cellar Maintenance</strong></h3><p>Routine maintenance is critical for extending the lifespan of your <strong>wine cellar cooling unit</strong>. Our maintenance services include:</p><ul><li><p><strong>Evaporator Coil Cleaning</strong>: Ensures efficient airflow and prevents freezing.</p></li><li><p><strong>Humidity and Temperature Calibration</strong>: Keeps your wines at the perfect storage conditions.</p></li><li><p><strong>Fan and Condenser Maintenance</strong>: Prevents overheating and system failures.</p></li><li><p><strong>Sealed System Checks</strong>: Identifies leaks or inefficiencies in refrigerant lines.</p></li></ul><p>With tailored solutions for all types of <strong>wine cellars</strong>, we ensure your <strong>collection is stored in optimal conditions</strong>, protecting its quality and value. <strong>Call us today</strong> to schedule expert repair or maintenance services for your wine cellar!</p>
        </>
      ),
    },
    
    {
      id: "content6",
      title: "Professional Wine Cellar Maintenance Services – What Our Technicians Do",
      img: "",
      description: (
        <>
          <p style="text-align: start">As professionals, we see firsthand how <strong>regular maintenance</strong> can prevent unexpected <strong>repairs</strong> and extend the life of your <strong>wine cellar cooling system</strong>. Our <strong>maintenance services</strong> include:</p><ul><li><p><strong>Cleaning Evaporator Coils</strong>: Dust and debris can clog coils, reducing efficiency. We clean coils to ensure smooth operation.</p></li><li><p><strong>Inspecting Climate Control Systems</strong>: We check all parts of the <strong>wine cellar cooling unit</strong>, including the fans and compressors, to identify potential problems early.</p></li><li><p><strong>Ensuring Proper Humidity Levels</strong>: We make adjustments to keep humidity stable, which is essential for maintaining the integrity of your wine collection.</p></li><li><p><strong>Calibrating Temperature Controls</strong>: We test and recalibrate thermostats to keep the system working precisely.</p></li></ul>
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
