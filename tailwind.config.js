/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: {
                    50: '#f2fcf5',
                    100: '#e1f8e8',
                    200: '#c3edd4',
                    300: '#94dbae',
                    400: '#5bbc85',
                    500: '#359f65',
                    600: '#26804f',
                    700: '#226d45', // Primary Forest Green
                    800: '#1e5437',
                    900: '#194530',
                    950: '#0c261b',
                },
                gold: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706', // Premium accent
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
