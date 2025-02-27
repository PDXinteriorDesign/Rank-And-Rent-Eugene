
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Cloud, Leaf, Snow } from 'lucide-react';

const SeasonalSchedule = () => {
  const seasons = [
    {
      name: "Spring",
      icon: Sun,
      tasks: [
        "Post-winter inspection",
        "Clean gutters of winter debris",
        "Check for winter damage",
        "Moss treatment application"
      ],
      timing: "March - May"
    },
    {
      name: "Summer",
      icon: Cloud,
      tasks: [
        "General maintenance check",
        "UV damage inspection",
        "Ventilation assessment",
        "Minor repairs if needed"
      ],
      timing: "June - August"
    },
    {
      name: "Fall",
      icon: Leaf,
      tasks: [
        "Pre-winter preparation",
        "Gutter cleaning",
        "Moss prevention treatment",
        "Check for loose shingles"
      ],
      timing: "September - November"
    },
    {
      name: "Winter",
      icon: Snow,
      tasks: [
        "Storm damage inspection",
        "Emergency repairs",
        "Ice dam prevention",
        "Monitor roof condition"
      ],
      timing: "December - February"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Seasonal Cleaning Schedule</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Keep your roof in optimal condition year-round with our recommended seasonal 
          maintenance schedule, specially designed for Eugene's climate.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <Card key={season.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <season.icon className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">{season.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">{season.timing}</p>
                <ul className="space-y-2">
                  {season.tasks.map((task) => (
                    <li key={task} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalSchedule;
