import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  import React from "react";
import { Btn } from "@/components/Btn";

export const WashingMachineContent = () => {
  return (
    <>
      <section id="content1" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Why Choose Same Day Appliance Repair for Washing Machine Repair?</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <div className="content__page-desc-phot">
            <img src="/washer-repair/washer1.webp" loading="lazy" width="400" height="500" alt="Washer repair service Los Angeles" />
          </div>
          <p>When you choose <strong>Same Day Appliance Repair</strong>, you trust a team of certified technicians with the right tools, <strong>parts</strong>, and expertise to handle any <strong>machine repair</strong> job. Here's why we stand out:</p>
          <ul>
            <li><p><strong>Same-Day Service:</strong> We offer <strong>same-day repair services</strong> to get your <strong>washer</strong> back to <strong>working correctly</strong>.</p></li>
            <li><p><strong>Trained Technicians:</strong> Certified experts in <strong>washing machine repair</strong> for all brands and models.</p></li>
            <li><p><strong>Use of Original Parts:</strong> Only high-quality parts from trusted suppliers ensure efficiency and longevity.</p></li>
            <li><p><strong>Transparent Pricing:</strong> No hidden fees—accurate quotes for <strong>labor and parts</strong> upfront.</p></li>
          </ul>
        </div>
        <Btn />
      </section>

      <section id="content2" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Types of Washing Machines We Repair</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <div className="content__page-desc-phot">
            <img src="/washer-repair/washer2.webp" width="450" height="450" alt="Best Washer repair service" loading="lazy" />
          </div>
          <p>Our <strong>washing machine repair</strong> services extend across different <strong>washer</strong> types and models:</p>
          <p><strong>Top-Loading Washers:</strong> We fix agitator malfunctions, lid switch failures, and pump clogs.</p>
          <p><strong>Front-Loading Washers:</strong> We address door seal leaks, mold buildup, and motor issues.</p>
          <p><strong>High-Efficiency Washers:</strong> We handle detergent-related clogs and water flow adjustments.</p>
          <p><strong>Compact Washers:</strong> We resolve drainage and spin cycle issues in space-saving models.</p>
        </div>
        <Btn />
      </section>

      <section id="content3" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Common Washing Machine Problems We Fix</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <div className="content__page-desc-phot">
            <img src="/washer-repair/washer3.webp" width="450" height="450" alt="Washer repair near me" loading="lazy" />
          </div>
          <p>We frequently resolve the following <strong>washing machine</strong> problems:</p>
          <ul>
            <li><p><strong>Water Leaks:</strong> Caused by worn hoses, faulty door seals, or clogged pumps.</p></li>
            <li><p><strong>Drainage Issues:</strong> Clogged hoses or blocked pumps are repaired or replaced.</p></li>
            <li><p><strong>Agitation Failures:</strong> Caused by motor, belt, or pulley issues—restored with part replacements.</p></li>
            <li><p><strong>Mold & Smells:</strong> We clean and sanitize units, removing detergent buildup and mold.</p></li>
            <li><p><strong>Cycle Failures:</strong> We check control boards and motors to restore full functionality.</p></li>
          </ul>
        </div>
        <Btn />
      </section>

      <section id="content4" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Signs Your Washing Machine Needs Repair - When To Call Us</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <div className="content__page-desc-phot">
            <img src="/washer-repair/washer6.webp" width="400" height="500" alt="Same Day Washer repair service" loading="lazy" />
          </div>
          <ul>
            <li><p><strong>Persistent Smells:</strong> Often a sign of mold buildup or clogged drainage.</p></li>
            <li><p><strong>Water Leaks:</strong> Usually related to hose or gasket damage.</p></li>
            <li><p><strong>Cycle Issues:</strong> Control board or motor malfunctions can interrupt the wash cycle.</p></li>
            <li><p><strong>No Spin or Agitation:</strong> Can be caused by worn belts or unbalanced loads.</p></li>
          </ul>
          <p>Fixing these problems early helps reduce <strong>repair costs</strong> and prolong appliance life.</p>
        </div>
        <Btn />
      </section>

      <section id="content5" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Full-Service Washing Machine Repair for Every Home</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <h3><strong>Kitchen Washing Machine Repair</strong></h3>
          <p>We handle all washer types—top-loaders, front-loaders, stackables—with same-day service for <strong>drain, drum,</strong> and <strong>motor issues</strong>.</p>
          <h3><strong>Washing Machine Repair for Large Families</strong></h3>
          <p>We repair <strong>high-capacity washers</strong> for large households, ensuring <strong>efficient drum operation and temperature control</strong>.</p>
          <h3><strong>High-End and Built-In Washing Machine Repair</strong></h3>
          <p>Our technicians specialize in premium brands like <strong>Miele</strong>, <strong>Bosch</strong>, and <strong>Samsung</strong>, offering expert <strong>balancing, diagnostics,</strong> and <strong>panel repairs</strong>.</p>
          <h3><strong>Specialty Washer Repair</strong></h3>
          <p>We also service <strong>compact, combo,</strong> and <strong>portable units</strong> with precision repair for flow control and sensor calibration.</p>
          <p>We offer tailored repair services for any washer. <strong>Contact us today</strong> to schedule your repair appointment.</p>
        </div>
        <Btn />
      </section>

      <section id="content6" className="page213-content">
        <div className="content__page-full-hed">
          <div className="content__page-hed-h">
            <h2><strong>Routine Washing Machine Maintenance Service - Why You Need It</strong></h2>
          </div>
        </div>
        <div className="content__page-full-desc">
          <p>Routine maintenance helps avoid costly breakdowns and extends appliance life. We recommend:</p>
          <ul>
            <li><p><strong>Hose and Filter Inspections:</strong> Prevent blockages and leaks with regular checks.</p></li>
            <li><p><strong>Balanced Loads:</strong> Maintain internal balance for a smoother wash cycle.</p></li>
            <li><p><strong>Door and Seal Cleaning:</strong> Reduces mold and maintains sealing efficiency.</p></li>
          </ul>
        </div>
        <Btn />
      </section>
    </>
  );
};


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
