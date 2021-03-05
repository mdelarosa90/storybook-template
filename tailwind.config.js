const purgeEnabled = process.env.NODE_ENV === 'production';

const colors = require('tailwindcss/colors');

module.exports = {
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],

	// enabled: purgeEnabled,
	// content: [ './src/**/*.html', './src/**/*.tsx', './src/**/*.jsx' ]
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			orange: colors.orange,
			gray: colors.gray,
			blue: colors.blueGray,
			white: colors.white
		},
		screens: {
			sm: '300px',
			lg: '700px'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
