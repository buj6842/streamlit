/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['font-pretendard'],
                suit: ['suit-variable'],
            },
        },
    },
    plugins: [],
}