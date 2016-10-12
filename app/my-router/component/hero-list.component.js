"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HeroListComponent = (function () {
    function HeroListComponent() {
        this._cnt = [1, 2, 3];
    }
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            template: "\n        <h3>HEROES</h3>\n       <div *ngFor=\"let c of _cnt\"> \n       <p></p>\n       <ul class=\"w3-navbar w3-border w3-round w3-light-grey\">\n            <li><a class=\"w3-blue-grey\" href=\"#\">Home</a></li>\n            <li ><a href=\"#\">Superman</a></li>\n       </ul>\n       </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map