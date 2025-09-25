/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'gradient': 'gradient 3s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                gradient: {
                    '0%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};