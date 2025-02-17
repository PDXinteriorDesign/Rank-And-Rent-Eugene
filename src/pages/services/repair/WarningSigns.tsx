
import React from 'react';
import { AlertTriangle, Droplets, PanelTop, Leaf, BatteryCharging } from 'lucide-react';

const warningSignsList = [
  {
    icon: Droplets,
    text: "Water stains on ceilings or walls",
    description: "Indicates active leaks that need immediate attention"
  },
  {
    icon: PanelTop,
    text: "Missing or damaged shingles",
    description: "Compromises your roof's protective barrier"
  },
  {
    icon: AlertTriangle,
    text: "Sagging roof sections",
    description: "May indicate structural issues requiring urgent repair"
  },
  {
    icon: Leaf,
    text: "Mold or moss growth",
    description: "Can lead to material deterioration and health issues"
  },
  {
    icon: BatteryCharging,
    text: "Higher energy bills due to poor insulation",
    description: "Suggests compromised roof integrity affecting energy efficiency"
  }
];

const WarningSigns = () => {
  return (
    <section className="py-20 bg-muted/50" aria-labelledby="warning-signs-title">
      <div className="container mx-auto px-4">
        <h2 id="warning-signs-title" className="text-3xl font-bold text-center mb-12">
          Signs You Need Roof Repair
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {warningSignsList.map((sign) => (
            <div key={sign.text} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <sign.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{sign.text}</h3>
                  <p className="text-gray-600 text-sm">{sign.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarningSigns;
