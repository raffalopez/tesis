"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path_1 = require('path');
var seed_config_1 = require('./seed.config');
var ProjectConfig = (function (_super) {
    __extends(ProjectConfig, _super);
    function ProjectConfig() {
        _super.call(this);
        this.PROJECT_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
        this.FONTS_DEST = this.APP_DEST + "/fonts";
        this.FONTS_SRC = [
            'node_modules/font-awesome/fonts/**'
        ];
        this.NPM_DEPENDENCIES = this.NPM_DEPENDENCIES.concat([
            { src: 'font-awesome/css/font-awesome.css', inject: true },
            { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
            { src: 'highcharts/highcharts.js', inject: 'libs' }
        ]);
        this.APP_ASSETS = this.APP_ASSETS.concat([
            { src: this.CSS_SRC + "/sass/app.css", inject: true, vendor: false }
        ]);
    }
    return ProjectConfig;
}(seed_config_1.SeedConfig));
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=/home/rafael/thesis_repository/SB-Admin-BS4-Angular-2-master/ts-node/4246702a3e256381dc8203854b5f268cfafb4a27/ecbea542049b3d438d29264e896b96f02f5d8bc2.js.map