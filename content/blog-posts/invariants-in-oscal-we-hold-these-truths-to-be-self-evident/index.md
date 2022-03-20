---
title: "Invariants in OSCAL: We Hold These Truths to Be Self-Evident"
date: 2022-03-17T04:08:46.024Z
author: Al S
---
OSCAL is fun because it brings new perspectives to many different specialties in security and information technology. Cybersecurity and privacy policy are complex disciplines in their own right. They have their own methodologies and culture. Still, many practitioners might not see them expertise as a form engineering or data science.

OSCAL changes all of that, sometimes in small ways, other times in big ways.

Since OSCAL brings data-oriented engineering culture into the domain of executives and policy analysts, a few of its fundamental ideas =shift the way you design and implement those policies. From the lens of computer science and mathematics, policies look differently through these OSCAL-based lenses. You can understand a lot of OSCAL's power when thinking of data in control catalog, system security plans, assessment plans, and assessment results as mathematical objects. What truths do they hold? To understand OSCAL, you must understand its invariants. These invariants are facts mathematical objects of OSCAL goodness that are true throughout its lifetime. Even if OSCAL-enabled software acts upon the data, these facts must always be true.

So what is an invariant in OSCAL? Let's examine an important example, one highlighted recently by the NIST development team as [they update the profile resolution specification](https://github.com/usnistgov/OSCAL/pull/1172): equivalence of OSCAL objects. An instance of an OSCAL model, be it a catalog or component-definition or system-security-plan