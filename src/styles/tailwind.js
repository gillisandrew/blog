module.exports = {
    theme: {
        extend: {
            boxShadow: {
                'outline-invalid': '0 0 0 3px rgba(255, 0, 0, .5)',
            },
            fontFamily: {
                heading: ['Montreal', 'Arial', 'sans-serif'],
            },
            colors: {
                gradient: {
                    start: '#134e5e',
                    middle: '#42806f',
                    end: '#71b280',
                },
                alpha: {
                    '10': 'rgba(255, 255, 255, 0.1)',
                    '20': 'rgba(255, 255, 255, 0.2)',
                    '30': 'rgba(255, 255, 255, 0.3)',
                    '40': 'rgba(255, 255, 255, 0.4)',
                    '50': 'rgba(255, 255, 255, 0.5)',
                    '60': 'rgba(255, 255, 255, 0.6)',
                    '70': 'rgba(255, 255, 255, 0.7)',
                    '80': 'rgba(255, 255, 255, 0.8)',
                    '90': 'rgba(255, 255, 255, 0.9)',
                },
            },
            fill: theme => ({
                dark: theme('colors.gray.800'),
                light: theme('colors.gray.200'),
                accent: theme('colors.gradient.end'),
            }),
            stroke: theme => ({
                dark: theme('colors.gray.900'),
                light: theme('colors.gray.200'),
                accent: theme('colors.gradient.end'),
            }),
            inset: {
                '1/2': '50%',
            },
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss-aspect-ratio')({
            ratios: {
                square: [1, 1],
                '16/9': [16, 9],
                '4/3': [4, 3],
                '21/9': [21, 9],
            },
        }),
    ],
};
