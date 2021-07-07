"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Manager = exports.Senior = exports.Junior = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    };
    Employee.prototype.collectSalary = function () {
        console.log(this.name + " recieved " + this.getSalary() + " this month.");
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = 1500;
        _this.tasks.push(" is working on a simple task.");
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = 3000;
        _this.tasks.push(" is working on a simple task.");
        _this.tasks.push(" is taking time off work.");
        _this.tasks.push(" is supervising junior workers.");
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = 6000;
        _this.divident = 1200;
        _this.tasks.push(" scheduled a meeting.");
        _this.tasks.push(" is preparing a quarterly meeting.");
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.divident;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
var newJunior = new Junior('Daniel Junior Spasov', 19);
console.log(newJunior.getSalary());
var newSenior = new Senior('Daniel Senior Spasov', 24);
console.log(newSenior.getSalary());
var newManager = new Manager('Daniel Manager Spasov', 30);
console.log(newManager.getSalary());
