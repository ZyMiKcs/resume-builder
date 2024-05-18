/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Roboto Slab', 'serif'],
        },
        extend: {
            transitionProperty: {
                accordion: 'max-height, opacity',
            },
        },
    },
    plugins: [],
};
