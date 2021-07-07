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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = exports.Airmelon = exports.Earthmelon = exports.Firemelon = exports.Watermelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weigth = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Water';
        return _this;
    }
    Object.defineProperty(Watermelon.prototype, "toString", {
        get: function () {
            return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Fire';
        return _this;
    }
    Object.defineProperty(Firemelon.prototype, "toString", {
        get: function () {
            return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Earth';
        return _this;
    }
    Object.defineProperty(Earthmelon.prototype, "toString", {
        get: function () {
            return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Air';
        return _this;
    }
    Object.defineProperty(Airmelon.prototype, "toString", {
        get: function () {
            return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Earth';
        return _this;
    }
    Object.defineProperty(Melolemonmelon.prototype, "toString", {
        get: function () {
            return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Melolemonmelon.prototype.morph = function () {
        this.element = ['Water', 'Fire', 'Earth', 'Air'][Math.round(Math.random() * 3)];
    };
    return Melolemonmelon;
}(Earthmelon));
exports.Melolemonmelon = Melolemonmelon;
var newWatermelon = new Watermelon(12.5, "Kingsize");
console.log(newWatermelon.toString);
var newMelolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(newMelolemonmelon.toString);
newMelolemonmelon.morph()
console.log(newMelolemonmelon.toString);
newMelolemonmelon.morph()
console.log(newMelolemonmelon.toString);
newMelolemonmelon.morph()
console.log(newMelolemonmelon.toString);
newMelolemonmelon.morph()
console.log(newMelolemonmelon.toString);
newMelolemonmelon.morph()
console.log(newMelolemonmelon.toString);
