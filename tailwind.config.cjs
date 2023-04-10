/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		colors: {
			'teal': {
				200: '#99f6e4',
				400: '#2dd4bf',
				600: '#0d9488',
				700: '#0f766e',
				800: '#115e59',
				900: '#134e4a',
			},
			'green': {
				800: '#023020',
			},
			'orange': {
				400: '#fb923c',
			},
			'yellow': {
				200: '#fef08a',
			},
			'indigo': {
				900: '#312E81',
			},
			'gray': {
				300: '#D1D5DB',
				400: '#9CA3AF',
				900: '#111827',
			},
			'black': {
				800: '#1B1212',
				900: '#000000',
			},
			'white': '#FFFFFF',
		},
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
	plugins: [],
};
