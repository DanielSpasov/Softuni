class Box<T> {
    private _boxes = [];

    public add(el: T) {
        this._boxes.push(el);
    }

    public remove() {
        this._boxes.pop()
    }

    public get count(): number {
        return this._boxes.length
    }
}

let test1 = new Box<Number>();
test1.add(1);
test1.add(2);
test1.add(3);
console.log(test1.count);

let test2 = new Box<String>();
test2.add('Pesho')
test2.add('Gosho')
console.log(test2.count)
test2.remove()
console.log(test2.count)
