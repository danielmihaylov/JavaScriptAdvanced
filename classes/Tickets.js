function solve(arrayStr,orderBy) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsorted = [];
    for(let ticket of arrayStr){
        let[destination,price,status] = ticket.split("|");
        price = Number(price);
        unsorted.push(new Ticket(destination,price,status));
    }

    let sorted;
    switch (orderBy){
        case 'destination':
            sorted = unsorted.sort((a,b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sorted = unsorted.sort((a,b)=> a.price - b.price);
            break;
        case 'status':
            sorted = unsorted.sort((a,b)=> a.status.localeCompare(b.status));
    }
    return sorted;
}
