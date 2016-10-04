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
var forms_1 = require('@angular/forms');
var password_validator_1 = require('./password.validator');
var PasswordChangeComponent = (function () {
    function PasswordChangeComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            oldPassword: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            newPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, password_validator_1.PasswordValidator.checkPasswordLength])],
            confirmPassword: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    PasswordChangeComponent.prototype.onSubmit = function () {
        console.log("Submitted");
    };
    PasswordChangeComponent = __decorate([
        core_1.Component({
            selector: 'password-change',
            templateUrl: '../app/password-change/password-change.component.html',
            styles: ["\n    .form-control {      \n        width: 50%  \n     } \n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());
exports.PasswordChangeComponent = PasswordChangeComponent;
//# sourceMappingURL=password-change.component.js.map