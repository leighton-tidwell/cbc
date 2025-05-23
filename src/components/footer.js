export const createFooter = () => {
  return `
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-section">
          <h3 class="footer-title">Calvary Baptist Church</h3>
          <p>Just ordinary people serving an extraordinary God!</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Contact Us</h3>
          <ul class="contact-list">
            <li class="contact-item">
              <span>506 Runnels St., Merkel, TX 79536</span>
            </li>
            <li class="contact-item">
              <span>325.928.5120</span>
            </li>
            <li class="contact-item">
              <span>officeadmin@cbcmerkel.org</span>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Connect With Us</h3>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">FB</a>
            <a href="#" class="social-link" aria-label="Twitter">TW</a>
            <a href="#" class="social-link" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      <div class="container">
        <p class="copyright">&copy; ${new Date().getFullYear()} Calvary Baptist Church, Merkel TX. All Rights Reserved.</p>
      </div>
    </footer>
  `;
};