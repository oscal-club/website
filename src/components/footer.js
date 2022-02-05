import React from 'react';
import logo from '../../static/assets/img/logo-color.svg';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://oscal.club">
                <img src={logo} width="50" alt="Agency logo" />
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>Footer link</li>
              <li>Footer link</li>
              <li>Footer link</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>Footer link</li>
              <li>Footer link</li>
              <li>Footer link</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
