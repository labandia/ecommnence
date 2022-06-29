export interface Theme {
  name: string;
  properties: any;
}

export const orig: Theme = {
  name: 'default',
  properties: {
    '--header-color': '#fff',
    '--first-color-alt': 'hsl(354, 79%, 60%)',
    '--title-color': 'hsl(355, 4%, 15%)',
    '--text-color': 'hsl(355, 4%, 35%)',
    '--price-color': '#222',
    '--text-color-light': 'hsl(355, 4%, 55%)',
    ' --button-color': 'hsl(151, 42%, 41%)',
    '--body-color': '#f5f5f5',
    '--border-color': '#dbd7d7',
    '--container-color': 'hsl(147, 31%, 93%)',
    '--first-color': 'hsl(248, 41%, 47%)',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--header-color': 'hsl(256, 15%, 15%)',
    '--title-color': 'hsl(355, 4%, 15%)',
    '--text-color': '#f5f5f5',
    '--price-color': '#fff',
    '--text-color-light': 'hsl(355, 4%, 55%)',
    ' --button-color': 'hsl(151, 42%, 41%)',
    '--body-color': 'hsl(234, 18%, 11%)',
    '--border-color': '#6b6b6b',
    '--container-color': 'hsl(147, 31%, 93%)',
    '--first-color': '#222',
  },
};
