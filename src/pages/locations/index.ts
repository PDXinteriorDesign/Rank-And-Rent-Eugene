
export const CITIES = [
  'Springfield',
  'Coburg',
  'Creswell',
  'Veneta',
  'Junction City',
  'Harrisburg',
  'Elmira',
  'Lowell',
  'Cottage Grove',
  'Pleasant Hill'
] as const;

export const NEIGHBORHOODS = [
  'Downtown Eugene',
  'Friendly Area',
  'Whiteaker',
  'South Eugene',
  'Cal Young',
  'Harlow',
  'Bethel-Danebo',
  'Amazon',
  'Churchill',
  'Laurel Hill Valley',
  'West Eugene',
  'Fairmount',
  'River Road',
  'Santa Clara',
  'Southeast Eugene'
] as const;

export type City = typeof CITIES[number];
export type Neighborhood = typeof NEIGHBORHOODS[number];
