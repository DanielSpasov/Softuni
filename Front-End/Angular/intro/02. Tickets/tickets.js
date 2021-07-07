var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var manageTickets = function (tickets, criteria) {
    var output = [];
    tickets.forEach(function (x) {
        var info = x.split("|");
        output.push(new Ticket(info[0], +info[1], info[2]));
        if (criteria === "destination") {
            output.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
        }
        else if (criteria === "price") {
            output.sort(function (a, b) { return a.price - b.price; });
        }
        else if (criteria === "status") {
            output.sort(function (a, b) { return a.status.localeCompare(b.status); });
        }
    });
    return output;
};
console.log(manageTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination"));
console.log(manageTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status"));
console.log(manageTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|97.99|sold",
    "Boston|126.20|departed",
], "price"));
