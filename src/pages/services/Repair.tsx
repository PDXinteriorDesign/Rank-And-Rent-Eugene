
import React from 'react';
import RepairHero from './repair/RepairHero';
import RepairServices from './repair/RepairServices';
import WarningSigns from './repair/WarningSigns';
import WhyChooseUs from './repair/WhyChooseUs';
import RepairFAQ from './repair/RepairFAQ';
import RepairCTA from './repair/RepairCTA';
import RepairContent from './repair/RepairContent';

const Repair = () => {
  return (
    <div className="space-y-16">
      <RepairHero />
      <RepairServices />
      <WarningSigns />
      <WhyChooseUs />
      <RepairContent />
      <RepairFAQ />
      <RepairCTA />
    </div>
  );
};

export default Repair;
