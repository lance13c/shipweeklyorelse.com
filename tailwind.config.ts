import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'orange-cool': {
          extend: 'dark', // Inherit default values from the dark theme
          colors: {
            background: '#1A1A1A', // Dark background to make the orange pop
            foreground: '#FAFAFA', // Light foreground for contrast
            primary: {
              50: '#FFF3E0', // Very light orange
              100: '#FFE0B2', // Light orange
              200: '#FFCC80', // Lighter orange
              300: '#FFB74D', // Medium orange
              400: '#FFA726', // Bright orange
              500: '#FF9800', // Primary orange
              600: '#FB8C00', // Slightly darker orange
              700: '#F57C00', // Dark orange
              800: '#EF6C00', // Darker orange
              900: '#E65100', // Very dark orange
              DEFAULT: '#FF9800', // Default primary color if none is specified
              foreground: '#FAFAFA', // Light color for text on primary background
            },
            focus: '#FF9800', // Focus color
            // Adding complementary colors
            secondary: {
              50: '#E0F2F1',
              100: '#B2DFDB',
              200: '#80CBC4',
              300: '#4DB6AC',
              400: '#26A69A',
              500: '#009688', // A complementary teal for variety
              600: '#00897B',
              700: '#00796B',
              800: '#00695C',
              900: '#004D40',
              DEFAULT: '#009688',
              foreground: '#FAFAFA',
            },
          },
          layout: {
            disabledOpacity: '0.5', // Slightly higher opacity for disabled elements
            radius: {
              small: '5px', // Rounded corners for a friendly look
              medium: '8px',
              large: '12px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
export default config;
