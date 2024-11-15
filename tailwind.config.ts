import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#6A0DAD',
				primaryCompliment: '#50AD0D',
				secondary: '#8A2BE2',
				accent: '#D1C4E9',
				neutral: '#333333',
				background: '#FFFFFF',
				textPrimary: '#333333',
				textSecondary: '#4B5563',
				textOnPrimary: '#FFFFFF',
				border: '#E0E0E0'
			},
			fontFamily: {
				body: ['Roboto', 'sans-serif']
			},
			fontSize: {
				small: '0.875rem',
				medium: '1rem',
				large: '1.25rem',
				xlarge: '1.5rem'
			}
		}
	},

	plugins: []
} satisfies Config;
