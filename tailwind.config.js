/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export const content = ["./src/**/*.{html,js,jsx}"];
export const theme = {
  extend: {},
};
export const plugins = ['tailwindcss-animatecss'];