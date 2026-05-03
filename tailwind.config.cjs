/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				display: ['Syne', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			animation: {
				'fade-in': 'fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'float': 'float 6s ease-in-out infinite',
				'blob': 'blob 10s infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#8b5cf6",
					"primary-content": "#ffffff",
					"secondary": "#3b82f6",
					"accent": "#06b6d4",
					"neutral": "#1e293b",
					"neutral-content": "#f8fafc",
					"base-100": "#ffffff",
					"base-200": "#f8fafc",
					"base-300": "#f1f5f9",
					"base-content": "#0f172a",
					"info": "#3b82f6",
					"success": "#10b981",
					"warning": "#f59e0b",
					"error": "#ef4444",
				},
				dark: {
					"primary": "#a78bfa",
					"primary-content": "#ffffff",
					"secondary": "#60a5fa",
					"accent": "#22d3ee",
					"neutral": "#cbd5e1",
					"neutral-content": "#0f172a",
					"base-100": "#020617",
					"base-200": "#0f172a",
					"base-300": "#1e293b",
					"base-content": "#f8fafc",
					"info": "#3b82f6",
					"success": "#10b981",
					"warning": "#f59e0b",
					"error": "#ef4444",
				},
				altlight: {
					"primary": "#10b981",
					"primary-content": "#ffffff",
					"secondary": "#f59e0b",
					"accent": "#0ea5e9",
					"neutral": "#333c4d",
					"neutral-content": "#f9fafb",
					"base-100": "#ffffff",
					"base-200": "#f3f4f6",
					"base-300": "#e5e7eb",
					"base-content": "#1f2937",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
				altdark: {
					"primary": "#34d399",
					"primary-content": "#111827",
					"secondary": "#fbbf24",
					"accent": "#38bdf8",
					"neutral": "#9ca3af",
					"neutral-content": "#111827",
					"base-100": "#111827",
					"base-200": "#1f2937",
					"base-300": "#374151",
					"base-content": "#f9fafb",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				}
			}
		],
		darkTheme: "dark",
	}
};