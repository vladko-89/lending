// All imports in this file will be compiled into vendors.js file.
//
// For import ES6+ with transpiling to ES5, put sources into 'es6' array
module.exports = {
  es5: [
    './node_modules/jquery/dist/jquery.js',
    // './node_modules/validate.js/validate.js',
    './node_modules/swiper/swiper-bundle.min.js',
    './node_modules/prismjs/prism.js',
    './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js',
    './node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',

    //select choices
    // './node_modules/choices.js/public/assets/scripts/choices.min.js',
  ],
  es6: [
    // './node_modules/your-plugin/es6/your-plugin.js',
  ]
};