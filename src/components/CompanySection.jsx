import React from 'react';
import './CompanySection.css';

const CompanySection = ({ title, description, image, link, reverse }) => {
  return (
    <section className={`company-section ${reverse ? 'reverse' : ''}`}>
      <div className="company-content">
        <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
        <p>{description}</p>
      </div>
      <div className="company-image">
        <img src={image} alt={`${title} Screenshot`} />
      </div>
    </section>
  );
};

export default CompanySection;

