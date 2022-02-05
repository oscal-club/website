import React from 'react';
import logo from '../../static/assets/img/logo-color.png';
import logoSvg from '../../static/assets/img/logo-color.svg';
import https from '../../static/assets/img/icon-https.svg';

const Banner = () => (
  <div className="usa-banner">
    <div className="usa-accordion">
      <header className="usa-banner__header">
        <div className="usa-banner__inner">
          <div className="grid-col-auto">
            <img
              className="usa-banner__header-flag"
              src={logo}
              alt="Logo for oscal.club"
            />
          </div>
          <div className="grid-col-fill tablet:grid-col-auto">
            <p className="usa-banner__header-text">
              An oscal.club production
            </p>
            <p className="usa-banner__header-action" aria-hidden="true">
              Here’s how you know
            </p>
          </div>
          <button
            aria-controls="gov-banner"
            aria-expanded={false}
            className="usa-accordion__button usa-banner__button"
          >
            <span className="usa-banner__button-text">Here's how you know</span>
          </button>
        </div>
      </header>
      <div
        id="gov-banner"
        className="usa-accordion__content usa-banner__content"
        hidden
      >
        <div className="grid-row grid-gap-lg">
          <div className="usa-banner__guidance-gov tablet:grid-col-6">
            <img
              className="usa-banner__icon usa-media-block__img"
              src={logoSvg}
              alt="Logo for oscal.club"
            />
            <div className="usa-media-block__body">
              <p>
                <strong>The oscal.club domain means it’s official.</strong>
                <br />
                All OSCAL Club projects and materials are hosted on this domain
                or sub-domains. Source code is on GitHub and technical artifacts
                are on <a href="https://gitub.com/oscal-club">github.com/oscal-club</a>. That's it.
              </p>
            </div>
          </div>
          <div className="usa-banner__guidance-ssl tablet:grid-col-6">
            <img
              className="usa-banner__icon usa-media-block__img"
              src={https}
              alt="Https"
            />
            <div className="usa-media-block__body">
              <p>
                <strong>The site is secure.</strong>
                <br />
                The <strong>https://</strong> ensures that you are connecting to
                the official website and that any information you provide is
                encrypted and transmitted securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
