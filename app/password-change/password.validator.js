"use strict";
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.checkPasswordLength = function (control) {
        if (control.value.length < 5) {
            return { checkPasswordLength: true };
        }
        else {
            return null;
        }
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=password.validator.js.map