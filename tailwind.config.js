/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: { max: '480px' },
			sm: { max: '534px' },
			md: { max: '768px' },
			lg: { max: '976px' },
			xl: { max: '1140px' },
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
				20: 'repeat(auto-fit, minmax(20rem, 1fr))',
			},
		},
	},
	plugins: [],
};
