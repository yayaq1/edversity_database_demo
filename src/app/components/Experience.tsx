export default function Experience() {
  const experiences = [
    {
      company: "Pakistan State Oil",
      role: "Manager - Finance & Taxes (VAT)",
      period: "January 2016 - Present",
      duration: "10 years",
      location: "Karachi, Pakistan",
      description: "Currently working as Senior Executive – Taxes in Pakistan State Oil Company Limited.",
      highlights: [
        "Detailed monthly review of Federal Sales Tax, Provincial Sales Tax & Income Tax Returns (61 returns annually)",
        "Review tax related payments and reconciliation with financial records",
        "Preparation of corporate tax workings including tax depreciation schedules and deferred tax workings",
        "Attendance at Income tax and sales tax hearings at adjudication level",
        "Focal person for all tax related queries within PSO and provision of advice",
        "Handle all customs related issues (200 vessels) and payment of funds at import stage (8 locations)"
      ]
    },
    {
      company: "Deloitte",
      role: "Assistant Manager",
      period: "April 2012 - Present",
      duration: "13+ years",
      location: "Karachi, Pakistan",
      description: "Responsible for managing all facets of tax assignments while reporting to directors and partners.",
      highlights: []
    },
    {
      company: "Gul Ahmed Textile Mills Limited",
      role: "Management Accountant",
      period: "February 2013 - December 2013",
      duration: "11 months",
      location: "Karachi, Pakistan",
      description: "Managed the costing department for processing department consisting of 6 executives.",
      highlights: [
        "Preparing periodic departmental financial statements, including profit and loss accounts, budgets, cash flows, variance analysis",
        "Providing support service by working with all departments and management team for financial decisions",
        "Ensuring spending kept in line with budget",
        "Informing key strategic decisions and formulating business strategies",
        "Analysing financial performance contributing to medium and long-term business planning"
      ]
    },
    {
      company: "A F Ferguson & Co (PwC Pakistan)",
      role: "Audit Executive and Senior",
      period: "April 2006 - March 2012",
      duration: "6 years",
      location: "Karachi, Pakistan",
      description: "Responsible for managing all facets of assignments (tax or audit) while reporting to managers and partners.",
      highlights: [
        "4 years experience of PwC audit methodology",
        "Statutory audits and reviews",
        "Diverse experience auditing entities across multiple industries",
        "Brokerage houses, energy, clearing and forwarding, construction, automobile industries"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
                <div className="experience-meta">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="experience-description">
                <p>{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

