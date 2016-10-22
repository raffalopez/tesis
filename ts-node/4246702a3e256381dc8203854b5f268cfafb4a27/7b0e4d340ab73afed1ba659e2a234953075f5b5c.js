"use strict";
var util = require('gulp-util');
var yargs_1 = require('yargs');
var path_1 = require('path');
var CONFIG = require('../../config');
var getConfig = function (path, env) {
    var configPath = path_1.join(path, env);
    var config;
    try {
        config = require(configPath);
    }
    catch (e) {
        config = null;
        util.log(util.colors.red(e.message));
    }
    return config;
};
function templateLocals() {
    var configEnvName = yargs_1.argv['config-env'] || 'dev';
    var configPath = CONFIG.getPluginConfig('environment-config');
    var baseConfig = getConfig(configPath, 'base');
    var config = getConfig(configPath, configEnvName);
    if (!config) {
        throw new Error('Invalid configuration name');
    }
    return Object.assign(CONFIG, {
        ENV_CONFIG: JSON.stringify(Object.assign(baseConfig, config))
    });
}
exports.templateLocals = templateLocals;
//# sourceMappingURL=/home/rafael/thesis_repository/SB-Admin-BS4-Angular-2-master/ts-node/4246702a3e256381dc8203854b5f268cfafb4a27/7b0e4d340ab73afed1ba659e2a234953075f5b5c.js.map