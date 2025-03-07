
import { type Location } from '@/types/location';

export const locations: Location[] = [
  {
    name: "Springfield",
    slug: "springfield",
    type: "city",
    region: "OR",
    weatherDesc: "varied weather including heavy rain and occasional snow",
    neighborhoods: ["Thurston", "Glenwood", "Hayden Bridge"],
    meta: {
      title: "Roofing Services in Springfield, OR | Eugene Roofing NW",
      description: "Looking for expert roofing services in Springfield, OR? Eugene Roofing NW provides professional roof installation, repair, and replacement. Get a free estimate today!"
    }
  },
  {
    name: "Downtown Eugene",
    slug: "downtown-eugene",
    type: "neighborhood",
    region: "OR",
    weatherDesc: "heavy rainfall and occasional windstorms",
    neighborhoods: ["Whiteaker", "Jefferson Westside", "West University"],
    meta: {
      title: "Downtown Eugene, OR Roofing Services | Eugene Roofing NW",
      description: "Need expert roofing services in Downtown Eugene, OR? Eugene Roofing NW provides roof repair, installation, and maintenance. Get a free estimate today!"
    }
  },
  // ... Additional locations will be added similarly
];
