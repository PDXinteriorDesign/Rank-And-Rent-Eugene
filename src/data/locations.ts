
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
    name: "Coburg",
    slug: "coburg",
    type: "city",
    region: "OR",
    weatherDesc: "moderate rainfall and seasonal temperature changes",
    neighborhoods: ["Downtown Coburg", "Industrial District"],
    meta: {
      title: "Roofing Services in Coburg, OR | Eugene Roofing NW",
      description: "Need reliable roofing services in Coburg, OR? Eugene Roofing NW delivers expert roof repair, installation, and maintenance. Contact us for a free estimate!"
    }
  },
  {
    name: "Creswell",
    slug: "creswell",
    type: "city",
    region: "OR",
    weatherDesc: "wet winters and mild summers with occasional wind",
    neighborhoods: ["Downtown Creswell", "Garden Lake Park Area"],
    meta: {
      title: "Roofing Services in Creswell, OR | Eugene Roofing NW",
      description: "Trusted roofing services in Creswell, OR. Eugene Roofing NW provides professional roof repairs, installations, and maintenance. Schedule your free estimate today!"
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
  {
    name: "South Eugene",
    slug: "south-eugene",
    type: "neighborhood",
    region: "OR",
    weatherDesc: "significant rainfall and seasonal storms",
    neighborhoods: ["Amazon", "College Hill", "Friendly Area"],
    meta: {
      title: "South Eugene, OR Roofing Services | Eugene Roofing NW",
      description: "Professional roofing services in South Eugene, OR. Expert roof repairs, installations, and maintenance by Eugene Roofing NW. Schedule your free estimate!"
    }
  }
];
