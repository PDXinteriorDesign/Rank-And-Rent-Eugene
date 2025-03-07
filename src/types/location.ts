
export interface Location {
  name: string;
  slug: string;
  type: 'city' | 'neighborhood';
  region: string;
  weatherDesc: string;
  neighborhoods?: string[];
  meta: {
    title: string;
    description: string;
  };
}
