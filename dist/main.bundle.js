webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  <nav>\r\n    <a routerLink=\"/sensor\" routerLinkActive=\"active\">Sensor Component</a>\r\n    <a routerLink=\"/weather\" routerLinkActive=\"active\">Weather Component</a>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__ = __webpack_require__("../../../../../src/app/sensor/sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'sensor', component: __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__["a" /* SensorComponent */] },
    { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__["a" /* WeatherComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sensor_sensor_component__["a" /* SensorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__["a" /* WeatherComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__sensor_service__["a" /* SensorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/sensor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorService = (function () {
    function SensorService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SensorService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    SensorService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    SensorService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    SensorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SensorService);
    return SensorService;
}());



/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <p>\r\n    sensor.component<br>\r\n    <!--Solar sell Vout: {{data.Volts}} [ V ]<br>-->\r\n    <!--Photoresistor_1: {{data.L1}}<br>-->\r\n    <!--Photoresistor_2: {{data.L2}}<br>-->\r\n  </p>\r\n  <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\r\n  <script>\r\n    setInterval(function () {\r\n      // console.log(this.data);\r\n    }, 2000);\r\n  </script>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sensor/sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorComponent = (function () {
    function SensorComponent(_sensorService, AmCharts) {
        this._sensorService = _sensorService;
        this.AmCharts = AmCharts;
        // data = {
        //   'Volts': 4.5,
        //   'L1': 0,
        //   'L2': 0
        // };
        this.chartData = [{
                'Time': '0:0:0',
                'Volts': 4.5
            }];
    }
    SensorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?'
        });
        this._sensorService.on('Server_asking', function (data) {
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!'
            });
            _this._sensorService.on('Server_response', function (_data) {
                console.log(_data.msg);
            });
        });
        this._sensorService.on('First_data_transfer', function (data) {
            for (var i = 0; i < data.msg.length; i++) {
                _this.chartData.push({ 'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts });
            }
            _this.AmCharts.updateChart(_this.chart, function () {
                // Change whatever properties you want
                _this.chart.dataProvider = _this.chartData;
            });
        });
        this._sensorService.on('Sensor', function (data) {
            console.log('Sensor');
            var index = 0;
            for (var i = 0; i < data.msg.length; i++) {
                console.log('Sensor for');
                // console.log('Sensor: chartData last: ', this.chartData[this.chartData.length - 1]);
                if (_this.chartData[_this.chartData.length - 1].Time === data.msg[i].Time) {
                    console.log('Found index');
                    index = i;
                    // this.chartData.push({'Time': data.msg[++i].Time, 'Volts': data.msg[++i].Volts});
                }
            }
            for (var i = index + 1; i < data.msg.length; i++) {
                console.log('In push');
                _this.chartData.push({ 'Time': data.msg[i].Time, 'Volts': data.msg[i].Volts });
                _this.AmCharts.updateChart(_this.chart, function () {
                    // Change whatever properties you want
                    _this.chart.dataProvider = _this.chartData;
                });
            }
        });
    };
    SensorComponent.prototype.ngAfterViewInit = function () {
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': this.chartData,
            'categoryField': 'Time',
            'graphs': [{
                    'valueField': 'Volts',
                    'type': 'line',
                    'fillAlphas': 0.5,
                    'bullet': 'round',
                    'lineColor': '#8d1cc6'
                }]
        });
    };
    SensorComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    SensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sensor',
            template: __webpack_require__("../../../../../src/app/sensor/sensor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sensor/sensor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sensor_service__["a" /* SensorService */], __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], SensorComponent);
    return SensorComponent;
}());

function getHoursInt(str) {
    console.log('Hours: ', parseInt(str, 0));
    return parseInt(str, 0);
}
function getSecInt(str) {
    var firstSemi;
    var sStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ':') {
            firstSemi = i;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (firstSemi < i) {
            sStr = sStr + str[i];
        }
    }
    console.log('Seconds: ', parseInt(sStr, 0));
    return parseInt(sStr, 0);
}
function getMinInt(str) {
    var firstSemi = 0;
    var secondSemi;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ':' && firstSemi === 0) {
            firstSemi = i;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ':' && firstSemi === 0) {
            secondSemi = i;
        }
    }
    var minS = str.slice(firstSemi + 1, secondSemi);
    console.log('minS: ', parseInt(minS, 0));
    return parseInt(minS, 0);
}


/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <p>\r\n    Weather.component<br>\r\n    Temperature: {{data.Temp}}<br>\r\n    Pressure: <br>\r\n  </p>\r\n  <script>\r\n    setInterval(function () {\r\n      console.log(this.data);\r\n    }, 2000);\r\n  </script>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensor_service__ = __webpack_require__("../../../../../src/app/sensor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent(_sensorService) {
        this._sensorService = _sensorService;
        this.data = {
            'Temp': 0,
        };
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sensorService.emit('Client_asking', {
            msg: 'Client to server, can u hear me server?'
        });
        this._sensorService.on('Server_asking', function (data) {
            console.log(data.msg);
            _this._sensorService.emit('Client_response', {
                msg: 'Yes, its working for me!'
            });
            _this._sensorService.on('Server_response', function (_data) {
                console.log(_data.msg);
            });
        });
        this._sensorService.on('Weather', function (data) {
            console.log(data.msg);
            _this.data = data.msg;
        });
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sensor_service__["a" /* SensorService */]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map