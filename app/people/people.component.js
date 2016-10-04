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
var people_service_1 = require('../people/people.service');
require('rxjs/add/operator/delay');
var PeopleComponent = (function () {
    function PeopleComponent(peopleSvc) {
        this.peopleSvc = peopleSvc;
        this.users = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleSvc.getPeople()
            .subscribe(function (people) {
            _this.isLoading = false;
            _this.users = people;
        }, function (error) { return _this.errorMessage = error; });
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'people',
            template: "\n        <div *ngIf=\"isLoading\">\n            <h3> Loading users ... </h3>\n            <img src=\"../app/people/img/25.gif\">\n        </div>    \n \n        <table class=\"table table-bordered\" >\n                <thead>\n                    <tr>\n                        <th>Id</th>\n                        <th>Title</th>\n                        <th>Body</th>\n                    </tr>\n                </thead>                \n                    <tr *ngFor = \"let p of users\">\n                        <td> {{p.id}} </td>\n                        <td> {{p.title}} </td>\n                        <td> {{p.body}} </td>\n                    </tr>\n\n        </table>       \n    ",
            providers: [people_service_1.PeopleService]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map