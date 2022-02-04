import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">Define compliance objectives, realize security outcomes.</span>          
        </h2>
        <p>
          OSCAL Club is a community to discuss, test, and implement solutions at the intersection of compliance and security.
        </p>
        <a className="usa-button" href="https://github.com/oscal-club/community/discussions">
          Discuss in the forum
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
