"use strict";
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var config_1 = require('../../config');
var plugins = gulpLoadPlugins();
module.exports = function () {
    var src = [
        path_1.join(config_1.APP_SRC, '**/*.ts'),
        '!' + path_1.join(config_1.APP_SRC, '**/*.d.ts'),
        path_1.join(config_1.TOOLS_DIR, '**/*.ts'),
        '!' + path_1.join(config_1.TOOLS_DIR, '**/*.d.ts')
    ];
    return gulp.src(src)
        .pipe(plugins.tslint({
        rulesDirectory: config_1.CODELYZER_RULES
    }))
        .pipe(plugins.tslint.report(require('tslint-stylish'), {
        emitError: require('is-ci'),
        sort: true,
        bell: true
    }));
};
//# sourceMappingURL=/home/rafael/thesis_repository/SB-Admin-BS4-Angular-2-master/ts-node/4246702a3e256381dc8203854b5f268cfafb4a27/a049128b3f9da6cdf44696288ef95ae1e5b0b755.js.map