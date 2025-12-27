export default function Education() {
  const education = [
    {
      degree: "ACA - Associate Chartered Accountant",
      institution: "Institute of Chartered Accountants of Pakistan",
      field: "Accountancy and Commerce",
      year: "2004 - 2010",
      featured: true
    },
    {
      degree: "ACCA",
      institution: "ACCA",
      field: "Accountancy and Commerce",
      year: "2004 - 2009",
      featured: true
    },
    {
      degree: "B.Com",
      institution: "Karachi University",
      field: "Commerce",
      year: "2004 - 2005",
      featured: false
    },
    {
      degree: "A Levels",
      institution: "The Avicenna School",
      field: "Pre-medical",
      year: "2001 - 2003",
      featured: false
    },
    {
      degree: "O Levels",
      institution: "Army Public School",
      field: "Science",
      year: "1994 - 2001",
      featured: false
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              className={`education-card ${edu.featured ? 'featured' : ''}`} 
              key={index}
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-field">{edu.field}</p>
              <p className="education-year">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

