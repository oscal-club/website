/* gulpfile.js */

const uswds = require("@uswds/compile");

/** 
 * Path settings
 * Set as many as you need
 */ 

uswds.paths.dist.css = './static/assets/css';
uswds.paths.dist.fonts = './static/assets/fonts';
uswds.paths.dist.img = './static/assets/img';
uswds.paths.dist.js = './static/assets/js';
uswds.paths.dist.sass = './src/styles';
uswds.paths.src.projectSass = uswds.paths.dist.sass;

/** 
 * Exports
 * Add as many as you need
 */ 

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;
