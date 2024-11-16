const plugin = require('tailwindcss/plugin');

// Vov.css animation classes
const vovAnimations = [
  'fade-in-bottom-left',
  'fade-in-bottom-right',
  'fade-in-down',
  'fade-in-left',
  'fade-in-right',
  'fade-in-top-left',
  'fade-in-top-right',
  'fade-in-up',
  'fade-in',
  'fade-out-bottom-left',
  'fade-out-bottom-right',
  'fade-out-down',
  'fade-out-left',
  'fade-out-right',
  'fade-out-top-left',
  'fade-out-top-right',
  'fade-out-up',
  'fade-out',
  'roll-in-left',
  'roll-in-right',
  'roll-out-left',
  'roll-out-right',
  'shake-vertical',
  'shake-horizontal',
  'shake-diagonally',
  'shake-i-diagonally',
  'blur-in',
  'blur-out',
  'slide-in-down',
  'slide-in-left',
  'slide-in-right',
  'slide-in-up',
  'slide-out-down',
  'slide-out-left',
  'slide-out-right',
  'slide-out-up',
  'zoom-in-down',
  'zoom-in-left',
  'zoom-in-right',
  'zoom-in-up',
  'zoom-in',
  'zoom-out-down',
  'zoom-out-left',
  'zoom-out-right',
  'zoom-out-up',
  'zoom-out',
  'throb',
  'i-throb',
  'swivel-horizontal',
  'swivel-horizontal-double',
  'swivel-vertical',
  'swivel-vertical-double',
  'shrink-left',
  'shrink-right',
  'shrink-top',
  'shrink-bottom',
  'wheel-in-left',
  'wheel-in-right',
  'wheel-out-left',
  'wheel-out-right',
  'flash'
];

// Speed modifiers (match vov.css)
const vovSpeeds = {
  fastest: '0.3s',
  faster: '0.5s',
  fast: '0.8s',
  slow: '2s',
  slower: '3s',
  slowest: '4s',
};

module.exports = plugin(function ({ addUtilities }) {
  // Animation utilities
  const animationUtilities = Object.fromEntries(
    vovAnimations.map((name) => [
      `.vov-${name}`,
      { animation: `${name} 1s ease-in-out` }, // Default duration
    ])
  );

  // Speed utilities
  const speedUtilities = Object.entries(vovSpeeds).map(([key, value]) => ({
    [`.vov-${key}`]: {
      animationDuration: value,
    },
  }));

  // Add utilities to TailwindCSS
  addUtilities(animationUtilities, { variants: ['responsive', 'hover'] });
  addUtilities(speedUtilities, { variants: ['responsive', 'hover'] });
});
