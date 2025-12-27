export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} Muhammad Jawad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

