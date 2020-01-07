import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>USS 2010 Online Gallery</h2>
            <p>Just a platform to keep in touch with old classmates</p>
          </section>
        </div>
        <div>
          <section>
            <h2>Get in touch with the creator</h2>
            <section>
              <ul className="icons">
                {config.socialLinks.map((social) => {
                  const { icon, name, url } = social;
                  return (
                    <li key={url}>
                      <a href={url} className={`icon ${icon}`}>
                        <span className="label">{name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </section>
        </div>
      </div>
      <div
        className="closer"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
