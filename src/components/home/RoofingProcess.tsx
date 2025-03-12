
import React from 'react';
import { 
  ClipboardCheck, 
  HardHat, 
  Hammer, 
  Shield, 
  CheckCircle2, 
  Truck
} from 'lucide-react';
import { Card } from "@/components/ui/card";

const RoofingProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Initial Inspection & Assessment",
      description: "Our certified inspectors thoroughly examine your roof's condition, documenting any damage or concerns."
    },
    {
      icon: HardHat,
      title: "Project Planning",
      description: "We develop a detailed project plan, including material selection, timeline, and safety protocols."
    },
    {
      icon: Truck,
      title: "Material Delivery & Setup",
      description: "Premium roofing materials are delivered and we prepare the worksite with proper safety equipment."
    },
    {
      icon: Hammer,
      title: "Professional Installation",
      description: "Our expert team executes the installation or repair following manufacturer specifications and local building codes."
    },
    {
      icon: Shield,
      title: "Quality Inspection",
      description: "Project managers conduct a thorough quality check to ensure everything meets our high standards."
    },
    {
      icon: CheckCircle2,
      title: "Final Walkthrough",
      description: "We complete a final inspection with you to ensure your complete satisfaction with the work."
    }
  ];

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="roofing-process-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            id="roofing-process-title" 
            className="text-3xl font-bold text-center mb-8"
          >
            Our Professional Roofing Process
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-12">
            Experience our streamlined, professional approach to roofing projects
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingProcess;
