
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getLocalBusinessSchema } from '@/utils/localSeoSchema';

const locationGroups = [
  {
    title: "Eugene Area",
    locations: [
      { name: "Downtown Eugene", slug: "downtown-eugene" },
      { name: "South Eugene", slug: "south-eugene" },
      { name: "North Eugene", slug: "north-eugene" },
      { name: "West Eugene", slug: "west-eugene" },
      { name: "East Eugene", slug: "east-eugene" }
    ]
  },
  {
    title: "Surrounding Cities",
    locations: [
      { name: "Springfield", slug: "springfield" },
      { name: "Cottage Grove", slug: "cottage-grove" },
      { name: "Junction City", slug: "junction-city" },
      { name: "Veneta", slug: "veneta" },
      { name: "Lowell", slug: "lowell" }
    ]
  }
];

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas | Eugene Roofing NW - Locations in Lane County, OR</title>
        <meta 
          name="description" 
          content="Eugene Roofing NW provides expert roofing services throughout Lane County, OR. Serving Eugene, Springfield, Junction City, and surrounding areas."
        />
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema())}
        </script>
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Service Areas in Lane County, Oregon
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {locationGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">{group.title}</h2>
                <div className="grid gap-4">
                  {group.locations.map((location) => (
                    <Link
                      key={location.slug}
                      to={`/locations/${location.slug}`}
                      className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-lg font-medium text-primary">{location.name}</span>
                      <p className="text-gray-600 mt-1">Expert roofing services in {location.name}, OR</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
