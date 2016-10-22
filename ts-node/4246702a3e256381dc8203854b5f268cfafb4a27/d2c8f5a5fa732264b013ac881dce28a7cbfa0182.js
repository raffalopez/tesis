"use strict";
var browserSync = require('browser-sync');
var config_1 = require('../../config');
var runServer = function () {
    browserSync.init(config_1.getPluginConfig('browser-sync'));
};
var listen = function () {
    runServer();
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};
exports.changed = changed;
//# sourceMappingURL=/home/rafael/thesis_repository/SB-Admin-BS4-Angular-2-master/ts-node/4246702a3e256381dc8203854b5f268cfafb4a27/d2c8f5a5fa732264b013ac881dce28a7cbfa0182.js.map