
import React from 'react';

const warningSignsList = [
  "Water stains on ceilings or walls",
  "Missing or damaged shingles",
  "Sagging roof sections",
  "Mold or moss growth",
  "Higher energy bills due to poor insulation"
];

const WarningSigns = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Signs You Need Roof Repair</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {warningSignsList.map((sign) => (
              <li key={sign} className="flex items-center gap-3 text-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WarningSigns;
