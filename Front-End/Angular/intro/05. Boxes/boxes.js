var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (el) {
        this._boxes.push(el);
    };
    Box.prototype.remove = function () {
        this._boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var test1 = new Box();
test1.add(1);
test1.add(2);
test1.add(3);
console.log(test1.count);
var test2 = new Box();
test2.add('Pesho');
test2.add('Gosho');
console.log(test2.count);
test2.remove();
console.log(test2.count);
