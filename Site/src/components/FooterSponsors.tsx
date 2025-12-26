import React, { useEffect, useState } from 'react';

type Sponsor = {
  name: string;
  image: string;
  url?: string;
};

const SPONSORS_URL = '/sponsors.json';
const SPONSOR_IMAGE_BASE = '/img/sponsors';

const FooterSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch(SPONSORS_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load sponsors');
        }
        return res.json();
      })
      .then((data: Sponsor[]) => {
        setSponsors(data);
      })
      .catch((err) => {
        console.error('[FooterSponsors]', err);
      });
  }, []);

  if (sponsors.length === 0) return null;

  return (
    <div className="footer__sponsors">
      <div className="footer__sponsor-group">
        <span className="footer__sponsor-label">Sponsored by:</span>
        <div className="footer__sponsor-logos">
          {sponsors.map((sponsor, index) => {
            const imagePath = `${SPONSOR_IMAGE_BASE}/${sponsor.image}`;

            if (sponsor.url) {
              return (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__sponsor-link"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <img
                    src={imagePath}
                    alt={`${sponsor.name} sponsor logo`}
                    className="footer__sponsor-logo"
                    style={{ maxWidth: 'none' }}
                    loading="lazy"
                    width={120}
                    height={60}
                  />
                </a>
              );
            }

            return (
              <img
                key={index}
                src={imagePath}
                alt={`${sponsor.name} sponsor logo`}
                className="footer__sponsor-logo"
                style={{ maxWidth: 'none' }}
                loading="lazy"
                width={120}
                height={60}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterSponsors;
