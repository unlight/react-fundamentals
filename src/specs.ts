/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
const requireContext = require.context('./', true, /\.spec\.ts$/);
requireContext.keys().forEach(id => {
    requireContext(id);
});
// require('./components/app.spec');
