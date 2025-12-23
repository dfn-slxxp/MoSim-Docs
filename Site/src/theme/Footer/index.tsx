import React, { JSX } from 'react';
import clsx from 'clsx';
import styles from '@site/src/components/HomepageFeatures/styles.module.css';
import "@site/src/components/footer.css";

import SocialLinks from '@site/src/components/SocialLinks';
import FooterSponsors from '@site/src/components/FooterSponsors';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx('footer', styles.footer)}>
      <div className="footer__inner container">
        <div className="footer__content">
          <SocialLinks />
          <FooterSponsors />
          <p className="footer__copyright">
            © {currentYear} Cascade Studios. All rights reserved. Created using Docusaurus.
          </p>
        </div>
      </div>
    </footer>
  );
}
