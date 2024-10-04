import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CompanySection from './components/CompanySection';
import './index.css';

const App = () => {
  const companies = [
    {
      title: 'Filedocr.com',
      description: 'Manage documents efficiently and securely.',
      image: 'filedocr_screenshot.png',
      link: 'https://filedocr.com',
    },
    {
      title: 'Xubhaven.com',
      description: 'Platform for business scalability and e-commerce solutions.',
      image: 'xubhaven_screenshot.png',
      link: 'https://xubhaven.com',
    },
    {
      title: 'Procedureoes.com',
      description: 'Streamlining corporate procedures with efficient systems.',
      image: 'procedureoes_screenshot.png',
      link: 'https://procedureoes.com',
    },
    {
      title: 'EncyclopedAI.org',
      description: 'AI-powered education platform for students in need.',
      image: 'encyclopedai_screenshot.png',
      link: 'https://encyclopedai.org',
    },
  ];

  return (
    <div>
      <Navbar />
      {companies.map((company, index) => (
        <CompanySection
          key={index}
          title={company.title}
          description={company.description}
          image={company.image}
          link={company.link}
          reverse={index % 2 !== 0}  {/* Alternate image side */}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;

