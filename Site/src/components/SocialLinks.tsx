import type { ReactElement } from "react";

const SocialLinks = (): ReactElement => {
  return (
    <div className="footer__social">
      <a
        href="https://www.youtube.com/@MoSimulator"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social-link footer__social-link--youtube"
        aria-label="Follow MoSim on YouTube"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <span>YouTube</span>
      </a>

      <a
        href="https://www.instagram.com/mosimulator/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social-link footer__social-link--instagram"
        aria-label="Follow MoSim on Instagram"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </svg>
        <span>Instagram</span>
      </a>

      <a
        href="https://discord.gg/mosim"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social-link footer__social-link--discord"
        aria-label="Join MoSim Discord community"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..." />
        </svg>
        <span>Discord</span>
      </a>

      <a
        href="/contact"
        className="footer__social-link footer__social-link--contact"
        aria-label="Contact us"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>Contact Us</span>
      </a>
    </div>
  );
};

export default SocialLinks;
