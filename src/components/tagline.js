import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          How do you contribute?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
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
    </div>
  </section>
);

export default Tagline;
