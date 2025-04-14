import '../App.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="footer-nav">
          <div className="report">
            <div className="logo">
              <img src="assets/Dv-white-logo.svg" alt="logo" />
            </div>
            <p>We truly believe that “addressing domestic violence requires a comprehensive approach</p>
          </div>
          <div className="features">
            <h2>Features</h2>
            <ul>
              <li>Donate</li>
              <li>Consult</li>
              <li>Support others</li>
            </ul>
          </div>
          <div className="company">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Join Our Team</li>
            </ul>
          </div>
          <div className="help">
            <h2>Help</h2>
            <ul>
              <li>Get Help</li>
              <li>FAQs</li>
              <li>Teams & Conditions</li>
              <li>Privacy and Policy</li>
            </ul>
          </div>
          <div className="follow">
            <h2>Follow Us</h2>
            <div className="follow-links">
              <ul>
                <li><img src="assets/Linkedin.svg" alt="linkedin" /></li>
                <li><img src="assets/facebook.svg" alt="facebook" /></li>
                <li><img src="assets/x-twitter.svg" alt="twitter" /></li>
                <li><img src="assets/instagram.svg" alt="instagram" /></li>
              </ul>
              <div className="back-top" onClick={handleBackToTop} style={{ cursor: 'pointer' }}>
                <p>Back to Top</p>
                <img src="assets/arrow-up.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="rights-reserved">
          © 2024 SledgePay. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
