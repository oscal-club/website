import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-2">
          How do you contribute?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose margin-bottom-2">
        <p>
          OSCAL is a standard for saving data about an organization's security, risk management, and compliance programs in a machine-readable way.
        </p>
        <p>
          For OSCAL to succeed, information technology executives, security professionals, security baseline authors, security assessors, and software developers must find real-world use cases, discuss what works, and discuss what needs improvement.
        </p>
        <p>
          If you have expertise or passion in these disciplines, this community needs you to <b>discuss benefits, debate challenges, and prototype tools in the process</b>.  
        </p>
      </div>
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          Is this a NIST project?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          No, OSCAL Club is a community effort, distinct from NIST. It is complementary, but separate, from the official NIST OSCAL community.
        </p>
        <p>
          NIST make OSCAL, but its staff cannot address all the different domain knowledge and experience of stakeholders.
        </p>
        <p>
          This community and its resources empower stakeholders to apply OSCAL to their own domain.
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
