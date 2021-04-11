module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"blue-green": "#21A4C4",
				green: "#6EB245"
			},
			fontFamily: {
				"open-sans": ['"Open Sans"', "sans-serif"],
				gilroy: ['"Khula"', "sans-serif"],
				cocon: ['"Baloo 2"', "cursive"]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
