class Ticket {
    public destination: string;
    public price: number;
    public status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

const manageTickets = (tickets: Array<string>, criteria: string) => {
    let output = [];

    tickets.forEach((x) => {
        let info = x.split("|");
        output.push(new Ticket(info[0], +info[1], info[2]));

        if (criteria === "destination") {
            output.sort((a, b) => a.destination.localeCompare(b.destination));
        } else if (criteria === "price") {
            output.sort((a, b) => a.price - b.price);
        } else if (criteria === "status") {
            output.sort((a, b) => a.status.localeCompare(b.status));
        }
    });

    return output;
};

console.log(
    manageTickets(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "destination"
    )
);

console.log(
    manageTickets(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "status"
    )
);

console.log(
    manageTickets(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|97.99|sold",
            "Boston|126.20|departed",
        ],
        "price"
    )
);
