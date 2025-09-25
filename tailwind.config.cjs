/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Custom color palette
				oxford_blue: {
					DEFAULT: '#0B192C',
					100: '#020509',
					200: '#040a12',
					300: '#070f1b',
					400: '#091424',
					500: '#0b192c',
					600: '#1d4276',
					700: '#306bbe',
					800: '#6e9bdb',
					900: '#b6cded'
				},
				orange_pantone: {
					DEFAULT: '#FF6500',
					100: '#331400',
					200: '#662900',
					300: '#993d00',
					400: '#cc5200',
					500: '#ff6500',
					600: '#ff8533',
					700: '#ffa366',
					800: '#ffc299',
					900: '#ffe0cc'
				},
				indigo_dye: {
					DEFAULT: '#1E3E62',
					100: '#060c14',
					200: '#0c1927',
					300: '#12253b',
					400: '#18314e',
					500: '#1e3e62',
					600: '#30629c',
					700: '#4f88c9',
					800: '#8ab0db',
					900: '#c4d7ed'
				},
				black: {
					DEFAULT: '#000000',
					100: '#000000',
					200: '#000000',
					300: '#000000',
					400: '#000000',
					500: '#000000',
					600: '#333333',
					700: '#666666',
					800: '#999999',
					900: '#cccccc'
				},
				white: {
					DEFAULT: '#FFFFFF',
					100: '#333333',
					200: '#666666',
					300: '#999999',
					400: '#cccccc',
					500: '#ffffff',
					600: '#ffffff',
					700: '#ffffff',
					800: '#ffffff',
					900: '#ffffff'
				},
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['dark']
	}
};
