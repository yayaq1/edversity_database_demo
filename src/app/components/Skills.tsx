export default function Skills() {
  const specialties = [
    "International Financial Reporting Standards (IFRS)",
    "Budgeting, Planning and Analysis",
    "International Standards on Auditing (ISA)",
    "PwC Audit Methodology",
    "Tax Compliance & Advisory",
    "Risk Management",
    "Corporate Governance",
    "Internal Control Systems",
    "Financial Statement Preparation",
    "Team Leadership"
  ];

  const industries = [
    "Energy & Oil",
    "Brokerage Houses",
    "Clearing & Forwarding",
    "Construction",
    "Automobile",
    "Textiles"
  ];

  const certifications = [
    { abbr: "ACA", name: "Associate Chartered Accountant" },
    { abbr: "ACCA", name: "Association of Chartered Certified Accountants" },
    { abbr: "AI", name: "Google AI Essentials V1" },
    { abbr: "DS", name: "Foundations of Data Science" }
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Certifications</h2>
        </div>
        
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Core Competencies</h3>
            <div className="skills-list">
              {specialties.map((skill, index) => (
                <span className="skill-tag" key={index}>{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Industry Experience</h3>
            <div className="skills-list">
              {industries.map((industry, index) => (
                <span className="skill-tag" key={index}>{industry}</span>
              ))}
            </div>
            
            <h3 style={{ marginTop: '2rem' }}>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div className="certification-item" key={index}>
                  <div className="certification-icon">{cert.abbr}</div>
                  <span className="certification-name">{cert.name}</span>
                </div>
              ))}
            </div>
            
            <h3 style={{ marginTop: '2rem' }}>Languages</h3>
            <div className="skills-list">
              {languages.map((lang, index) => (
                <span className="skill-tag" key={index}>
                  {lang.name} ({lang.level})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

