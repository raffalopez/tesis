"use strict";
var gulp = require('gulp');
var path_1 = require('path');
var config_1 = require('../../config');
module.exports = function () {
    var paths = [
        path_1.join(config_1.APP_SRC, '**'),
        '!' + path_1.join(config_1.APP_SRC, '**', '*.ts'),
        '!' + path_1.join(config_1.APP_SRC, '**', '*.scss')
    ].concat(config_1.TEMP_FILES.map(function (p) { return '!' + p; }));
    return gulp.src(paths)
        .pipe(gulp.dest(config_1.APP_DEST));
};
//# sourceMappingURL=/home/rafael/thesis_repository/SB-Admin-BS4-Angular-2-master/ts-node/4246702a3e256381dc8203854b5f268cfafb4a27/4f0d05bfc8b5f5defeef507cfd4cb4f146b0bb9e.js.map