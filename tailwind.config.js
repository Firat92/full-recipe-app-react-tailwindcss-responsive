/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: { min: '480px' },
			sm: { min: '534px' },
			md: { min: '768px' },
			lg: { min: '976px' },
			xl: { min: '1140px' },
		},
		fontFamily: {
			sans: ['Lobster Two', 'cursive'],
		},
		extend: {
			colors: {
				first: 'rgba(0, 0, 0, 0)',
				second: 'rgba(0, 0, 0, 0.5)',
			},
			gridTemplateColumns: {
				20: 'repeat(auto-fit, minmax(12rem, 1fr))',
			},
		},
	},
	plugins: [],
};
